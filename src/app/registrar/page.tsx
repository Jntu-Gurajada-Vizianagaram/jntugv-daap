export default function RegistrarPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Registrar</h1>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ width: '200px', height: '200px', backgroundColor: '#e2e8f0', borderRadius: '50%', marginBottom: '2rem', overflow: 'hidden' }}>
          <img src="https://jntugv.edu.in/static/media/registrar_new.4be86c91745d5166c94c.jpeg" alt="Registrar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h2 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Prof. D. Rajya Lakshmi</h2>
        <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '500' }}>Registrar, JNTU-GV</h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
          As the Registrar of JNTU-GV, Prof. D. Rajya Lakshmi plays a pivotal role in the administration and academic governance of the university. She is responsible for executing the policies laid down by the Executive Council and ensuring the smooth functioning of all constituent and affiliated colleges.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', marginTop: '1rem' }}>
          With a strong commitment to transparency and efficiency, she bridges the communication between the university administration, faculty, and the student body.
        </p>
      </div>
    </div>
  );
}
