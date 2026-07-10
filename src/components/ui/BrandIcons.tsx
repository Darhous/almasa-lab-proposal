type IconProps = { className?: string };

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.2" cy="8.2" r="1.1" fill="currentColor" />
      <path d="M7.2 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M11 17v-3.6c0-1.3.9-2.2 2-2.2s2 .9 2 2.2V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M13.8 8.4h1.4V6h-1.7c-1.7 0-2.8 1-2.8 2.8V11H9v2.4h1.7V21h2.5v-7.6h1.9l.3-2.4h-2.2v-1.5c0-.6.3-1.1 1.1-1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GithubIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 4.2 2.73 7.77 6.52 9.03.48.09.65-.21.65-.46v-1.7c-2.65.58-3.2-1.14-3.2-1.14-.44-1.1-1.06-1.4-1.06-1.4-.87-.6.07-.58.07-.58.96.07 1.47.99 1.47.99.85 1.47 2.24 1.04 2.78.8.09-.62.34-1.04.6-1.29-2.11-.24-4.34-1.06-4.34-4.7 0-1.04.37-1.88.98-2.55-.1-.24-.42-1.22.1-2.55 0 0 .8-.26 2.62.98a9.1 9.1 0 0 1 4.78 0c1.82-1.24 2.62-.98 2.62-.98.52 1.33.2 2.31.1 2.55.61.67.98 1.51.98 2.55 0 3.65-2.24 4.45-4.36 4.69.35.3.65.89.65 1.79v2.65c0 .25.17.56.66.46A9.51 9.51 0 0 0 21.5 12c0-5.25-4.25-9.5-9.5-9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsappIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.4-1.2A8.4 8.4 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.1 8.6c.2-.4.4-.4.6-.4h.5c.15 0 .35 0 .5.4.2.5.65 1.6.7 1.7.05.15.1.3 0 .5-.1.2-.15.3-.3.45-.15.15-.3.35-.45.45-.15.15-.3.3-.15.6.4.8 1 1.5 1.7 2 .8.6 1.3.7 1.5.8.2.1.35.1.5-.05.15-.15.6-.65.75-.9.15-.25.3-.2.5-.1.2.1 1.3.6 1.5.7.2.1.35.15.4.25.05.15.05.75-.2 1.4-.25.65-1.4 1.2-1.9 1.25-.5.05-1 .25-3.3-.7-2.8-1.15-4.55-4-4.7-4.2-.15-.2-1.1-1.45-1.1-2.8 0-1.3.7-1.95.9-2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
