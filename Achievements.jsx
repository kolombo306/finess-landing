const AchievementCard = ({ bg, title, subtitle, count, delay = 0 }) => {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="dz-card card-hover relative overflow-hidden group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity .6s ease ${delay}s, transform .6s ease ${delay}s`,
        padding: 0,
        minHeight: 320,
      }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(.85) contrast(1.05) brightness(.75)",
          opacity: 0.6,
        }}
      />
      {/* Gold tonal wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,.25) 0%, rgba(10,10,10,.55) 50%, rgba(10,10,10,.92) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          background:
            "linear-gradient(135deg, rgba(212,168,67,.28) 0%, transparent 50%, rgba(212,168,67,.12) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-between" style={{ minHeight: 320 }}>
        <div>
          <div className="text-[10px] uppercase tracking-[.28em] font-medium text-[#D4A843]/80">
            {count}
          </div>
        </div>
        <div>
          <h3 className="font-heading font-bold text-white text-2xl sm:text-[1.75rem] leading-[1.05]" style={{ letterSpacing: "-0.02em" }}>
            {title}
          </h3>
          <div className="mt-4 w-10 h-px" style={{ background: "#D4A843" }} />
          <p className="mt-4 text-white/70 text-base sm:text-lg">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const Achievements = () => (
  <section id="achievements" className="py-16 sm:py-20 relative overflow-hidden" style={{ background: "#0a0a0a" }}>
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ width: 600, height: 600, background: "#D4A843", filter: "blur(200px)" }} />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <SectionHeader eyebrow="Подтверждено победами" title="Достижения" className="mb-12 sm:mb-16" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <AchievementCard
          bg="assets/bg_lenoblast.webp"
          count="01 · Ленинградская область"
          title="Двукратный абс. чемпион"
          subtitle="Ленинградской области"
        />
        <AchievementCard
          bg="assets/bg_piter.webp"
          count="02 · Санкт-Петербург"
          title="Трёхкратный абс. чемпион"
          subtitle="Санкт-Петербурга"
          delay={0.1}
        />
        <AchievementCard
          bg="assets/bg_russia.jpg"
          count="03 · Россия"
          title="Двукратный абс. чемпион"
          subtitle="России"
          delay={0.2}
        />
      </div>
    </div>
  </section>
);

Object.assign(window, { Achievements, AchievementCard });
