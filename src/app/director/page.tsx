'use client';

export default function DirectorPage() {
  return (
    <div className="bg-pattern" style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Director's Profile</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Leading the vision for academic excellence and strategic planning at JNTU-GV.
          </p>
        </div>

        <div className="grid-2" style={{ gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start' }}>
          {/* Left Sidebar: Sticky Profile Card */}
          <div style={{ position: 'sticky', top: '2rem' }}>
            <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ 
                width: '180px', 
                height: '180px', 
                borderRadius: '50%', 
                backgroundColor: '#f1f5f9', 
                margin: '0 auto 1.5rem',
                border: '4px solid var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem'
              }}>
                👩‍🏫
              </div>
              <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '0.5rem', fontWeight: '800' }}>Prof. Dr. G. Jaya Suma</h2>
              <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Director of Academic Audit & Planning
              </p>
              
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', textAlign: 'left' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                  <a href="mailto:daap@jntugv.edu.in" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>daap@jntugv.edu.in</a>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Designation</div>
                  <div style={{ color: '#334155', fontWeight: '600' }}>Professor of Information Technology</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Education</div>
                  <div style={{ color: '#334155', fontWeight: '600' }}>B.Tech (CS&SE), M.Tech (CS&T), Ph.D (CSE)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Info */}
          <div>
            <section className="card" style={{ padding: '3rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#0f172a', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>Professional Biography</h3>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Dr. G. Jaya Suma is currently working as a Professor in the Department of Information Technology and serves as the Director of Academic Audit and Planning at JNTU-GV, Vizianagaram. She also holds the positions of Director (i/c) of Alumni Relations and is an Executive Council member of the university.
              </p>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8' }}>
                With over 22 years of extensive experience in Teaching, Research, and Administration within Engineering Education, she has significantly contributed to the academic and administrative growth of the institution.
              </p>
            </section>

            <section className="card" style={{ padding: '3rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0f172a' }}>Administrative Contributions</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  "Currently Director of Academic Audit and Planning, JNTU-GV since March 2026.",
                  "Former Registrar of JNTU-GV from 2024-2026.",
                  "Executive Council member of JNTU-GV (Nov 2022 to Sept 2025).",
                  "Head, Department of Information Technology, UCE (2014 to Aug 2022).",
                  "Special Officer, New Engineering College, JNTU-GV, Kurupam (May 2020 to Oct 2022).",
                  "IQAC Coordinator, JNTU-GV College of Engineering (CEV) (Jan 2020 to Sept 2022).",
                  "SPOC for NPTEL Online Courses to date.",
                  "Convener for Women Empowerment & Grievance Cell, JNTUK/UCE."
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', color: '#475569', fontSize: '1.05rem', lineHeight: '1.6' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '800' }}>❖</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid-2" style={{ gap: '2rem' }}>
              <section className="card" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#0f172a' }}>Research Impact</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    "Awarded 6 PhDs; 8 scholars currently working.",
                    "Published 3 Patents.",
                    "54 International Journals & 22 Conferences.",
                    "Published 5 Book Chapters.",
                    "Organized 32 Workshops."
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '0.75rem', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid var(--secondary)', color: '#334155', fontWeight: '600', fontSize: '0.95rem' }}>
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="card" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#0f172a' }}>Awards & Honors</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    "CMI Level 5 in Management and Leadership-2021",
                    "Outstanding Women in Engineering - VIWA 2017",
                    "Woman Researcher in Science and Technology - 2020",
                    "Authored 'Artificial Intelligence & Machine Learning-2022'"
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '0.75rem', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #059669', color: '#334155', fontWeight: '600', fontSize: '0.95rem' }}>
                      🏆 {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="card" style={{ padding: '3rem', marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0f172a' }}>Professional Memberships</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {[
                  "Member of CSI (ID – 01170956)",
                  "Senior Fellow of IEEE-92245858",
                  "Member of ISTE- (ID – LM44520)",
                  "Faculty sponsor of IEEE WIE",
                  "Faculty sponsor of ACM CHAPTER"
                ].map((item, i) => (
                  <span key={i} style={{ backgroundColor: 'rgba(0, 75, 141, 0.05)', color: 'var(--primary)', padding: '0.5rem 1.25rem', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem' }}>
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
