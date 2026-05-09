'use client';

import { useState } from 'react';

const allProgrammes = [
  { sno: 1, name: 'B. Tech - Civil Engineering', eapcet: 'CIV', code: '01' },
  { sno: 2, name: 'B. Tech - Electrical & Electronics Engineering', eapcet: 'EEE', code: '02' },
  { sno: 3, name: 'B. Tech - Mechanical Engineering', eapcet: 'MEC', code: '03' },
  { sno: 4, name: 'B. Tech - Electronics and Communication Engineering', eapcet: 'ECE', code: '04' },
  { sno: 5, name: 'B. Tech - Computer Science Engineering', eapcet: 'CSE', code: '05' },
  { sno: 6, name: 'B. Tech - Computer Science Technology', eapcet: 'CST', code: '06' },
  { sno: 7, name: 'B. Tech - Computer Science & Information Technology', eapcet: 'CIT', code: '07' },
  { sno: 8, name: 'B. Tech - Chemical Engineering', eapcet: 'CHE', code: '08' },
  { sno: 9, name: 'B. Tech - Electronics and Instrumentation Engineering', eapcet: 'EIE', code: '10' },
  { sno: 10, name: 'B. Tech - Information Technology', eapcet: 'INF', code: '12' },
  { sno: 11, name: 'B. Tech - Electronics & Communication Technology', eapcet: 'ECT', code: '14' },
  { sno: 12, name: 'B. Tech - Electronics and Communication (Advanced Comm. Tech)', eapcet: 'ECA', code: '18' },
  { sno: 13, name: 'B. Tech - Electronics and Computer Engineering', eapcet: 'ECM', code: '19' },
  { sno: 14, name: 'B. Tech - Bio-Technology', eapcet: 'BIO', code: '23' },
  { sno: 15, name: 'B. Tech - Automobile Engineering', eapcet: 'AUT', code: '24' },
  { sno: 16, name: 'B. Tech - Mining Engineering', eapcet: 'MIN', code: '26' },
  { sno: 17, name: 'B. Tech - Petroleum Engineering', eapcet: 'PET/PEE', code: '27' },
  { sno: 18, name: 'B. Tech - Metallurgical Engineering', eapcet: 'MET', code: '34' },
  { sno: 19, name: 'Bachelor of Architecture', eapcet: 'BARCH', code: '40' },
  { sno: 20, name: 'Bachelor of Pharmacy', eapcet: 'BPHARM', code: '42' },
  { sno: 21, name: 'B. Tech - CSE (Artificial Intelligence and Machine Learning)', eapcet: 'CSIVI', code: '43' },
  { sno: 22, name: 'B. Tech - CSE (Data Science)', eapcet: 'CSD', code: '45' },
  { sno: 23, name: 'B. Tech - CSE (Cyber Security)', eapcet: 'CSC', code: '46' },
  { sno: 24, name: 'B. Tech - Pharmaceutical Engineering', eapcet: 'PHE', code: '55' },
  { sno: 25, name: 'B. Tech - Aerospace Engineering', eapcet: 'ASE', code: '56' },
  { sno: 26, name: 'B. Tech - CSE (Big Data Analytics)', eapcet: 'CBA', code: '58' },
  { sno: 27, name: 'B. Tech - Robotics', eapcet: 'RBT', code: '64' },
  { sno: 28, name: 'B. Tech - Electronics Engineering (VLSI Design and Technology)', eapcet: 'ET', code: '66' },
  { sno: 29, name: 'Bachelor of Business Administration', eapcet: 'BBA', code: '69' },
  { sno: 30, name: 'Bachelor of Computer Application', eapcet: 'BCA', code: '70' },
];

export default function ProgrammesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProgrammes = allProgrammes.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.eapcet.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.code.includes(searchTerm)
  );

  return (
    <div className="bg-pattern" style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Programmes Offered</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Official list of undergraduate and postgraduate technical programmes approved by JNTU-GV.
          </p>
        </div>

        <div className="card" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '50px', padding: '0.6rem 1.5rem', backgroundColor: '#f8fafc', width: '100%', maxWidth: '450px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.75rem' }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Search by branch name or code..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', background: 'transparent' }}
              />
            </div>
            <div style={{ backgroundColor: 'rgba(0, 75, 141, 0.05)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '700' }}>
              {allProgrammes.length} Programmes Listed
            </div>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'center', fontWeight: '700', width: '80px' }}>S.No</th>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', fontWeight: '700' }}>Branch Name</th>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'center', fontWeight: '700', width: '180px' }}>AP EAPCET Code</th>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'center', fontWeight: '700', width: '180px' }}>University Code</th>
                </tr>
              </thead>
              <tbody>
                {filteredProgrammes.length > 0 ? (
                  filteredProgrammes.map((prog, index) => (
                    <tr key={prog.code} style={{ borderBottom: '1px solid var(--border)', backgroundColor: index % 2 === 0 ? 'white' : '#fcfcfc', transition: 'background-color 0.2s' }}>
                      <td style={{ padding: '1.25rem 1.5rem', textAlign: 'center', fontWeight: '600', color: 'var(--text-muted)' }}>{index + 1}</td>
                      <td style={{ padding: '1.25rem 1.5rem', fontWeight: '700', color: '#0f172a' }}>{prog.name}</td>
                      <td style={{ padding: '1.25rem 1.5rem', textAlign: 'center' }}>
                        <span style={{ backgroundColor: '#f1f5f9', color: 'var(--primary)', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '800' }}>
                          {prog.eapcet}
                        </span>
                      </td>
                      <td style={{ padding: '1.25rem 1.5rem', textAlign: 'center' }}>
                        <span style={{ backgroundColor: 'rgba(0, 75, 141, 0.05)', color: 'var(--primary)', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '800', border: '1px solid rgba(0, 75, 141, 0.1)' }}>
                          {prog.code}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>No programmes found matching your search.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
