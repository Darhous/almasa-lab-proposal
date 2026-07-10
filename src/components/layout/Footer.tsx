import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  WhatsappIcon,
  GithubIcon,
} from "../ui/BrandIcons";
import { DiamondMark } from "../ui/DiamondMark";
import { Container } from "../ui/Container";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/darhous/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/darhous/", icon: LinkedinIcon },
  { label: "Facebook", href: "https://www.facebook.com/ahmed.darhous", icon: FacebookIcon },
  { label: "WhatsApp", href: "https://wa.me/201030002331", icon: WhatsappIcon },
  { label: "GitHub", href: "https://github.com/darhous", icon: GithubIcon },
];

export function Footer() {
  return (
    <footer className="print-hidden border-t border-border-soft bg-surface/60 py-12">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2.5">
            <DiamondMark className="h-6 w-6" />
            <span className="text-sm font-bold text-text">معمل الماسة للتحاليل الطبية</span>
          </div>

          <p className="max-w-xl text-xs leading-relaxed text-faint">
            هذه الصفحة عرض تفاعلي (Discovery &amp; Proposal) لمشروع التحول الرقمي، وليست الموقع
            النهائي للمعمل. جميع القرارات المسجَّلة هنا تُحفظ محليًا على جهازك فقط.
          </p>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brand-500/50 hover:text-brand-300"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>

          <p className="text-xs text-faint">
            Designed &amp; Developed by{" "}
            <a
              href="mailto:ahmeddarhous@gmail.com"
              className="font-semibold text-muted underline decoration-dotted underline-offset-4 hover:text-brand-300"
            >
              Ahmed Darhous
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
