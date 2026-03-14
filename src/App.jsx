import { useState, useEffect } from "react";

const PAYPAL_LINK = "https://www.paypal.com/donate/?hosted_button_id=DQYL7GQF6H5HL";
const EMAIL = "waytoschools.org@gmail.com";

const PROGRAMS = [
  {
    title: "Girls' Education",
    desc: "Supporting girls from the Majhi community in Gulmi, Nepal — 23 girls currently enrolled, and 2 graduates from 12th grade.",
    tag: "Featured",
  },
  {
    title: "School Partnerships",
    desc: "Working directly with Gyanodaya Secondary School and Shree Majhi Primary School to remove barriers to attendance.",
    tag: null,
  },
  {
    title: "Family & Community",
    desc: "Engaging families, local organizations, and community leaders to create lasting, sustainable change from within.",
    tag: null,
  },
  {
    title: "Research & Analysis",
    desc: "Conducting initial studies to identify financial, social, and cultural barriers so we can target our efforts precisely.",
    tag: null,
  },
];

const VALUES = [
  { word: "Equity", desc: "Every child deserves equal access to education regardless of their background, gender, or economic status." },
  { word: "Education", desc: "Knowledge is the foundation of every life well-lived — and the most powerful tool for lasting change." },
  { word: "Enrichment", desc: "We uplift whole communities, not just individuals. When one child thrives, an entire village benefits." },
];

const NAV = [
  { label: "About Us", id: "about", children: [
    { label: "Our Team", id: "team" },
    { label: "Our Mission", id: "mission" },
  ]},
  { label: "Our Work", id: "work", children: [
    { label: "Initial Study", id: "study" },
    { label: "Our Impact", id: "impact" },
  ]},
  { label: "How to Help", id: "help", children: [] },

];

export default function WaytoSchools() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "", type: "volunteer" });
  const [sent, setSent] = useState(false);
  const [activeTab, setActiveTab] = useState("equity");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "sans-serif", background: "#fdf8f2", color: "#2d0a14", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; }
        h1, h2, h3 { font-family: 'Lora', serif; }

        .nav-item {
          color: rgba(255,255,255,0.85);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding-bottom: 2px;
          border-bottom: 1.5px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .nav-item:hover { color: #f0c040; border-bottom-color: #f0c040; }

        .btn-donate {
          background: #8b1a3a;
          color: white;
          padding: 0.6rem 1.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-donate:hover { background: #6e1530; transform: translateY(-1px); }

        .btn-hero {
          background: #f0c040;
          color: #2d0a14;
          padding: 1rem 2.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-hero:hover { background: #d4a820; transform: translateY(-2px); }

        .btn-ghost {
          background: transparent;
          color: white;
          padding: 1rem 2.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1.5px solid rgba(255,255,255,0.45);
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-ghost:hover { border-color: white; background: rgba(255,255,255,0.08); }

        .program-card {
          background: white;
          padding: 2rem;
          border-left: 3px solid #8b1a3a;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          transition: transform 0.2s, box-shadow 0.2s;
          position: relative;
        }
        .program-card:hover { transform: translateY(-5px); box-shadow: 0 12px 40px rgba(0,0,0,0.11); }

        .field {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1.5px solid #e0cab0;
          background: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: #2d0a14;
          outline: none;
          transition: border-color 0.2s;
          border-radius: 0;
        }
        .field:focus { border-color: #8b1a3a; }

        .badge {
          display: inline-block;
          background: #f0c040;
          color: #2d0a14;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.2rem 0.6rem;
          margin-bottom: 0.75rem;
        }

        .eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8b1a3a;
          display: block;
          margin-bottom: 0.8rem;
        }

        .tab-btn {
          padding: 0.55rem 1.3rem;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.2s;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade1 { animation: fadeUp 0.8s ease forwards; }
        .fade2 { animation: fadeUp 0.8s 0.2s ease forwards; opacity: 0; }
        .fade3 { animation: fadeUp 0.8s 0.4s ease forwards; opacity: 0; }

        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
          .mobile-menu { display: flex !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .four-col { grid-template-columns: 1fr 1fr !important; }
          .hero-title { font-size: 2.6rem !important; }
          .stats-band { grid-template-columns: 1fr 1fr !important; }
          .tiers { grid-template-columns: 1fr !important; }
          .coffee-card { display: none !important; }
          .school-grid { grid-template-columns: 1fr 1fr !important; }
          .photo-grid { grid-template-columns: 1fr 1fr !important; }
          .photo-grid > div[style*="span 2"] { grid-column: span 2 !important; grid-row: span 1 !important; }
          .photo-grid > div[style*="span 2"][style*="grid-row"] { grid-row: span 1 !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
        }

        @media (max-width: 480px) {
          .four-col { grid-template-columns: 1fr !important; }
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 100%; left: 0; right: 0;
          background: #2d0a14;
          padding: 1.5rem 2rem;
          gap: 1.2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          z-index: 200;
        }
        .mobile-menu .nav-item { font-size: 1rem; }

        .dropdown-wrapper { position: relative; }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          padding-top: 0.5rem;
          background: transparent;
          min-width: 180px;
          z-index: 300;
        }
        .dropdown-wrapper:hover .dropdown-menu { display: block; }
        .dropdown-menu-inner {
          background: #2d0a14;
          border-top: 2px solid #f0c040;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .dropdown-item {
          display: block;
          padding: 0.7rem 1.2rem;
          color: rgba(255,255,255,0.8);
          font-family: "DM Sans", sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          transition: background 0.15s, color 0.15s;
        }
        .dropdown-item:hover { background: rgba(240,192,64,0.12); color: #f0c040; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(28,18,8,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        transition: "all 0.35s",
        padding: "1.1rem 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div onClick={() => go("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <img src="/images/waytoschoolslogo.png" alt="WaytoSchools Logo" style={{ height: 48, width: "auto", objectFit: "contain" }} />
          <div>
            <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1.1rem", color: "white", lineHeight: 1 }}>WayToSchools.org</div>
          </div>
        </div>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {NAV.map(n => (
            <div key={n.label} className="dropdown-wrapper">
              <span className="nav-item" onClick={() => go(n.id)}>
                {n.label} {n.children.length > 0 && <span style={{ fontSize: "0.6rem", opacity: 0.7 }}>▼</span>}
              </span>
              {n.children.length > 0 && (
                <div className="dropdown-menu">
                  <div className="dropdown-menu-inner">
                    {n.children.map(c => (
                      <span key={c.id} className="dropdown-item" onClick={() => go(c.id)}>{c.label}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href={PAYPAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-donate">Donate</a>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", color: "white", fontSize: "1.4rem", cursor: "pointer" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            {NAV.map(n => (
              <div key={n.label}>
                <span className="nav-item" onClick={() => go(n.id)}>{n.label}</span>
                {n.children.map(c => (
                  <div key={c.id} style={{ paddingLeft: "1rem", marginTop: "0.5rem" }}>
                    <span className="nav-item" style={{ fontSize: "0.75rem", opacity: 0.7 }} onClick={() => go(c.id)}>{c.label}</span>
                  </div>
                ))}
              </div>
            ))}
            <a href={PAYPAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-donate" style={{ textAlign: "center" }}>Donate Now</a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{
        minHeight: "100vh",
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "9rem 2.5rem 5rem",
        position: "relative", overflow: "hidden",
      }}>
        {/* Dark overlay so text stays readable */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(26,5,9,0.82) 0%, rgba(58,13,26,0.75) 50%, rgba(26,5,9,0.65) 100%)", pointerEvents: "none" }} />
        <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", opacity: 0.15, pointerEvents: "none" }} viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path d="M0,220 L0,130 L100,65 L200,110 L320,45 L440,95 L560,25 L680,75 L800,35 L920,85 L1040,50 L1160,95 L1280,55 L1440,90 L1440,220Z" fill="#f0c040" />
        </svg>

        <div style={{ maxWidth: 820, position: "relative", zIndex: 1 }}>
          <span className="fade1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#f0c040", fontWeight: 600, display: "block", marginBottom: "1.2rem" }}>
            501(c)(3) Certified Nonprofit
          </span>
          <h1 className="hero-title fade1" style={{
            fontFamily: "'Lora', serif", fontWeight: 700,
            fontSize: "clamp(2.8rem, 6.5vw, 5rem)",
            color: "white", lineHeight: 1.1, letterSpacing: "-0.02em",
            marginBottom: "1.6rem",
          }}>
            One Child.<br />
            One Family.<br />
            <span style={{ color: "#f0c040", fontStyle: "italic" }}>One Community.</span>
          </h1>
          <p className="fade2" style={{
            fontSize: "1.15rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8,
            maxWidth: 560, marginBottom: "2.5rem",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
          }}>
            WaytoSchools creates access to education for under-privileged children in Nepal's villages — removing financial, social, and cultural barriers, one family at a time.
          </p>
          <div className="fade3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href={PAYPAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero">Donate Now</a>
            <span className="btn-ghost" onClick={() => go("about")}>Our Story ↓</span>
          </div>
        </div>

        <div className="coffee-card" style={{
          position: "absolute", bottom: "3rem", right: "3rem",
          background: "rgba(240,192,64,0.1)", border: "1px solid rgba(240,192,64,0.28)",
          padding: "1.2rem 1.5rem", maxWidth: 250, backdropFilter: "blur(8px)",
        }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
            Skip one coffee a month —<br /><strong style={{ color: "#f0c040" }}>$4 sends a child to school</strong> for an entire year.
          </p>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ background: "#8b1a3a", padding: "3rem 2.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="stats-band" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", textAlign: "center" }}>
            {[
              { n: "23", l: "Girls Currently Supported" },
              { n: "2", l: "12th Grade Graduates" },
              { n: "$4/mo", l: "Can Send a Child for a Year" },
              { n: "501(c)(3)", l: "Certified US Nonprofit" },
            ].map(s => (
              <div key={s.l} style={{ padding: "0.75rem" }}>
                <div style={{ fontFamily: "'Lora', serif", fontSize: "2.4rem", fontWeight: 700, color: "white", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.82)", letterSpacing: "0.07em", textTransform: "uppercase", marginTop: "0.4rem" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "7rem 2.5rem", background: "#fdf8f2" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <span className="eyebrow">Who We Are</span>
              <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.5rem" }}>
                A Mission Rooted in Equity
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.85, color: "#4a1a25", marginBottom: "1.2rem" }}>
                WaytoSchools.org is a <strong>501(c)(3) certified nonprofit</strong> based in the USA. We believe every child deserves equitable access to education. We focus on socially and economically marginalized communities who are unable to send their children to school due to financial, social, or cultural barriers.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.85, color: "#4a1a25", marginBottom: "2rem" }}>
                We identify and analyze those barriers and work with families, local schools, and organizations to find and create ways for children to acquire education — one child, one family, one community at a time.
              </p>
              <div style={{ display: "flex", gap: 0, marginBottom: "1.2rem", borderBottom: "2px solid #e8d5c0" }}>
                {VALUES.map(v => (
                  <button key={v.word} className="tab-btn" onClick={() => setActiveTab(v.word.toLowerCase())} style={{
                    background: activeTab === v.word.toLowerCase() ? "#8b1a3a" : "transparent",
                    color: activeTab === v.word.toLowerCase() ? "white" : "#4a1a25",
                  }}>{v.word}</button>
                ))}
              </div>
              {VALUES.filter(v => v.word.toLowerCase() === activeTab).map(v => (
                <p key={v.word} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#4a1a25", lineHeight: 1.7, fontStyle: "italic" }}>{v.desc}</p>
              ))}
            </div>

            <div>
              <span className="eyebrow">Featured Project</span>
              {/* Photo card replacing the abstract dark card */}
              <div style={{ position: "relative", marginBottom: "1.5rem", overflow: "hidden", borderRadius: "2px" }}>
                <img
                  src="/images/Picture1.jpg"
                  alt="School in Majhi Gaun, Gulmi Nepal"
                  style={{ width: "100%", height: 280, objectFit: "cover", objectPosition: "center", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,4,10,0.95) 0%, rgba(20,4,10,0.55) 50%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, padding: "1.5rem 1.8rem", zIndex: 1 }}>
                  <h3 style={{ fontFamily: "'Lora', serif", color: "white", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.3rem" }}>Majhi Gaun, Gulmi</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.6rem" }}>"Fishermen Village" — Nepal</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.88)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    Currently supporting <strong style={{ color: "#f0c040" }}>23 girls</strong> from the Majhi community, with <strong style={{ color: "#f0c040" }}>2 graduates</strong> from 12th grade.
                  </p>
                </div>
              </div>
              <div className="school-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { school: "Gyanodaya Secondary School", photo: "/images/Picture1.jpg" },
                  { school: "Shree Majhi Primary School", photo: "/images/ShreeMajhi1.jpg" },
                ].map(s => (
                  <div key={s.school} style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: "3px solid #f0c040", overflow: "hidden" }}>
                    <div style={{ height: 100, overflow: "hidden" }}>
                      <img src={s.photo} alt={s.school} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: "0.9rem 1rem" }}>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "#2d0a14", lineHeight: 1.4 }}>{s.school}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section id="mission" style={{ padding: "7rem 2.5rem", background: "#2d0a14", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 50%, rgba(240,192,64,0.07) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f0c040", display: "block", marginBottom: "0.8rem" }}>Who We Are</span>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, color: "white" }}>Our Mission</h2>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", lineHeight: 1.9, color: "rgba(255,255,255,0.8)", textAlign: "center", marginBottom: "4rem" }}>
            We believe every child deserves equitable access to education. We focus on socially and economically marginalized communities who are unable to send their children to school due to financial, social, or cultural barriers. We identify and analyze those barriers and work with families, local schools and organizations to find and create ways for children to acquire education.
          </p>
          <div style={{ background: "rgba(240,192,64,0.08)", border: "1px solid rgba(240,192,64,0.2)", padding: "2.5rem", marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.3rem", fontWeight: 700, color: "#f0c040", marginBottom: "1rem" }}>Our Purpose</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>
              To create and find accessibility to education, awareness and information to underprivileged community around the world, one child, one family, one school at a time.
            </p>
          </div>
          <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.3rem", fontWeight: 700, color: "white", marginBottom: "2rem", textAlign: "center" }}>Our Values</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="tiers">
            {[
              { value: "Equity", desc: "Every child deserves equal access to education regardless of background, gender, or economic status." },
              { value: "Education", desc: "Everyone should be provided specific tools or means based on what they need to succeed." },
              { value: "Enrichment", desc: "Enrichment can provide a sense of self awareness and understanding to promote education." },
            ].map(v => (
              <div key={v.value} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "2rem", textAlign: "center" }}>
                <h4 style={{ fontFamily: "'Lora', serif", fontSize: "1.1rem", fontWeight: 700, color: "#f0c040", marginBottom: "0.75rem" }}>{v.value}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" style={{ padding: "7rem 2.5rem", background: "#f5ece0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="eyebrow" style={{ display: "block", textAlign: "center" }}>The People Behind the Mission</span>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>Our Team</h2>
            <p style={{ maxWidth: 500, margin: "1rem auto 0", fontFamily: "'DM Sans', sans-serif", color: "#4a1a25", fontSize: "1rem", lineHeight: 1.8 }}>
              Contact us at: <a href="mailto:waytoschools.org@gmail.com" style={{ color: "#8b1a3a", textDecoration: "none", fontWeight: 600 }}>waytoschools.org@gmail.com</a>
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="team-grid">
            {[
              { name: "Bindiya Jha", role: "Board President", photo: "/images/BJ.jpg" },
              { name: "Samanta Sharma", role: "Board Vice-President", photo: "/images/SS.jpg" },
              { name: "Kabita Karki", role: "Board Treasurer", photo: "/images/KK.jpg" },
              { name: "Hasina Karki", role: "Board Secretary", photo: "/images/HK.jpg" },
              { name: "Anjana Gautam", role: "Founder & Executive Director", photo: "/images/AG.jpg" },
              { name: "Saramsh Pandit", role: "Co-founder & Program Manager", photo: "/images/SP.jpg" },
            ].map(m => (
              <div key={m.name} style={{
                background: "white",
                padding: "2rem",
                textAlign: "center",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                borderTop: "3px solid #f0c040",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", margin: "0 auto 1.2rem", border: "3px solid #f0c040" }}>
                  <img src={m.photo} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.4rem" }}>{m.name}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#8b1a3a", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INITIAL STUDY ── */}
      <section id="study" style={{ padding: "7rem 2.5rem", background: "#fdf8f2" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b1a3a", display: "block", marginBottom: "0.8rem" }}>Our Work</span>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>Initial Study</h2>
            <p style={{ maxWidth: 600, margin: "1rem auto 0", fontFamily: "'DM Sans', sans-serif", color: "#4a1a25", fontSize: "1rem", lineHeight: 1.8 }}>
              We conducted an initial analysis in the village to understand the current state of our programs.
            </p>
          </div>

          {/* About Gulmi */}
          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#2d0a14" }}>About Gulmi</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "#4a1a25" }}>
              Gulmi District, a part of Lumbini province, is one of the seventy-seven districts of Nepal. It is a hilly district surrounded by Syangja and Parbat district on the east, Palpa, and Arghakhachi on the south.
            </p>
          </div>

          {/* Purpose */}
          <div style={{ background: "#f5ece0", padding: "2rem", marginBottom: "3rem", borderLeft: "4px solid #8b1a3a" }}>
            <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>Purpose of the Travel</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#4a1a25", marginBottom: "0.5rem" }}>• Identification of the issues in the schools mentioned in this report</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#4a1a25", marginBottom: "1rem" }}>• Needs assessment / Status of the students</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#4a1a25", fontWeight: 600 }}>Date of Travel: 12th – 14/15th June, 2022</p>
          </div>

          {/* Majhi Community */}
          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>Majhi Community, Nepal</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "#4a1a25", marginBottom: "1rem" }}>
              Majhi is a minority indigenous caste among the 125 castes of Nepal, with around 206,000 Majhi living in the world. They have a special relationship with the rivers of Nepal, with fishing, boating, and river transportation as their main traditional occupations.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "#4a1a25" }}>
              The Majhi have very limited educational opportunities and low literacy levels. No Majhi has a Master's degree, only 15 have bachelor's degrees, and 35 have certificate level qualifications.
            </p>
          </div>

          {/* Schools */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }} className="two-col">
            <div style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", borderTop: "3px solid #f0c040", overflow: "hidden" }}>
              <div style={{ height: 180, overflow: "hidden" }}>
                <img src="/images/ShreeMajhi1.jpg" alt="Shree Majhi Primary School" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "1.8rem" }}>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>Shree Majhi Primary School</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", lineHeight: 1.7, color: "#4a1a25", marginBottom: "1rem" }}>
                  Established in BS 2053, located in Majhi Community of Gulmi. Has around 74 students in grades 1–5.
                </p>
                <div style={{ background: "#f5ece0", padding: "1rem" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem" }}>Student Breakdown:</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#4a1a25" }}>Girls: 37 &nbsp;|&nbsp; Boys: 37 &nbsp;|&nbsp; Total: 74</p>
                </div>
              </div>
            </div>
            <div style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", borderTop: "3px solid #f0c040", overflow: "hidden" }}>
              <div style={{ height: 180, overflow: "hidden" }}>
                <img src="/images/Picture1.jpg" alt="Gyanodaya Higher Secondary School" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "1.8rem" }}>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>Gyanodaya Higher Secondary School</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", lineHeight: 1.7, color: "#4a1a25" }}>
                  A government school with around 900 students. Well equipped with facilities including a hostel for grade 10 students. New building under construction with library, museum, canteen, and sports club.
                </p>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "2rem" }}>Key Findings</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="two-col">
              {[
                { title: "Teachers", points: ["Some students only attend during exams", "Children lack proper school dress and bags", "Donor organizations for stationery winding up", "School needs computers"] },
                { title: "Students", points: ["Overwhelmed with domestic chores", "Some belong to single-parent or no-parent households", "Asked by parents to stay home for household work"] },
                { title: "Parents", points: ["Most aware of importance of education", "Some struggle to afford education costs", "Requesting scholarships for boys as well"] },
                { title: "Dropout Girls", points: ["Dropped out in grades 6, 7, 8 and 10", "Personal and financial family issues", "Gaps in schooling discourage return"] },
              ].map(f => (
                <div key={f.title} style={{ background: "#f5ece0", padding: "1.5rem", borderLeft: "3px solid #8b1a3a" }}>
                  <h4 style={{ fontFamily: "'Lora', serif", fontSize: "1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#2d0a14" }}>{f.title}</h4>
                  {f.points.map((p, i) => (
                    <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "#4a1a25", lineHeight: 1.6, marginBottom: "0.4rem" }}>• {p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div style={{ background: "#2d0a14", padding: "2.5rem", marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.4rem", fontWeight: 700, color: "#f0c040", marginBottom: "1.5rem" }}>Recommendations</h3>
            {[
              "Provide teachers' training on various teaching methods with pedagogy materials",
              "Set up a mini library so students get extra knowledge beyond course books",
              "Create a small playroom with materials to motivate children and enhance creativity",
              "Plan a proper scholarship package for students on merit and need basis",
              "Manage kitchen with clean and hygienic food",
              "Organize weekly extra-curricular activities including awareness programs on health, education, and child safety",
              "Launch exchange programs between schools to broaden perspectives",
            ].map((r, i) => (
              <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "0.75rem" }}>• {r}</p>
            ))}
          </div>

          {/* Immediate Actions */}
          <div>
            <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.5rem" }}>Immediate Action Plan</h3>
            {[
              "Sponsor dropout girls to return to school without financial pressure",
              "Research government financial support available for local educational institutions",
              "Find trainers to provide creative teaching method training to teachers",
              "Meet with village development committee to explore support opportunities",
              "Prepare proper action plans on areas of focus",
            ].map((a, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: 28, height: 28, background: "#8b1a3a", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#4a1a25", lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="work" style={{ padding: "7rem 2.5rem", background: "#f5ece0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="eyebrow" style={{ display: "block", textAlign: "center" }}>What We Do</span>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>Our Work</h2>
            <p style={{ maxWidth: 500, margin: "1rem auto 0", fontFamily: "'DM Sans', sans-serif", color: "#4a1a25", fontSize: "1rem", lineHeight: 1.8 }}>
              Every program is built in partnership with local families and schools — because sustainable change starts within the community.
            </p>
          </div>
          <div className="four-col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {PROGRAMS.map(p => (
              <div key={p.title} className="program-card">
                {p.tag && <div className="badge">{p.tag}</div>}
                  <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{p.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", lineHeight: 1.75, color: "#4a1a25" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR IMPACT ── */}
      <section id="impact" style={{ padding: "7rem 2.5rem", background: "#fdf8f2" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b1a3a", display: "block", marginBottom: "0.8rem" }}>Our Work</span>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>Our Impact</h2>
            <p style={{ maxWidth: 600, margin: "1rem auto 0", fontFamily: "'DM Sans', sans-serif", color: "#4a1a25", fontSize: "1rem", lineHeight: 1.8 }}>
              In May 2024, our team visited Gulmi, Nepal to distribute school supplies, meet with teachers, students, and families, and assess the impact of our programs.
            </p>
          </div>

          {/* Visit Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginBottom: "4rem" }} className="stats-band">
            {[
              { n: "480", l: "Notebooks Distributed" },
              { n: "480", l: "Pencils Distributed" },
              { n: "80", l: "School Bags Given" },
              { n: "80", l: "Uniforms Provided" },
            ].map(s => (
              <div key={s.l} style={{ background: "#2d0a14", padding: "2rem", textAlign: "center" }}>
                <div style={{ fontFamily: "'Lora', serif", fontSize: "2.5rem", fontWeight: 700, color: "#f0c040", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.07em", textTransform: "uppercase", marginTop: "0.5rem" }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Visit Details */}
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "4rem" }}>
            <div style={{ background: "white", padding: "2.5rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", borderTop: "3px solid #8b1a3a" }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.2rem" }}>Meeting with Teachers</h3>
              {[
                "Basic needs are the priority — students lack school supplies and basic clothing",
                "Government has Computer education in the curriculum but no computers provided — we donated 1 Lenovo laptop",
                "High absenteeism; some students come only for lunch and leave",
                "Our initiative had a big impact among girls — teachers asked if we can expand to boys as well",
                "Teacher recruitment is a major issue, especially for Math and Science",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "#4a1a25", lineHeight: 1.7, marginBottom: "0.6rem" }}>• {p}</p>
              ))}
            </div>
            <div style={{ background: "white", padding: "2.5rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", borderTop: "3px solid #f0c040" }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.2rem" }}>Meeting with Students</h3>
              {[
                "Met all students from grades 1 to 10",
                "In 10th grade, there are 7 Majhi girls and 1 boy",
                "Most plan to continue education until 12th grade at minimum",
                "Parents are actively encouraging students to attend school",
                "Some students plan to go abroad to financially support their families",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "#4a1a25", lineHeight: 1.7, marginBottom: "0.6rem" }}>• {p}</p>
              ))}
            </div>
          </div>

          {/* Program Expansion */}
          <div style={{ background: "#2d0a14", padding: "3rem", marginBottom: "4rem" }}>
            <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.4rem", fontWeight: 700, color: "#f0c040", marginBottom: "2rem", textAlign: "center" }}>Program Expansion Plan</h3>
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div>
                <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "1rem" }}>Current State</h4>
                {["Covering expenses for girls only", "Basic tuition expenses", "Tuition expenses until 10th grade", "Not covering college expenses"].map((p, i) => (
                  <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "0.5rem" }}>• {p}</p>
                ))}
              </div>
              <div>
                <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f0c040", marginBottom: "1rem" }}>Proposed State</h4>
                {["Include boys in the program", "Cover coaching classes for 8th and 10th grade", "Extend tuition support until 12th grade", "Cover half of bachelor's degree tuition"].map((p, i) => (
                  <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "0.5rem" }}>• {p}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section id="gallery" style={{ padding: "7rem 2.5rem", background: "#2d0a14", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(240,192,64,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f0c040", display: "block", marginBottom: "0.8rem" }}>From the Field</span>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, color: "white" }}>Gulmi, Nepal — 2024</h2>
            <p style={{ maxWidth: 520, margin: "1rem auto 0", fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.97rem", lineHeight: 1.8 }}>
              Our team traveled to Gulmi in May 2024 to distribute supplies, meet families, and see our programs in action.
            </p>
          </div>

          {/* Masonry-style photo grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            gap: "0.75rem",
          }} className="photo-grid">
            {/* Large featured photo - spans 2 rows on the left */}
            <div style={{ gridRow: "span 2", overflow: "hidden", position: "relative" }}
              onMouseOver={e => { e.currentTarget.querySelector('img').style.transform = "scale(1.05)"; }}
              onMouseOut={e => { e.currentTarget.querySelector('img').style.transform = "scale(1)"; }}
            >
              <img src="/images/IMG_7211.jpg" alt="Students in school uniforms, Gulmi Nepal" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", transition: "transform 0.5s ease", display: "block", minHeight: 420 }} />
            </div>
            {/* Regular photos */}
            {[
              { src: "/images/IMG_7190.jpg", alt: "Girls in school uniforms, Nepal" },
              { src: "/images/IMG_7187.jpg", alt: "Child with school bag, Nepal" },
              { src: "/images/IMG_7185.jpg", alt: "Child at school, Gulmi" },
              { src: "/images/IMG_7197.jpg", alt: "Children in the community" },
            ].map(photo => (
              <div key={photo.src} style={{ overflow: "hidden", position: "relative", height: 200 }}
                onMouseOver={e => { e.currentTarget.querySelector('img').style.transform = "scale(1.05)"; }}
                onMouseOut={e => { e.currentTarget.querySelector('img').style.transform = "scale(1)"; }}
              >
                <img src={photo.src} alt={photo.alt} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", display: "block" }} />
              </div>
            ))}
            {/* Bottom wide photo - spans 2 columns */}
            <div style={{ gridColumn: "span 2", overflow: "hidden", position: "relative", height: 220 }}
              onMouseOver={e => { e.currentTarget.querySelector('img').style.transform = "scale(1.05)"; }}
              onMouseOut={e => { e.currentTarget.querySelector('img').style.transform = "scale(1)"; }}
            >
              <img src="/images/Study.jpg" alt="Community meeting in Gulmi, Nepal" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", display: "block" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem 1.5rem", background: "linear-gradient(to top, rgba(20,4,10,0.85) 0%, transparent 100%)" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.9)", fontStyle: "italic" }}>WaytoSchools team meeting with community families — Gulmi, Nepal 2024</p>
              </div>
            </div>
            {/* Side photo */}
            <div style={{ overflow: "hidden", position: "relative", height: 220 }}
              onMouseOver={e => { e.currentTarget.querySelector('img').style.transform = "scale(1.05)"; }}
              onMouseOut={e => { e.currentTarget.querySelector('img').style.transform = "scale(1)"; }}
            >
              <img src="/images/ShreeMajhi2.jpg" alt="School building, Majhi Gaun" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ── */}
      <section id="donate-cta" style={{
        padding: "7rem 2.5rem",
        background: "linear-gradient(150deg, #2d0a14 0%, #3a0d1a 50%, #2d0a14 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 75% 40%, rgba(240,192,64,0.08) 0%, transparent 55%)", pointerEvents: "none" }} />
        <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.1, pointerEvents: "none" }} viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path d="M0,180 L0,100 L120,50 L260,90 L400,30 L540,80 L680,20 L820,65 L960,35 L1100,75 L1240,45 L1440,80 L1440,180Z" fill="#f0c040" />
        </svg>
        <div style={{ maxWidth: 750, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="eyebrow" style={{ display: "block", textAlign: "center", color: "#f0c040" }}>Make a Difference</span>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: "2rem" }}>
            $40/month can send<br /><span style={{ color: "#f0c040", fontStyle: "italic" }}>10 children to school</span> for a year
          </h2>
          <div className="tiers" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2.5rem" }}>
            {[
              { amt: "$4", desc: "Sends 1 child to school for an entire year" },
              { amt: "$40", desc: "Supports 10 children for a full school year" },
              { amt: "$100+", desc: "Sponsors school supplies for a whole classroom" },
            ].map(t => (
              <div key={t.amt} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", padding: "1.5rem 1rem" }}>
                <div style={{ fontFamily: "'Lora', serif", fontSize: "2rem", fontWeight: 700, color: "#f0c040", marginBottom: "0.5rem" }}>{t.amt}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{t.desc}</div>
              </div>
            ))}
          </div>
          <a href={PAYPAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero" style={{ fontSize: "1rem", padding: "1.1rem 3.5rem" }}>
            Donate via PayPal
          </a>
          <p style={{ marginTop: "1rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.32)" }}>
            WaytoSchools is a 501(c)(3) certified nonprofit — your donation may be tax-deductible.
          </p>
        </div>
      </section>

      {/* ── HOW TO HELP ── */}
      <section id="help" style={{ padding: "7rem 2.5rem", background: "#fdf8f2" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="eyebrow" style={{ display: "block", textAlign: "center" }}>Get Involved</span>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>How to Help</h2>
          </div>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            {[
              { title: "Donate", desc: "Every dollar goes directly to children in Nepal. Skip one coffee a month and change a child's life for a year.", cta: "Donate via PayPal", link: PAYPAL_LINK },
              { title: "Spread the Word", desc: "Share our mission with friends, family, and on social media. Awareness is the first step to change.", cta: null },
              { title: "Volunteer in Nepal", desc: "Join us on the ground in Gulmi. Work directly with students, teachers, and families in Majhi Gaun.", cta: null },
              { title: "Partner with Us", desc: "Is your organization looking for a CSR partner? Let's work together to scale our impact across more villages.", cta: null },
            ].map(h => (
              <div key={h.title} style={{ borderLeft: "3px solid #8b1a3a", paddingLeft: "1.2rem" }}>
                <div>
                  <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>{h.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", lineHeight: 1.75, color: "#4a1a25", marginBottom: h.cta ? "0.75rem" : 0 }}>{h.desc}</p>
                  {h.cta && <a href={h.link} target="_blank" rel="noopener noreferrer" className="btn-donate">{h.cta}</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "7rem 2.5rem", background: "#f5ece0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <span className="eyebrow">Get in Touch</span>
              <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 3.5vw, 2.6rem)", fontWeight: 700, marginBottom: "1.2rem" }}>
                We'd Love to Hear from You
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "#4a1a25", marginBottom: "2rem" }}>
                Whether you want to volunteer, partner, or learn more about our work in Nepal — reach out and we'll get back to you soon.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                <div style={{ width: 38, height: 38, background: "#8b1a3a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <a href={`mailto:${EMAIL}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#2d0a14", textDecoration: "none", fontWeight: 500 }}>{EMAIL}</a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "2rem" }}>
                <div style={{ width: 38, height: 38, background: "#f0c040", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d0a14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <a href={PAYPAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-donate" style={{ fontFamily: "'DM Sans', sans-serif" }}>Donate via PayPal</a>
              </div>
              <div style={{ background: "#2d0a14", padding: "1.5rem", borderLeft: "4px solid #f0c040" }}>
                <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  "Creating access to education, awareness and information — one child, one family and one community at a time."
                </p>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", marginTop: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>WaytoSchools Mission</div>
              </div>
            </div>

            <div>
              {sent ? (
                <div style={{ background: "white", padding: "3rem", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Dhanyabad! Thank You!</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#4a1a25" }}>We'll be in touch with you soon.</p>
                </div>
              ) : (
                <div style={{ background: "white", padding: "2.5rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                    {["volunteer", "donate", "partner", "other"].map(t => (
                      <button key={t} onClick={() => setForm({ ...form, type: t })} style={{
                        padding: "0.4rem 1rem",
                        border: "1.5px solid",
                        borderColor: form.type === t ? "#8b1a3a" : "#e0cab0",
                        background: form.type === t ? "#8b1a3a" : "transparent",
                        color: form.type === t ? "white" : "#4a1a25",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.8rem", textTransform: "capitalize", cursor: "pointer",
                      }}>{t}</button>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <input className="field" placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    <input className="field" type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    <textarea className="field" placeholder="How would you like to help?" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
                    <button className="btn-donate" onClick={() => setSent(true)} style={{ alignSelf: "flex-start", padding: "0.8rem 2rem", fontSize: "0.9rem" }}>
                      Send Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#1a0509", color: "rgba(255,255,255,0.5)", padding: "3.5rem 2.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "2.5rem" }}>
            <div>
              <div style={{ marginBottom: "1rem" }}>
                <img src="/images/waytoschoolslogo.png" alt="WaytoSchools Logo" style={{ height: 48, width: "auto", objectFit: "contain" }} />
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "0.75rem" }}>
                A 501(c)(3) certified nonprofit creating access to education for under-privileged children in Nepal's villages.
              </p>
              <a href={`mailto:${EMAIL}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{EMAIL}</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "0.3rem" }}>Navigate</div>
              {NAV.map(n => (
                <span key={n.id} onClick={() => go(n.id)}
                  style={{ cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", transition: "color 0.2s" }}
                  onMouseOver={e => e.target.style.color = "#f0c040"}
                  onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.5)"}
                >{n.label}</span>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem" }}>© {new Date().getFullYear()} WaytoSchools.org · All Rights Reserved</span>
            <a href={PAYPAL_LINK} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#f0c040", textDecoration: "none" }}>Donate via PayPal →</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
