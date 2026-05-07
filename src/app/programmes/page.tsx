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
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Programmes Offered</h1>
      
      <div className="card" style={{ padding: '2rem' }}>
        {/* Search Bar matching JNTU-GV design */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '0.375rem', padding: '0.5rem 1rem', backgroundColor: 'white' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search programs..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', color: '#0f172a' }}
          />
        </div>

        {/* Table exactly matching JNTU-GV official format */}
        <div style={{ overflowX: 'auto', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
            <thead>
              <tr style={{ backgroundColor: '#2D1B5E', color: 'white' }}>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>SNo</th>
                <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600' }}>Branch Name</th>
                <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600' }}>AP EAPCET Code</th>
                <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600' }}>JNTU-GV Branch Code</th>
              </tr>
            </thead>
            <tbody>
              {filteredProgrammes.length > 0 ? (
                filteredProgrammes.map((prog, index) => (
                  <tr key={prog.code} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1rem', textAlign: 'left' }}>{index + 1}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>{prog.name}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>{prog.eapcet}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>{prog.code}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>No programs found matching "{searchTerm}"</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
