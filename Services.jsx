const ServiceCard = ({ icon, title, features, footer, popular, delay = 0, price }) => (
  <div
    className="dz-card relative overflow-hidden flex flex-col"
    style={{
      padding: "40px 32px",
      borderColor: popular ? "rgba(212,168,67,.4)" : "#262626",
      transitionDelay: `${delay}s`,
    }}
  >
    {popular && (
      <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider px-3 py-1" style={{background:"#D4A843",color:"#000"}}>
        Популярно
      </div>
    )}
    <div className="absolute top-0 right-0 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{width:128,height:128,background:"rgba(212,168,67,.05)"}}/>
    <div className="relative flex flex-col flex-1">
      <div className="flex items-center gap-4 mb-6">
        <IconSquare size={48}>{icon}</IconSquare>
        <h3 className="dz-h3">{title}</h3>
      </div>
      {price && (
        <div className="mb-6 pb-6" style={{ borderBottom: "1px solid #262626" }}>
          <div className="text-[10px] uppercase tracking-[.22em] text-white/40 mb-2">Стоимость</div>
          <div className="font-heading font-bold text-2xl" style={{ color: "#E8C96A", letterSpacing: "-.02em" }}>{price}</div>
        </div>
      )}
      <ul className="space-y-3 text-white/60 mb-8 list-none p-0">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span style={{color:"#D4A843",marginTop:2,flexShrink:0}}><IconCheck size={18}/></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        {footer && <p className="text-white/40 text-sm mb-6">{footer}</p>}
        <GoldButton href="#contacts" className="block w-full">Записаться</GoldButton>
      </div>
    </div>
  </div>
);

const SubSectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="mb-10 sm:mb-14">
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-px bg-[#D4A843]"/>
      <span className="font-body text-xs uppercase tracking-[.22em] text-white/55">{eyebrow}</span>
    </div>
    <h3 className="font-heading font-bold text-white" style={{ fontSize: "clamp(28px,4.2vw,44px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
      {title}
    </h3>
    {subtitle && <p className="mt-4 text-white/55 max-w-2xl text-base sm:text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

const NutritionPillars = () => {
  const pillars = [
    {
      n: "01",
      title: "Расчёт калорий и БЖУ",
      body: "Стартовая раскладка под твой вес, активность и цель — без «минус 1000 ккал в день».",
    },
    {
      n: "02",
      title: "Меню на день",
      body: "5 приёмов пищи с учётом твоих вкусов. Никаких гречки и куриных грудок 24/7.",
    },
    {
      n: "03",
      title: "Еженедельная корректировка",
      body: "Каждую неделю — замеры и корректировка плана по фактическому прогрессу.",
    },
    {
      n: "04",
      title: "Сложные случаи",
      body: "Сушка, набор массы, подготовка к сцене, работа в отпуске и на праздниках.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
      {pillars.map((p) => (
        <div key={p.n} className="relative p-6 sm:p-7 border flex flex-col min-h-[180px]" style={{ background: "#0f0f0f", borderColor: "#262626" }}>
          <div className="font-heading font-bold text-4xl" style={{ color: "rgba(212,168,67,.35)", letterSpacing: "-.03em", lineHeight: 1 }}>{p.n}</div>
          <h4 className="mt-5 font-heading font-semibold text-white text-base sm:text-[17px] leading-snug" style={{ letterSpacing: "-.01em" }}>{p.title}</h4>
          <p className="mt-3 text-white/55 text-sm leading-relaxed">{p.body}</p>
        </div>
      ))}
    </div>
  );
};

const Services = () => (
  <section id="services" className="py-16 sm:py-20" style={{ background: "#141414" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Выбери свой формат" title="Услуги" className="mb-16 sm:mb-20" />

      {/* Training */}
      <SubSectionHeader
        eyebrow="01 · Тренировки"
        title="Программа под твою цель"
        subtitle="Похудение, набор массы, сушка или подготовка к сцене. Два формата — выбирай, как удобно."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-20 sm:mb-28">
        <ServiceCard
          icon={<span style={{color:"#D4A843"}}><IconMonitor/></span>}
          title="Онлайн"
          features={["Индивидуальная программа тренировок","Видео-разборы техники","Еженедельная корректировка","Связь с тренером 24/7","Из любой точки мира"]}
          footer="Стартуем в течение 2 дней"
        />
        <ServiceCard
          popular
          delay={0.1}
          icon={<span style={{color:"#D4A843"}}><IconPin/></span>}
          title="Очно"
          features={["Персональная тренировка 1 на 1","Постановка техники в реальном времени","Контроль прогресса и замеры","Работа над слабыми группами","Максимальная мотивация и результат"]}
          footer={<span className="inline-flex items-center gap-2"><span style={{color:"#D4A843"}}><IconPin size={16}/></span>Клуб Fitness Life на Комендантском</span>}
        />
      </div>

      {/* Nutrition */}
      <SubSectionHeader
        eyebrow="02 · Питание"
        title="План питания — отдельно"
        subtitle="Тренировки дают 30% результата, питание — 70%. Если ты уже тренируешься сам, но не видишь прогресса — начни отсюда."
      />

      <NutritionPillars/>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Left: Plan */}
        <div className="relative overflow-hidden dz-card flex flex-col" style={{ padding: 0, borderColor: "rgba(212,168,67,.4)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 100%, rgba(212,168,67,.18), transparent 60%)" }}/>
          <div className="relative p-8 sm:p-10 flex flex-col h-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <IconSquare size={48}><span style={{color:"#D4A843"}}><IconNutrition/></span></IconSquare>
              <h3 className="font-heading font-bold text-white text-xl sm:text-2xl lg:text-[1.75rem] leading-[1.1]" style={{letterSpacing:"-.02em",wordBreak:"break-word",hyphens:"auto"}}>Индивидуальный план питания</h3>
            </div>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Полный план на месяц с раскладкой по приёмам пищи, списком продуктов и вариантами замен. Составляю лично, с учётом твоих предпочтений, графика и бюджета.
            </p>
            <ul className="space-y-3 text-white/65 mb-8 list-none p-0">
              {["Опрос + анализ пищевых привычек","Расчёт калорий и БЖУ под твою цель","Меню на 7 дней с заменами","Список покупок на неделю","Корректировка после каждых 2 недель"].map(f => (
                <li key={f} className="flex items-start gap-3">
                  <span style={{color:"#D4A843",marginTop:2,flexShrink:0}}><IconCheck size={18}/></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[.22em] text-white/40 mb-1">Стоимость</div>
                <div className="font-heading font-bold text-2xl" style={{ color: "#E8C96A", letterSpacing: "-.02em" }}>от 8 000 ₽ / мес.</div>
              </div>
              <GoldButton href="#contacts" className="sm:ml-auto">Заказать план</GoldButton>
            </div>
          </div>
        </div>

        {/* Right: Consultation — mirrors left card */}
        <div className="relative overflow-hidden dz-card flex flex-col" style={{ padding: 0, borderColor: "#262626" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 100%, rgba(212,168,67,.10), transparent 60%)" }}/>
          <div className="relative p-8 sm:p-10 flex flex-col h-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <IconSquare size={48}><span style={{color:"#D4A843"}}><IconScale/></span></IconSquare>
              <h3 className="font-heading font-bold text-white text-xl sm:text-2xl lg:text-[1.75rem] leading-[1.1]" style={{letterSpacing:"-.02em",wordBreak:"break-word",hyphens:"auto"}}>Разовая консультация</h3>
            </div>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Встречаемся на 60 минут онлайн или очно. Разбираю твой рацион, пищевые привычки и даю рабочие правки, которые ты применяешь сразу — без долгих программ и обязательств.
            </p>
            <ul className="space-y-3 text-white/65 mb-8 list-none p-0">
              {["Разбор текущего рациона и пищевых привычек","Точечные правки под твою цель","Ответы на все вопросы о питании","Рекомендации по добавкам и спорт-питу","Резюме со всеми правками в Telegram"].map(f => (
                <li key={f} className="flex items-start gap-3">
                  <span style={{color:"#D4A843",marginTop:2,flexShrink:0}}><IconCheck size={18}/></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[.22em] text-white/40 mb-1">60 минут</div>
                <div className="font-heading font-bold text-2xl" style={{ color: "#E8C96A", letterSpacing: "-.02em" }}>3 500 ₽</div>
              </div>
              <GhostButton href="#contacts" className="sm:ml-auto">Записаться</GhostButton>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

Object.assign(window, { Services, ServiceCard, NutritionPillars, SubSectionHeader });
