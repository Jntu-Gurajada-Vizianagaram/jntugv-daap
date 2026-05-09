export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div style={{ animation: 'fadeInUp 1s ease-out' }}>
            <span style={{ 
              backgroundColor: 'rgba(255, 165, 0, 0.2)', 
              color: 'var(--secondary)', 
              padding: '0.5rem 1.5rem', 
              borderRadius: '50px', 
              fontSize: '0.9rem', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              display: 'inline-block',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255, 165, 0, 0.3)'
            }}>
              Jawaharlal Nehru Technological University - Gurajada
            </span>
            <h1 style={{ lineHeight: '1.1' }}>Directorate of Academic Audit and Planning</h1>
            <p>
              Fostering excellence, streamlining operations, and enhancing academic quality across all constituent and affiliated colleges of JNTU-GV through a unified planning and audit framework.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              <a href="#services" className="btn btn-primary">Explore Services</a>
              <a href="#about" className="btn btn-outline">About DAAP</a>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      <section id="stats" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="grid-4" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '1.5rem' 
          }}>
            {[
              { label: 'Affiliated Colleges', value: '37', color: 'var(--primary)', icon: '🏛️' },
              { label: 'Autonomous Institutions', value: '17', color: 'var(--deep-purple)', icon: '🎓' },
              { label: 'Constituent Colleges', value: '03', color: '#059669', icon: '🏗️' },
              { label: 'Academic Programmes', value: '150+', color: 'var(--secondary)', icon: '📚' }
            ].map((stat, i) => (
              <div key={i} className="card" style={{ 
                textAlign: 'center', 
                padding: '2rem 1.5rem',
                borderTop: `6px solid ${stat.color}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: stat.color, marginBottom: '0.5rem', lineHeight: '1' }}>{stat.value}</div>
                <div style={{ color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section" style={{ backgroundColor: 'var(--background)', paddingTop: '6rem' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div style={{ order: 2 }}>
              <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>University Governance</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', marginTop: '0.5rem' }}>About Directorate</h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                The **Directorate of Academic Audit and Planning (DAAP)** is responsible for the overall academic governance and strategic planning of JNTU-GV. We are committed to fostering an environment of excellence by bridging the gap between planning and execution.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                Under the leadership of **Prof. Dr. G. Jaya Suma**, DAAP facilitates the formulation of rigorous academic regulations, curriculum development, and periodic audits to maintain the highest standards of technical education in the North Coastal Andhra region.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="/director" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>Director's Profile</a>
                <a href="/regulations" className="btn btn-outline" style={{ padding: '0.8rem 2rem', color: 'var(--primary)', borderColor: 'var(--primary)' }}>Academic Rules</a>
              </div>
            </div>
            <div style={{ position: 'relative', order: 1 }}>
              <div style={{ 
                backgroundColor: 'white', 
                borderRadius: 'var(--radius-lg)', 
                padding: '2.5rem', 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--border)',
                position: 'relative',
                zIndex: 2
              }}>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--primary)', fontWeight: '800' }}>Primary Responsibilities</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    { text: "Curriculum Development", desc: "Formulation of academic regulations and syllabus for all colleges." },
                    { text: "Academic Audits", desc: "Conducting periodic audits ensuring compliance with university and AICTE guidelines." },
                    { text: "Program Approval", desc: "Planning and approval of new academic programs and institution-level expansions." },
                    { text: "Institutional Planning", desc: "Oversight of academic calendars and university-wide strategic planning." }
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                      <div style={{ 
                        backgroundColor: 'rgba(0, 75, 141, 0.1)', 
                        color: 'var(--primary)', 
                        borderRadius: '12px', 
                        width: '36px', 
                        height: '36px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        flexShrink: 0 
                      }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', display: 'block' }}>{item.text}</span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ 
                position: 'absolute', 
                top: '-30px', 
                left: '-30px', 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--deep-purple) 100%)', 
                borderRadius: 'var(--radius-lg)', 
                zIndex: 1,
                opacity: 0.1
              }}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 className="section-title">Academic Portals</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Access critical academic resources, institutional directories, and planning documents through our dedicated portals.</p>
          </div>
          
          <div className="grid-3" style={{ marginBottom: '3rem' }}>
            <div className="card">
              <div className="card-icon" style={{ backgroundColor: 'rgba(0, 75, 141, 0.1)', color: 'var(--primary)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <h3 className="card-title">Academic Syllabus</h3>
              <p className="card-text">Detailed course structures and syllabi for R23, R20, and earlier regulations across all departments.</p>
              <a href="/syllabus" className="card-link">Explore Syllabus <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
            <div className="card">
              <div className="card-icon" style={{ backgroundColor: 'rgba(255, 165, 0, 0.1)', color: 'var(--secondary)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <h3 className="card-title">Academic Calendar</h3>
              <p className="card-text">Official academic schedules for B.Tech, B.Pharm, M.Tech, and MBA programs for the current session.</p>
              <a href="/calendar" className="card-link" style={{ color: 'var(--secondary)' }}>View Calendar <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
            <div className="card">
              <div className="card-icon" style={{ backgroundColor: 'rgba(55, 10, 104, 0.1)', color: 'var(--deep-purple)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h3 className="card-title">Fact Finding</h3>
              <p className="card-text">Institutional requirements, FFC application portals, and inspection guidelines for annual affiliation.</p>
              <a href="/ffc" className="card-link" style={{ color: 'var(--deep-purple)' }}>FFC Portal <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
          </div>

          <div className="grid-2">
            <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: '2.5rem', padding: '2.5rem' }}>
              <div style={{ fontSize: '3.5rem', flexShrink: 0 }}>🏛️</div>
              <div style={{ flex: 1 }}>
                <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>Affiliated Colleges</h3>
                <p className="card-text" style={{ marginBottom: '1.5rem' }}>Directory of Engineering, Pharmacy, and Management colleges across 6 districts.</p>
                <a href="/affiliated" className="card-link">View Directory <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
              </div>
            </div>
            <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: '2.5rem', padding: '2.5rem' }}>
              <div style={{ fontSize: '3.5rem', flexShrink: 0 }}>🎓</div>
              <div style={{ flex: 1 }}>
                <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>Autonomous Institutions</h3>
                <p className="card-text" style={{ marginBottom: '1.5rem' }}>List of premier institutions granted autonomous status by UGC and JNTU-GV.</p>
                <a href="/autonomous" className="card-link" style={{ color: 'var(--deep-purple)' }}>View List <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--primary)', padding: '6rem 0', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>Ensuring Academic Integrity & Growth</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.2rem', opacity: 0.9 }}>
            Join us in our mission to standardize and elevate technical education. Stay updated with the latest regulations, circulars, and academic announcements.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="/circulars" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>Latest Circulars</a>
            <a href="/contact" className="btn btn-outline">Contact Office</a>
          </div>
        </div>
      </section>
    </>
  );
}
