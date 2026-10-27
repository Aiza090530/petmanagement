import { useState } from 'react'
import './App.css'

const features = [
  {
    icon: '⌁',
    title: 'Every detail, in one place',
    text: 'Keep profiles, medical history, and important notes organized and easy to find.',
  },
  {
    icon: '♡',
    title: 'Health made simple',
    text: 'Stay ahead of appointments, vaccinations, medication, and everyday routines.',
  },
  {
    icon: '⌂',
    title: 'Built for your whole team',
    text: 'Give everyone a clear view of care so every pet gets their best day.',
  },
]

function PawMark() {
  return (
    <span className="paw-mark" aria-hidden="true">
      <span className="paw-toe toe-one" />
      <span className="paw-toe toe-two" />
      <span className="paw-toe toe-three" />
      <span className="paw-pad" />
    </span>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#" aria-label="Maypet home">
          <PawMark />
          <span>maypet</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
          <a className="nav-login" href="#login" onClick={() => setMenuOpen(false)}>Log in</a>
          <a className="button button-small" href="#get-started" onClick={() => setMenuOpen(false)}>Get started <span>↗</span></a>
        </div>
      </nav>

      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Pet care, beautifully organized</p>
          <h1>More love.<br /><em>Less paperwork.</em></h1>
          <p className="hero-description">
            Maypet helps you keep every pet happy, healthy, and cared for — all from one calm, simple place.
          </p>
          <div className="hero-actions">
            <a className="button" href="#get-started">Start caring better <span>↗</span></a>
            <a className="play-link" href="#how-it-works"><span className="play-icon">▶</span> See how it works</a>
          </div>
          <div className="social-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>🐶</span><span>🐱</span><span>🐰</span><span>🐾</span>
            </div>
            <p><strong>Loved by 2,000+</strong><br />pet parents and care teams</p>
          </div>
        </div>

        <div className="hero-art" aria-label="Maypet pet dashboard preview">
          <div className="sun-shape" />
          <div className="floating-note note-top"><span className="note-check">✓</span><span><strong>Vet visit</strong><small>Tomorrow, 10:30 AM</small></span></div>
          <div className="dashboard-card">
            <div className="dashboard-head"><span className="mini-brand"><PawMark /> maypet</span><span className="bell">♧</span></div>
            <div className="welcome-row"><div><small>Good morning, Jamie</small><h2>How are your pets?</h2></div><span className="round-avatar">👩🏻</span></div>
            <div className="pet-card">
              <div className="pet-photo">🐶<span className="photo-sparkle">✦</span></div>
              <div className="pet-info"><span className="pet-label">YOUR PET</span><h3>Waffles <span>♀</span></h3><p>Golden retriever · 4 years</p><div className="health-bar"><span /> Health is great</div></div>
              <span className="more">•••</span>
            </div>
            <div className="stats-row"><div><span className="stat-icon mint">♡</span><strong>12</strong><small>Health records</small></div><div><span className="stat-icon peach">⌁</span><strong>03</strong><small>Upcoming tasks</small></div></div>
            <div className="activity"><div className="activity-title"><strong>Recent activity</strong><a href="#activity">View all</a></div><p><span className="activity-dot" /> Waffles&apos; flea treatment <small>2 days ago</small></p></div>
          </div>
          <div className="floating-note note-bottom"><span className="heart">♥</span><span><strong>Waffles is thriving!</strong><small>Keep up the great care</small></span></div>
        </div>
      </section>

      <section className="trust-bar container"><span>MADE FOR PEOPLE WHO</span><strong>♥ love them deeply</strong><span>ONE LITTLE MOMENT AT A TIME</span></section>

      <section className="features container" id="features">
        <div className="section-heading"><p className="eyebrow">Everything they need</p><h2>Good care starts with<br /><em>a little more clarity.</em></h2></div>
        <div className="feature-grid">{features.map((feature) => <article className="feature" key={feature.title}><span className="feature-icon">{feature.icon}</span><h3>{feature.title}</h3><p>{feature.text}</p><a href="#get-started">Learn more <span>↗</span></a></article>)}</div>
      </section>

      <footer className="footer container" id="about"><a className="brand" href="#"><PawMark /><span>maypet</span></a><p>Care, made wonderfully simple.</p><span>© 2025 Maypet</span></footer>
    </main>
  )
}

export default App
