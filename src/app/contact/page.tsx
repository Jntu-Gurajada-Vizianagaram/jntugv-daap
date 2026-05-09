'use client';

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Contact Us</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
        Have questions or need assistance? Reach out to the Directorate of Academic Audit and Planning (DAAP) through the following contact channels.
      </p>

      <div className="grid-2" style={{ gap: '2rem', marginBottom: '4rem' }}>
        <div className="card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ backgroundColor: '#eff6ff', padding: '0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <h2 style={{ fontSize: '1.5rem', color: '#0f172a' }}>Email Communications</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ borderBottom: '1px solid #f1f5f9', pb: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#334155' }}>Office Contact</h3>
              <a href="mailto:daapoffice@jntugv.edu.in" style={{ color: 'var(--primary)', fontWeight: '500', fontSize: '1.1rem' }}>daapoffice@jntugv.edu.in</a>
            </div>

            <div style={{ borderBottom: '1px solid #f1f5f9', pb: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#334155' }}>Official Mail</h3>
              <a href="mailto:daap@jntugv.edu.in" style={{ color: 'var(--primary)', fontWeight: '500', fontSize: '1.1rem' }}>daap@jntugv.edu.in</a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#334155' }}>Academic Audit</h3>
                <a href="mailto:daa@jntugv.edu.in" style={{ color: 'var(--primary)', fontWeight: '500' }}>daa@jntugv.edu.in</a>
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#334155' }}>Academic Planning</h3>
                <a href="mailto:dap@jntugv.edu.in" style={{ color: 'var(--primary)', fontWeight: '500' }}>dap@jntugv.edu.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ backgroundColor: '#eff6ff', p: '0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h2 style={{ fontSize: '1.5rem', color: '#0f172a' }}>Our Location</h2>
          </div>

          <div style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.1rem' }}>
            <p style={{ fontWeight: '600', color: '#334155', marginBottom: '0.5rem' }}>Directorate of Academic Audit and Planning</p>
            <p>Administrative Building,</p>
            <p>Jawaharlal Nehru Technological University - Gurajada,</p>
            <p>Vizianagaram, Andhra Pradesh - 535003</p>

            <div style={{ marginTop: '2rem', pt: '1.5rem', borderTop: '1px solid #f1f5f9' }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>Working Hours:</strong></p>
              <p>Monday - Saturday: 10:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem', textAlign: 'center', backgroundColor: 'var(--primary)', color: 'white' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Need Immediate Support?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>
          For urgent academic matters or verification requests, please visit the DAAP office in person during working hours or send a formal letter to the Director.
        </p>
        <a href="mailto:daapoffice@jntugv.edu.in" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)', border: 'none', padding: '0.75rem 2rem' }}>Send an Inquiry</a>
      </div>
    </div>
  );
}
