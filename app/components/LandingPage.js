'use client'

import ScrollReveal from './ScrollReveal'
import Particles from './Particles'
import Logo from './Logo'

export default function LandingPage({ lang, data }) {
  const S = data

  return (
    <>
      <Particles />

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <Logo size={36} />
            <div className="nav-brand">K&amp;B<span>LLC</span></div>
          </div>
          <div className="nav-right">
            <a href="/jp" className={`lang-btn ${lang === 'jp' ? 'active' : ''}`}>JP</a>
            <a href="/en" className={`lang-btn ${lang === 'en' ? 'active' : ''}`}>EN</a>
            <a href="/kr" className={`lang-btn ${lang === 'kr' ? 'active' : ''}`}>KR</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-art">
          <div className="torii">⛩️</div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            {S.hero.title[0]}<br />{S.hero.title[1]}
          </h1>
          <p className="hero-sub">{S.hero.sub}</p>
          <a href={`mailto:${S.contact.email}`} className="hero-cta">{S.hero.cta}</a>
        </div>
        <div className="scroll-ind">
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>
      </section>

      <div className="divider"><div className="divider-line" /></div>

      {/* About */}
      <section className="section">
        <div className="section-inner">
          <ScrollReveal><p className="section-label">{S.about.label}</p></ScrollReveal>
          <ScrollReveal delay={0.08}><h2 className="section-title">{S.about.title}</h2></ScrollReveal>
          <ScrollReveal delay={0.16}><p className="section-desc">{S.about.desc}</p></ScrollReveal>
          <div className="highlights">
            {S.about.highlights.map((h, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.1}>
                <div>
                  <div className="highlight-num">{h.num}</div>
                  <div className="highlight-label">{h.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"><div className="divider-line" /></div>

      {/* Services */}
      <section className="section">
        <div className="section-inner">
          <ScrollReveal><p className="section-label">{S.services.label}</p></ScrollReveal>
          <ScrollReveal delay={0.08}><h2 className="section-title">{S.services.title}</h2></ScrollReveal>
          <div className="services-grid">
            {S.services.items.map((item, i) => (
              <ScrollReveal key={i} delay={0.08 + i * 0.08}>
                <div className="svc-card">
                  <span className="svc-icon">{item.icon}</span>
                  <h3 className="svc-title">{item.title}</h3>
                  <p className="svc-desc">{item.desc}</p>
                  <div className="svc-tags">
                    {item.tags.map((tag, j) => (
                      <span key={j} className="svc-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"><div className="divider-line" /></div>

      {/* Process */}
      <section className="section">
        <div className="section-inner">
          <ScrollReveal><p className="section-label">{S.process.label}</p></ScrollReveal>
          <ScrollReveal delay={0.08}><h2 className="section-title">{S.process.title}</h2></ScrollReveal>
          <div className="process-grid">
            {S.process.steps.map((step, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.12} className="process-step">
                <div className="step-num">{step.num}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"><div className="divider-line" /></div>

      {/* Contact */}
      <section className="section contact-section">
        <div className="section-inner">
          <ScrollReveal><p className="section-label">{S.contact.label}</p></ScrollReveal>
          <ScrollReveal delay={0.08}><h2 className="section-title">{S.contact.title}</h2></ScrollReveal>
          <ScrollReveal delay={0.16}><p className="contact-sub">{S.contact.sub}</p></ScrollReveal>
          <ScrollReveal delay={0.24}>
            <a href={`mailto:${S.contact.email}`} className="contact-cta">{S.contact.cta}</a>
          </ScrollReveal>
          <ScrollReveal delay={0.32}>
            <div className="contact-info">
              {S.contact.info.map((item, i) => (
                <div key={i}>
                  <div className="info-label">{item.label}</div>
                  <div className="info-value">{item.value}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">{S.footer}</footer>
    </>
  )
}
