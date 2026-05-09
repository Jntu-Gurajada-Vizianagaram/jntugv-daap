'use client';

import { useState } from 'react';

export default function DirectorPage() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);


  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Director DAAP</h1>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ width: '200px', height: '200px', backgroundColor: '#e2e8f0', borderRadius: '50%', marginBottom: '2rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://jntugv.edu.in/static/media/jayasuma_daap.25e0843f00d08ee20077.jpeg" alt="Prof. Dr. G. Jaya Suma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=G+Jaya+Suma&background=1579e6&color=fff&size=200' }} />
        </div>
        <h2 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Prof. Dr. G. Jaya Suma</h2>
        <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '500' }}>Director of Academic Audit and Planning (DAAP)</h3>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ backgroundColor: '#eff6ff', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.9rem', fontWeight: '500' }}>B.Tech (CS&SE)</span>
          <span style={{ backgroundColor: '#eff6ff', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.9rem', fontWeight: '500' }}>M.Tech (CS&T)</span>
          <span style={{ backgroundColor: '#eff6ff', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.9rem', fontWeight: '500' }}>Ph.D. (CSE)</span>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
          Prof. Dr. G. Jaya Suma brings over 22 years of extensive experience in teaching, research, and administration. As the Director of Academic Audit and Planning (DAAP), she is responsible for the overall academic governance and strategic planning of Jawaharlal Nehru Technological University - Gurajada, Vizianagaram.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', marginTop: '1rem' }}>
          Her key responsibilities include the formulation of academic regulations, development of curriculum for all constituent and affiliated colleges, and conducting periodic academic audits to ensure compliance with NCTE/AICTE guidelines. She also oversees the management of academic calendars and the planning and approval of new academic programs.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', marginTop: '1rem' }}>
          In addition to her role as Director DAAP, Prof. Dr. G. Jaya Suma serves as the Director (i/c) of Alumni Relations and is an Executive Council member of JNTU-GV. She is a former Registrar of JNTU-GV and has served as the Head of the IT Department, Special Officer for the New Engineering College in Kurupam, and IQAC Coordinator.
        </p>

        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(0, 75, 141, 0.05)', borderRadius: '0.5rem', width: '100%', textAlign: 'left', borderLeft: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '700' }}>Contact Office</h4>
          <p style={{ color: 'var(--text-muted)' }}><strong>Email:</strong> daap@jntugv.edu.in (Official)</p>
          <p style={{ color: 'var(--text-muted)' }}><strong>Office:</strong> daapoffice@jntugv.edu.in</p>
          <p style={{ color: 'var(--text-muted)' }}><strong>Website:</strong> <a href="https://daap.jntugv.edu.in" style={{ color: 'var(--primary)' }}>daap.jntugv.edu.in</a></p>
          <p style={{ color: 'var(--text-muted)' }}><strong>Location:</strong> Administrative Building, JNTU-GV, Vizianagaram</p>
        </div>
      </div>
    </div>
  );
}
