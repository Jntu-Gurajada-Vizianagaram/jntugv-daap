export default function AuditsPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Academic Audits</h1>
      <div className="card">
        <p className="card-text" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          The Academic Audit process is designed to ensure continuous quality enhancement and adherence to the academic standards prescribed by the University, UGC, and AICTE.
        </p>

        <div className="grid-2">
          <div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Audit Guidelines</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <a href="#" style={{ color: '#0f172a', fontWeight: '500' }}>Academic Audit Manual 2024</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <a href="#" style={{ color: '#0f172a', fontWeight: '500' }}>Faculty Information Proforma</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <a href="#" style={{ color: '#0f172a', fontWeight: '500' }}>Laboratory Evaluation Rubrics</a>
              </li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: '#eff6ff', padding: '2rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>College Audit Portal</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Principals of affiliated colleges must log in to the portal to submit their self-assessment reports and faculty details.</p>
            <a href="#" className="btn btn-primary">Login to Audit Portal</a>
          </div>
        </div>
      </div>
    </div>
  );
}
