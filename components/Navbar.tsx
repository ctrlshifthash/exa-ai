type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const socials: SocialLink[] = [
  {
    label: "pump.fun",
    href: "https://pump.fun/coin/",
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/pumpfun.png"
        alt=""
        className="h-[16px] w-[16px] object-contain"
      />
    ),
  },
  {
    label: "X",
    href: "https://x.com/tryExalink",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[13px] w-[13px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/WilliamBryk/Autoreason",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[14px] w-[14px]">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#ececec]">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Exalink"
            className="h-7 w-7 rounded-[4px] object-contain"
          />
          <span className="text-[17px] font-medium tracking-tight">
            Exalink
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[14px] text-[#1a1a1a]">
          <a href="#features" className="hover:text-[#1652f0] transition-colors">Features</a>
          <a href="#tools" className="hover:text-[#1652f0] transition-colors">Tools</a>
          <a href="#how" className="hover:text-[#1652f0] transition-colors">How it works</a>
          <a href="#clients" className="hover:text-[#1652f0] transition-colors">Clients</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#install"
            className="hidden sm:inline-flex items-center text-[14px] text-[#1a1a1a] px-3 py-1.5 rounded-md hover:bg-[#fafafa]"
          >
            Docs
          </a>
          <a
            href="#install"
            className="inline-flex items-center text-[14px] font-medium text-white bg-[#0a0a0a] px-3.5 py-2 rounded-md hover:bg-[#1a1a1a] transition-colors"
          >
            Install Exalink →
          </a>

          <div className="hidden sm:flex items-center gap-1.5 ml-2 pl-3 border-l border-[#ececec]">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="group relative inline-flex items-center justify-center h-9 w-9 rounded-md border border-[#ececec] bg-white text-[#1a1a1a] hover:border-[#0a0a0a] hover:-translate-y-0.5 hover:shadow-[0_6px_14px_-6px_rgba(0,0,0,0.18)] transition-all duration-200 ease-out"
              >
                <span className="inline-flex transition-transform duration-200 ease-out group-hover:scale-125">
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
