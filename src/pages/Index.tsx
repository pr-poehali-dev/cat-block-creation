import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/d11bda25-6a45-4ae4-b189-695024deb0e3/files/e557e54e-ea0b-4aa0-b4c6-71fb90723e91.jpg';

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-24 w-[32rem] h-[32rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 w-[34rem] h-[34rem] rounded-full bg-accent/10 blur-3xl" />

        <div className="container mx-auto px-6 pt-8">
          <nav className="flex items-center justify-between">
            <div className="font-display text-2xl tracking-wide text-primary">
              Marika<span className="text-accent">.</span>
            </div>
            <div className="hidden sm:block text-xs tracking-[0.25em] uppercase text-muted-foreground">
              Владивосток
            </div>
          </nav>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-14 lg:py-24">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
                Мастер-класс по стилю
              </span>
            </div>

            <h1 className="font-display font-medium leading-[1.05] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary">
              Стань <span className="italic text-accent">«леди на миллион»</span> — женщиной, которая привлекает к себе всё, что хочет
            </h1>

            <p className="mt-7 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
              Уникальный мастер-класс по стилю во Владивостоке: тренды, психология
              образа и уверенность, которая работает на вас каждый день.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
              <button className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide uppercase font-medium hover:bg-accent transition-colors duration-300">
                Хочу преобразиться
                <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="Star" size={15} className="text-accent fill-current" />
              <span className="tracking-wide">
                <span className="text-primary font-medium">10 лет опыта</span> · Сотни преображённых клиенток
              </span>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -inset-3 border border-accent/40" />
            <div className="relative overflow-hidden">
              <img
                src={HERO_IMG}
                alt="Марика в работе с клиенткой — трансформация образа"
                className="w-full h-[30rem] lg:h-[36rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card shadow-xl px-6 py-5 border-l-2 border-accent">
              <div className="font-display text-4xl text-primary leading-none">100%</div>
              <div className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">
                Результат виден сразу
              </div>
            </div>

            <div className="absolute -top-5 right-6 bg-accent text-accent-foreground px-5 py-2 text-xs tracking-[0.2em] uppercase font-medium shadow-lg">
              До / После
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-accent/5 blur-3xl" />

        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
                Путь преображения
              </span>
              <span className="h-px w-10 bg-accent" />
            </div>
            <h2 className="font-display font-medium leading-[1.1] text-3xl sm:text-4xl lg:text-5xl text-primary">
              Это не просто мастер-класс — <span className="italic text-accent">это путь к новой себе</span>
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-10 lg:gap-8">
            {[
              {
                step: '01',
                verb: 'Узнаете',
                text: 'Актуальные тренды 2026 и как отличать «моду для всех» от «стиля для себя».',
              },
              {
                step: '02',
                verb: 'Поймёте',
                text: 'Психологию стиля: как одежда меняет самоощущение и как управлять первым впечатлением.',
              },
              {
                step: '03',
                verb: 'Научитесь',
                text: 'Создавать образы, которые работают на вас в любой ситуации: работа, свидание, важная встреча.',
              },
            ].map((s, i) => (
              <div
                key={s.step}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${0.15 + i * 0.12}s` }}
              >
                <div className="font-display text-7xl lg:text-8xl leading-none text-accent/20 group-hover:text-accent/40 transition-colors duration-500">
                  {s.step}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />
                  <h3 className="font-display text-2xl lg:text-3xl text-primary">{s.verb}</h3>
                </div>
                <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-2xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Icon name="Quote" size={28} className="mx-auto text-accent/50 mb-5" />
            <p className="font-display italic text-xl sm:text-2xl lg:text-3xl text-primary leading-relaxed">
              Каждая женщина носит в себе того самого «человека на миллион» — просто иногда ему нужен проводник, который поможет это раскрыть.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}