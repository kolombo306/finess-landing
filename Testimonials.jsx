// Testimonials.jsx — homepage preview grid (Вилена + 2 плейсхолдера)
const TestimonialCard = ({ t }) => (
  <a href={t.href} className="group block relative overflow-hidden border transition-colors hover:border-[#D4A843]/40" style={{background:"#0f0f0f",borderColor:"#262626"}}>
    <div className="relative aspect-[4/5] overflow-hidden">
      <img src={t.img} alt="" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"/>
      <div className="absolute inset-0" style={{background:"linear-gradient(to top, rgba(10,10,10,.92) 0%, rgba(10,10,10,.25) 55%, transparent 100%)"}}/>
      <div className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-body font-medium uppercase tracking-[.16em]" style={{background:"rgba(10,10,10,.75)",color:"#D4A843",border:"1px solid rgba(212,168,67,.4)"}}>
        {t.goal}
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="font-heading font-bold text-3xl" style={{color:"#E8C96A",lineHeight:1,letterSpacing:"-.02em"}}>{t.metric}</div>
        <div className="mt-2 flex items-baseline justify-between gap-3">
          <div className="font-heading font-semibold text-white text-sm" style={{letterSpacing:"-.01em"}}>{t.name}</div>
          <div className="text-[10px] uppercase tracking-[.14em] text-white/50">{t.months} мес.</div>
        </div>
      </div>
    </div>
    <div className="p-5">
      <p className="text-[13.5px] text-white/70 leading-relaxed">«{t.quote}»</p>
      <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[.16em] font-medium text-[#D4A843] group-hover:gap-3 transition-all">
        Читать историю
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </div>
    </div>
  </a>
);

const SoonCard = ({ n }) => (
  <div className="relative overflow-hidden border flex flex-col" style={{background:"#0f0f0f",borderColor:"#262626"}}>
    <div className="relative aspect-[4/5] flex items-center justify-center" style={{background:"radial-gradient(circle at 50% 40%, rgba(212,168,67,.08), transparent 60%), #0a0a0a"}}>
      <div className="text-center">
        <div className="font-heading font-bold text-5xl sm:text-6xl" style={{color:"rgba(212,168,67,.35)",letterSpacing:"-.03em",lineHeight:1}}>0{n}</div>
        <div className="mt-4 text-[10px] uppercase tracking-[.22em] text-white/35 font-medium">Скоро</div>
      </div>
    </div>
    <div className="p-5 flex-1 flex flex-col justify-between">
      <p className="text-[13.5px] text-white/50 leading-relaxed">История в работе — скоро опубликуем.</p>
      <div className="mt-4 text-[11px] uppercase tracking-[.16em] font-medium text-white/30">Готовится</div>
    </div>
  </div>
);

const testimonials = [
  { id: "vilena", name: "Вилена", metric: "−21 кг", goal: "Похудение", months: 8, img: "assets/client_transform_08.jpg", quote: "За время нашей совместной работы я скинула 21 кг и снова полюбила себя.", href: "stories/vilena.html" },
];

const Testimonials = () => (
  <section id="testimonials" className="py-16 sm:py-20 relative" style={{background:"#0a0a0a"}}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4A843]"/>
            <span className="font-body text-xs uppercase tracking-[.22em] text-white/55">01 · Истории клиентов</span>
          </div>
          <h2 className="font-heading font-bold text-white" style={{fontSize:"clamp(32px,5vw,52px)",lineHeight:1.05,letterSpacing:"-.035em"}}>
            Результаты —<br/>не обещания
          </h2>
        </div>
        <a href="stories/index.html" className="inline-flex items-center gap-2 px-5 py-3 text-[11px] uppercase tracking-[.16em] font-body font-medium text-white border border-white/20 hover:border-[#D4A843] hover:text-[#D4A843] transition-colors">
          Все истории
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {testimonials.map(t => <TestimonialCard key={t.id} t={t}/>)}
        <div className="hidden sm:block"><SoonCard n={2}/></div>
        <div className="hidden sm:block"><SoonCard n={3}/></div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Testimonials, TestimonialCard, SoonCard, testimonials });
