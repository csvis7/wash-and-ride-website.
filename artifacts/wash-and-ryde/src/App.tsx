import { useState, type ReactNode } from 'react';
import { ArrowUpRight, ChevronRight, Menu, X } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import logoAsset from '@assets/wash-and-ryde/facebook-profile.jpg';
import washPhoto from '@assets/wash-and-ryde/official-og.jpg';

const queryClient = new QueryClient();

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'The studio', href: '#studio' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
];

const services = [
  ['01', 'Paint correction', 'Restore clarity, depth and reflection to tired paintwork.'],
  ['02', 'Ceramic coating', 'Long-term protection with a finish that keeps giving back.'],
  ['03', 'Interior detailing', 'A reset for the surfaces you live with every day.'],
  ['04', 'Exterior detailing', 'A meticulous wash, decontamination and finishing touch.'],
];

function BrandMark({ className = '' }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`}>
      <img src={logoAsset} alt="Wash & Ryde" />
    </span>
  );
}

function ArrowLink({ children, href, className = '' }: { children: ReactNode; href: string; className?: string }) {
  return (
    <a className={`button button-primary ${className}`} href={href} data-testid={`link-${String(children).toLowerCase().replace(/\s+/g, '-')}`}>
      {children}
      <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="topline-inner">
          <span>Independent automotive studio · Est. 2003</span>
          <a href="tel:+611300808158" data-testid="link-topline-phone">Call +61 1300 808 158</a>
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a href="#top" onClick={closeMenu} aria-label="Wash & Ryde home" data-testid="link-brand-home">
            <BrandMark />
          </a>
          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu} data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>{item.label}</a>
            ))}
            <a href="mailto:manager@washandryde.com.au?subject=Wash%20%26%20Ryde%20enquiry" className="header-cta" onClick={closeMenu} data-testid="link-header-enquire">Enquire</a>
          </nav>
          <button type="button" className="menu-button focus-ring" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={23} strokeWidth={1.5} /> : <Menu size={23} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-photo" src={washPhoto} alt="Blue vehicle receiving a careful hand wash at Wash & Ryde" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content reveal">
            <div className="eyebrow hero-kicker">Ryde · Sydney · Est. 2003</div>
            <h1 id="hero-title" className="display hero-title">Ride clean.<br /><em>Shine bright.</em></h1>
            <div className="hero-bottom">
              <p className="hero-copy">Premium car care for people who notice the details. Paint correction, ceramic coating and considered detailing from a team with 20+ years behind the wheel.</p>
              <div>
                <div className="hero-actions">
                  <ArrowLink href="mailto:manager@washandryde.com.au?subject=Wash%20%26%20Ryde%20enquiry">Start an enquiry</ArrowLink>
                  <a href="#services" className="button button-ghost" data-testid="link-hero-services">Explore services <ChevronRight size={15} aria-hidden="true" /></a>
                </div>
                <div className="hero-index">Scroll to explore <span>↓</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-title">
          <div className="container-wide intro-grid">
            <div>
              <div className="eyebrow">01 / The difference</div>
              <h2 id="intro-title" className="display intro-title">Not just a wash.<br /><em>A better finish.</em></h2>
            </div>
            <div>
              <p className="intro-copy">Your car is an investment, a daily ritual, and sometimes the first impression. We treat it accordingly — with patient hands, proven products and an eye for the finish that other places miss.</p>
              <div className="rule" />
              <div className="stats" aria-label="Wash & Ryde highlights">
                <div><strong className="stat-number">20+</strong><span className="stat-label">Years of experience</span></div>
                <div><strong className="stat-number">2024</strong><span className="stat-label">Local Business Awards finalist</span></div>
                <div><strong className="stat-number">1:1</strong><span className="stat-label">Care for every vehicle</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="dark-band" id="services" aria-labelledby="services-title">
          <div className="container-wide">
            <div className="section-head">
              <div>
                <div className="eyebrow">02 / What we do</div>
                <h2 id="services-title" className="display section-title">The finish<br /><em>is everything.</em></h2>
              </div>
              <p className="section-note">A focused menu of services, tailored to where your car is now — and where you want it to be.</p>
            </div>
            <div className="service-list">
              {services.map(([number, name, description]) => (
                <a className="service-item" href="mailto:manager@washandryde.com.au?subject=Wash%20%26%20Ryde%20service%20enquiry" key={number} data-testid={`link-service-${number}`}>
                  <span className="service-number">{number}</span>
                  <span className="service-name">{name}</span>
                  <span className="service-description">{description}</span>
                  <ChevronRight className="service-arrow" size={20} strokeWidth={1.3} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial" id="studio" aria-labelledby="studio-title">
          <div className="container-wide editorial-grid">
            <figure className="editorial-image-wrap">
              <img className="editorial-image" src={washPhoto} alt="Detailer working across the blue bodywork of a vehicle" />
              <figcaption className="image-caption">The work is in the details</figcaption>
            </figure>
            <div>
              <div className="eyebrow">03 / The studio</div>
              <h2 id="studio-title" className="display editorial-title">Good work<br />looks <em>different.</em></h2>
              <p className="editorial-copy">Wash & Ryde is a local automotive studio built on repeat customers and word of mouth. No conveyor belts. No rushed handovers. Just a proper assessment, a clear recommendation and the time to do it right.</p>
              <a href="#process" className="button button-primary" data-testid="link-studio-process">How we work <ChevronRight size={15} aria-hidden="true" /></a>
              <div className="signature">
                <span className="signature-mark"><img src={logoAsset} alt="" aria-hidden="true" /></span>
                <span><strong>Wash & Ryde</strong><span>748 Victoria Road, Ryde NSW 2112</span></span>
              </div>
            </div>
          </div>
        </section>

        <section className="process" id="process" aria-labelledby="process-title">
          <div className="container-wide process-grid">
            <div className="process-intro">
              <div className="eyebrow">04 / Our approach</div>
              <h2 id="process-title" className="display section-title">Care,<br /><em>by design.</em></h2>
              <p>Because a great result starts before the bucket comes out. We keep the conversation clear and the standard high.</p>
            </div>
            <div className="process-steps">
              <div className="process-step"><span className="step-num">01</span><div><h3 className="step-title">We inspect</h3><p className="step-copy">Every vehicle gets a proper look over. Paint condition, interior wear, your priorities — we start with what is actually in front of us.</p></div></div>
              <div className="process-step"><span className="step-num">02</span><div><h3 className="step-title">We recommend</h3><p className="step-copy">You get a straightforward plan, not a sales pitch. We explain the work, the result and the right level of protection for your car.</p></div></div>
              <div className="process-step"><span className="step-num">03</span><div><h3 className="step-title">We refine</h3><p className="step-copy">The final pass is where the difference lives — the edges, the glass, the finish, the details you notice when you walk back up to your car.</p></div></div>
            </div>
          </div>
        </section>

        <section className="proof" aria-labelledby="proof-title">
          <div className="container-wide proof-layout">
            <div>
              <div className="eyebrow">05 / A local standard</div>
              <h2 id="proof-title" className="proof-quote">“The kind of finish that makes you turn around for <em>one more look.”</em></h2>
              <div className="proof-source">— The Wash & Ryde standard</div>
            </div>
            <aside className="proof-aside">
              <h3>Recognised locally.</h3>
              <p>A 2024 Local Business Awards finalist, trusted by drivers across Ryde and Sydney’s north-west for care that lasts beyond collection day.</p>
              <a href="https://www.facebook.com/washandryde" target="_blank" rel="noreferrer" className="button button-ghost" style={{ color: 'hsl(var(--foreground))', borderColor: 'hsl(var(--foreground))' }} data-testid="link-facebook-proof">See the latest <ArrowUpRight size={15} aria-hidden="true" /></a>
            </aside>
          </div>
        </section>

        <section className="gallery" id="gallery" aria-labelledby="gallery-title">
          <div className="container-wide">
            <div className="gallery-head">
              <div>
                <div className="eyebrow">06 / In the bay</div>
                <h2 id="gallery-title" className="display section-title">A closer<br /><em>look.</em></h2>
              </div>
              <p>Real work, real cars, real finishes. Follow along from the studio.</p>
            </div>
            <div className="gallery-grid">
              <figure className="gallery-tile"><img src={washPhoto} alt="Close view of foam and water across blue vehicle paint" /><figcaption className="tile-label">Preparation / wash</figcaption></figure>
              <figure className="gallery-tile"><img src={washPhoto} alt="Water beading across the side of a freshly cleaned vehicle" /><figcaption className="tile-label">Surface / protection</figcaption></figure>
              <figure className="gallery-tile"><img src={washPhoto} alt="Detailer hand-washing a vehicle at the studio" /><figcaption className="tile-label">Process / by hand</figcaption></figure>
            </div>
            <a className="gallery-link" href="https://www.instagram.com/washandryde/" target="_blank" rel="noreferrer" data-testid="link-instagram-gallery">View @washandryde on Instagram <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="container-wide contact-grid">
            <div>
              <div className="eyebrow" style={{ color: '#f2c5bf' }}>07 / Ready when you are</div>
              <h2 id="contact-title" className="display contact-title">Let’s make<br />it <em>shine.</em></h2>
              <p className="contact-copy">Tell us what you drive and what you want from the finish. We’ll take it from there.</p>
            </div>
            <div className="contact-details">
              <a className="contact-detail" href="tel:+611300808158" data-testid="link-contact-phone"><small>Call the studio</small>+61 1300 808 158</a>
              <a className="contact-detail" href="mailto:manager@washandryde.com.au?subject=Wash%20%26%20Ryde%20enquiry" data-testid="link-contact-email"><small>Email an enquiry</small>manager@washandryde.com.au</a>
              <a className="contact-detail" href="https://www.google.com/maps/search/?api=1&query=748+Victoria+Road+Ryde+NSW+2112" target="_blank" rel="noreferrer" data-testid="link-contact-address"><small>Find the studio</small>748 Victoria Road, Ryde NSW 2112</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container-wide footer-inner">
          <a href="#top" aria-label="Back to top" data-testid="link-footer-home"><BrandMark className="footer-logo" /></a>
          <div className="footer-social">
            <a href="https://www.instagram.com/washandryde/" target="_blank" rel="noreferrer" data-testid="link-footer-instagram">Instagram</a>
            <a href="https://www.facebook.com/washandryde" target="_blank" rel="noreferrer" data-testid="link-footer-facebook">Facebook</a>
          </div>
          <div className="footer-meta">Ride clean, shine bright.<br />© {new Date().getFullYear()} Wash & Ryde</div>
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