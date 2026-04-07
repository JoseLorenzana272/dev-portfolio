import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useInView } from './hooks/useInView';
import {
  personalInfo, aboutHighlights, projects, skillGroups,
  experience, education, certifications, publications,
  languages, softSkills
} from './data/portfolio';
import {
  IconGithub, IconLinkedin, IconMail, IconExternalLink,
  IconFolder, IconArrowRight, IconBriefcase, IconGraduationCap,
  IconAward, IconUser, IconPen, IconMapPin, IconChevronDown,
  getIcon
} from './components/Icons';

/* ── Animated Section Wrapper ── */
function AnimatedSection({ children, className = '', id }) {
  const [ref, isVisible] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`section fade-in-up ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </section>
  );
}

/* ── Navigation ── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
  ];

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <span className="nav-logo-icon">JL</span>
        </a>

        <button
          className={`nav-mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="nav-toggle"
        >
          <span></span><span></span><span></span>
        </button>

        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link" onClick={handleLinkClick}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-gradient-orb"></div>
        <div className="hero-gradient-orb"></div>
        <div className="hero-grid-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Open to opportunities
            </div>

            <h1 className="hero-name">
              {personalInfo.name}{' '}
              <span className="hero-name-accent">{personalInfo.lastName}</span>
            </h1>

            <p className="hero-title">{personalInfo.title}</p>

            <p className="hero-description">
              {personalInfo.heroTagline}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" id="hero-cta-projects">
                View Projects
                <IconArrowRight size={16} />
              </a>
              <a href="/cv.pdf" download="Jose_Lorenzana_CV.pdf" className="btn btn-secondary" id="hero-cta-cv">
                Résumé / CV
              </a>
              <a href="#contact" className="btn btn-secondary" id="hero-cta-contact">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <img src="/photo1.png" alt="Hero" className="hero-photo-img" />
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>scroll</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}

/* ── About ── */
function About() {
  return (
    <AnimatedSection id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// About Me</span>
          <h2 className="section-title">Passionate about secure infrastructure</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a <strong>DevOps and Security-focused Engineer</strong> based in Guatemala City,
              with hands-on experience in <strong>Kubernetes (GKE)</strong>, cloud-native technologies,
              and <strong>CI/CD pipelines</strong>.
            </p>
            <p>
              I'm passionate about <strong>DevSecOps</strong> and building accessible, enterprise-grade
              security infrastructure for vulnerable organizations — including NGOs, investigative journalists,
              and human rights activists.
            </p>
            <p>
              My focus areas include automation, troubleshooting, observability, and real-time
              threat detection. Currently seeking an <strong>internship or junior role</strong> in
              DevOps, DevSecOps, Cloud, or Platform Engineering.
            </p>
          </div>

          <div className="about-highlights">
            {aboutHighlights.map((h, i) => (
              <div className="about-highlight-card" key={i}>
                <div className="about-highlight-icon">
                  {getIcon(h.icon)}
                </div>
                <div className="about-highlight-title">{h.title}</div>
                <div className="about-highlight-desc">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ── Projects ── */
function Projects() {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <AnimatedSection id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            From enterprise security platforms to cloud-native monitoring — each project reflects my commitment
            to real-world impact.
          </p>
        </div>

        {/* Featured project (full-width) */}
        <div className="projects-grid" style={{ marginBottom: 'var(--space-8)' }}>
          {featured.map((p, i) => (
            <FeaturedProjectCard key={i} project={p} />
          ))}
        </div>

        {/* Other projects (2-column) */}
        <div className="project-featured">
          {others.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card" id={`project-${project.title.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="project-card-header">
        <div className="project-card-icon">
          <IconFolder size={22} />
        </div>
        <div className="project-card-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card-link" aria-label={`GitHub: ${project.title}`}>
              <IconGithub size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-card-title">{project.title}</h3>
      <div className="project-card-type">{project.type}</div>
      <p className="project-card-desc">{project.description}</p>

      <ul className="project-card-bullets">
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <div className="project-card-techs">
        {project.stack.map((t, i) => (
          <span key={i} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project }) {
  const logoSrc = project.title === "Fortress in a Box" ? "/fortress-turtle.png" : null;
  const isFortress = project.title === "Fortress in a Box";
  const [showArch, setShowArch] = useState(false);

  return (
    <>
      <div className="project-featured-card" id={`project-${project.title.toLowerCase().replace(/\s/g, '-')}`}>
        <div className="featured-logo-container">
          {logoSrc && (
            <img src={logoSrc} alt="" className="featured-logo-bg-img" aria-hidden="true" />
          )}
        </div>
        <div className="featured-glow"></div>

        <div className="project-featured-content">
          <div className="project-featured-header">
            <div className="project-card-icon" style={{ width: '56px', height: '56px' }}>
              <IconFolder size={28} />
            </div>
            <div className="project-card-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card-link" aria-label={`GitHub: ${project.title}`}>
                  <IconGithub size={24} />
                </a>
              )}
            </div>
          </div>

          <h3 className="project-featured-title">{project.title}</h3>
          <div className="project-featured-type">{project.type}</div>
          <p className="project-featured-desc">{project.description}</p>

          <ul className="project-card-bullets project-featured-bullets">
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <div className="project-card-techs project-featured-techs">
            {project.stack.map((t, i) => (
              <span key={i} className="tech-tag featured-tech-tag">{t}</span>
            ))}
          </div>

          {isFortress && (
            <div className="arch-btn-wrapper">
              <button className="btn btn-secondary arch-btn" onClick={() => setShowArch(true)}>
                <span>View Architecture</span>
                <IconArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {isFortress && <ArchitectureModal isOpen={showArch} onClose={() => setShowArch(false)} />}
    </>
  );
}

/* ── Skills ── */
function Skills() {
  return (
    <AnimatedSection id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Skills</span>
          <h2 className="section-title">My technical toolkit</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build, deploy, secure, and monitor cloud-native systems.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <div className="skill-group" key={i}>
              <div className="skill-group-icon">
                {getIcon(g.icon)}
              </div>
              <h3 className="skill-group-title">{g.title}</h3>
              <div className="skill-tags">
                {g.skills.map((s, j) => (
                  <span key={j} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ── Experience & Education ── */
function ExperienceEducation() {
  return (
    <AnimatedSection id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Background</span>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="exp-edu-grid">
          <div>
            <h3 className="exp-edu-section-title">
              <IconBriefcase size={22} />
              Experience
            </h3>
            <div className="timeline">
              {experience.map((e, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">{e.date}</div>
                  <h4 className="timeline-title">{e.title}</h4>
                  <div className="timeline-org">{e.org}</div>
                  <ul className="timeline-desc">
                    {e.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="exp-edu-section-title">
              <IconGraduationCap size={22} />
              Education
            </h3>
            <div className="timeline">
              {education.map((e, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">{e.date}</div>
                  <h4 className="timeline-title">{e.title}</h4>
                  <div className="timeline-org">{e.org}</div>
                  {e.desc && <p className="timeline-desc" style={{ paddingLeft: 0 }}>{e.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ── Certifications ── */
function Certifications() {
  return (
    <AnimatedSection id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Certifications</span>
          <h2 className="section-title">Continuous learning</h2>
        </div>

        <div className="certs-grid">
          {certifications.map((c, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-icon">
                <IconAward size={18} />
              </div>
              <div className="cert-info">
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ── Publications ── */
function Publications() {
  return (
    <AnimatedSection id="publications">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Writing</span>
          <h2 className="section-title">Publications</h2>
        </div>

        {publications.map((p, i) => (
          <div className="publication-card" key={i}>
            <div className="publication-icon">
              <IconPen size={24} />
            </div>
            <div>
              <h3 className="publication-title">{p.title}</h3>
              <div className="publication-meta">{p.platform} · {p.date}</div>
              <p className="publication-desc">{p.description}</p>
              <a href={p.link} className="publication-link" target="_blank" rel="noopener noreferrer">
                Read article <IconArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

/* ── Contact ── */
function Contact() {
  return (
    <AnimatedSection id="contact" className="contact-section">
      <div className="container">
        <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>// Get in Touch</span>
        <h2 className="contact-title">Let's work together</h2>
        <p className="contact-desc">
          I'm currently looking for internship or junior opportunities in DevOps, Cloud, and DevSecOps.
          Feel free to reach out — I'd love to connect.
        </p>

        <div className="contact-links">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-card" id="contact-linkedin">
            <IconLinkedin size={20} />
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link-card" id="contact-github">
            <IconGithub size={20} />
            GitHub
          </a>
          <span className="contact-link-card" style={{ cursor: 'default' }}>
            <IconMapPin size={20} />
            {personalInfo.location}
          </span>
        </div>

        <a href={`mailto:${personalInfo.email}`} className="contact-email-btn" id="contact-email">
          <IconMail size={18} />
          {personalInfo.email}
        </a>

        <div style={{ marginTop: 'var(--space-10)', display: 'flex', justifyContent: 'center', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          {languages.map((l, i) => (
            <span key={i} className="skill-tag">{l.lang}: {l.level}</span>
          ))}
          {softSkills.map((s, i) => (
            <span key={i} className="skill-tag">{s}</span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          Designed & built by <span>José Lorenzana</span> · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

/* ── Architecture Modal ── */
function ArchitectureModal({ isOpen, onClose }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="arch-modal-overlay js-modal-overlay" onClick={(e) => { if (e.target.className.includes('js-modal-overlay')) onClose(); }}>
      <div className="arch-modal-content fade-in-up visible">
        <button className="arch-modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        <div className="arch-modal-header">
          <h2 className="arch-modal-title">Architecture Overview</h2>
          <p className="arch-modal-subtitle">A layered DevSecOps system designed for proactive threat detection and enforcement.</p>
        </div>

        <div className="arch-diagram">
          {/* Phase 1: CI/CD */}
          <div className="arch-layer">
            <div className="arch-layer-header">1. Build &amp; Source Integration</div>
            <div className="arch-nodes-row">
              <div className="arch-node">
                <span className="arch-node-icon"><IconGithub size={28} /></span>
                <span className="arch-node-label">GitHub Actions</span>
                <span className="arch-node-sub">CI/CD Pipeline</span>
              </div>
              <div className="arch-line-horizontal"></div>
              <div className="arch-node arch-node-security">
                <span className="arch-node-icon"><img src="/trivy.png" alt="Trivy" className="arch-node-logo" /></span>
                <span className="arch-node-label">Trivy</span>
                <span className="arch-node-sub">Container Scanning</span>
              </div>
            </div>
          </div>

          <div className="arch-line-vertical"></div>

          {/* Phase 2: GitOps & Cluster */}
          <div className="arch-layer arch-layer-primary">
            <div className="arch-layer-header">2. Continuous Delivery &amp; Cluster Policies</div>
            <div className="arch-nodes-cluster">
              <div className="arch-node arch-node-ops">
                <span className="arch-node-icon"><img src="/argocd.png" alt="ArgoCD" className="arch-node-logo" /></span>
                <span className="arch-node-label">ArgoCD</span>
                <span className="arch-node-sub">GitOps Deployment</span>
              </div>

              <div className="arch-cluster-box">
                <div className="arch-node arch-node-security">
                  <span className="arch-node-icon"><img src="/kyverno.png" alt="Kyverno" className="arch-node-logo" /></span>
                  <span className="arch-node-label">Kyverno</span>
                  <span className="arch-node-sub">Admission Control</span>
                </div>
                <div className="arch-node arch-node-security">
                  <span className="arch-node-icon"><img src="/falco.png" alt="Falco" className="arch-node-logo" /></span>
                  <span className="arch-node-label">Falco</span>
                  <span className="arch-node-sub">Runtime Threat Detection</span>
                </div>
              </div>
            </div>
          </div>

          <div className="arch-line-vertical arch-line-vertical-split"></div>

          {/* Phase 3: Telemetry */}
          <div className="arch-layer">
            <div className="arch-layer-header">3. Observability &amp; Alerting</div>

            <div className="arch-flow-hub" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="arch-node arch-node-ops" style={{ width: '180px' }}>
                <span className="arch-node-icon"><img src="/falcosidekick.png" alt="Falcosidekick" className="arch-node-logo" /></span>
                <span className="arch-node-label">Falcosidekick</span>
                <span className="arch-node-sub">Event Forwarding Hub</span>
              </div>

              <div className="arch-branch-area" style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: 'var(--space-4) 0' }}>
                <div className="arch-path-wrapper" style={{ display: 'flex', gap: 'var(--space-16)' }}>
                  {/* Left Flow */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
                    <div className="arch-line-vertical" style={{ height: '30px' }}></div>
                    <div className="arch-node arch-node-monitor">
                      <span className="arch-node-icon"><img src="/loki.png" alt="Loki" className="arch-node-logo" /></span>
                      <span className="arch-node-label">Loki</span>
                      <span className="arch-node-sub">Log Storage Matrix</span>
                    </div>
                    <div className="arch-line-vertical" style={{ height: '30px' }}></div>
                    <div className="arch-node arch-node-monitor">
                      <span className="arch-node-icon"><img src="/grafana.png" alt="Grafana" className="arch-node-logo" /></span>
                      <span className="arch-node-label">Grafana</span>
                      <span className="arch-node-sub">Metrics Dashboard</span>
                    </div>
                  </div>
                  {/* Right Flow */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
                    <div className="arch-line-vertical" style={{ height: '30px' }}></div>
                    <div className="arch-node arch-node-alert">
                      <span className="arch-node-icon"><img src="/discord.png" alt="Discord" className="arch-node-logo" /></span>
                      <span className="arch-node-label">Discord</span>
                      <span className="arch-node-sub">Real-time Webhooks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ── App ── */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <ExperienceEducation />
        <hr className="section-divider" />
        <Certifications />
        <hr className="section-divider" />
        <Publications />
        <hr className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
