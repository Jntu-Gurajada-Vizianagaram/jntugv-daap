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

      <section id="about" className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <h2 className="section-title">About DAAP</h2>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Unified Academic Administration</h3>
              <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                The Directorate of Academic Audit and Planning (DAAP) serves as the core administrative body governing the academic curriculum and quality standards of the university.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                By centralizing both planning and auditing functions, DAAP ensures seamless coordination in syllabus formulation, academic calendar scheduling, and the rigorous auditing of all constituent and affiliated colleges under Jawaharlal Nehru Technological University - Gurajada, Vizianagaram.
              </p>
            </div>
            <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Core Functions</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.1rem' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Formulating and updating academic regulations and syllabi</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.1rem' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Designing comprehensive academic calendars for all programs</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.1rem' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Conducting Fact Finding Committee (FFC) inspections</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.1rem' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Executing strict academic audits across affiliated colleges</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section" style={{ backgroundColor: '#eff6ff' }}>
        <div className="container">
          <h2 className="section-title">DAAP Services & Portals</h2>
          <div className="grid-3" style={{ marginBottom: '2rem' }}>
            <div className="card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <h3 className="card-title">Academic Syllabus</h3>
              <p className="card-text">Access the latest course structures and detailed syllabi for all undergraduate and postgraduate programs.</p>
              <a href="/syllabus" className="card-link">View Syllabus <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <h3 className="card-title">Academic Calendar</h3>
              <p className="card-text">Stay updated with the official academic schedules, examination dates, and holidays for the current year.</p>
              <a href="/calendar" className="card-link">View Calendar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h3 className="card-title">Academic Regulations</h3>
              <p className="card-text">Read the comprehensive rules, evaluation guidelines, and academic policies governing the institution.</p>
              <a href="/regulations" className="card-link">View Regulations <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <h3 className="card-title">Affiliated Colleges</h3>
              <p className="card-text">Explore the directory of colleges affiliated with JNTU-GV, including courses offered and intake capacity.</p>
              <a href="/affiliated" className="card-link">View Colleges <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
