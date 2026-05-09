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
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Autonomous Colleges</h1>
      <div className="card" style={{ padding: '2rem' }}>
        <p className="card-text" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          The following institutions have been granted Autonomous status by the UGC and JNTU-GV, allowing them greater flexibility in curriculum design and academic administration.
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
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: activeCategory === category ? 'var(--primary)' : '#f1f5f9',
                  color: activeCategory === category ? 'white' : 'var(--text-muted)',
                  transition: 'all 0.2s',
                  fontSize: '0.9rem'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '50px', padding: '0.6rem 1.5rem', backgroundColor: 'white', minWidth: '350px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.75rem' }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search by Code or Name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', border: 'none', outline: 'none', fontSize: '0.95rem', color: 'var(--foreground)' }}
            />
          </div>
        </div>
        
        {/* Table */}
        <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--deep-purple)', color: 'white' }}>
                <th style={{ padding: '1.25rem 1rem', textAlign: 'left', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>S.No</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Code</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>College Name</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>District</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Website</th>
              </tr>
            </thead>
            <tbody>
              {filteredColleges.length > 0 ? (
                filteredColleges.map((college, index) => (
                  <tr key={college.code} style={{ borderBottom: '1px solid var(--border)', backgroundColor: index % 2 === 0 ? 'white' : '#fcfcfc', transition: 'background-color 0.2s' }}>
                    <td style={{ padding: '1rem', fontWeight: '500', color: 'var(--text-muted)' }}>{index + 1}</td>
                    <td style={{ padding: '1rem', fontWeight: '700', color: 'var(--primary)' }}>{college.code}</td>
                    <td style={{ padding: '1rem', fontWeight: '500' }}>{college.name}</td>
                    <td style={{ padding: '1rem' }}><span style={{ backgroundColor: 'rgba(55, 10, 104, 0.1)', color: 'var(--deep-purple)', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700' }}>{college.category}</span></td>
                    <td style={{ padding: '1rem' }}>{college.district}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ 
                        padding: '0.35rem 0.75rem', 
                        backgroundColor: '#dbeafe', 
                        color: '#1e40af', 
                        borderRadius: '6px', 
                        fontSize: '0.8rem', 
                        fontWeight: '800' 
                      }}>
                        {college.type}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <a href={college.website} target="_blank" rel="noopener noreferrer" className="card-link" style={{ fontWeight: '700', fontSize: '0.9rem' }}>
                        Visit <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '1.1rem' }}>No autonomous colleges found matching your criteria.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
