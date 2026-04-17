const Hero = () => {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const reveal = (delay) => ({
    opacity: ready ? 1 : 0,
    transform: ready ? "translateY(0)" : "translateY(24px)",
    transition: `opacity .8s ease ${delay}s, transform .8s cubic-bezier(.22,1,.36,1) ${delay}s`,
  });

  return (
    <section className="relative xl:min-h-screen overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* DESKTOP + MOBILE: raised-hands background centered + gold ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="assets/photo_shoot_02.jpg"
          alt=""
          className="absolute top-0 left-1/2 h-full w-auto"
          style={{
            transform: "translateX(-50%)",
            maxWidth: "none",
            opacity: 0.45,
            filter: "contrast(1.05) saturate(.75)",
            objectFit: "cover",
          }}
        />
        {/* Unifying dark veil */}
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,.5)" }} />
        {/* Bottom fade into page */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "30%",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(10,10,10,.85) 65%, #0a0a0a 100%)",
          }}
        />
        {/* Desktop-only gold ambient blur accent */}
        <div
          className="hidden sm:block absolute"
          style={{
            right: "-5%",
            top: "20%",
            width: "55%",
            height: "55%",
            background: "radial-gradient(circle, rgba(212,168,67,.12), transparent 65%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full xl:min-h-screen flex items-center">
        <div className="grid grid-cols-12 gap-3 sm:gap-6 xl:gap-4 items-center w-full pt-28 sm:pt-32 pb-10 xl:py-0">

          {/* MOBILE: photo on top (right) + vertical DZ on left; text below */}
          <div className="col-span-12 sm:hidden relative z-10">
            {/* Top row: vertical DZ label + portrait with corners */}
            <div className="relative flex items-stretch gap-4 mb-10" style={reveal(0.08)}>
              {/* Vertical DZ column — DZ top, line, COACHING bottom */}
              <div className="flex flex-col items-center py-2" style={{ width: "32px" }}>
                <div
                  id="hero-dz-mark"
                  className="font-heading font-bold dz-gold-text"
                  style={{
                    fontSize: "26px",
                    lineHeight: 1,
                    letterSpacing: "-.02em",
                  }}
                >
                  DZ
                </div>
                <div className="w-px flex-1 my-4" style={{ background: "linear-gradient(to bottom, #D4A84355, #D4A84322, transparent)", minHeight: "40px" }} />
                <div
                  className="font-heading font-bold dz-gold-text"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    fontSize: "12px",
                    letterSpacing: ".45em",
                    lineHeight: 1,
                    marginBottom: "44px",
                  }}
                >
                  COACHING
                </div>
              </div>
              {/* Portrait with top-right gold corner */}
              <div className="relative flex-1">
                <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 z-20" style={{ borderColor: "#D4A843" }} />
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <img
                    src="assets/main_dmitry_nobg.png"
                    alt="Дмитрий Захаржевский"
                    className="absolute inset-0 w-full h-full object-contain object-bottom"
                  />
                </div>
              </div>
              {/* Bottom-left corner aligned to the DZ column's center axis (16px from left, matches column width/2) */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: "15px",
                  bottom: "-10px",
                  width: "44px",
                  height: "44px",
                  borderBottom: "2px solid #D4A843",
                  borderLeft: "2px solid #D4A843",
                }}
              />
            </div>

            {/* Text block below */}
            <p
              className="font-body font-medium text-[10px] uppercase tracking-[.24em] text-[#D4A843] mb-4 leading-[1.5]"
              style={reveal(0.12)}
            >
              Персональный тренер / Чемпион России
            </p>
            <div className="mb-5" style={reveal(0.18)}>
              <div className="uppercase font-heading font-bold text-[1.8rem] text-white" style={{ lineHeight: 1 }}>
                Дмитрий
              </div>
              <div className="uppercase font-heading font-bold text-[1.8rem] dz-gold-text dz-sheen tracking-[-0.02em] relative" style={{ lineHeight: 1, marginTop: "0.35rem", paddingTop: "0.15em" }}>
                Захаржевский
              </div>
            </div>
            <p className="text-white/75 text-[15px] leading-[1.55] mb-7" style={reveal(0.24)}>
              Тренируйся с двукратным абсолютным чемпионом России. Программы, которые работают — потому что за ними стоит опыт побед.
            </p>
            <div className="flex flex-col gap-3 items-stretch" style={reveal(0.3)}>
              <GoldButton href="#contacts" className="w-full whitespace-nowrap">Начать трансформацию</GoldButton>
              <GhostButton href="#about" className="w-full whitespace-nowrap">Узнать больше</GhostButton>
            </div>
            <StatStrip style={reveal(0.38)} />
          </div>

          {/* DESKTOP text column */}
          <div className="hidden sm:block sm:col-span-7 xl:col-span-7 relative z-10">
            <p className="dz-eyebrow mb-4" style={reveal(0.05)}>Персональный тренер / Чемпион России</p>
            <div className="mb-6" style={reveal(0.12)}>
              <div className="uppercase font-heading font-bold text-[2.5rem] xl:text-[3.2rem] 2xl:text-[3.6rem] text-white" style={{ lineHeight: 1 }}>
                Дмитрий
              </div>
              <div className="uppercase font-heading font-bold text-[2.6rem] xl:text-[3.6rem] 2xl:text-[4rem] dz-gold-text dz-sheen tracking-[-0.02em]" style={{ lineHeight: 1, marginTop: "0.4rem", paddingTop: "0.15em" }}>
                Захаржевский
              </div>
            </div>
            <p className="text-white/75 text-base sm:text-lg xl:text-xl leading-relaxed mb-8 max-w-lg" style={reveal(0.2)}>
              Тренируйся с двукратным абсолютным чемпионом России. Программы, которые работают — потому что за ними стоит опыт побед.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start" style={reveal(0.28)}>
              <GoldButton href="#contacts" className="w-full sm:w-auto whitespace-nowrap">Начать трансформацию</GoldButton>
              <GhostButton href="#about" className="w-full sm:w-auto whitespace-nowrap">Узнать больше</GhostButton>
            </div>
            <StatStrip style={reveal(0.36)} />
          </div>

          {/* DESKTOP portrait */}
          <div className="hidden sm:flex sm:col-span-5 xl:col-span-5 justify-end relative self-end" style={reveal(0.16)}>
            <div className="relative w-full" style={{maxHeight:"85vh"}}>
              <div className="absolute -top-4 -right-4 w-20 h-20 xl:w-28 xl:h-28 border-t-2 border-r-2 z-20" style={{borderColor:"#D4A843"}}/>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 xl:w-28 xl:h-28 border-b-2 border-l-2 z-20" style={{borderColor:"#D4A843"}}/>
              <img
                src="assets/main_dmitry_nobg.png"
                alt="Дмитрий Захаржевский"
                className="relative z-10 max-h-[70vh] xl:max-h-[85vh] w-auto object-contain block ml-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const StatStrip = ({ style }) => {
  const items = [["10+","лет опыта"],["7","титулов"],["100+","учеников"]];
  return (
    <div className="mt-8 sm:mt-14 flex items-center gap-5 sm:gap-10" style={style}>
      {items.map(([n,l], i) => (
        <React.Fragment key={l}>
          {i > 0 && <div className="w-px h-10 sm:h-12 bg-white/20"/>}
          <div className="text-center">
            <div className="dz-stat dz-gold-text">{n}</div>
            <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-wider mt-1">{l}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

Object.assign(window, { Hero, StatStrip });
