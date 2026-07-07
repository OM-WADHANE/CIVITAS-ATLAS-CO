const PRODUCT_LINKS = [
  { label: "MahaAtlas", href: "#products" },
  { label: "LegalAtlas", href: "#products" },
  { label: "UrbanAtlas", href: "#products" },
  { label: "InfraAtlas", href: "#products" },
];

const COMPANY_LINKS = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08]">
      <div className="absolute inset-0 -z-10 bg-grid-glow opacity-40" />
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-atlas-purple-light to-atlas-indigo">
                <span className="absolute inset-0 rounded-lg border border-atlas-gold/30" />
                <span className="font-display text-sm font-semibold text-atlas-gold">
                  C
                </span>
              </span>
              <span className="font-display text-[15px] font-medium tracking-tight text-atlas-white">
                Civitas Atlas Technologies
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-atlas-fog">
              Building India&rsquo;s digital public infrastructure for land —
              starting with MahaAtlas, the Maharashtra Land Intelligence
              Platform.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:col-start-7">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-atlas-fog">
                Products
              </p>
              <ul className="mt-4 space-y-3">
                {PRODUCT_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-atlas-mist transition-colors hover:text-atlas-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-atlas-fog">
                Company
              </p>
              <ul className="mt-4 space-y-3">
                {COMPANY_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-atlas-mist transition-colors hover:text-atlas-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-wider text-atlas-fog">
              Registered Office
            </p>
            <p className="mt-4 text-sm leading-relaxed text-atlas-mist">
              Civitas Atlas Technologies Pvt. Ltd.
              <br />
              Pune, Maharashtra, India
              <br />
              contact@civitasatlas.in
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="text-xs text-atlas-fog">
            &copy; {new Date().getFullYear()} Civitas Atlas Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-atlas-fog transition-colors hover:text-atlas-white">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-atlas-fog transition-colors hover:text-atlas-white">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-atlas-fog transition-colors hover:text-atlas-white">
              Data Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
