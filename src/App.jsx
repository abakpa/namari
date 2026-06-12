import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBarChart2,
  FiBookOpen,
  FiBriefcase,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiFacebook,
  FiGlobe,
  FiInstagram,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMessageSquare,
  FiPhone,
  FiPlay,
  FiSettings,
  FiShield,
  FiShoppingBag,
  FiStar,
  FiTrendingUp,
  FiTwitter,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Training", "#training"],
  ["Solutions", "#solutions"],
  ["Portfolio", "#portfolio"],
  ["Contact", "#contact"],
];

const services = [
  {
    icon: FiCode,
    title: "Software Development",
    text: "Purpose-built web, mobile, SaaS, API, and enterprise software that scales with your ambition.",
    tags: ["Web & mobile", "SaaS products", "APIs"],
    color: "blue",
  },
  {
    icon: FiSettings,
    title: "Business Digitalization",
    text: "Transform manual operations into connected, measurable workflows that save time and reduce cost.",
    tags: ["Automation", "ERP & CRM", "Digital strategy"],
    color: "cyan",
  },
  {
    icon: FiBookOpen,
    title: "Technology Academy",
    text: "Practical, mentor-led programs that turn motivated learners into confident technology professionals.",
    tags: ["Live cohorts", "Career support", "Certification"],
    color: "gold",
  },
  {
    icon: FiCloud,
    title: "Digital & Cloud Services",
    text: "Modern infrastructure, intelligent data, brand experiences, and advisory for digital-first growth.",
    tags: ["Cloud", "Business intelligence", "IT consulting"],
    color: "violet",
  },
];

const courses = [
  { icon: FiCode, title: "Fullstack Engineering", meta: "24 weeks · Live cohort", level: "Career path" },
  { icon: FiCpu, title: "AI & Data Analysis", meta: "16 weeks · Project based", level: "High demand" },
  { icon: FiLayers, title: "Product & UI/UX Design", meta: "14 weeks · Mentor led", level: "Creative tech" },
  { icon: FiCloud, title: "Cloud & DevOps", meta: "18 weeks · Lab intensive", level: "Professional" },
];

const solutions = [
  ["Business Management Systems", "One connected view of finance, inventory, people, sales, and operations.", FiBarChart2],
  ["Financial Solutions", "Secure platforms for payments, lending, microfinance, and real-time reporting.", FiShield],
  ["Customer Portals", "Self-service experiences that deepen relationships and lower support demand.", FiUsers],
  ["Commerce Platforms", "Conversion-focused storefronts connected to inventory, logistics, and payments.", FiShoppingBag],
  ["Mobile Applications", "Polished iOS and Android products designed for everyday usefulness.", FiGlobe],
  ["Enterprise Applications", "Resilient custom systems for complex workflows and critical operations.", FiDatabase],
];

const projects = [
  {
    type: "Financial Technology",
    title: "Nexus Microfinance Suite",
    text: "A unified lending and operations platform improving portfolio visibility across 12 branches.",
    stat: "42%",
    label: "faster processing",
    gradient: "from-[#0a2472] to-[#2563eb]",
  },
  {
    type: "Retail Operations",
    title: "Orbit Commerce OS",
    text: "Inventory, sales, and customer intelligence connected in one elegant business workspace.",
    stat: "3.2×",
    label: "reporting speed",
    gradient: "from-[#073c4c] to-[#06b6d4]",
  },
  {
    type: "Learning Experience",
    title: "Elevate Academy",
    text: "A cohort learning platform that supports live classes, projects, assessments, and mentoring.",
    stat: "91%",
    label: "completion rate",
    gradient: "from-[#312e81] to-[#7c3aed]",
  },
];

const testimonials = [
  {
    quote:
      "Namari Technologies understood the business problem before writing a line of code. The result is a platform our team adopted quickly and our leadership can finally trust.",
    name: "Amaka Okafor",
    role: "COO, Meridian Finance",
    initials: "AO",
  },
  {
    quote:
      "The academy gave me more than technical knowledge. The projects, feedback, and career support helped me move into my first product role with confidence.",
    name: "David Mensah",
    role: "Product Designer, Alum",
    initials: "DM",
  },
  {
    quote:
      "They redesigned a fragmented process into one simple operating system. We now make decisions with live data instead of waiting for end-of-month reports.",
    name: "Tomi Adeyemi",
    role: "Founder, Northstar Retail",
    initials: "TA",
  },
];

const industries = ["FINANCE", "EDUCATION", "RETAIL", "HEALTHCARE", "LOGISTICS", "PUBLIC SECTOR"];

function Logo({ light = false, compact = false }) {
  return (
    <a
      href="#home"
      className={`group inline-flex items-center ${light && !compact ? "rounded-xl bg-white px-3 py-2" : ""}`}
      aria-label="Namari Technologies home"
    >
      <img
        src={compact ? "/images/namari-icon.png" : "/images/namari-logo.png"}
        alt=""
        className={compact ? "h-10 w-10 object-contain" : "h-11 w-auto object-contain"}
      />
    </a>
  );
}

function Button({ href, children, variant = "primary", className = "", onClick }) {
  const styles = {
    primary: "bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-blue-950/15",
    light: "bg-white text-brand-700 hover:bg-brand-50 shadow-xl shadow-blue-950/20",
    outline: "border border-slate-200 bg-white text-ink hover:border-brand-500 hover:text-brand-600",
    ghost: "border border-white/25 bg-white/5 text-white hover:bg-white/10",
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function SectionHeading({ eyebrow, title, text, center = false, light = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}
    >
      <div className={`mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-cyan-400" : "text-brand-600"}`}>
        <span className={`h-px w-7 ${light ? "bg-cyan-400" : "bg-brand-600"}`} />
        {eyebrow}
      </div>
      <h2 className={`font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[3.25rem] ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 text-base leading-7 sm:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>{text}</p>}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl" : "bg-white"}`}>
      <nav className="container-shell flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-600">
              {label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button href="#contact">Get Started</Button>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-xl text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="container-shell flex flex-col gap-1 py-5">
              {navLinks.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600">
                  {label}
                </a>
              ))}
              <Button href="#contact" className="mt-3" onClick={() => setOpen(false)}>Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DashboardVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.35, duration: 0.8 }}
      className="relative mx-auto w-full max-w-[590px]"
    >
      <div className="absolute -inset-8 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="glass relative overflow-hidden rounded-[28px] p-2 shadow-2xl shadow-blue-950/50">
        <div className="overflow-hidden rounded-[22px] bg-[#f8fafc]">
          <div className="flex h-11 items-center gap-2 border-b border-slate-200 bg-white px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <div className="ml-3 h-5 w-36 rounded-md bg-slate-100" />
          </div>
          <div className="flex min-h-[350px]">
            <div className="hidden w-16 flex-col items-center gap-5 bg-brand-700 py-5 sm:flex">
              <Logo compact />
              {[FiBarChart2, FiUsers, FiDatabase, FiSettings].map((Icon, index) => (
                <span key={index} className={`grid h-8 w-8 place-items-center rounded-lg ${index === 0 ? "bg-cyan-500 text-white" : "text-blue-200"}`}>
                  <Icon size={15} />
                </span>
              ))}
            </div>
            <div className="flex-1 p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Overview</p>
                  <p className="mt-1 font-display text-lg font-extrabold text-ink">Business pulse</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600">● Live</span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {[["Revenue", "₦24.8m", "+18%"], ["Customers", "2,408", "+12%"], ["Efficiency", "94.2%", "+8%"]].map(([label, value, stat]) => (
                  <div key={label} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    <p className="text-[8px] font-semibold text-slate-400 sm:text-[10px]">{label}</p>
                    <p className="mt-1 text-xs font-extrabold text-ink sm:text-base">{value}</p>
                    <p className="mt-1 text-[8px] font-bold text-emerald-500 sm:text-[9px]">{stat}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-[1.6fr_1fr]">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold text-slate-600">Performance</p>
                    <p className="text-[8px] text-slate-400">Jan — Jun</p>
                  </div>
                  <svg viewBox="0 0 280 110" className="mt-3 h-28 w-full" aria-label="Upward performance chart">
                    <defs>
                      <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor="#06b6d4" stopOpacity=".35" />
                        <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 92 C30 82 40 86 65 66 S105 75 128 50 S172 63 194 32 S230 43 280 10 V110 H0Z" fill="url(#chart-fill)" />
                    <path d="M0 92 C30 82 40 86 65 66 S105 75 128 50 S172 63 194 32 S230 43 280 10" fill="none" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="rounded-xl bg-brand-700 p-4 text-white">
                  <p className="text-[10px] font-bold text-blue-200">Automation</p>
                  <div className="mx-auto mt-4 grid h-20 w-20 place-items-center rounded-full border-[7px] border-cyan-400 border-l-white/15 text-lg font-extrabold">78%</div>
                  <p className="mt-3 text-center text-[9px] text-blue-200">32 hours saved weekly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="glass absolute -left-3 top-16 hidden rounded-2xl p-3 shadow-xl sm:flex">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400 text-white"><FiTrendingUp /></span>
        <div className="ml-3">
          <p className="text-[9px] text-blue-100">Growth</p>
          <p className="text-sm font-extrabold text-white">+24.5%</p>
        </div>
      </motion.div>
      <motion.div animate={{ y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 4.8 }} className="glass absolute -bottom-6 right-4 hidden items-center rounded-2xl p-3 shadow-xl sm:flex">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-500 text-white"><FiZap /></span>
        <div className="ml-3 pr-3">
          <p className="text-[9px] text-blue-100">Workflows</p>
          <p className="text-sm font-extrabold text-white">12 automated</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-700 pb-20 pt-32 text-white lg:min-h-[820px] lg:pb-24 lg:pt-44">
      <div className="mesh-grid absolute inset-0" />
      <div className="noise" />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute -right-40 top-16 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="container-shell relative grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold text-cyan-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            Technology built for real-world growth
          </motion.div>
          <motion.h1 variants={fadeUp} className="max-w-3xl font-display text-[2.65rem] font-extrabold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-[4.35rem]">
            Building smart digital solutions for <span className="text-gradient">businesses</span> and future tech leaders.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
            We help ambitious organizations automate operations, build powerful software, and equip people with industry-ready technology skills.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="light">Start a Project</Button>
            <Button href="#services" variant="ghost">Explore Services</Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-7 text-xs font-semibold text-blue-200">
            {["Business-first thinking", "Scalable engineering", "Dedicated support"].map((item) => (
              <span key={item} className="flex items-center gap-2"><FiCheck className="text-cyan-400" />{item}</span>
            ))}
          </motion.div>
        </motion.div>
        <DashboardVisual />
      </div>
    </section>
  );
}

function Trusted() {
  const allIndustries = [...industries, ...industries];
  return (
    <section className="overflow-hidden border-b border-slate-100 bg-white py-8">
      <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Built for teams across essential industries</p>
      <div className="relative mx-auto max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee flex w-max items-center">
          {allIndustries.map((industry, index) => (
            <div key={`${industry}-${index}`} className="flex w-48 shrink-0 items-center justify-center gap-2 font-display text-xs font-extrabold tracking-wider text-slate-400 sm:w-52">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-slate-100 text-brand-600"><FiBriefcase size={13} /></span>
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-shell grid items-center gap-16 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-cyan-100 blur-2xl" />
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="overflow-hidden rounded-[32px] bg-brand-700 shadow-soft">
              <img
                src="/images/about-team.jpg"
                alt="Namari Technologies team members collaborating around a laptop in a modern office"
                className="h-[460px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-900 via-brand-900/75 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">Our north star</p>
                <p className="mt-2 max-w-sm font-display text-xl font-extrabold">Make advanced technology useful, accessible, and transformational.</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-3 flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft sm:right-6">
              <div className="px-5 py-4">
                <p className="font-display text-2xl font-extrabold text-ink">360°</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Partnership</p>
              </div>
              <div className="border-l border-slate-200 px-5 py-4">
                <p className="font-display text-2xl font-extrabold text-brand-600">300+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Learners</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <SectionHeading
            eyebrow="About Namari"
            title="Technology should move your business forward."
            text="Namari Technologies brings strategy, engineering, and talent development together to solve meaningful problems. We partner with organizations that want to modernize with confidence and people who want to build valuable careers."
          />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-9 grid gap-5 sm:grid-cols-2">
            {[
              ["Our Mission", "Build practical digital solutions and develop capable technology talent."],
              ["Our Vision", "A future where every bold idea can become scalable digital impact."],
              ["How We Work", "Curious, transparent, collaborative, and relentlessly outcome focused."],
              ["What We Value", "Excellence, integrity, ownership, learning, and human-centered innovation."],
            ].map(([title, text]) => (
              <motion.div variants={fadeUp} key={title} className="border-l-2 border-cyan-500 pl-4">
                <h3 className="font-display font-extrabold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const colorMap = {
    blue: "bg-blue-50 text-brand-600",
    cyan: "bg-cyan-50 text-cyan-600",
    gold: "bg-amber-50 text-amber-600",
    violet: "bg-violet-50 text-violet-600",
  };
  return (
    <section id="services" className="section-pad bg-slate-50">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="What We Do" title="One partner for your digital journey." text="From product strategy to implementation and capability building, we connect every moving part." />
          <Button href="#contact" variant="outline">Discuss Your Needs</Button>
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mt-12 overflow-hidden rounded-[28px]">
          <img
            src="/images/software-team.jpg"
            alt="Dark-skinned Namari Technologies software engineers reviewing an application together"
            className="h-[300px] w-full object-cover sm:h-[390px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/25 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-end p-7 text-white sm:p-10">
            <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-cyan-500 text-xl"><FiCode /></span>
            <p className="font-display text-2xl font-extrabold sm:text-3xl">Engineering ideas into dependable products.</p>
            <p className="mt-3 hidden text-sm leading-6 text-blue-100 sm:block">Collaborative teams, thoughtful architecture, and software designed for the people who use it.</p>
          </div>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mt-6 grid gap-5 md:grid-cols-2">
          {services.map(({ icon: Icon, title, text, tags, color }) => (
            <motion.article variants={fadeUp} key={title} className="group rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft sm:p-9">
              <div className="flex items-start justify-between">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl ${colorMap[color]}`}><Icon /></span>
                <FiArrowUpRight className="text-xl text-slate-300 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-600" />
              </div>
              <h3 className="mt-7 font-display text-xl font-extrabold text-ink sm:text-2xl">{title}</h3>
              <p className="mt-3 max-w-lg leading-7 text-slate-500">{text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-500">{tag}</span>)}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Academy() {
  return (
    <section id="training" className="section-pad relative overflow-hidden bg-brand-700">
      <div className="mesh-grid absolute inset-0 opacity-70" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-[100px]" />
      <div className="container-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading light eyebrow="Namari Academy" title="Learn the skills. Build the proof. Launch your future." text="Structured learning paths, real projects, expert mentors, and career support designed for the technology industry of today." />
            <Button href="#contact" variant="light" className="mt-8">Explore the Academy</Button>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[28px] border border-white/15">
            <img
              src="/images/academy-training.jpg"
              alt="Dark-skinned technology instructor mentoring adult learners during a practical coding class"
              className="h-[320px] w-full object-cover sm:h-[390px]"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900/90 to-transparent p-6 pt-20">
              <p className="flex items-center gap-2 text-sm font-bold text-white"><FiUsers className="text-cyan-400" /> Learn with mentors. Build with peers.</p>
            </div>
          </motion.div>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {courses.map(({ icon: Icon, title, meta, level }, index) => (
            <motion.article variants={fadeUp} key={title} className="glass group rounded-[24px] p-5 transition-colors hover:bg-white/[0.13]">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-400/10 p-5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-xl text-brand-600 shadow-xl"><Icon /></span>
                <span className="absolute right-4 top-4 text-5xl font-extrabold text-white/[0.06]">0{index + 1}</span>
                <div className="mt-10 flex items-center gap-2 text-xs font-bold text-cyan-300"><FiPlay /> Project-led</div>
              </div>
              <div className="px-1 pb-2 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">{level}</span>
                <h3 className="mt-2 font-display text-lg font-extrabold text-white">{title}</h3>
                <p className="mt-2 text-xs text-blue-200">{meta}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {["Industry certifications", "Dedicated mentors", "Portfolio projects", "Career placement support"].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm font-semibold text-blue-100"><span className="grid h-7 w-7 place-items-center rounded-full bg-cyan-400/15 text-cyan-400"><FiCheck /></span>{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Transformation() {
  return (
    <section className="section-pad bg-white">
      <div className="container-shell grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Digital Transformation" title="Turn operational friction into a competitive advantage." text="We map what slows your teams down, redesign the process, and connect the right systems to create measurable momentum." />
          <div className="mt-9 space-y-4">
            {[
              ["Discover", "Understand your workflows, constraints, and highest-value opportunities."],
              ["Design", "Create a practical transformation roadmap tied to business outcomes."],
              ["Deliver", "Implement, integrate, train, measure, and continuously improve."],
            ].map(([title, text], index) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-50 text-xs font-extrabold text-brand-600">0{index + 1}</span>
                <div><h3 className="font-display font-extrabold text-ink">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{text}</p></div>
              </div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[32px] bg-slate-50 p-4 sm:p-5">
          <div className="relative overflow-hidden rounded-[24px]">
            <img
              src="/images/digital-transformation.jpg"
              alt="Dark-skinned business leaders mapping a digital transformation workflow with a technology consultant"
              className="h-[280px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900/90 to-transparent p-5 pt-16">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Strategy before software</p>
              <p className="mt-1 font-display text-lg font-extrabold text-white">We redesign the process with your people.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["35%", "Lower operating costs", FiTrendingUp],
              ["2.4×", "Faster core workflows", FiZap],
              ["99.9%", "Reliable system uptime", FiShield],
              ["24/7", "Access to live insights", FiBarChart2],
            ].map(([stat, label, Icon], index) => (
              <div key={label} className={`mt-4 rounded-2xl p-5 ${index === 0 ? "bg-brand-700 text-white" : "border border-slate-200 bg-white text-ink"}`}>
                <Icon className={`text-2xl ${index === 0 ? "text-cyan-400" : "text-brand-600"}`} />
                <div className="mt-6">
                  <p className="font-display text-3xl font-extrabold">{stat}</p>
                  <p className={`mt-2 text-sm ${index === 0 ? "text-blue-200" : "text-slate-500"}`}>{label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[10px] text-slate-400">Illustrative outcomes vary by process and implementation scope.</p>
        </motion.div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="section-pad bg-slate-50">
      <div className="container-shell">
        <SectionHeading center eyebrow="Solutions" title="Systems that fit the way your business works." text="Flexible solutions designed around your operating model, connected to the tools you already trust." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(([title, text, Icon]) => (
            <motion.article variants={fadeUp} key={title} className="group bg-white p-7 transition-colors hover:bg-brand-700 sm:p-9">
              <Icon className="text-2xl text-brand-600 transition-colors group-hover:text-cyan-400" />
              <h3 className="mt-8 font-display text-lg font-extrabold text-ink transition-colors group-hover:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500 transition-colors group-hover:text-blue-200">{text}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-brand-600 transition-colors group-hover:text-cyan-300">Learn more <FiArrowRight /></a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    ["Senior expertise", "Multidisciplinary people who connect technology decisions to business reality."],
    ["Practical innovation", "Modern thinking without chasing novelty that does not create value."],
    ["Transparent delivery", "Clear milestones, honest communication, and no mystery around progress."],
    ["Long-term support", "A committed partner beyond launch, from adoption to optimization."],
  ];
  return (
    <section className="section-pad bg-white">
      <div className="container-shell">
        <div className="rounded-[36px] bg-brand-700 px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Why Namari</p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">Big-company standards. Human partnership.</h2>
              <p className="mt-5 leading-7 text-blue-200">We pair the rigor your project deserves with the accessibility and care that makes collaboration work.</p>
              <Button href="#contact" variant="light" className="mt-8">Meet Your Technology Partner</Button>
            </div>
            <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
              {items.map(([title, text], index) => (
                <div key={title}>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-cyan-400/15 text-xs font-extrabold text-cyan-400">0{index + 1}</span>
                  <h3 className="mt-4 font-display text-lg font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-blue-200">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section-pad bg-slate-50">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Selected Work" title="Digital products that create momentum." text="A glimpse at the systems, experiences, and learning platforms our teams are built to deliver." />
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-500">View capabilities <FiArrowUpRight /></a>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article variants={fadeUp} key={project.title} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.gradient} p-6`}>
                <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border-[28px] border-white/10" />
                <div className="absolute bottom-5 left-6 right-6 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-300" /><span className="h-2 w-2 rounded-full bg-amber-300" /><span className="h-2 w-2 rounded-full bg-emerald-300" />
                  </div>
                  <div className="mt-5 grid grid-cols-[1fr_2fr] gap-3">
                    <div className="h-24 rounded-lg bg-white/10" />
                    <div>
                      <div className="h-5 rounded bg-white/15" />
                      <div className="mt-3 h-16 rounded bg-white/10 p-2">
                        <div className="h-full rounded bg-gradient-to-r from-cyan-300/50 to-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">{project.type}</p>
                <h3 className="mt-3 font-display text-xl font-extrabold text-ink">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{project.text}</p>
                <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-5">
                  <div><span className="font-display text-2xl font-extrabold text-ink">{project.stat}</span><p className="text-[10px] text-slate-400">{project.label}</p></div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white"><FiArrowUpRight /></span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const previous = () => setActive((active - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((active + 1) % testimonials.length);
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-shell">
        <SectionHeading center eyebrow="Client Stories" title="Trusted where results matter." />
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative min-h-[300px] rounded-[32px] bg-slate-50 p-7 text-center sm:p-12">
            <FiMessageSquare className="mx-auto text-4xl text-cyan-500" />
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div className="mt-6 flex justify-center gap-1 text-amber-400">{[...Array(5)].map((_, index) => <FiStar key={index} fill="currentColor" />)}</div>
                <blockquote className="mx-auto mt-6 max-w-3xl font-display text-xl font-semibold leading-relaxed tracking-[-0.02em] text-ink sm:text-2xl">“{testimonials[active].quote}”</blockquote>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-700 text-xs font-bold text-white">{testimonials[active].initials}</span>
                  <div className="text-left"><p className="text-sm font-bold text-ink">{testimonials[active].name}</p><p className="text-xs text-slate-500">{testimonials[active].role}</p></div>
                </div>
              </motion.div>
            </AnimatePresence>
            <button onClick={previous} aria-label="Previous testimonial" className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-ink shadow-sm hover:text-brand-600 sm:left-6"><FiChevronLeft /></button>
            <button onClick={next} aria-label="Next testimonial" className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-ink shadow-sm hover:text-brand-600 sm:right-6"><FiChevronRight /></button>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => <button key={index} onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} className={`h-2 rounded-full transition-all ${index === active ? "w-7 bg-brand-600" : "w-2 bg-slate-300"}`} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };
  return (
    <section id="contact" className="section-pad bg-brand-700 text-white">
      <div className="container-shell">
        <div className="grid overflow-hidden rounded-[36px] bg-white lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#06164e] to-[#0a2472] p-8 sm:p-12">
            <div className="mesh-grid absolute inset-0 opacity-60" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Let’s build</p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">Ready to move your idea forward?</h2>
              <p className="mt-5 leading-7 text-blue-200">Tell us what you are solving. We will respond with the right questions and a practical next step.</p>
              <div className="mt-10 space-y-6">
                <a href="mailto:hello@namaritechnologies.com" className="flex items-center gap-4 text-sm font-semibold text-white hover:text-cyan-300"><span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-cyan-400"><FiMail /></span>hello@namaritechnologies.com</a>
                <a href="tel:+234800628324" className="flex items-center gap-4 text-sm font-semibold text-white hover:text-cyan-300"><span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-cyan-400"><FiPhone /></span>+234 (0) 800 NAMARI</a>
                <div className="flex items-center gap-4 text-sm font-semibold text-white"><span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-cyan-400"><FiMapPin /></span>Abuja, Nigeria · Serving globally</div>
              </div>
              <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">{["AO", "KT", "NM"].map((item) => <span key={item} className="grid h-8 w-8 place-items-center rounded-full border-2 border-brand-700 bg-cyan-500 text-[8px] font-bold">{item}</span>)}</div>
                  <p className="text-xs leading-5 text-blue-200"><strong className="text-white">Typically replies within one business day.</strong><br />Your goals stay confidential.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 text-ink sm:p-12">
            {sent ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-2xl text-emerald-600"><FiCheck /></span>
                <h3 className="mt-6 font-display text-2xl font-extrabold">Message received.</h3>
                <p className="mt-3 max-w-sm text-slate-500">Thank you for reaching out. The Namari Technologies team will review your needs and follow up shortly.</p>
                <button onClick={() => setSent(false)} className="mt-7 text-sm font-bold text-brand-600 hover:text-brand-500">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-bold text-slate-700">Your name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:bg-white" placeholder="Jane Doe" /></label>
                  <label className="text-sm font-bold text-slate-700">Work email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:bg-white" placeholder="jane@company.com" /></label>
                </div>
                <label className="mt-5 block text-sm font-bold text-slate-700">I’m interested in<select name="interest" className="mt-2 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:bg-white"><option>Software development</option><option>Business digitalization</option><option>Technology training</option><option>Digital consulting</option><option>Something else</option></select></label>
                <label className="mt-5 block text-sm font-bold text-slate-700">Tell us about your goal<textarea required name="message" rows="5" className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-brand-500 focus:bg-white" placeholder="What would you like to build, improve, or learn?" /></label>
                <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-500 sm:w-auto">Send message <FiArrowRight /></button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050d2b] pb-8 pt-16 text-white">
      <div className="container-shell">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.8fr_1.1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Building smart digital solutions for businesses and future tech leaders.</p>
            <div className="mt-6 flex gap-3">
              {[FiLinkedin, FiTwitter, FiInstagram, FiFacebook].map((Icon, index) => <a key={index} href="#home" aria-label="Social media" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"><Icon size={14} /></a>)}
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-extrabold">Company</h3>
            <div className="mt-5 space-y-3">{["About", "Services", "Portfolio", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="block text-sm text-slate-400 hover:text-white">{item}</a>)}</div>
          </div>
          <div>
            <h3 className="font-display text-sm font-extrabold">Explore</h3>
            <div className="mt-5 space-y-3">{["Software", "Digitalization", "Academy", "Cloud services"].map((item) => <a key={item} href="#services" className="block text-sm text-slate-400 hover:text-white">{item}</a>)}</div>
          </div>
          <div>
            <h3 className="font-display text-sm font-extrabold">Ideas worth building</h3>
            <p className="mt-5 text-sm leading-6 text-slate-400">Get practical technology and business insights in your inbox.</p>
            <form className="mt-5 flex" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input id="newsletter-email" type="email" required placeholder="Email address" className="min-w-0 flex-1 rounded-l-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500" />
              <button aria-label="Subscribe" className="grid w-12 place-items-center rounded-r-xl bg-cyan-500 text-white hover:bg-cyan-400"><FiArrowRight /></button>
            </form>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Namari Technologies. All rights reserved.</p>
          <div className="flex gap-5"><a href="#home" className="hover:text-white">Privacy</a><a href="#home" className="hover:text-white">Terms</a><a href="#home" className="hover:text-white">Accessibility</a></div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="sr-only z-[100] bg-white p-3 text-brand-700 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Trusted />
        <About />
        <Services />
        <Academy />
        <Transformation />
        <Solutions />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
