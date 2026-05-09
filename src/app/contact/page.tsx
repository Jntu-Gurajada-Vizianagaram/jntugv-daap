'use client';

export default function ContactPage() {
  return (
    <div className="bg-pattern" style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Contact Us</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Have questions or need assistance? Reach out to the Directorate of Academic Audit and Planning (DAAP) through the following contact channels.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '2.5rem', marginBottom: '4rem' }}>
          <div className="card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ 
                backgroundColor: 'rgba(0, 75, 141, 0.1)', 
                color: 'var(--primary)', 
                padding: '1rem', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <h2 style={{ fontSize: '1.75rem', color: '#0f172a', fontWeight: '800' }}>Email Enquiries</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: '700' }}>General Office</h3>
                <a href="mailto:daapoffice@jntugv.edu.in" style={{ color: '#0f172a', fontWeight: '600', fontSize: '1.25rem', display: 'block', transition: 'color 0.2s' }} className="hover-text-primary">daapoffice@jntugv.edu.in</a>
              </div>

              <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: '700' }}>Official Director Mail</h3>
                <a href="mailto:daap@jntugv.edu.in" style={{ color: '#0f172a', fontWeight: '600', fontSize: '1.25rem', display: 'block', transition: 'color 0.2s' }} className="hover-text-primary">daap@jntugv.edu.in</a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'var(--text-muted)', fontWeight: '700' }}>Academic Audit</h3>
                  <a href="mailto:daa@jntugv.edu.in" style={{ color: 'var(--primary)', fontWeight: '600' }}>daa@jntugv.edu.in</a>
                </div>
                <div>
                  <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'var(--text-muted)', fontWeight: '700' }}>Academic Planning</h3>
                  <a href="mailto:dap@jntugv.edu.in" style={{ color: 'var(--primary)', fontWeight: '600' }}>dap@jntugv.edu.in</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ 
                backgroundColor: 'rgba(55, 10, 104, 0.1)', 
                color: 'var(--deep-purple)', 
                padding: '1rem', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h2 style={{ fontSize: '1.75rem', color: '#0f172a', fontWeight: '800' }}>Our Location</h2>
            </div>

            <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
                <p style={{ fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>Directorate of Academic Audit and Planning</p>
                <p>Administrative Building,</p>
                <p>Jawaharlal Nehru Technological University - Gurajada,</p>
                <p>Vizianagaram, Andhra Pradesh - 535003</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px dashed #e2e8f0' }}>
                  <span style={{ fontWeight: '600', color: '#334155' }}>Working Hours</span>
                  <span>10:00 AM - 05:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px dashed #e2e8f0' }}>
                  <span style={{ fontWeight: '600', color: '#334155' }}>Working Days</span>
                  <span>Monday - Saturday</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ef4444' }}>
                  <span style={{ fontWeight: '600' }}>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          padding: '4rem', 
          textAlign: 'center', 
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--deep-purple) 100%)', 
          color: 'white',
          border: 'none',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white', fontWeight: '800' }}>Immediate Support</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            Under the guidance of <strong>Prof. Dr. G. Jaya Suma</strong>, the DAAP office is committed to resolving urgent academic matters and institutional queries promptly.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:daap@jntugv.edu.in" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)', border: 'none', padding: '1rem 2.5rem' }}>
              Official Mail
            </a>
            <a href="/director" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', padding: '1rem 2.5rem' }}>
              Director's Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
