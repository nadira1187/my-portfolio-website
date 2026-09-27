'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Globe2,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import nadira from '@/assets/images/nadira.png'
const projects = [
  {
    number: '01',
    title: 'Byte Blitz',
    description: 'A product discovery platform where users can submit, vote on, report, and moderate the latest technology products.',
    details: ['RBAC & authentication', 'Product moderation', 'REST APIs & MongoDB'],
    tags: ['React', 'Express.js', 'MongoDB'],
    href: 'https://byte-blitz-client.web.app',
  },
  {
    number: '02',
    title: 'LibraByte - Team Project',
    description: 'A library platform connecting membership, borrowing workflows, dashboards, notifications, and community features.',
    details: ['Membership & subscriptions', 'Borrowing workflow', 'Dashboard experience'],
    tags: ['Next.js', 'Mongoose', 'TypeScript'],
    href: 'https://libra-byte.vercel.app/',
  },
  {
    number: '03',
    title: 'Stay Zen',
    description: 'A hotel booking experience with availability, authenticated reservations, booking changes, cancellations, and reviews.',
    details: ['Booking management', 'Availability logic', 'Backend APIs'],
    tags: ['React', 'Node.js', 'MongoDB'],
    href: 'https://hapless-approval.surge.sh',
  },
]

const skillGroups = [
  { title: 'Frontend', icon: Code2, items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', icon: BriefcaseBusiness, items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Firebase Auth', 'RBAC'] },
  { title: 'Data & AI', icon: Database, items: ['Python', 'Data Analysis', 'Data Visualization', 'Machine Learning fundamentals'] },
  { title: 'Database & Tools', icon: Code2, items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'MySQL', 'Git', 'GitHub', 'Vercel'] },
]

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#c4472d]">
        {eyebrow}
      </p>

      <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-[#17201d] md:text-5xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-[#66706b]">
        {intro}
      </p>
    </div>
  )
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Research', '#research'], ['Contact', '#contact']]

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f7f3] text-[#17201d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#17201d]/10 bg-[#f7f7f3]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
          <a href="#home" className="font-serif text-xl font-bold tracking-tight">JN<span className="text-[#c4472d]">.</span></a>
          <nav className="hidden items-center gap-6 md:flex">
            {links.map(([label, href]) => <a key={href} href={href} className="text-sm text-[#66706b] transition-colors hover:text-[#c4472d]">{label}</a>)}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-[#17201d] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:block">Let&apos;s talk <ArrowUpRight className="ml-1 inline h-4 w-4" /></a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-md p-2 md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-[#17201d]/10 bg-[#f7f7f3] px-6 py-4 md:hidden">{links.map(([label, href]) => <a onClick={() => setMenuOpen(false)} key={href} href={href} className="block py-2 text-sm text-[#66706b]">{label}</a>)}</nav>}
      </header>

      <main>
        <section id="home" className="relative mx-auto grid min-h-[720px] max-w-6xl items-center gap-16 px-6 pb-20 pt-36 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
          <div className="relative z-10">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#c4472d]"><span className="h-px w-8 bg-[#c4472d]" />Software engineer & builder</p>
            <h1 className="max-w-4xl font-serif text-6xl leading-[.94] tracking-[-0.06em] text-[#17201d] md:text-8xl">Building useful software for <em className="text-[#c4472d]">real people.</em></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#66706b]">I&apos;m Nadira, a software engineer and full-stack developer building web applications with React, Next.js, Node.js, and MongoDB—with a growing focus on AI-powered applications and applied research.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="rounded-full bg-[#c4472d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a93825]">View projects <ArrowUpRight className="ml-1 inline h-4 w-4" /></a><a href="#research" className="rounded-full border border-[#17201d]/20 px-6 py-3 text-sm font-semibold text-[#17201d] transition hover:border-[#c4472d] hover:text-[#c4472d]">View research</a></div>
            <div className="mt-12 flex gap-5 text-[#66706b]"><a href="https://github.com/nadira1187" aria-label="GitHub" className="transition hover:text-[#c4472d]"><GitBranch /></a><a href="https://www.linkedin.com/in/nadira-ohi1187/" aria-label="LinkedIn" className="transition hover:text-[#c4472d]"><Globe2 /></a><a href="mailto:jknadira2011@gmail.com" aria-label="Email" className="transition hover:text-[#c4472d]"><Mail /></a></div>
          </div>
          <div className="relative flex min-h-[390px] items-end justify-center lg:min-h-[500px]"><div className="absolute right-8 top-4 h-64 w-64 rounded-full bg-[#e4b4a1]/50 blur-3xl" /><div className="relative w-full max-w-sm border border-[#17201d]/15 bg-[#ebe9df] p-5 shadow-[18px_18px_0_#d8d3c7] md:p-7"><div className="flex items-center justify-between border-b border-[#17201d]/15 pb-5 text-xs uppercase tracking-[0.2em] text-[#66706b]"><span>Portfolio / 2026</span><span>01</span></div><div className="py-6"><img src={nadira} alt="Nadira wearing a light blue sari" className="aspect-[4/5] w-full object-cover object-top grayscale-[15%]" /></div><div className="flex items-end justify-between border-t border-[#17201d]/15 pt-5"><span className="text-xs text-[#66706b]">Dhaka, Bangladesh</span><span className="font-serif text-3xl text-[#c4472d]">↗</span></div></div></div>
        </section>

        <section id="about" className="border-y border-[#17201d]/10 bg-[#ebe9df] py-24"><div className="mx-auto max-w-6xl px-6 lg:px-8"><SectionHeading eyebrow="02 / About" title="A developer with a research mindset." intro="My path has moved from software engineering to full-stack product development, data science, and applied research. I care about the details that make software clear, useful, and dependable." /><div className="grid gap-6 md:grid-cols-3"><div className="border-t-2 border-[#c4472d] pt-5"><p className="font-serif text-3xl">Build</p><p className="mt-2 text-sm leading-6 text-[#66706b]">Thoughtful full-stack applications that solve real problems.</p></div><div className="border-t-2 border-[#c4472d] pt-5"><p className="font-serif text-3xl">Learn</p><p className="mt-2 text-sm leading-6 text-[#66706b]">Always connecting engineering practice with data and context.</p></div><div className="border-t-2 border-[#c4472d] pt-5"><p className="font-serif text-3xl">Explore</p><p className="mt-2 text-sm leading-6 text-[#66706b]">Curious about AI-powered software and human-centered research.</p></div></div></div></section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-24 lg:px-8"><SectionHeading eyebrow="03 / Technical skills" title="Tools I use to turn ideas into products." intro="A practical toolkit across interfaces, APIs, data, and the engineering foundations that connect them." /><div className="grid gap-px overflow-hidden border border-[#17201d]/15 bg-[#17201d]/15 md:grid-cols-2">{skillGroups.map(({ title, icon: Icon, items }) => <div key={title} className="bg-[#f7f7f3] p-7 md:p-9"><Icon className="mb-8 h-6 w-6 text-[#c4472d]" /><h3 className="font-serif text-2xl">{title}</h3><div className="mt-5 flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-full border border-[#17201d]/15 px-3 py-1.5 text-sm text-[#66706b]">{item}</span>)}</div></div>)}</div></section>

        <section id="experience" className="border-y border-[#17201d]/10 bg-[#17201d] py-24 text-[#f7f7f3]"><div className="mx-auto max-w-6xl px-6 lg:px-8"><SectionHeading eyebrow="04 / Experience" title="Professional experience that sharpened my craft." intro="Working in a product team taught me how to ship with care, communicate clearly, and improve software beyond the first working version." /><div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-16"><p className="text-sm text-[#b7c0ba]">Nov 2024 — Jan 2025<br />Remote</p><div className="border-l border-[#f7f7f3]/20 pl-6 md:pl-10"><div className="flex flex-wrap items-center justify-between gap-3"><h3 className="font-serif text-3xl">Next.js Developer Intern</h3><span className="rounded-full border border-[#f7f7f3]/20 px-3 py-1 text-xs text-[#b7c0ba]">Edupy Academy</span></div><p className="mt-6 max-w-2xl leading-7 text-[#b7c0ba]">Developed interactive learning experiences using Next.js, contributed to project documentation, and worked on performance improvements for a modern education platform.</p><div className="mt-6 flex flex-wrap gap-2">{['Next.js', 'React', 'TypeScript', 'Performance'].map(item => <span key={item} className="text-xs text-[#e4b4a1]"># {item}</span>)}</div></div></div></div></section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-24 lg:px-8"><SectionHeading eyebrow="05 / Selected work" title="A few things I&apos;ve built." intro="Selected projects where product thinking, backend logic, and a thoughtful interface come together." /><div className="space-y-4">{projects.map(project => <article key={project.title} className="group grid gap-6 border-t border-[#17201d]/20 py-8 md:grid-cols-[90px_1fr_180px] md:items-start"><span className="font-mono text-sm text-[#c4472d]">{project.number}</span><div><h3 className="font-serif text-3xl transition group-hover:text-[#c4472d]">{project.title}</h3><p className="mt-3 max-w-2xl leading-7 text-[#66706b]">{project.description}</p><ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#17201d]">{project.details.map(detail => <li key={detail} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[#c4472d]" />{detail}</li>)}</ul><div className="mt-5 flex gap-2">{project.tags.map(tag => <span key={tag} className="text-xs uppercase tracking-wider text-[#8a938d]">{tag}</span>)}</div></div><a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-sm font-semibold text-[#c4472d] md:justify-self-end">View project <ChevronRight className="inline h-4 w-4" /></a></article>)}</div></section>

        <section id="research" className="border-y border-[#17201d]/10 bg-[#ebe9df] py-24"><div className="mx-auto max-w-6xl px-6 lg:px-8"><SectionHeading eyebrow="06 / Research & thesis" title="Studying how AI changes the way we think." intro="Research is where my interests in software, data, and people meet." /><div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]"><article className="border border-[#17201d]/15 bg-[#f7f7f3] p-7 md:p-10"><div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c4472d]"><BookOpen className="h-4 w-4" /> Undergraduate thesis</div><h3 className="mt-7 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">Impact of Generative AI Usage on Cognitive Offloading and Critical Thinking Among STEM Undergraduate Students</h3><p className="mt-6 max-w-2xl leading-7 text-[#66706b]">A quantitative study investigating how generative AI usage relates to cognitive offloading and critical thinking, with cognitive offloading examined as a potential mediating variable.</p><div className="mt-8 grid gap-6 border-t border-[#17201d]/15 pt-6 sm:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-wider text-[#8a938d]">Methodology</p><p className="mt-2 text-sm leading-6">Quantitative survey · PLS-SEM · Mediation analysis</p></div><div><p className="text-xs font-bold uppercase tracking-wider text-[#8a938d]">Context</p><p className="mt-2 text-sm leading-6">Daffodil International University · Bangladesh</p></div></div></article><aside className="bg-[#c4472d] p-7 text-white md:p-10"><p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">07 / Achievement</p><h3 className="mt-8 font-serif text-4xl leading-tight">Mitacs Globalink Research Internship 2026</h3><p className="mt-6 leading-7 text-white/80">Selected for the program and awarded a CAD 6,000 scholarship for a research placement.</p><a href="#contact" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4">Let&apos;s connect <ArrowUpRight className="h-4 w-4" /></a></aside></div></div></section>

        <section id="education" className="mx-auto max-w-6xl px-6 py-24 lg:px-8"><SectionHeading eyebrow="08 / Education" title="Software engineering, grounded in data science." intro="The academic foundation behind my work and research." /><div className="flex flex-col gap-5 border-l-2 border-[#c4472d] pl-6 md:flex-row md:items-start md:justify-between md:pl-8"><div><div className="flex items-center gap-3"><GraduationCap className="h-5 w-5 text-[#c4472d]" /><h3 className="font-serif text-3xl">B.Sc. in Software Engineering</h3></div><p className="mt-3 text-[#66706b]">Daffodil International University · Major: Data Science</p></div><div className="text-sm text-[#66706b] md:text-right">2022 — 2026<br /><span className="font-semibold text-[#17201d]">CGPA: 3.90 / 4.00</span></div></div></section>

        <section id="contact" className="bg-[#c4472d] py-24 text-white"><div className="mx-auto max-w-6xl px-6 lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">09 / Contact</p><div className="mt-6 grid gap-10 md:grid-cols-[1fr_auto] md:items-end"><h2 className="max-w-3xl font-serif text-5xl leading-[.95] tracking-[-0.04em] md:text-7xl">Have a problem worth solving?</h2><a href="mailto:jknadira2011@gmail.com" className="inline-flex items-center gap-2 text-lg font-semibold underline underline-offset-8">Email me <ArrowUpRight /></a></div><div className="mt-16 flex flex-wrap gap-6 border-t border-white/25 pt-6 text-sm text-white/80"><a href="mailto:jknadira2011@gmail.com" className="hover:text-white">jknadira2011@gmail.com</a><a href="https://github.com/nadira1187" className="hover:text-white">GitHub</a><a href="https://www.linkedin.com/in/nadira-ohi1187/" className="hover:text-white">LinkedIn</a><span>Dhaka, Bangladesh</span></div></div></section>
      </main>
      <footer className="bg-[#17201d] py-6 text-center text-xs text-[#b7c0ba]">© 2026 Nadira. Designed and built with intention.</footer>
    </div>
  )
}
