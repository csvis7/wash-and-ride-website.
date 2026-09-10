import { useState, type ReactNode } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Clock3,
  MapPinned,
  Menu,
  Star,
  X,
} from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import washPhoto from '@assets/wash-and-ryde-actual/google-photo-portrait.jpg';
import streetViewPhoto from '@assets/wash-and-ryde-actual/google-streetview.jpg';

const queryClient = new QueryClient();
const mapsLink = 'https://maps.app.goo.gl/iHbLMBgPttzdUzND9';
const address = 'WASH&RIDE PALAVAYIL NILAM, PO, V K Rd, near TVS NEW ATHOLI MOTORS, Thalakulathur, Kozhikode, Kerala 673317, India';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Our place', href: '#place' },
  { label: 'Hours', href: '#hours' },
  { label: 'Reviews', href: '#reviews' },
];

const services = [
  ['01', 'Foam wash', 'A thorough exterior wash to lift the everyday dust, road film and Kerala rain marks.'],
  ['02', 'Pressure wash', 'Focused cleaning for the wheels, lower body and hard-to-reach places.'],
  ['03', 'Interior clean', 'A practical reset for the cabin, so the drive home feels fresh too.'],
  ['04', 'Full car wash', 'A complete clean, inside and out, done with care by the local team.'],
];

const hours = [
  ['Monday', '9 AM–8 PM'],
  ['Tuesday', '9 AM–1 AM'],
  ['Wednesday', '9 AM–8 PM'],
  ['Thursday', '9 AM–8 PM'],
  ['Friday', '9 AM–8 PM'],
  ['Saturday', '9 AM–6 PM'],
  ['Sunday', '9 AM–8 PM'],
];

function Wordmark({ footer = false }: { footer?: boolean }) {
  return (
    <span className="wordmark" data-testid={footer ? 'text-footer-wordmark' : 'text-wordmark'}>
      <span className="wordmark-sign" aria-hidden="true">W<span>R</span></span>
      <span className="wordmark-text">WASH<span>&amp;RIDE</span></span>
    </span>
  );
}

function MapButton({ children, className = 'button button-primary' }: { children: ReactNode; className?: string }) {
  return (
    <a
      className={className}
      href={mapsLink}
      target="_blank"
      rel="noreferrer"
      data-testid="link-google-maps"
    >
      {children}
      <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">
        <span><strong>5.0 on Google</strong> · A friendly local wash in Thalakulathur</span>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a href="#top" onClick={closeMenu} aria-label="WASH&RIDE home" data-testid="link-home">
            <Wordmark />
          </a>
          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu} data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                {item.label}
              </a>
            ))}
            <MapButton className="button button-primary nav-cta">Get directions</MapButton>
          </nav>
          <button
            type="button"
            className="menu-button focus-ring"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-photo"
            src={washPhoto}
            alt="WASH&RIDE staff member pressure-washing a black Mercedes inside the wash bay"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content reveal">
            <div className="eyebrow hero-kicker">Car wash · Thalakulathur</div>
            <h1 id="hero-title" className="display hero-title">Clean car.<br /><em>Good day.</em></h1>
            <div className="hero-subrow">
              <p className="hero-copy">
                A dependable neighborhood wash for cars around Thalakulathur and Kozhikode. Pull in dusty, drive out ready.
              </p>
              <div>
                <div className="hero-actions">
                  <MapButton>Get directions</MapButton>
                  <a href="#services" className="button button-outline" data-testid="link-hero-services">
                    See what we do <ChevronRight size={16} aria-hidden="true" />
                  </a>
                </div>
                <div className="hero-location">
                  <MapPinned size={15} aria-hidden="true" />
                  <span>V K Road, near TVS NEW ATHOLI MOTORS<br />Thalakulathur, Kozhikode</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-title">
          <div className="container intro-grid">
            <div>
              <div className="eyebrow">01 / The local difference</div>
              <h2 id="intro-title" className="display intro-title">A proper wash,<br /><em>close to home.</em></h2>
            </div>
            <div className="intro-right">
              <p className="intro-copy">
                You know the place: the road dust, the monsoon splash, the film that builds up on a daily car. WASH&RIDE keeps the answer simple — a careful, practical clean from a team that welcomes you in.
              </p>
              <div className="intro-rule" />
              <div className="quick-facts" aria-label="WASH&RIDE highlights">
                <div><strong className="fact-number">5.0</strong><span className="fact-label">Google rating</span></div>
                <div><strong className="fact-number">7</strong><span className="fact-label">Days open</span></div>
                <div><strong className="fact-number">4</strong><span className="fact-label">Google reviews</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">02 / What we do</div>
                <h2 id="services-title" className="display section-title">The clean<br /><em>your car needs.</em></h2>
              </div>
              <p className="section-note">Straightforward car wash care for busy days, family cars and the vehicle you are proud to keep tidy.</p>
            </div>
            <div className="service-list">
              {services.map(([number, name, description]) => (
                <a className="service-item" href={mapsLink} target="_blank" rel="noreferrer" key={number} data-testid={`link-service-${number}`}>
                  <span className="service-number">{number}</span>
                  <span className="service-name">{name}</span>
                  <span className="service-description">{description}</span>
                  <ChevronRight className="service-arrow" size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="local" id="place" aria-labelledby="place-title">
          <div className="container local-grid">
            <figure className="local-photo-wrap">
              <img
                className="local-photo"
                src={washPhoto}
                alt="WASH&RIDE staff member pressure-washing a black Mercedes in the wash bay"
              />
              <figcaption className="photo-tag">A real wash at WASH&RIDE</figcaption>
            </figure>
            <div>
              <div className="eyebrow">03 / In the bay</div>
              <h2 id="place-title" className="display local-title">Water, foam,<br /><em>then shine.</em></h2>
              <p className="local-copy">
                No grand promises. Just the satisfying basics done well: good pressure, plenty of foam, attention around the wheels and a team that treats your car with respect.
              </p>
              <a href="#hours" className="button button-blue" data-testid="link-place-hours">
                Check today&apos;s hours <Clock3 size={16} aria-hidden="true" />
              </a>
              <div className="address-chip">
                <MapPinned size={19} aria-hidden="true" />
                <div>
                  <strong>Find us on V K Road</strong>
                  <span>Near TVS NEW ATHOLI MOTORS, Thalakulathur, Kozhikode, Kerala 673317</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hours-section" id="hours" aria-labelledby="hours-title">
          <div className="container hours-grid">
            <div className="hours-intro">
              <div className="eyebrow">04 / Plan your visit</div>
              <h2 id="hours-title" className="display hours-title">Open when<br /><em>you need us.</em></h2>
              <p>Hours can make all the difference on a busy day. Check the weekly schedule, then use Google Maps for the quickest route.</p>
            </div>
            <div className="hours-list" aria-label="WASH&RIDE opening hours">
              {hours.map(([day, time]) => (
                <div className={`hours-row ${day === 'Tuesday' ? 'is-highlight' : ''}`} key={day} data-testid={`hours-${day.toLowerCase()}`}>
                  <span>{day}</span>
                  <span className="hours-time">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews" id="reviews" aria-labelledby="reviews-title">
          <div className="container reviews-layout">
            <div>
              <div className="rating-line">
                <span className="rating-value">5.0</span>
                <span className="rating-stars" aria-label="5 out of 5 stars"><Star size={15} fill="currentColor" aria-hidden="true" /><Star size={15} fill="currentColor" aria-hidden="true" /><Star size={15} fill="currentColor" aria-hidden="true" /><Star size={15} fill="currentColor" aria-hidden="true" /><Star size={15} fill="currentColor" aria-hidden="true" /></span>
                <span className="rating-caption">4 Google reviews</span>
              </div>
              <h2 id="reviews-title" className="display review-title">People come back for the wash — and the <em>welcome.</em></h2>
            </div>
            <div className="review-cards">
              <article className="review-card" data-testid="review-card-one">
                <p>“The service was excellent and the staff were very friendly and welcoming.”</p>
                <small>Google review</small>
              </article>
              <article className="review-card" data-testid="review-card-two">
                <p>“Excellent service.”</p>
                <small>Google review</small>
              </article>
              <MapButton className="button button-primary">See the profile</MapButton>
            </div>
          </div>
        </section>

        <section className="location" aria-labelledby="location-title">
          <div className="container location-grid">
            <div>
              <div className="eyebrow">05 / Come find us</div>
              <h2 id="location-title" className="display location-title">Your next<br /><em>clean stop.</em></h2>
              <p className="location-copy">Look for WASH&RIDE on V K Road, near TVS NEW ATHOLI MOTORS in Thalakulathur. Tap for the exact Google Maps profile and directions.</p>
              <MapButton className="button button-blue">Open Google Maps</MapButton>
            </div>
            <figure className="streetview-frame">
              <img className="streetview" src={streetViewPhoto} alt="Google Street View of the WASH&RIDE location on V K Road in Thalakulathur, with palm trees and the wash bay frontage" />
              <figcaption className="streetview-caption">Thalakulathur · Kerala</figcaption>
            </figure>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div>
              <div className="eyebrow" style={{ color: '#d9f17e' }}>06 / Ready when you are</div>
              <h2 id="contact-title" className="display contact-title">Bring the<br /><em>dusty one.</em></h2>
              <p className="contact-copy">No booking number, no complicated menu. Check the hours, follow the road and let us get your car looking right.</p>
            </div>
            <div className="contact-card">
              <p>WASH&RIDE is a local car wash in Thalakulathur, Kozhikode.</p>
              <strong className="contact-address">{address}</strong>
              <MapButton>Get directions to WASH&RIDE</MapButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#top" aria-label="Back to top" data-testid="link-footer-home"><Wordmark footer /></a>
          <div className="footer-meta">Car wash · Thalakulathur · Kozhikode</div>
          <a href="#top" className="footer-top" data-testid="link-footer-top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <ErrorBoundary resetKey={window.location.pathname}>
      <Home />
    </ErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;