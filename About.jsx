const About = () => (
  <section id="about" className="py-16 sm:py-20" style={{ background: "#141414" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        <div className="rounded-none overflow-hidden relative self-stretch">
          <img src="assets/photo_portrait_01.jpg" alt="Дмитрий Захаржевский" className="absolute inset-0 w-full h-full object-cover object-top"/>
          <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(20,20,20,.8),transparent)"}}/>
          <div className="relative block lg:hidden" style={{paddingTop:"125%"}}/>
        </div>
        <div className="flex flex-col justify-center">
          <div className="dz-eyebrow mb-3">Почему я</div>
          <h2 className="dz-h2 mb-6">Не просто тренер —<br/><span className="dz-gold-text">действующий чемпион</span></h2>
          <div className="space-y-5 text-white/70 text-base sm:text-lg leading-relaxed">
            <p>Я не рассказываю как надо — я показываю. Каждая моя тренировка построена на реальном соревновательном опыте. За моими плечами — семь абсолютных титулов и тысячи часов работы с телом.</p>
            <p>Мой подход — это не шаблон из интернета. Это индивидуальная стратегия, созданная под ваши цели, ваше тело и ваш ритм жизни.</p>
            <p>Неважно, хотите ли вы подготовиться к соревнованиям, сбросить вес или просто прийти в лучшую форму — я доведу вас до результата.</p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
            {[["10+","лет в спорте"],["100+","учеников"],["7","титулов"]].map(([n,l]) => (
              <div key={l} className="border rounded-none px-3 py-3 text-center" style={{background:"#0a0a0a",borderColor:"#262626"}}>
                <p className="font-heading font-bold text-lg" style={{color:"#D4A843"}}>{n}</p>
                <p className="text-white/50 text-xs uppercase tracking-wider">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { About });
