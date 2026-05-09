import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'DAAP Portal | JNTU-GV',
  description: 'Directorate of Academic Audit and Planning (DAAP), JNTU-GV',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className="header">
          <div className="header-top">
            <div className="container">
              <div className="header-top-left">
                <span>Jawaharlal Nehru Technological University - Gurajada, Vizianagaram</span>
              </div>
              <div className="header-top-right">
                <a href="mailto:daap@jntugv.edu.in">Email: daap@jntugv.edu.in</a>
              </div>
            </div>
          </div>

          <div className="header-middle">
            <div className="container">
              <div className="logo-section">
                <img src="https://jntugv.edu.in/static/media/jntugvcev.b33bb43b07b2037ab043.jpg" alt="JNTU-GV Logo" className="logo-img" />
                <div className="logo-text">
                  <span className="logo-title">Directorate of Academic Audit and Planning (DAA&P)</span>
                  <span className="logo-subtitle">Jawaharlal Nehru Technological University - Gurajada, Vizianagaram</span>
                </div>
              </div>
            </div>
          </div>

          <div className="header-nav">
            <div className="container">
              <nav>
                <ul className="nav-menu">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link">
                      Administration
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                    <div className="dropdown">
                      <Link href="/vc" className="dropdown-item">Vice Chancellor</Link>
                      <Link href="/registrar" className="dropdown-item">Registrar</Link>
                      <Link href="/director" className="dropdown-item">Director DAA&P</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link">
                      Academics
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                    <div className="dropdown">
                      <Link href="/programmes" className="dropdown-item">Programmes Offered</Link>
                      <Link href="/syllabus" className="dropdown-item">Academic Syllabus</Link>
                      <Link href="/regulations" className="dropdown-item">Academic Regulations</Link>
                      <Link href="/calendar" className="dropdown-item">Academic Calendar</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link">
                      Affiliations
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                    <div className="dropdown">
                      <Link href="/affiliated" className="dropdown-item">Affiliated Colleges</Link>
                      <Link href="/autonomous" className="dropdown-item">Autonomous Colleges</Link>
                      <Link href="/ffc" className="dropdown-item">FFC Inspections</Link>
                      <Link href="/circulars" className="dropdown-item">Circulars & Notices</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" className="nav-link">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer" style={{ borderTop: '1px solid #e2e8f0', backgroundColor: '#f8fafc', paddingTop: '5rem', paddingBottom: '3rem' }}>
          <div className="container">
            <div className="footer-grid" style={{ marginBottom: '4rem' }}>
              <div style={{ flex: '1.5', minWidth: '300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <img src="/favicon.ico" alt="JNTU-GV Logo" style={{ height: '50px', width: 'auto' }} />
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#0f172a', margin: 0 }}>JNTU-GV DAAP</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, fontWeight: '600' }}>Directorate of Academic Audit & Planning</p>
                  </div>
                </div>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', maxWidth: '400px' }}>
                  Setting the benchmark for technical education and institutional planning in the North Coastal Andhra region.
                </p>
              </div>
              <div>
                <h3 className="footer-heading" style={{ color: '#0f172a', fontWeight: '800', marginBottom: '1.5rem' }}>Quick Access</h3>
                <ul className="footer-links">
                  <li><Link href="/syllabus" className="footer-link">Syllabus Repository</Link></li>
                  <li><Link href="/calendar" className="footer-link">Academic Calendar</Link></li>
                  <li><Link href="/affiliated" className="footer-link">Affiliated Colleges</Link></li>
                  <li><Link href="/circulars" className="footer-link">DAAP Circulars</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="footer-heading" style={{ color: '#0f172a', fontWeight: '800', marginBottom: '1.5rem' }}>Governance</h3>
                <ul className="footer-links">
                  <li><Link href="/regulations" className="footer-link">Academic Regulations</Link></li>
                  <li><Link href="/director" className="footer-link">Director's Message</Link></li>
                  <li><Link href="/audits" className="footer-link">Academic Audits</Link></li>
                  <li><Link href="/contact" className="footer-link">Office Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="footer-heading" style={{ color: '#0f172a', fontWeight: '800', marginBottom: '1.5rem' }}>Official Contact</h3>
                <div style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  <p style={{ margin: '0 0 0.5rem 0' }}>📍 JNTU-GV Campus, Vizianagaram</p>
                  <p style={{ margin: '0 0 0.5rem 0' }}>📧 <a href="mailto:daap@jntugv.edu.in" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>daap@jntugv.edu.in</a></p>
                  <p style={{ margin: 0 }}>📞 +91 08922 277388</p>
                </div>
              </div>
            </div>
            <div className="footer-bottom" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2.5rem', textAlign: 'center' }}>
              <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                &copy; {new Date().getFullYear()} Jawaharlal Nehru Technological University - Gurajada, Vizianagaram. All Rights Reserved.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.75rem' }}>
                Designed & Developed by <a href="https://dmc.jntugv.edu.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none' }}>Digital Monitoring Cell (DMC)</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
