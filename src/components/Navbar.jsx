import { useState } from "react";
import { nav } from "../data/siteContent";
import AspireLogo from "../assets/AspireLogo.svg";
import { NavLink } from "react-router-dom";
import { programs } from "../data/siteContent";


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-display text-2xl font-semibold text-white">
          <img src={AspireLogo} alt="Aspire Logo" className="h-8 w-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) =>
            link.children ? (
              // 1. `group` + `relative` on the wrapper
              <div key={link.label} className="group relative">
                <NavLink
                  to={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label} <span aria-hidden="true">▾</span>
                </NavLink>

                {/* 2. Panel: hidden by default, absolute below the link */}
                <div
                  className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all duration-200
                            group-hover:visible group-hover:opacity-100
                            group-focus-within:visible group-focus-within:opacity-100"
                >
                  <ul className="w-72 rounded-xl border border-white/10 bg-ink p-2 shadow-xl">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <NavLink
                          to={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.label}
                to={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </NavLink>
            )
          )}
          <NavLink
            href={nav.cta.href}
            className="rounded-full bg-amber px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-amber-light"
          >
            {nav.cta.label}
          </NavLink>
        </nav>

        {/* Hamburger Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink px-6 py-4 md:hidden">
          {nav.links.map((child) => (
            <NavLink
              key={child.label}
              to={child.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-white/80 hover:bg-white/5 hover:text-white"
            >
              {child.label}
            </NavLink>
          ))}
          <NavLink
            to={nav.cta.href}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-amber px-5 py-3 text-center text-sm font-medium text-ink"
          >
            {nav.cta.label}
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
