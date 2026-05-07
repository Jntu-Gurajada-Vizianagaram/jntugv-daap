export default function VCPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Vice Chancellor</h1>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ width: '200px', height: '200px', backgroundColor: '#e2e8f0', borderRadius: '50%', marginBottom: '2rem', overflow: 'hidden' }}>
          <img src="https://jntugv.edu.in/static/media/vc.1d93f5ebef1ab0a5e73b.png" alt="Vice Chancellor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h2 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Prof. V. V. Subba Rao</h2>
        <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '500' }}>Honorable Vice Chancellor, JNTU-GV</h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
          Prof. V. V. Subba Rao brings decades of academic and administrative experience to Jawaharlal Nehru Technological University - Gurajada, Vizianagaram. Under his visionary leadership, the university has achieved significant milestones in academic excellence, research, and infrastructure development.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', marginTop: '1rem' }}>
          His continuous focus is on empowering the student community with cutting-edge technology education while upholding the core values of integrity, innovation, and social responsibility.
        </p>
      </div>
    </div>
  );
}
