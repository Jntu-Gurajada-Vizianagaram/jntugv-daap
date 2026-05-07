export default function FFCPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Fact Finding Committee (FFC)</h1>
      <div className="card">
        <p className="card-text" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          The Fact Finding Committee (FFC) is responsible for conducting physical and infrastructural inspections of colleges seeking affiliation or renewal of affiliation with JNTU-GV.
        </p>

        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>FFC Guidelines & Proformas</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ marginBottom: '0.25rem' }}>FFC Application Format (Engineering & Technology)</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Format for submitting affiliation request for the academic year 2024-25.</p>
            </div>
            <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Download</a>
          </div>

          <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ marginBottom: '0.25rem' }}>FFC Application Format (Pharmacy)</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Format for submitting affiliation request for the academic year 2024-25.</p>
            </div>
            <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Download</a>
          </div>

          <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ marginBottom: '0.25rem' }}>Deficiency Compliance Report Format</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Format for colleges to submit compliance reports after FFC inspection.</p>
            </div>
            <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Download</a>
          </div>
        </div>

      </div>
    </div>
  );
}
