import { Button } from "@/components/ui/button";

const copy = {
  ru: {
    brand: "rodIDE",
    nav: {
      services: "Услуги",
      projects: "Кейсы",
      process: "Процесс",
      about: "Обо мне",
      stack: "Стек",
      contact: "Контакт"
    },
    heroBadge: "Frontend-разработчик",
    heroTitle: "Сайты и интерфейсы, которые выглядят дорого и работают быстро",
    heroSubtitle:
      "Проектирую и разрабатываю веб-продукты: от лендингов до сложных интерфейсов. Без шума, с фокусом на результат.",
    heroMeta: "Чистый фронт, аккуратная типографика, предсказуемый UX.",
    ctaPrimary: "Смотреть кейсы",
    ctaSecondary: "Написать в Telegram",
    stats: [
      { title: "1+", label: "Кейсов" },
      { title: "1-4 недели", label: "Срок проекта" },
      { title: "100%", label: "Фокус на результат" }
    ],
    heroHighlights: [
      {
        title: "Старт и сроки",
        text: "Бриф за 1 день, прототип за 2-3 дня, релиз за 1-4 недели."
      },
      {
        title: "Что входит",
        text: "Структура, тексты, адаптив и оптимизация скорости."
      },
      {
        title: "После запуска",
        text: "14 дней поддержки, правки и контроль стабильности."
      }
    ],
    focusLabel: "Фокус",
    focusTitle: "Собранные интерфейсы для зрелой аудитории: ясно и по делу.",
    focusBody:
      "Сначала смысл и структура, потом визуал. Никакого шума, только то, что помогает бизнесу.",
    focusList: [
      "Четкая структура",
      "Адаптив под любые устройства",
      "Оптимизация скорости",
      "Чистый фронт без лишнего"
    ],
    signalKicker: "Рабочий формат",
    signalTitle: "Прозрачный продакшн-процесс без хаоса",
    signalText:
      "Каждый этап фиксируется: что делаем, зачем и какой результат получаем на выходе.",
    signalStats: [
      {
        value: "24ч",
        label: "Ответ в Telegram",
        text: "Быстрый старт коммуникации и согласований."
      },
      {
        value: "3 этапа",
        label: "Структура работы",
        text: "Бриф -> система -> запуск без лишних итераций."
      },
      {
        value: "1 файл",
        label: "Общий фокус",
        text: "Вся структура и задачи собраны в одном месте."
      },
      {
        value: "14 дней",
        label: "Поддержка",
        text: "Контроль стабильности и точечные правки после релиза."
      }
    ],
    signalTags: ["UX-аудит", "Визуальная система", "Адаптив", "Core Web Vitals", "SEO-база", "Редизайн"],
    projectsTitle: "Кейсы",
    projectsSubtitle: "Реальные проекты и результаты",
    featuredCaseKicker: "Главный кейс",
    featuredCaseText: "Реальный коммерческий проект: от структуры до запуска в продакшн.",
    featuredCaseCta: "Открыть сайт",
    featuredMetaStatus: "Статус:",
    featuredMetaTime: "Срок:",
    featuredMetaResult: "Результат:",
    projectsMetrics: [
      {
        value: "01",
        label: "Реальный кейс",
        text: "Сайт строительной компании запущен и работает в проде."
      },
      {
        value: "1-4",
        label: "Недели на проект",
        text: "Средний цикл от брифа до релиза."
      },
      {
        value: "100%",
        label: "Фокус на бизнес",
        text: "Каждое решение связано с целями проекта."
      }
    ],
    projectStateLive: "Запущен",
    projectStateBuild: "В разработке",
    projectStateOpen: "Открыт для нового проекта",
    projectPlaceholder: "Кейс в подготовке",
    projectRealTags: ["Next.js", "React", "Tailwind", "Speed"],
    projectUpcomingTags: ["Research", "UI System", "Content"],
    servicesTitle: "Услуги",
    servicesSubtitle: "Что я делаю для клиентов",
    services: [
      {
        title: "Сайт с нуля",
        text: "Сбор структуры, тексты, визуальная система и чистая верстка.",
        badge: "Полный цикл",
        points: ["Структура и прототип", "Адаптив и запуск"]
      },
      {
        title: "Оптимизация",
        text: "Ускоряю загрузку, исправляю UX и навожу порядок в интерфейсе.",
        badge: "Performance",
        points: ["Core Web Vitals", "Улучшение навигации"]
      },
      {
        title: "Лендинги",
        text: "Конверсионные одностраничники под продукт, услугу или запуск.",
        badge: "Conversion",
        points: ["Четкая структура оффера", "Сценарий под рекламу"]
      },
      {
        title: "Редизайн",
        text: "Обновляю подачу и структуру без потери сути бизнеса.",
        badge: "Refresh",
        points: ["Актуальный визуал", "Сохранение смысла бренда"]
      }
    ],
    servicesFootnote: "Формат подбирается под задачу: от точечных работ до полного цикла.",
    aboutTitle: "Обо мне",
    aboutText:
      "Я фронтенд-разработчик rodIDE. Делаю современные сайты и интерфейсы: быстро, аккуратно и с вниманием к деталям. Работаю с бизнесом, которому важны смысл и результат.",
    aboutQuote: "Не делаю лишнего. Делаю то, что реально работает в продукте.",
    aboutCards: [
      { title: "Подход", text: "Сначала структура и логика, потом визуальная подача." },
      { title: "Коммуникация", text: "Короткие апдейты по этапам без хаоса." },
      { title: "Результат", text: "Готовый интерфейс, который можно сразу запускать в трафик." }
    ],
    processTitle: "Процесс",
    processSubtitle: "Три этапа от брифа до релиза",
    processSteps: [
      {
        title: "Бриф",
        text: "Фиксирую цели, аудиторию и критерии результата.",
        time: "День 1",
        result: "Результат: карта задач и приоритетов"
      },
      {
        title: "Система",
        text: "Собираю структуру, визуальный ритм и тексты на пользу бизнеса.",
        time: "Дни 2-6",
        result: "Результат: прототип и UI-система"
      },
      {
        title: "Запуск",
        text: "Верстаю, оптимизирую и выпускаю проект в продакшн.",
        time: "Неделя 2+",
        result: "Результат: стабильный релиз и поддержка"
      }
    ],
    stackTitle: "Стек",
    stackSubtitle: "Простой, быстрый, современный",
    stackGroups: [
      { label: "Core", items: ["JavaScript", "React", "Next.js"] },
      { label: "UI", items: ["Tailwind CSS", "Framer Motion", "shadcn/ui"] },
      { label: "Delivery", items: ["Vercel", "Lighthouse", "GitHub"] }
    ],
    contactTitle: "Контакты",
    contactText: "Лучший способ связи - Telegram. Отвечаю быстро.",
    contactButton: "Написать в Telegram",
    contactSecondary: "GitHub"
  },
  en: {
    brand: "rodIDE",
    nav: {
      services: "Services",
      projects: "Cases",
      process: "Process",
      about: "About",
      stack: "Stack",
      contact: "Contact"
    },
    heroBadge: "Frontend Developer",
    heroTitle: "Websites and interfaces that look premium and run fast",
    heroSubtitle:
      "I design and build web products: from landing pages to complex interfaces. No noise, just results.",
    heroMeta: "Clean frontend, careful typography, predictable UX.",
    ctaPrimary: "View cases",
    ctaSecondary: "Message on Telegram",
    stats: [
      { title: "1+", label: "Cases" },
      { title: "1-4 weeks", label: "Timeline" },
      { title: "100%", label: "Result focus" }
    ],
    heroHighlights: [
      {
        title: "Start and timeline",
        text: "Brief in 1 day, prototype in 2-3 days, release in 1-4 weeks."
      },
      {
        title: "What is included",
        text: "Structure, copy, responsive layout and speed optimization."
      },
      {
        title: "After launch",
        text: "14 days support, minor fixes and stability control."
      }
    ],
    focusLabel: "Focus",
    focusTitle: "Focused interfaces for mature audiences: clear and to the point.",
    focusBody:
      "Meaning and structure first, visuals second. No noise, only what helps business.",
    focusList: [
      "Clear structure",
      "Responsive across devices",
      "Speed optimization",
      "Clean frontend, no bloat"
    ],
    signalKicker: "Workflow",
    signalTitle: "Clear production flow without chaos",
    signalText:
      "Every stage is explicit: what we build, why it matters, and what result you get.",
    signalStats: [
      {
        value: "24h",
        label: "Telegram response",
        text: "Fast communication and approval turnaround."
      },
      {
        value: "3 phases",
        label: "Work structure",
        text: "Brief -> system -> launch with no unnecessary loops."
      },
      {
        value: "1 file",
        label: "Single source",
        text: "All structure and tasks are tracked in one place."
      },
      {
        value: "14 days",
        label: "Support",
        text: "Stability check and focused fixes after release."
      }
    ],
    signalTags: ["UX audit", "Visual system", "Responsive", "Core Web Vitals", "SEO baseline", "Redesign"],
    projectsTitle: "Cases",
    projectsSubtitle: "Real work and outcomes",
    featuredCaseKicker: "Featured case",
    featuredCaseText: "A real commercial project delivered from structure to production launch.",
    featuredCaseCta: "Open website",
    featuredMetaStatus: "Status:",
    featuredMetaTime: "Timeline:",
    featuredMetaResult: "Result:",
    projectsMetrics: [
      {
        value: "01",
        label: "Live case",
        text: "A construction company website is already live in production."
      },
      {
        value: "1-4",
        label: "Weeks per project",
        text: "Typical cycle from brief to release."
      },
      {
        value: "100%",
        label: "Business focus",
        text: "Every decision is tied to project goals."
      }
    ],
    projectStateLive: "Live",
    projectStateBuild: "In progress",
    projectStateOpen: "Open for a new project",
    projectPlaceholder: "Case is being prepared",
    projectRealTags: ["Next.js", "React", "Tailwind", "Speed"],
    projectUpcomingTags: ["Research", "UI System", "Content"],
    servicesTitle: "Services",
    servicesSubtitle: "What I deliver",
    services: [
      {
        title: "Site from scratch",
        text: "Structure, copy, visual system and clean layout.",
        badge: "Full cycle",
        points: ["Structure and prototype", "Responsive build and release"]
      },
      {
        title: "Optimization",
        text: "Speed up pages, improve UX and clean the interface.",
        badge: "Performance",
        points: ["Core Web Vitals", "Navigation and UX fixes"]
      },
      {
        title: "Landing pages",
        text: "Conversion-focused one-page sites for product or launch.",
        badge: "Conversion",
        points: ["Clear offer structure", "Ad-ready page flow"]
      },
      {
        title: "Redesign",
        text: "Refresh visual language and structure without losing meaning.",
        badge: "Refresh",
        points: ["Modern visual update", "Preserve brand meaning"]
      }
    ],
    servicesFootnote: "Scope is tailored to your goal: from focused fixes to a full cycle.",
    aboutTitle: "About",
    aboutText:
      "I am rodIDE, a frontend developer. I build modern websites and interfaces: fast, clean, and detail-oriented. I work with businesses that value meaning and results.",
    aboutQuote: "I do not add noise. I ship what actually improves the product.",
    aboutCards: [
      { title: "Approach", text: "Structure and logic first, visual layer second." },
      { title: "Communication", text: "Short stage updates without overload." },
      { title: "Outcome", text: "A ready interface you can immediately launch." }
    ],
    processTitle: "Process",
    processSubtitle: "Three steps from brief to release",
    processSteps: [
      {
        title: "Brief",
        text: "Define goals, audience and measurable outcomes.",
        time: "Day 1",
        result: "Result: clear task map and priorities"
      },
      {
        title: "System",
        text: "Build structure, visual rhythm and copy around business value.",
        time: "Days 2-6",
        result: "Result: prototype and UI system"
      },
      {
        title: "Launch",
        text: "Implement, optimize and ship to production.",
        time: "Week 2+",
        result: "Result: stable release and support"
      }
    ],
    stackTitle: "Stack",
    stackSubtitle: "Simple, fast, modern",
    stackGroups: [
      { label: "Core", items: ["JavaScript", "React", "Next.js"] },
      { label: "UI", items: ["Tailwind CSS", "Framer Motion", "shadcn/ui"] },
      { label: "Delivery", items: ["Vercel", "Lighthouse", "GitHub"] }
    ],
    contactTitle: "Contact",
    contactText: "Best way is Telegram. Quick replies.",
    contactButton: "Message on Telegram",
    contactSecondary: "GitHub"
  }
};

function localizeProjects(projects, lang) {
  return projects.map((project) => {
    if (lang === "en") {
      return {
        title: project.enTitle || project.title,
        description: project.enDescription || project.description,
        tag: project.enTag || project.tag,
        result: project.enResult || project.result,
        duration: project.enDuration || project.duration,
        link: project.enLink || project.link
      };
    }
    return project;
  });
}

export function HomeClient({ projects, lang = "ru" }) {
  const currentLang = lang === "en" ? "en" : "ru";
  const t = copy[currentLang];
  const localizedProjects = localizeProjects(projects, currentLang);
  const projectsWithMeta = localizedProjects.map((project, index) => ({
    ...project,
    _idx: index
  }));
  const featuredProject = projectsWithMeta.find((project) => Boolean(project.link)) || projectsWithMeta[0] || null;
  const regularProjects = featuredProject
    ? projectsWithMeta.filter((project) => project._idx !== featuredProject._idx)
    : projectsWithMeta;
  const ruHref = "/";
  const enHref = "/en";
  const getProjectState = (index) => {
    if (index === 0) return t.projectStateLive;
    if (index === 1) return t.projectStateBuild;
    return t.projectStateOpen;
  };

  return (
    <main className="main-shell relative min-h-screen bg-transparent text-slate-100">
      <div className="fixed inset-0 cosmos-bg" />
      <div className="fixed inset-0 cosmos-aurora" />
      <div className="fixed inset-0 cosmos-aurora-bottom" />
      <div className="fixed inset-0 cosmos-planets">
        <span className="planet planet-a" />
        <span className="planet planet-b" />
        <span className="planet planet-c" />
      </div>
      <div className="fixed inset-0 cosmos-stars" />
      <div className="fixed inset-0 cosmos-stars cosmos-stars-alt" />
      <div className="fixed inset-0 liquid-noise" />

      <div className="relative">
        <header className="container py-7">
          <div className="glass-strong reveal rise-1 flex flex-wrap items-center justify-between gap-4 rounded-2xl px-4 py-3">
            <a
              href={currentLang === "en" ? enHref : ruHref}
              className="brand-wordmark inline-flex items-center gap-2 text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_8px_rgba(126,220,255,0.9)]" />
              {t.brand}
            </a>

            <nav className="ui-label hidden items-center gap-5 text-sm text-slate-300 md:flex">
              <a href="#projects" className="hover:text-white">
                {t.nav.projects}
              </a>
              <a href="#services" className="hover:text-white">
                {t.nav.services}
              </a>
              <a href="#process" className="hover:text-white">
                {t.nav.process}
              </a>
              <a href="#about" className="hover:text-white">
                {t.nav.about}
              </a>
              <a href="#stack" className="hover:text-white">
                {t.nav.stack}
              </a>
              <a href="#contact" className="hover:text-white">
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <div className="glass-soft flex items-center rounded-full px-2 py-1">
                <a
                  href={ruHref}
                  className={`ui-label rounded-full px-2.5 py-1 text-xs ${
                    currentLang === "ru" ? "bg-white text-black" : "text-slate-300"
                  }`}
                >
                  RU
                </a>
                <a
                  href={enHref}
                  className={`ui-label rounded-full px-2.5 py-1 text-xs ${
                    currentLang === "en" ? "bg-white text-black" : "text-slate-300"
                  }`}
                >
                  EN
                </a>
              </div>

              <Button asChild variant="glass" size="sm" className="hidden md:inline-flex">
                <a href="#contact">{t.ctaSecondary}</a>
              </Button>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-4 overflow-x-auto whitespace-nowrap text-xs text-slate-300 md:hidden">
            <a href="#projects">{t.nav.projects}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#process">{t.nav.process}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#stack">{t.nav.stack}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
        </header>

        <section className="container pb-20 pt-2">
          <div className="grid gap-6 lg:grid-cols-[1.34fr_0.66fr]">
            <div className="glass reveal rise-2 relative rounded-[30px] p-8 md:p-12">
              <div className="ui-caps inline-flex items-center gap-2 rounded-full border border-sky-200/28 bg-sky-200/10 px-4 py-2 text-xs text-slate-100">
                {t.heroBadge}
              </div>

              <h1 className="section-title hero-title mt-6 text-4xl leading-[0.95] md:text-6xl">
                {t.heroTitle}
              </h1>

              <p className="ui-label mt-6 max-w-2xl text-base text-slate-200 md:text-lg">
                {t.heroSubtitle}
              </p>

              <p className="ui-label mt-2 text-sm text-slate-300">{t.heroMeta}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#projects">{t.ctaPrimary}</a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href="https://t.me/puzopa" target="_blank" rel="noreferrer">
                    {t.ctaSecondary}
                  </a>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {t.stats.map((item) => (
                  <div key={item.label} className="glass-soft rounded-2xl px-4 py-4">
                    <div className="num-mono text-lg font-semibold leading-tight text-white md:text-2xl">
                      {item.title}
                    </div>
                    <div className="ui-caps mt-1 text-[11px] text-slate-400 md:text-xs">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 lg:grid-cols-3">
                {t.heroHighlights.map((item) => (
                  <div key={item.title} className="glass-soft rounded-2xl px-4 py-4">
                    <p className="ui-caps text-[11px] text-slate-400">{item.title}</p>
                    <p className="mt-2 text-xs text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-4">
              <div className="glass-strong reveal rise-3 rounded-[28px] p-6">
                <div className="ui-caps inline-flex items-center gap-2 text-xs text-slate-300">
                  {t.focusLabel}
                </div>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-slate-100">
                  {t.focusTitle}
                </h2>
                <p className="mt-3 text-sm text-slate-300">{t.focusBody}</p>
                <div className="mt-6 space-y-3">
                  {t.focusList.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-slate-200/12 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-200/80" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass reveal rise-4 rounded-[28px] p-6">
                <p className="ui-caps text-xs text-slate-300">{t.servicesTitle}</p>
                <div className="mt-4 space-y-4">
                  {t.services.slice(0, 3).map((service) => (
                    <div key={service.title} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                      <div className="text-sm font-semibold text-slate-100">{service.title}</div>
                      <p className="mt-1 text-xs text-slate-300">{service.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="container pb-20">
          <div className="glass signal-block rounded-[30px] p-6 md:p-8">
            <span className="signal-orb signal-orb-a" />
            <span className="signal-orb signal-orb-b" />
            <div className="relative">
              <p className="kicker">{t.signalKicker}</p>
              <h2 className="section-title mt-3 text-3xl md:text-4xl">{t.signalTitle}</h2>
              <p className="ui-label mt-3 max-w-3xl text-sm text-slate-300 md:text-base">{t.signalText}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {t.signalStats.map((item) => (
                  <article key={item.label} className="signal-card rounded-2xl p-4">
                    <p className="num-mono text-base font-semibold text-white md:text-lg">{item.value}</p>
                    <p className="ui-caps mt-1 text-[11px] text-slate-300">{item.label}</p>
                    <p className="mt-2 text-xs text-slate-400">{item.text}</p>
                  </article>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {t.signalTags.map((tag) => (
                  <span key={tag} className="signal-chip rounded-full px-3 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="container pb-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">{t.projectsTitle}</p>
              <h2 className="section-title mt-3 text-3xl md:text-4xl">{t.projectsSubtitle}</h2>
            </div>
            <p className="ui-caps text-xs text-slate-400">
              {currentLang === "en" ? "All cases are listed below" : "Все кейсы представлены ниже"}
            </p>
          </div>

          <div className="mb-5 grid gap-3 md:grid-cols-3">
            {t.projectsMetrics.map((metric) => (
              <article key={metric.label} className="glass-soft case-metric rounded-2xl px-4 py-4">
                <p className="num-mono text-base font-semibold text-white md:text-lg">{metric.value}</p>
                <p className="ui-caps mt-1 text-[11px] text-slate-300">{metric.label}</p>
                <p className="mt-2 text-xs text-slate-400">{metric.text}</p>
              </article>
            ))}
          </div>

          {featuredProject && (
            <article className="glass featured-case mb-5 rounded-[30px] p-6 md:p-8">
              <div className="relative grid gap-5 lg:grid-cols-[0.56fr_0.44fr] lg:items-center">
                <div>
                  <p className="kicker">{t.featuredCaseKicker}</p>
                  <h3 className="section-title mt-3 text-2xl md:text-4xl">{featuredProject.title}</h3>
                  <p className="mt-3 text-sm text-slate-300 md:text-base">{featuredProject.description}</p>
                  <p className="featured-note mt-3 text-xs text-slate-300">{t.featuredCaseText}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.projectRealTags.map((tag) => (
                      <span key={`featured-${tag}`} className="case-chip rounded-full px-2.5 py-1 text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
                    <p className="featured-meta rounded-xl px-3 py-2">
                      <span className="ui-caps mr-1 text-[10px] text-slate-400">{t.featuredMetaStatus}</span>
                      {getProjectState(featuredProject._idx)}
                    </p>
                    <p className="featured-meta rounded-xl px-3 py-2">
                      <span className="ui-caps mr-1 text-[10px] text-slate-400">{t.featuredMetaTime}</span>
                      {featuredProject.duration || t.projectPlaceholder}
                    </p>
                    <p className="featured-meta rounded-xl px-3 py-2 sm:col-span-2">
                      <span className="ui-caps mr-1 text-[10px] text-slate-400">{t.featuredMetaResult}</span>
                      {featuredProject.result || t.projectPlaceholder}
                    </p>
                  </div>

                  {featuredProject.link && (
                    <a
                      href={featuredProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="featured-link mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                    >
                      {t.featuredCaseCta}
                      <span>{">"}</span>
                    </a>
                  )}
                </div>

                <div className={`case-preview case-preview-featured case-preview-${featuredProject._idx % 3}`}>
                  <div className="case-preview-head">
                    <div className="case-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="case-preview-status">{getProjectState(featuredProject._idx)}</span>
                  </div>
                  <div className="case-preview-body">
                    <p className="case-preview-kicker">{featuredProject.tag}</p>
                    <p className="case-preview-title">{featuredProject.title}</p>
                    <div className="case-preview-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                    <p className="case-preview-domain">
                      {featuredProject.link ? featuredProject.link.replace("https://", "") : t.projectPlaceholder}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          )}

          <div className="space-y-4">
            {regularProjects.map((project) => (
              <article
                key={`${project.title}-${project._idx}`}
                className="glass project-row case-card rounded-[28px] p-6 md:p-8"
              >
                <div className="grid gap-5 md:grid-cols-[0.12fr_0.58fr_0.3fr] md:items-start">
                  <div className="num-mono text-xs uppercase tracking-[0.3em] text-slate-400">
                    {String(project._idx + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <div className={`case-preview case-preview-${project._idx % 3}`}>
                      <div className="case-preview-head">
                        <div className="case-dots">
                          <span />
                          <span />
                          <span />
                        </div>
                        <span className="case-preview-status">{getProjectState(project._idx)}</span>
                      </div>
                      <div className="case-preview-body">
                        <p className="case-preview-kicker">{project.tag}</p>
                        <p className="case-preview-title">{project.title}</p>
                        <div className="case-preview-lines">
                          <span />
                          <span />
                          <span />
                        </div>
                        <p className="case-preview-domain">
                          {project.link ? project.link.replace("https://", "") : t.projectPlaceholder}
                        </p>
                      </div>
                    </div>
                    <p className="ui-caps text-xs text-slate-400">{project.tag}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-100">{project.title}</h3>
                    <p className="mt-3 text-sm text-slate-300 md:text-base">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(project.link ? t.projectRealTags : t.projectUpcomingTags).map((tag) => (
                        <span key={`${project.title}-${tag}`} className="case-chip rounded-full px-2.5 py-1 text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-slate-300 md:text-right">
                    <div className="inline-flex rounded-full border border-sky-200/25 bg-sky-200/10 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-slate-200">
                      {getProjectState(project._idx)}
                    </div>
                    <div className="num-mono">{project.duration || t.projectPlaceholder}</div>
                    <div>{project.result || t.projectPlaceholder}</div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-slate-200 underline underline-offset-4"
                      >
                        {project.link.replace("https://", "")}
                        <span>{">"}</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="container pb-20">
          <div className="mb-8">
            <p className="kicker">{t.servicesTitle}</p>
            <h2 className="section-title mt-3 text-3xl md:text-4xl">{t.servicesSubtitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {t.services.map((service, index) => (
              <article key={service.title} className="glass service-row service-card rounded-3xl p-6">
                <div className="ui-caps flex items-center justify-between text-xs text-slate-400">
                  <span className="num-mono">0{index + 1}</span>
                  <span className="service-badge rounded-full px-2.5 py-1 text-[10px]">{service.badge}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-100">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{service.text}</p>
                <div className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <p key={`${service.title}-${point}`} className="service-point flex items-center gap-2 text-xs text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-200/80" />
                      {point}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="ui-label mt-5 text-xs text-slate-400">{t.servicesFootnote}</p>
        </section>

        <section id="process" className="container pb-20">
          <div className="mb-8">
            <p className="kicker">{t.processTitle}</p>
            <h2 className="section-title mt-3 text-3xl md:text-4xl">{t.processTitle}</h2>
            <p className="ui-label mt-2 text-sm text-slate-300">{t.processSubtitle}</p>
          </div>
          <div className="process-grid grid gap-4 md:grid-cols-3">
            {t.processSteps.map((step, index) => (
              <article key={step.title} className="glass-strong step-card process-card rounded-3xl p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="num-mono text-xs uppercase tracking-[0.3em] text-slate-400">0{index + 1}</div>
                  <span className="process-time rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">
                    {step.time}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-100">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{step.text}</p>
                <p className="process-result mt-4 rounded-xl px-3 py-2 text-xs text-slate-200">{step.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="container pb-20">
          <div className="grid gap-4 lg:grid-cols-[0.65fr_0.35fr]">
            <article className="glass about-card rounded-3xl p-8">
              <p className="kicker">{t.aboutTitle}</p>
              <h2 className="section-title mt-3 text-3xl md:text-4xl">{t.aboutTitle}</h2>
              <p className="ui-label mt-5 max-w-2xl text-sm text-slate-300 md:text-base">{t.aboutText}</p>
              <p className="about-quote mt-5 rounded-2xl px-4 py-3 text-sm text-slate-200">{t.aboutQuote}</p>
              <div className="about-cards mt-5 grid gap-3 md:grid-cols-3">
                {t.aboutCards.map((card) => (
                  <article key={card.title} className="about-mini rounded-2xl px-4 py-4">
                    <p className="ui-caps text-[11px] text-slate-300">{card.title}</p>
                    <p className="mt-2 text-xs text-slate-400">{card.text}</p>
                  </article>
                ))}
              </div>
            </article>
            <article id="stack" className="glass-soft rounded-3xl p-8">
              <p className="kicker">{t.stackTitle}</p>
              <h2 className="section-title mt-3 text-2xl md:text-3xl">{t.stackSubtitle}</h2>
              <div className="mt-5 space-y-3">
                {t.stackGroups.map((group) => (
                  <article key={group.label} className="stack-group rounded-2xl px-4 py-4">
                    <p className="ui-caps text-[11px] text-slate-300">{group.label}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={`${group.label}-${item}`} className="chip rounded-full px-3 py-1.5 text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="container pb-24">
          <div className="glass-strong rounded-[34px] p-8 text-center md:p-12">
            <h2 className="section-title text-3xl md:text-5xl">{t.contactTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
              {t.contactText}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <a href="https://t.me/puzopa" target="_blank" rel="noreferrer">
                  {t.contactButton}
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="https://github.com/RodionR-RR" target="_blank" rel="noreferrer">
                  {t.contactSecondary}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
