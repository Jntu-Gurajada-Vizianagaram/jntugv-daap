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

export default function SyllabusPage() {
  const [syllabi, setSyllabi] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchSyllabi() {
      try {
        const response = await fetch('https://api.jntugv.edu.in/api/updates/allnotifications');
        if (!response.ok) throw new Error('Failed to fetch syllabus data');
        const data: Notification[] = await response.json();
        const syllabusData = data.filter(item => item.update_type === 'syllabus');
        setSyllabi(syllabusData);
      } catch (err: any) {
        setError('Failed to load Academic Syllabus from the university API. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchSyllabi();
  }, []);

  const filteredSyllabi = syllabi.filter(syl => 
    syl.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    syl.year.includes(searchTerm)
  );

  return (
    <div className="bg-pattern" style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Academic Syllabus</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Access the latest approved course structures and detailed academic syllabi for all UG and PG programs.
          </p>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
          <div style={{ backgroundColor: 'rgba(0, 75, 141, 0.03)', borderLeft: '5px solid var(--primary)', padding: '2rem', marginBottom: '3rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '0.75rem', fontSize: '1.25rem', fontWeight: '800' }}>Official Syllabus Archives</h3>
              <p style={{ color: '#475569', margin: 0, fontSize: '1rem', lineHeight: '1.6' }}>View comprehensive, branch-wise PDFs for R25, R23, R20, R19, and R16 directly on the university's static portal.</p>
            </div>
            <a href="https://jntugv.edu.in/academics/academic-syllabus" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.8rem 1.5rem', fontWeight: '700' }}>
              Open Archives <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <h3 style={{ color: '#0f172a', fontSize: '1.5rem', fontWeight: '800' }}>Recent Updates</h3>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '50px', padding: '0.6rem 1.5rem', backgroundColor: 'white', width: '100%', maxWidth: '400px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.75rem' }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Search by course or year..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', background: 'transparent' }}
              />
            </div>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <div style={{ display: 'inline-block', width: '48px', height: '48px', border: '4px solid #f1f5f9', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '1.5rem' }}></div>
              <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Loading syllabus data...</p>
            </div>
          ) : error ? (
            <div style={{ padding: '2rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', color: '#991b1b', borderRadius: '12px' }}>
              {error}
            </div>
          ) : (
            <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'center', fontWeight: '700', width: '15%', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Release</th>
                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', fontWeight: '700', width: '65%', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Syllabus Description</th>
                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'center', fontWeight: '700', width: '20%', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSyllabi.length > 0 ? (
                    filteredSyllabi.map((syl, index) => (
                      <tr key={syl.id} style={{ borderBottom: '1px solid var(--border)', backgroundColor: index % 2 === 0 ? 'white' : '#fcfcfc', transition: 'background-color 0.2s' }}>
                        <td style={{ padding: '1.5rem' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f1f5f9', borderRadius: '12px', padding: '0.5rem', border: '1px solid #e2e8f0' }}>
                            <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)', lineHeight: '1' }}>{syl.day}</span>
                            <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginTop: '0.25rem' }}>{syl.month} {syl.year}</span>
                          </div>
                        </td>
                        <td style={{ padding: '1.5rem', fontWeight: '600', color: '#334155', lineHeight: '1.6', fontSize: '1.05rem' }}>
                          {syl.title}
                        </td>
                        <td style={{ padding: '1.5rem', textAlign: 'center' }}>
                          <a 
                            href={syl.file_link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn"
                            style={{ 
                              backgroundColor: 'rgba(0, 75, 141, 0.1)', 
                              color: 'var(--primary)', 
                              padding: '0.6rem 1.25rem', 
                              borderRadius: '10px', 
                              fontWeight: '700',
                              fontSize: '0.85rem',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary)'; e.currentTarget.style.color = 'white'; }}
                            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0, 75, 141, 0.1)'; e.currentTarget.style.color = 'var(--primary)'; }}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            View PDF
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>No academic syllabus documents found matching your search.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
