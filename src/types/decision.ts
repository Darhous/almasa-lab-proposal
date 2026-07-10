export type DecisionStatus =
  | "approved"
  | "approved_with_changes"
  | "deferred"
  | "excluded";

export type SuggestionStatus = "add" | "ignore" | "discuss";

export interface SectionDecision {
  status: DecisionStatus;
  note: string;
  updatedAt: string;
}

export interface SuggestionDecision {
  status: SuggestionStatus;
  updatedAt: string;
}

export interface DecisionsState {
  version: 1;
  sections: Record<string, SectionDecision>;
  suggestions: Record<string, SuggestionDecision>;
}

export const DECISION_LABELS: Record<DecisionStatus, string> = {
  approved: "اعتماد كما هو",
  approved_with_changes: "اعتماد مع تعديل",
  deferred: "تأجيل للمرحلة الثانية",
  excluded: "استبعاد",
};

export const SUGGESTION_LABELS: Record<SuggestionStatus, string> = {
  add: "إضافة",
  ignore: "تجاهل",
  discuss: "ناقش لاحقًا",
};
