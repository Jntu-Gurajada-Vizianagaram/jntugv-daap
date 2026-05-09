'use client';

export default function AuditsPage() {
  return (
    <div className="bg-pattern" style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Academic Audits</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Ensuring continuous quality enhancement and adherence to the academic standards prescribed by JNTU-GV, UGC, and AICTE.
          </p>
        </div>

        <div className="card" style={{ padding: '3rem', marginBottom: '3rem' }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#0f172a' }}>Audit Objectives</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                The academic audit is a peer-review process including a self-study and a site visit by peers from within and outside the university. It focuses on how faculty members organize their work and how they ensure student learning.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "Assessment of course outcomes and mapping",
                  "Evaluation of teaching-learning methodologies",
                  "Review of laboratory infrastructure and safety",
                  "Verification of faculty credentials and workloads"
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ color: 'var(--primary)', backgroundColor: 'rgba(0, 75, 141, 0.1)', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span style={{ fontSize: '1rem', color: '#334155', fontWeight: '500' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ 
              backgroundColor: '#f8fafc', 
              padding: '2.5rem', 
              borderRadius: '20px', 
              border: '1px solid #e2e8f0',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🛡️</div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Audit Portal</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Principals of affiliated colleges must log in to the portal to submit their self-assessment reports and faculty details for the upcoming academic year.
              </p>
              <a href="#" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>Login to Audit Portal</a>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#0f172a', fontWeight: '800', textAlign: 'center' }}>Audit Guidelines & Resources</h2>
          <div className="grid-3">
            {[
              { title: "Academic Audit Manual 2024", icon: "📋" },
              { title: "Faculty Information Proforma", icon: "📝" },
              { title: "Laboratory Evaluation Rubrics", icon: "🔬" }
            ].map((doc, i) => (
              <div key={i} className="card hover-lift" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{doc.icon}</div>
                <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{doc.title}</h4>
                <a href="#" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                  Download PDF <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
