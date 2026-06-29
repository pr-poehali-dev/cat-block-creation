import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/d11bda25-6a45-4ae4-b189-695024deb0e3/files/15191b26-8f48-4d13-9bf8-501fa014a13e.jpg';

const breeds = [
  {
    name: 'Мейн-кун',
    emoji: '🦁',
    color: 'bg-primary',
    tag: 'Гигант',
    desc: 'Самые крупные домашние коты с кисточками на ушах и невероятно добрым нравом. Обожают компанию и «разговоры».',
    care: [
      'Вычёсывать густую шерсть 2–3 раза в неделю',
      'Просторный лоток и большой когтеточащий комплекс',
      'Рацион с повышенным содержанием белка',
    ],
  },
  {
    name: 'Британец',
    emoji: '🧸',
    color: 'bg-secondary',
    tag: 'Плюшевый',
    desc: 'Плотный плюшевый мех и щёчки-подушки. Спокойные, независимые, не любят сидеть на руках, но обожают быть рядом.',
    care: [
      'Расчёсывать раз в неделю, чаще — во время линьки',
      'Следить за весом: порода склонна к полноте',
      'Игрушки для активности, чтобы не скучали',
    ],
  },
  {
    name: 'Сфинкс',
    emoji: '🐉',
    color: 'bg-accent',
    tag: 'Лысик',
    desc: 'Бесшёрстные, теплолюбивые и очень ласковые экстраверты. Настоящие компаньоны, которые ходят за хозяином хвостиком.',
    care: [
      'Протирать кожу влажной салфеткой каждые 2–3 дня',
      'Тёплое местечко и одежда в холода',
      'Защита от прямого солнца — кожа быстро обгорает',
    ],
  },
  {
    name: 'Шотландец',
    emoji: '🥟',
    color: 'bg-primary',
    tag: 'Ушки-домиком',
    desc: 'Милые вислоухие котики с круглыми глазами. Уравновешенные, дружелюбные и отлично ладят с детьми.',
    care: [
      'Аккуратно чистить ушки раз в неделю',
      'Сбалансированный рацион для здоровья суставов',
      'Мягкие игры без прыжков с высоты',
    ],
  },
];

export default function Index() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="pointer-events-none fixed -top-24 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none fixed top-1/2 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />

      <header className="relative container mx-auto px-6 pt-10 pb-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-display text-2xl text-primary">
            <span className="text-3xl">🐾</span> МуррКлуб
          </div>
          <button className="hidden sm:flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
            <Icon name="Heart" size={18} /> Подобрать котика
          </button>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-10 md:mt-16">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent px-4 py-1.5 text-sm font-semibold mb-5">
              <span className="animate-wiggle inline-block">😺</span> Гид по пушистикам
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-tight text-foreground">
              Породы котиков <span className="text-primary">и уход</span> за ними
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Узнай характер каждой породы и получи простые советы, как сделать своего питомца самым счастливым.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#breeds" className="rounded-full bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                Смотреть породы
              </a>
              <a href="#breeds" className="rounded-full bg-card border-2 border-primary/20 px-6 py-3 text-foreground font-semibold hover:bg-muted transition-colors">
                Советы по уходу
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary to-accent rotate-6 scale-95" />
            <img
              src={HERO_IMG}
              alt="Милый котик"
              className="relative rounded-[3rem] shadow-2xl animate-float w-full object-cover"
            />
            <div className="absolute -bottom-5 -left-5 bg-card rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
              <span className="text-3xl">🐱</span>
              <div>
                <div className="font-bold text-foreground leading-none">4 породы</div>
                <div className="text-xs text-muted-foreground">с советами по уходу</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="breeds" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-foreground">Знакомься с породами</h2>
          <p className="mt-3 text-muted-foreground">Нажми на карточку, чтобы открыть советы по уходу</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {breeds.map((b, i) => {
            const isOpen = open === i;
            return (
              <article
                key={b.name}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group cursor-pointer rounded-3xl bg-card p-6 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-primary/20 transition-all animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${b.color} flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md group-hover:rotate-6 transition-transform`}>
                    {b.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-2xl text-foreground">{b.name}</h3>
                      <span className="text-xs font-semibold rounded-full bg-muted px-3 py-1 text-muted-foreground">{b.tag}</span>
                    </div>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>

                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] mt-5 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="rounded-2xl bg-muted/60 p-4">
                      <div className="flex items-center gap-2 font-semibold text-foreground mb-3">
                        <Icon name="Sparkles" size={18} className="text-primary" /> Советы по уходу
                      </div>
                      <ul className="space-y-2">
                        {b.care.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {isOpen ? 'Скрыть советы' : 'Советы по уходу'}
                  <Icon name={isOpen ? 'ChevronUp' : 'ChevronDown'} size={16} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-primary to-accent p-10 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-4 right-6 text-6xl opacity-30">🐾</div>
          <div className="absolute bottom-4 left-6 text-5xl opacity-30">🐾</div>
          <h2 className="font-display text-4xl sm:text-5xl text-primary-foreground">Полюби котика правильно</h2>
          <p className="mt-4 text-primary-foreground/90 max-w-lg mx-auto">
            Подберём породу под твой характер и образ жизни — будет мурчать от счастья!
          </p>
          <button className="mt-8 rounded-full bg-card px-8 py-3.5 font-bold text-primary shadow-lg hover:scale-105 transition-transform">
            Хочу котика 🐈
          </button>
        </div>
      </section>

      <footer className="container mx-auto px-6 pb-10 text-center text-muted-foreground text-sm">
        <div className="font-display text-xl text-primary mb-1">🐾 МуррКлуб</div>
        Сделано с любовью к котикам · 2026
      </footer>
    </div>
  );
}
