import { CONTACT_EMAIL, RESOURCE_LINKS, SECTIONS, SITE, SOCIAL_LINKS } from "@/lib/site";
import { Container } from "@/components/ui/Section";
import { External } from "@/components/ui/Icons";

const EXPLORE_IDS = ["solar-system", "galaxies", "stars", "black-holes", "nebulae", "gallery"];

const LINK =
  "py-1 text-mute underline decoration-transparent decoration-1 underline-offset-[5px] transition-[color,text-decoration-color] duration-300 hover:text-ink hover:decoration-ember/70";

function ColumnTitle({ children }: { children: string }) {
  return <h3 className="eyebrow eyebrow-plain mb-5">{children}</h3>;
}

/** A quiet constellation drawn across the top of the footer. Purely decorative. */
function FooterSky() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 120"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-x-0 top-0 h-28 w-full opacity-60"
    >
      <g fill="none" stroke="#cbd8f2" strokeOpacity="0.16" strokeWidth="1">
        <path d="M80 80 L210 40 L330 70 L450 28 L560 62" />
        <path d="M760 34 L860 74 L980 30 L1100 66" />
      </g>
      <g fill="#f4f7ff">
        {[
          [80, 80, 2],
          [210, 40, 2.6],
          [330, 70, 1.8],
          [450, 28, 2.4],
          [560, 62, 1.8],
          [760, 34, 2],
          [860, 74, 2.6],
          [980, 30, 1.8],
          [1100, 66, 2.2],
        ].map(([x, y, r]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fillOpacity="0.7" />
        ))}
      </g>
    </svg>
  );
}

export function Footer() {
  const explore = SECTIONS.filter((s) => EXPLORE_IDS.includes(s.id));
  // Only profiles that have been configured are shown, so no dead link or
  // placeholder is ever presented as a real account.
  const socials = SOCIAL_LINKS.filter((l) => l.href !== "#" && l.href !== "");

  return (
    <footer className="relative overflow-hidden border-t border-line bg-space/70 pb-10 pt-24">
      <FooterSky />
      <Container className="relative">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <section aria-labelledby="footer-about">
            <h2 id="footer-about" className="font-display text-3xl">
              {SITE.name}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-[1.75] text-mute">
              {SITE.tagline}. A visual guide to the Solar System, galaxies, stars, black holes,
              nebulae and the missions that revealed them, written to be accurate and easy to
              browse.
            </p>
            <a
              href="#top"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs text-mute transition-colors hover:border-white/30 hover:text-ink"
            >
              Back to the start
            </a>
          </section>

          <nav aria-label="Explore">
            <ColumnTitle>Explore</ColumnTitle>
            <ul className="space-y-3 text-sm">
              {explore.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={LINK}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <ColumnTitle>Resources</ColumnTitle>
            <ul className="space-y-3 text-sm">
              {RESOURCE_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 ${LINK}`}
                  >
                    {l.label}
                    <External className="size-3.5 opacity-60" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact">
            <h3 id="footer-contact" className="eyebrow eyebrow-plain mb-5">
              Contact
            </h3>
            {CONTACT_EMAIL ? (
              <a href={`mailto:${CONTACT_EMAIL}`} className={`text-sm ${LINK}`}>
                {CONTACT_EMAIL}
              </a>
            ) : (
              <p className="max-w-[24ch] text-sm leading-relaxed text-mute">
                Questions or corrections? Contact details will be added soon.
              </p>
            )}
          </section>

          <nav aria-label="Social">
            <ColumnTitle>Follow</ColumnTitle>
            {socials.length > 0 ? (
              <ul className="space-y-3 text-sm">
                {socials.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className={LINK}>
                      {l.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="max-w-[24ch] text-sm leading-relaxed text-mute">
                Social profiles will be linked here once they exist.
              </p>
            )}
          </nav>
        </div>

        {/* Oversized wordmark, very faint, as a closing flourish. */}
        <p
          aria-hidden="true"
          className="mt-20 select-none text-center font-display text-[clamp(4rem,19vw,15rem)] leading-[0.85] tracking-[-0.03em] text-white/[0.045]"
        >
          {SITE.name}
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-xs leading-relaxed text-dim md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="max-w-2xl md:text-right">
            Imagery courtesy of NASA, ESA, ESO, the Event Horizon Telescope collaboration and
            contributors to Wikimedia Commons. Open any gallery image for its source page, which is
            the authoritative credit and licence. This site is independent and is not affiliated
            with or endorsed by these organisations.
          </p>
        </div>
      </Container>
    </footer>
  );
}
