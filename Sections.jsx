const HowItWorks = () => {
  const steps = [
    ["1","Напишите мне","Свяжитесь через Telegram или Instagram. Расскажите о своих целях и опыте."],
    ["2","Получите план","Я составлю индивидуальную программу тренировок и питания под ваши цели."],
    ["3","Достигайте результата","Тренируйтесь по программе с моей поддержкой. Результат — вопрос дисциплины."],
  ];
  return (
    <section className="py-16 sm:py-20" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Три простых шага" title="Как начать" className="mb-14 sm:mb-20"/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {steps.map(([n,t,d]) => (
            <div key={n} className="text-center">
              <div className="mx-auto mb-6 flex items-center justify-center" style={{width:64,height:64,border:"2px solid #D4A843"}}>
                <span className="font-heading text-2xl font-bold dz-gold-text">{n}</span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-3">{t}</h3>
              <p className="text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Quote = () => (
  <section className="py-16 sm:py-20 relative" style={{ background: "#0a0a0a" }}>
    <div className="absolute inset-0" style={{opacity:.18}}>
      <img src="assets/photo_competition_03.jpg" alt="" className="w-full h-full object-cover"/>
    </div>
    <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
      <div className="border-l-4 pl-6 sm:pl-10 text-left" style={{borderColor:"#D4A843"}}>
        <p className="font-heading text-xl sm:text-2xl md:text-4xl font-bold uppercase leading-tight mb-6 text-white">
          Твоё тело — это результат того, <span className="dz-gold-text">что ты делаешь каждый день.</span> Начни делать правильно.
        </p>
        <p className="text-white/50 text-base sm:text-lg">— Дмитрий Захаржевский</p>
      </div>
    </div>
  </section>
);

const Contacts = () => (
  <section id="contacts" className="py-16 sm:py-20" style={{ background: "#141414" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="dz-eyebrow mb-3">Готовы начать?</div>
        <h2 className="dz-h2 mb-6">Свяжитесь со мной</h2>
        <p className="text-white/60 text-lg mb-10">Напишите мне в удобный мессенджер — обсудим ваши цели и подберём оптимальный формат тренировок.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="https://t.me/DmytriyZakharzhevskiy" target="_blank" rel="noopener"
             className="dz-gold-btn rounded-none flex items-center justify-center gap-3 px-8 py-4 text-base">
            <IconTelegram/> Telegram
          </a>
          <a href="https://www.instagram.com/dmitriy_zakharzhevskiy/" target="_blank" rel="noopener"
             className="rounded-none flex items-center justify-center gap-3 px-8 py-4 text-white font-bold text-base uppercase tracking-wider transition-all"
             style={{ border: "2px solid rgba(212,168,67,.4)" }}>
            <IconInstagram/> Instagram
          </a>
        </div>
        <a href="https://yandex.ru/maps/-/CPB2IVyd" target="_blank" rel="noopener"
           className="rounded-none p-6 sm:p-8 inline-block transition-colors"
           style={{background:"#0a0a0a",border:"1px solid #262626"}}>
          <div className="flex items-center gap-3 text-white/60">
            <span style={{color:"#D4A843",flexShrink:0}}><IconPin size={20}/></span>
            <span>Клуб Fitness Life на Комендантском</span>
          </div>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 border-t" style={{background:"#0a0a0a",borderColor:"#262626"}}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/30 text-sm">
      <p>&copy; 2026 Дмитрий Захаржевский. Все права защищены.</p>
    </div>
  </footer>
);

Object.assign(window, { HowItWorks, Quote, Contacts, Footer });
