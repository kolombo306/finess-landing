const Gallery = () => {
  const [lbOpen, setLbOpen] = React.useState(false);
  const [idx, setIdx] = React.useState(0);
  const photos = [
    "assets/photo_competition_01.jpg",
    "assets/photo_competition_02.jpg",
    "assets/photo_competition_03.jpg",
    "assets/photo_award_01.jpg",
    "assets/photo_shoot_01.jpg",
    "assets/photo_shoot_02.jpg",
  ];
  const nav = (d) => setIdx(i => (i + d + photos.length) % photos.length);
  React.useEffect(() => {
    if (!lbOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLbOpen(false);
      if (e.key === "ArrowLeft") nav(-1);
      if (e.key === "ArrowRight") nav(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lbOpen]);

  return (
    <section id="gallery" className="py-16 sm:py-20" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Форма говорит сама за себя" title="Галерея" className="mb-10 sm:mb-14"/>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((src, i) => (
            <div key={src} className="rounded-none overflow-hidden cursor-pointer" onClick={() => { setIdx(i); setLbOpen(true); }}>
              <img src={src} alt="" className="w-full h-[220px] sm:h-[300px] md:h-[360px] object-cover object-top transition-transform duration-500 hover:scale-105"/>
            </div>
          ))}
        </div>
      </div>

      {lbOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer" style={{background:"rgba(0,0,0,.95)"}} onClick={() => setLbOpen(false)}>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white z-10"
                  onClick={(e) => { e.stopPropagation(); nav(-1); }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <img src={photos[idx]} alt="" onClick={(e) => e.stopPropagation()} style={{maxWidth:"90vw",maxHeight:"90vh",objectFit:"contain",borderRadius:0,}}/>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white z-10"
                  onClick={(e) => { e.stopPropagation(); nav(1); }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">{idx + 1} / {photos.length}</div>
        </div>
      )}
    </section>
  );
};

Object.assign(window, { Gallery });
