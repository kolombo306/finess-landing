const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [logoVisible, setLogoVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const hero = document.getElementById("hero-dz-mark");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        // show navbar DZ once the hero DZ has scrolled above the viewport top
        setLogoVisible(rect.bottom < 0);
      } else {
        setLogoVisible(window.scrollY > 400);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["#achievements", "Достижения"],
    ["#about", "Обо мне"],
    ["#testimonials", "Истории"],
    ["#gallery", "Галерея"],
    ["#services", "Услуги"],
  ];
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        background: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.80)",
        borderColor: "#262626",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile logo \u2014 hides until hero DZ scrolls past */}
          <a
            href="#"
            className="sm:hidden font-heading text-xl font-bold tracking-wider"
            style={{
              opacity: logoVisible ? 1 : 0,
              transform: logoVisible ? "translateY(0)" : "translateY(-6px)",
              transition: "opacity .35s ease, transform .35s ease",
              pointerEvents: logoVisible ? "auto" : "none",
            }}
          >
            <span className="dz-gold-text">DZ</span>
          </a>
          {/* Desktop logo \u2014 always visible */}
          <a
            href="#"
            className="hidden sm:inline-flex items-center font-heading text-2xl font-bold tracking-wider"
          >
            <span className="dz-gold-text">DZ</span>
            <span className="text-white/80 text-base font-body font-light ml-2">COACHING</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-white/70 text-sm uppercase tracking-wider transition-colors hover:text-[#D4A843]"
              >
                {label}
              </a>
            ))}
            <GoldButton href="#contacts" size="sm">Записаться</GoldButton>
          </div>
          <button className="md:hidden text-white/80 p-2" onClick={() => setOpen(o => !o)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{background:"#141414",borderColor:"#262626"}}>
          <div className="px-4 py-4 space-y-3">
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block text-white/70 hover:text-[#D4A843] text-sm uppercase tracking-wider py-2 transition-colors">{label}</a>
            ))}
            <GoldButton href="#contacts" className="block w-full">Записаться</GoldButton>
          </div>
        </div>
      )}
    </nav>
  );
};

Object.assign(window, { Navbar });
