'use client';

import { useState } from 'react';

type College = {
  sno: number;
  code: string;
  name: string;
  district: string;
  type: string;
  website: string;
  category: 'Engineering' | 'Pharmacy' | 'Management';
};

const affiliatedColleges: College[] = [
  // Autonomous Engineering Colleges
  { sno: 1, code: 'Q7', name: 'Avanthi Institute of Engineering and Technology, Bhogapuram', district: 'Vizianagaram', type: 'AUTONOMOUS', website: 'https://avanthi.edu.in/', category: 'Engineering' },
  { sno: 2, code: '34', name: 'GMR Institute of Technology, Rajam', district: 'Vizianagaram', type: 'AUTONOMOUS', website: 'https://gmrit.edu.in/', category: 'Engineering' },
  { sno: 3, code: 'KD', name: 'Lendi Institute of Engineering & Technology, Jonnada', district: 'Vizianagaram', type: 'AUTONOMOUS', website: 'https://lendi.org/', category: 'Engineering' },
  { sno: 4, code: '33', name: 'Maharaj Vijayaram Gajapathi Raj College of Engineering (MVGR)', district: 'Vizianagaram', type: 'AUTONOMOUS', website: 'https://mvgrce.com/', category: 'Engineering' },
  { sno: 5, code: '98', name: 'Raghu Engineering College, Dakamarri', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://raghuenggcollege.com/', category: 'Engineering' },
  { sno: 6, code: 'L3', name: 'Vignans Institute of Information Technology, Duvvada', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://vignaniit.edu.in/', category: 'Engineering' },
  { sno: 7, code: 'NU', name: 'Nadimpalli Satyanarayana Raju Institute of Technology, Sontyam', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://nsrit.edu.in/', category: 'Engineering' },
  { sno: 8, code: '81', name: 'Avanthi Institute of Engineering and Technology, Makavarapalem', district: 'Anakapalli', type: 'AUTONOMOUS', website: 'https://avanthi.edu.in/', category: 'Engineering' },
  { sno: 9, code: 'U4', name: 'Dadi Institute of Engineering & Technology, Anakapalli', district: 'Anakapalli', type: 'AUTONOMOUS', website: 'https://diet.edu.in/', category: 'Engineering' },
  { sno: 10, code: 'A5', name: 'Aditya Institute of Technology and Management, Tekkali', district: 'Srikakulam', type: 'AUTONOMOUS', website: 'https://adityatekkali.edu.in/', category: 'Engineering' },
  { sno: 11, code: '6C', name: 'Miracle Educational Society Group of Institutions, Bhogapuram', district: 'Vizianagaram', type: 'AUTONOMOUS', website: 'https://miracle.edu.in/', category: 'Engineering' },
  { sno: 12, code: 'NM', name: 'Vignans Institute of Engineering for Women, Kapujaggarajupeta', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://view.edu.in/', category: 'Engineering' },
  { sno: 13, code: 'NR', name: 'Baba Institute of Technology and Sciences, Bakkannapalem', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://bitsvizag.com/', category: 'Engineering' },
  { sno: 14, code: 'NT', name: 'Visakha Institute of Engineering & Technology, Narava', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://vietvsp.com/', category: 'Engineering' },
  { sno: 15, code: 'W6', name: 'Sri Sivani College of Engineering, Chilakapalem', district: 'Srikakulam', type: 'AUTONOMOUS', website: 'https://srisivani.com/', category: 'Engineering' },

  // Affiliated Engineering Colleges
  { sno: 16, code: 'B6', name: 'Satya Institute of Technology and Management', district: 'Vizianagaram', type: 'PERMANENT', website: 'https://www.sitam.co.in/', category: 'Engineering' },
  { sno: 17, code: 'HQ', name: 'Avanthi Research and Technological Academy', district: 'Vizianagaram', type: 'TEMPORARY', website: 'https://arta.ac.in/', category: 'Engineering' },
  { sno: 18, code: '99', name: 'Avanthi St.Theressa Institute of Engg. & Tech', district: 'Vizianagaram', type: 'TEMPORARY', website: 'https://www.sttheressaengg.ac.in/', category: 'Engineering' },
  { sno: 19, code: '8K', name: 'Gokul Group of Institutions', district: 'Vizianagaram', type: 'TEMPORARY', website: 'http://www.gokulcollege.com/', category: 'Engineering' },
  { sno: 20, code: 'L6', name: 'Chaitanya Engineering College', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'http://cec.ac.in/', category: 'Engineering' },
  { sno: 21, code: '6E', name: 'Gonna Institute of Info. Tech. and Sciences', district: 'Anakapalli', type: 'TEMPORARY', website: 'http://www.giits.in/', category: 'Engineering' },
  { sno: 22, code: '6F', name: 'Sai Ganapathi Engineering College', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'https://www.sgec.edu.in/', category: 'Engineering' },
  { sno: 23, code: '6J', name: 'Simhadri Educational Society Group of Inst.', district: 'Anakapalli', type: 'TEMPORARY', website: 'https://simhadhriedu.org/', category: 'Engineering' },
  { sno: 24, code: 'MT', name: 'Sri Venkateswara College of Engg. & Tech', district: 'Srikakulam', type: 'TEMPORARY', website: 'https://svcet.net/new/', category: 'Engineering' },
  { sno: 25, code: 'PC', name: 'N S Raju Institute of Engineering & Technology', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'https://www.nsriet.edu.in/', category: 'Engineering' },
  { sno: 26, code: 'V1', name: 'Behara College of Engineering and Technology', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'https://beharaengg.edu.in/', category: 'Engineering' },

  // Autonomous Pharmacy Colleges
  { sno: 1, code: 'T5', name: 'Avanthi Institute of Pharmaceutical Sciences, Cherukupalli', district: 'Vizianagaram', type: 'AUTONOMOUS', website: 'https://avanthipharma.ac.in/', category: 'Pharmacy' },
  { sno: 2, code: 'AC', name: 'Vignan Institute of Pharmaceutical Technology, Duvvada', district: 'Visakhapatnam', type: 'AUTONOMOUS', website: 'https://vipt.edu.in/', category: 'Pharmacy' },

  // Affiliated Pharmacy Colleges
  { sno: 3, code: 'HH', name: 'Gokul College of Pharmacy', district: 'Vizianagaram', type: 'TEMPORARY', website: 'https://www.gokulcollege.com/sites/Pharmacy/home.html', category: 'Pharmacy' },
  { sno: 4, code: 'B7', name: 'Emmanuel College of Pharmacy', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'https://emmanuelcollegeofpharmacy.com/', category: 'Pharmacy' },
  { sno: 5, code: 'PK', name: 'Viswanadha Institute of Pharm. Sciences', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'https://vnips.in/Home.html', category: 'Pharmacy' },
  { sno: 6, code: 'DA', name: 'Sri Sivani College of Pharmacy', district: 'Srikakulam', type: 'TEMPORARY', website: 'https://srisivanisscp.com/', category: 'Pharmacy' },

  // Management Colleges
  { sno: 1, code: 'C4', name: 'All Saints PG College', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'https://allsaintspgcollege.com/', category: 'Management' },
  { sno: 2, code: '8M', name: 'Visakha Institute of Management Science', district: 'Visakhapatnam', type: 'TEMPORARY', website: 'http://vimsvizag.com/', category: 'Management' },
];

export default function AffiliatedCollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Engineering' | 'Pharmacy' | 'Management'>('All');

  const filteredColleges = affiliatedColleges.filter(college => {
    const matchesSearch = 
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      college.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || college.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Affiliated & Autonomous Colleges</h1>
      <div className="card" style={{ padding: '2rem' }}>
        <p className="card-text" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          JNTU-GV monitors and regulates Engineering, Pharmacy, and Management colleges across the region to ensure quality education and standard infrastructure. Below is the official list of affiliated and autonomous institutions.
        </p>

        {/* Filters and Search */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['All', 'Engineering', 'Pharmacy', 'Management'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as any)}
                style={{
                  padding: '0.5rem 1.5rem',
                  borderRadius: '999px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: activeCategory === category ? 'var(--primary)' : '#f1f5f9',
                  color: activeCategory === category ? 'white' : '#475569',
                  transition: 'all 0.2s'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '0.375rem', padding: '0.5rem 1rem', backgroundColor: 'white', minWidth: '350px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search by Code, Name, District, or Type..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', color: '#0f172a' }}
            />
          </div>
        </div>
        
        {/* Table */}
        <div style={{ overflowX: 'auto', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
            <thead>
              <tr style={{ backgroundColor: '#2D1B5E', color: 'white' }}>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>S.No</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Code</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>College Name</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Category</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>District</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Type</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Website</th>
              </tr>
            </thead>
            <tbody>
              {filteredColleges.length > 0 ? (
                filteredColleges.map((college, index) => (
                  <tr key={college.code} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: index % 2 === 0 ? 'white' : '#f8fafc' }}>
                    <td style={{ padding: '1rem', fontWeight: '500' }}>{index + 1}</td>
                    <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--primary)' }}>{college.code}</td>
                    <td style={{ padding: '1rem' }}>{college.name}</td>
                    <td style={{ padding: '1rem' }}><span style={{ backgroundColor: '#e0e7ff', color: '#3730a3', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.8rem', fontWeight: '600' }}>{college.category}</span></td>
                    <td style={{ padding: '1rem' }}>{college.district}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ 
                        padding: '0.25rem 0.5rem', 
                        backgroundColor: college.type === 'AUTONOMOUS' ? '#dbeafe' : (college.type === 'PERMANENT' ? '#dcfce7' : '#fef9c3'), 
                        color: college.type === 'AUTONOMOUS' ? '#1e40af' : (college.type === 'PERMANENT' ? '#166534' : '#854d0e'), 
                        borderRadius: '0.25rem', 
                        fontSize: '0.85rem', 
                        fontWeight: 'bold' 
                      }}>
                        {college.type}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <a href={college.website} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        Visit <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>No colleges found matching your criteria.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
