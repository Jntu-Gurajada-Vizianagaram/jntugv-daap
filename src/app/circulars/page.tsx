'use client';

import { useEffect, useState } from 'react';

type Notification = {
  id: number;
  date: string;
  day: string;
  month: string;
  year: string;
  title: string;
  update_type: string;
  file_link: string;
  file_path: string;
};

export default function CircularsPage() {
  const [circulars, setCirculars] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchCirculars() {
      try {
        const response = await fetch('https://api.jntugv.edu.in/api/updates/allnotifications');
        if (!response.ok) throw new Error('Failed to fetch circulars');
        const data: Notification[] = await response.json();
        
        // Filter out notifications where the title starts with "DAAP"
        const daapCirculars = data.filter(item => {
          const title = item.title ? item.title.trim().toUpperCase() : '';
          return title.startsWith('DAAP') || title.includes('DAAP'); 
          // Including .includes('DAAP') as a fallback in case the string has leading spaces or format differences,
          // but primarily targeting DAAP specific circulars.
        });
        
        setCirculars(daapCirculars);
      } catch (err: any) {
        setError('Failed to load DAAP circulars from the university API. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCirculars();
  }, []);

  const filteredCirculars = circulars.filter(circ => 
    circ.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    circ.year.includes(searchTerm)
  );

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">DAAP Circulars & Notices</h1>
      
      <div className="card" style={{ padding: '2rem' }}>
        <p className="card-text" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Official circulars, notifications, and directives issued specifically by the Directorate of Academic Audit and Planning (DAAP) for all constituent and affiliated colleges.
        </p>

        {/* Search Bar */}
        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '0.375rem', padding: '0.5rem 1rem', backgroundColor: 'white', maxWidth: '500px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search DAAP circulars..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', color: '#0f172a' }}
          />
        </div>

        {/* Content Area */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#64748b' }}>
            <div style={{ display: 'inline-block', width: '40px', height: '40px', border: '4px solid #e2e8f0', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '1rem' }}></div>
            <p>Fetching DAAP circulars from the official API...</p>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : error ? (
          <div style={{ padding: '2rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', color: '#991b1b', borderRadius: '0.5rem' }}>
            {error}
          </div>
        ) : (
          <div style={{ overflowX: 'auto', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
              <thead>
                <tr style={{ backgroundColor: '#2D1B5E', color: 'white' }}>
                  <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', width: '15%' }}>Date Issued</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', width: '65%' }}>Circular Title</th>
                  <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', width: '20%' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCirculars.length > 0 ? (
                  filteredCirculars.map((circ, index) => (
                    <tr key={circ.id} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: index % 2 === 0 ? 'white' : '#f8fafc', transition: 'background-color 0.2s' }}>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f1f5f9', borderRadius: '0.375rem', padding: '0.25rem 0.75rem', border: '1px solid #e2e8f0' }}>
                          <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>{circ.day}</span>
                          <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>{circ.month} {circ.year}</span>
                        </div>
                      </td>
                      <td style={{ padding: '1rem', fontWeight: '500', color: '#334155', lineHeight: '1.5' }}>
                        {circ.title}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <a 
                          href={circ.file_link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '0.5rem', 
                            backgroundColor: 'var(--primary)', 
                            color: 'white', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '0.375rem', 
                            fontWeight: '500',
                            fontSize: '0.9rem',
                            textDecoration: 'none',
                            transition: 'background-color 0.2s'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                          View PDF
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>No DAAP circulars found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
