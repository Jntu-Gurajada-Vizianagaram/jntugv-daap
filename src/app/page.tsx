export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Directorate of Academic Audit and Planning</h1>
          <p>
            Fostering excellence, streamlining operations, and enhancing academic quality across all constituent and affiliated colleges of JNTU-GV through a unified planning and audit framework.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="#services" className="btn btn-primary">Explore Services</a>
            <a href="#about" className="btn btn-outline">About DAAP</a>
          </div>
        </div>
      </section>

      <section id="about" className="section" style={{ backgroundColor: 'var(--background)', paddingTop: '4rem' }}>
        <div className="container">
          <div className="grid-3" style={{ marginBottom: '4rem' }}>
            <div className="card" style={{ textAlign: 'center', borderTop: '6px solid var(--primary)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>45+</div>
              <div style={{ color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>Affiliated Colleges</div>
            </div>
            <div className="card" style={{ textAlign: 'center', borderTop: '6px solid var(--deep-purple)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--deep-purple)', marginBottom: '0.5rem' }}>17+</div>
              <div style={{ color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>Autonomous Institutions</div>
            </div>
            <div className="card" style={{ textAlign: 'center', borderTop: '6px solid var(--secondary)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '0.5rem' }}>150+</div>
              <div style={{ color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>Academic Programmes</div>
            </div>
          </div>

          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>About Directorate</h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                The **Directorate of Academic Audit and Planning (DAAP)** is the cornerstone of academic governance at JNTU-GV. We are committed to fostering an environment of excellence by bridging the gap between planning and execution.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                From formulating state-of-the-art curricula to conducting rigorous academic audits, DAAP ensures that every constituent and affiliated college adheres to the highest standards of technical education.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="/director" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>Director's Profile</a>
                <a href="/regulations" className="btn btn-outline" style={{ padding: '0.8rem 2rem', color: 'var(--primary)', borderColor: 'var(--primary)' }}>Academic Rules</a>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-lg)', padding: '3rem', color: 'white', boxShadow: '20px 20px 60px rgba(0, 75, 141, 0.2)' }}>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'white', fontWeight: '800' }}>Strategic Objectives</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    "Standardization of Curriculum & Syllabus",
                    "Seamless Academic Calendar Execution",
                    "Rigorous Fact-Finding Inspections",
                    "Institutional Quality Enhancement Audit"
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--secondary)', borderRadius: '20px', zIndex: -1 }}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section" style={{ backgroundColor: '#fdfdfd' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>Directorate Portals</h2>
            <p style={{ maxWidth: '400px', color: 'var(--text-muted)', fontSize: '1rem' }}>Centralized access to all academic resources, regulations, and institutional directories.</p>
          </div>
          <div className="grid-3" style={{ marginBottom: '3rem' }}>
            <div className="card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <h3 className="card-title">Academic Syllabus</h3>
              <p className="card-text">Detailed course structures and syllabi for R23, R20, and earlier regulations across all departments.</p>
              <a href="/syllabus" className="card-link">Explore Syllabus <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <h3 className="card-title">Academic Calendar</h3>
              <p className="card-text">Current academic schedules for B.Tech, B.Pharm, M.Tech, and MBA programs for the academic year 2024-25.</p>
              <a href="/calendar" className="card-link">View Calendar <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h3 className="card-title">Fact Finding Committee</h3>
              <p className="card-text">Access FFC application portals, inspection guidelines, and institutional requirements for annual affiliation.</p>
              <a href="/ffc" className="card-link">FFC Portal <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
          </div>
          <div className="grid-2">
            <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: '2rem', padding: '2rem 3rem' }}>
              <div className="card-icon" style={{ marginBottom: 0, width: '5rem', height: '5rem', fontSize: '2rem' }}>🏛️</div>
              <div style={{ flex: 1 }}>
                <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>Affiliated Institutions</h3>
                <p className="card-text" style={{ marginBottom: '1rem' }}>Directory of all Engineering, Pharmacy, and Management colleges affiliated with JNTU-GV.</p>
                <a href="/affiliated" className="card-link">View Directory <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
              </div>
            </div>
            <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: '2rem', padding: '2rem 3rem' }}>
              <div className="card-icon" style={{ marginBottom: 0, width: '5rem', height: '5rem', fontSize: '2rem', backgroundColor: 'rgba(55, 10, 104, 0.1)', color: 'var(--deep-purple)' }}>🎓</div>
              <div style={{ flex: 1 }}>
                <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>Autonomous Colleges</h3>
                <p className="card-text" style={{ marginBottom: '1rem' }}>List of premier institutions granted autonomous status by UGC and JNTU-GV.</p>
                <a href="/autonomous" className="card-link" style={{ color: 'var(--deep-purple)' }}>View List <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
