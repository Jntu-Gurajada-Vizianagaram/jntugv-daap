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
              <div>Jawaharlal Nehru Technological University - Gurajada, Vizianagaram</div>
              <div>Email: daap@jntugv.edu.in</div>
            </div>
          </div>
          <div className="header-main">
            <div className="container">
              <div className="logo-section">
                <div className="logo-text">
                  <span className="logo-title">JNTU-GV</span>
                  <span className="logo-subtitle">DAAP Portal</span>
                </div>
              </div>
              <nav>
                <ul className="nav-menu">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link" style={{ cursor: 'pointer' }}>
                      Administration
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                    <div className="dropdown">
                      <Link href="/vc" className="dropdown-item">Vice Chancellor</Link>
                      <Link href="/registrar" className="dropdown-item">Registrar</Link>
                      <Link href="/director" className="dropdown-item">Director DAAP</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link" style={{ cursor: 'pointer' }}>
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
                    <span className="nav-link" style={{ cursor: 'pointer' }}>
                      Affiliations & Audit
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                    <div className="dropdown">
                      <Link href="/affiliated" className="dropdown-item">Affiliated Colleges</Link>
                      <Link href="/circulars" className="dropdown-item">Circulars & Notices</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link href="#contact" className="nav-link">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <h3 className="footer-heading">Directorate of Academic Audit and Planning (DAAP)</h3>
                <p className="footer-text">
                  Jawaharlal Nehru Technological University - Gurajada, Vizianagaram<br />
                  Ensuring academic excellence and comprehensive planning for constituent and affiliated colleges.
                </p>
              </div>
              <div>
                <h3 className="footer-heading">Quick Links</h3>
                <ul className="footer-links">
                  <li><Link href="/syllabus" className="footer-link">Academic Syllabus</Link></li>
                  <li><Link href="/calendar" className="footer-link">Academic Calendar</Link></li>
                  <li><Link href="/affiliated" className="footer-link">Affiliated Colleges</Link></li>
                  <li><Link href="/circulars" className="footer-link">Circulars</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="footer-heading">Contact Us</h3>
                <p className="footer-text">
                  <strong>Director DAAP</strong><br />
                  JNTU-GV, Vizianagaram<br />
                  Email: daap@jntugv.edu.in
                </p>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; {new Date().getFullYear()} JNTU-GV Vizianagaram. All Rights Reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
