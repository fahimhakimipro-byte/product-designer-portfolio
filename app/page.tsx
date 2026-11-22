'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUp, ArrowUpRight, Menu, X, Palette, Search, PanelsTopLeft, MousePointer2, Layers3, Component, Users } from 'lucide-react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'selected-work', label: 'Selected Work' },
  { id: 'contact', label: 'Contact' },
]

const principles = [
  ['Principle 01', 'Clarity First', 'Simplifying dense information and multi-step flows into clear, focused interfaces.'],
  ['Principle 02', 'Inclusive Usability', 'Designing with readable typography, legible contrast, and accessible interaction patterns.'],
  ['Principle 03', 'Iterative Craft', 'Refining structure and interface details continuously from early sketches to final handoff.'],
]

const skills = [
  { title: 'UI Design', text: 'Crafting balanced visual hierarchy, typography, spacing, and responsive layouts that feel clean, modern, and effortless to navigate.', icon: Palette },
  { title: 'UX Research', text: 'Uncovering user behaviors, pain points, and mental models to ground design decisions in real human needs rather than guesswork.', icon: Search },
  { title: 'Wireframing', text: 'Translating concepts into clear low- and mid-fidelity structures to validate information architecture and user flows rapidly.', icon: PanelsTopLeft },
  { title: 'Prototyping', text: 'Building interactive prototypes with thoughtful transitions and micro-interactions to test usability and communicate product behavior.', icon: MousePointer2 },
  { title: 'Figma', text: 'Structuring scalable component libraries, auto-layout frames, variables, and clean developer-ready specs for seamless collaboration.', icon: Layers3 },
  { title: 'Design Systems', text: 'Establishing reusable tokens, modular UI patterns, and clear documentation that keep multi-screen products consistent as they evolve.', icon: Component },
  { title: 'User-Centered Design', text: 'Keeping real user context, accessibility, and iterative feedback loops at the center of every product decision—from problem framing through validation.', icon: Users },
]

const projects = [
  { number: '01', category: 'Product Design', title: 'End-to-End UX & Interface Case Study', description: 'In-depth documentation of problem discovery, user flows, wireframes, and interactive interface decisions—coming soon.', kind: 'layout' },
  { number: '02', category: 'Design Systems', title: 'Component Architecture & UI System', description: 'A structured breakdown of design tokens, accessible UI components, and scalable layout foundations—coming soon.', kind: 'grid' },
  { number: '03', category: 'Interaction & Prototyping', title: 'Workflow Simplification & Prototyping', description: 'Exploring usability improvements, iterative prototyping, and user-centered task simplification—coming soon.', kind: 'flow' },
]

function ProjectVisual({ kind }: { kind: string }) {
  return <div aria-hidden="true" className="project-visual"><div className="mock-window">
    {kind === 'layout' && <><div className="mock-top"><i /><i /></div><div className="mock-lines"><i /><i /></div><div className="mock-columns"><i /><i /></div></>}
    {kind === 'grid' && <><div className="mock-grid"><i /><i /><i /></div><div className="mock-row"><i /><b /></div></>}
    {kind === 'flow' && <><div className="mock-top"><b /><i /></div><div className="mock-flow"><i /><i /><i /></div><div className="mock-action" /></>}
  </div></div>
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 12)
      let current = ''
      document.querySelectorAll<HTMLElement>('main section[id]').forEach((section) => {
        if (window.scrollY >= section.offsetTop - 140 && window.scrollY < section.offsetTop + section.offsetHeight) current = section.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return <>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#top" className="brand"><span className="brand-dot" aria-hidden="true" />Erwan Haquin</a>
        <nav aria-label="Primary Navigation" className="desktop-nav">{sections.map((item) => <a key={item.id} className={activeSection === item.id ? 'active' : ''} href={`#${item.id}`}>{item.label}</a>)}</nav>
        <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}</button>
      </div>
      <nav id="mobile-menu" aria-label="Mobile Navigation" className={`mobile-nav${menuOpen ? ' is-open' : ''}`}>
        {sections.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
      </nav>
    </header>

    <main id="main-content">
      <section id="top" className="hero">
        <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="container hero-inner"><div className="hero-copy">
          <div className="eyebrow"><span />UI/UX &amp; Product Designer.</div>
          <h1>Designing thoughtful digital experiences.</h1>
          <p>I&apos;m a Product Designer with experience in UI/UX design, user-centered problem solving, and digital product experiences. I enjoy transforming complex ideas into intuitive, accessible, and visually engaging interfaces.</p>
          <a href="#selected-work" className="button-primary hero-cta">Explore My Work <ArrowDown size={16} aria-hidden="true" /></a>
        </div></div>
      </section>

      <section id="about" className="section section-subtle">
        <div className="container split-layout"><div><p className="section-kicker">01 / About</p><h2>Approach to product design</h2></div>
          <div><div className="about-copy"><p className="about-lead">Good product design sits at the intersection of clarity, empathy, and purposeful craft—removing unnecessary friction so people can accomplish what matters with confidence.</p><p>My design process begins with understanding the underlying problem before jumping to visual solutions. By framing user needs, mapping core workflows, and testing assumptions early through wireframes and interactive prototypes, I focus on making complex interactions feel straightforward and predictable.</p><p>I place strong emphasis on usability, visual hierarchy, and accessibility across devices—ensuring typography, contrast, layout structure, and component behavior work together as a cohesive, scalable system.</p></div>
            <div className="principles">{principles.map(([label, title, text]) => <article className="principle-card" key={label}><span>{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container"><div className="section-intro"><p className="section-kicker">02 / Capabilities</p><h2>Core design skills</h2><p>End-to-end product design capabilities spanning early discovery, interaction architecture, and polished interface execution.</p></div>
          <div className="skills-grid">{skills.map(({ title, text, icon: Icon }, index) => <article className={`skill-card skill-${index + 1}`} key={title}><div className="skill-top"><span className="skill-icon"><Icon size={20} strokeWidth={1.75} aria-hidden="true" /></span><span className="skill-number">{String(index + 1).padStart(2, '0')}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section id="selected-work" className="section section-subtle">
        <div className="container"><div className="section-intro"><p className="section-kicker">03 / Selected Work</p><h2>Case studies in progress</h2><p>Detailed process breakdowns covering research, wireframing, interaction design, and system thinking are currently being documented.</p></div>
          <div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.number}><div><div className="project-preview"><div className="preview-meta"><span>{project.number}</span><span className="coming-soon"><i />Coming Soon</span></div><ProjectVisual kind={project.kind} /></div><div className="project-content"><div className="project-category"><span>Case Study {project.number}</span><span aria-hidden="true">•</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.description}</p></div></div><div className="project-footer">Documentation in progress</div></article>)}</div>
        </div>
      </section>

      <section id="contact" className="section contact-section"><div className="container"><div className="contact-panel"><div className="contact-copy"><p className="section-kicker">04 / Contact</p><h2>Let’s connect.</h2><p>Interested in discussing product design, UI/UX opportunities, or upcoming work? Feel free to reach out and connect on LinkedIn.</p><a className="button-primary contact-button" href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"> <svg className="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg><span>Connect on LinkedIn</span><ArrowUpRight className="external-icon" size={16} aria-hidden="true" /></a></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><p>© 2026 Erwan Haquin. All rights reserved.</p><a href="#top">Back to top <ArrowUp size={14} aria-hidden="true" /></a></div></footer>
  </>
}
