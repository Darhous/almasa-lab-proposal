import { useSyncExternalStore } from "react";
import type {
  DecisionsState,
  DecisionStatus,
  SuggestionStatus,
} from "../types/decision";

const STORAGE_KEY = "almasa-lab-proposal:decisions:v1";

function createEmptyState(): DecisionsState {
  return { version: 1, sections: {}, suggestions: {} };
}

function loadState(): DecisionsState {
  if (typeof window === "undefined") return createEmptyState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createEmptyState();
    const parsed = JSON.parse(raw) as Partial<DecisionsState>;
    return {
      version: 1,
      sections: parsed.sections ?? {},
      suggestions: parsed.suggestions ?? {},
    };
  } catch {
    return createEmptyState();
  }
}

let state: DecisionsState = loadState();
const listeners = new Set<() => void>();

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // مساحة التخزين غير متاحة (وضع خاص مثلاً) — يتجاهل الحفظ بصمت
  }
}

function emit() {
  persist();
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

export function setSectionDecision(
  sectionId: string,
  status: DecisionStatus,
) {
  const prev = state.sections[sectionId];
  state = {
    ...state,
    sections: {
      ...state.sections,
      [sectionId]: {
        status,
        note: prev?.note ?? "",
        updatedAt: new Date().toISOString(),
      },
    },
  };
  emit();
}

export function setSectionNote(sectionId: string, note: string) {
  const prev = state.sections[sectionId];
  state = {
    ...state,
    sections: {
      ...state.sections,
      [sectionId]: {
        status: prev?.status ?? "approved",
        note,
        updatedAt: new Date().toISOString(),
      },
    },
  };
  emit();
}

export function setSuggestionDecision(
  suggestionId: string,
  status: SuggestionStatus,
) {
  state = {
    ...state,
    suggestions: {
      ...state.suggestions,
      [suggestionId]: { status, updatedAt: new Date().toISOString() },
    },
  };
  emit();
}

export function resetAllDecisions() {
  state = createEmptyState();
  emit();
}

export function getDecisionsState() {
  return state;
}

export function useDecisionsState(): DecisionsState {
  return useSyncExternalStore(subscribe, getSnapshot, createEmptyState);
}
