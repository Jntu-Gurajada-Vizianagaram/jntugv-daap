'use client';

import { useState } from 'react';
import { collegesData } from '@/data/colleges';

export default function AutonomousCollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Engineering' | 'Pharmacy' | 'Management'>('All');

  // Filter for only autonomous colleges
  const autonomousCollegesList = collegesData.filter(c => c.type === 'AUTONOMOUS');

  const filteredColleges = autonomousCollegesList.filter(college => {
    const matchesSearch = 
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      college.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.district.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || college.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-pattern" style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Autonomous Institutions</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Premier institutions granted academic autonomy by UGC and JNTU-GV for excellence in technical education.
          </p>
        </div>

        <div className="card" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '50px', padding: '0.75rem 1.75rem', backgroundColor: '#f8fafc', width: '100%', maxWidth: '500px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '1rem' }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Search autonomous colleges..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1.05rem', background: 'transparent' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', backgroundColor: '#f1f5f9', padding: '0.4rem', borderRadius: '12px' }}>
              {['All', 'Engineering', 'Pharmacy', 'Management'].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveCategory(type as any)}
                  style={{
                    padding: '0.6rem 1.25rem',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    backgroundColor: activeCategory === type ? 'var(--deep-purple)' : 'transparent',
                    color: activeCategory === type ? 'white' : '#64748b'
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-soft)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--deep-purple)', color: 'white' }}>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'center', width: '80px', fontWeight: '800' }}>Code</th>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', fontWeight: '800' }}>Institution Name & Location</th>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'center', width: '150px', fontWeight: '800' }}>Category</th>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'center', width: '150px', fontWeight: '800' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredColleges.length > 0 ? (
                  filteredColleges.map((college, index) => (
                    <tr key={college.code} style={{ 
                      borderBottom: '1px solid var(--border)', 
                      backgroundColor: index % 2 === 0 ? 'white' : '#fcfcfc',
                      transition: 'background-color 0.2s'
                    }}>
                      <td style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <span style={{ backgroundColor: 'rgba(55, 10, 104, 0.05)', color: 'var(--deep-purple)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontWeight: '800', fontSize: '0.9rem' }}>
                          {college.code}
                        </span>
                      </td>
                      <td style={{ padding: '1.5rem' }}>
                        <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{college.name}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          {college.district} District
                        </div>
                      </td>
                      <td style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <span style={{ 
                          fontSize: '0.75rem', 
                          fontWeight: '800', 
                          textTransform: 'uppercase', 
                          letterSpacing: '0.05em',
                          padding: '0.4rem 0.75rem',
                          borderRadius: '50px',
                          backgroundColor: 'rgba(55, 10, 104, 0.1)',
                          color: 'var(--deep-purple)',
                          border: '1px solid rgba(55, 10, 104, 0.2)'
                        }}>
                          {college.category}
                        </span>
                      </td>
                      <td style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <a 
                          href={college.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn"
                          style={{ 
                            padding: '0.5rem 1rem', 
                            fontSize: '0.85rem', 
                            borderRadius: '10px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: '700',
                            backgroundColor: 'rgba(55, 10, 104, 0.05)',
                            color: 'var(--deep-purple)',
                            textDecoration: 'none'
                          }}
                        >
                          Official Site <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} style={{ padding: '5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏫</div>
                      <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>No autonomous institutions found matching your search.</p>
                      <button onClick={() => {setSearchTerm(''); setActiveCategory('All');}} style={{ color: 'var(--deep-purple)', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', marginTop: '1rem' }}>Reset directory</button>
                    </td>
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
