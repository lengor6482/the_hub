import { footer } from "../data/siteContent";
import AspireLogo from "../assets/AspireLogo.svg";
function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold">
              <img src={AspireLogo} alt="Aspire Logo" className="h-8 w-auto" />
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/60">{footer.tagline}</p>
            <div className="mt-6 flex gap-4">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-sm text-white/50 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-medium text-white">{col.heading}</h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/60 hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-medium text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>{footer.address}</li>
              <li>
                <a href={`mailto:${footer.email}`} className="hover:text-white">
                  {footer.email}
                </a>
              </li>
              <li>
                <a href={`tel:${footer.phone}`} className="hover:text-white">
                  {footer.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Aspire! Youth Empowerment and Innovation Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
