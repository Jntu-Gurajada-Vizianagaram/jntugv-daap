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

export default function CalendarPage() {
  const [calendars, setCalendars] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchCalendars() {
      try {
        const response = await fetch('https://api.jntugv.edu.in/api/updates/allnotifications');
        if (!response.ok) throw new Error('Failed to fetch academic calendars');
        const data: Notification[] = await response.json();
        const calendarData = data.filter(item => item.update_type === 'calendar');
        setCalendars(calendarData);
      } catch (err: any) {
        setError('Failed to load academic calendars from the university API. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCalendars();
  }, []);

  const filteredCalendars = calendars.filter(cal => 
    cal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cal.year.includes(searchTerm)
  );

  return (
    <div className="bg-pattern" style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Academic Calendars</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Official academic schedules, examination dates, and holidays for all programs under JNTU-GV.
          </p>
        </div>
        
        <div className="card" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '50px', padding: '0.6rem 1.5rem', backgroundColor: '#f8fafc', width: '100%', maxWidth: '450px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.75rem' }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Search calendars by name or year..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', background: 'transparent', color: 'var(--foreground)' }}
              />
            </div>
            <div style={{ backgroundColor: 'rgba(0, 75, 141, 0.05)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '700' }}>
              Academic Year 2024-25
            </div>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <div style={{ display: 'inline-block', width: '48px', height: '48px', border: '4px solid #f1f5f9', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '1.5rem' }}></div>
              <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Syncing with university server...</p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          ) : error ? (
            <div style={{ padding: '2rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', color: '#991b1b', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>⚠️</span>
              <p style={{ fontWeight: '500' }}>{error}</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'center', fontWeight: '700', width: '15%', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Date Issued</th>
                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', fontWeight: '700', width: '65%', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Calendar Description</th>
                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'center', fontWeight: '700', width: '20%', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Document</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCalendars.length > 0 ? (
                    filteredCalendars.map((cal, index) => (
                      <tr key={cal.id} style={{ borderBottom: '1px solid var(--border)', backgroundColor: index % 2 === 0 ? 'white' : '#fcfcfc', transition: 'background-color 0.2s' }}>
                        <td style={{ padding: '1.5rem' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f1f5f9', borderRadius: '12px', padding: '0.5rem', border: '1px solid #e2e8f0', minWidth: '80px' }}>
                            <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)', lineHeight: '1' }}>{cal.day}</span>
                            <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginTop: '0.25rem' }}>{cal.month} {cal.year}</span>
                          </div>
                        </td>
                        <td style={{ padding: '1.5rem', fontWeight: '600', color: '#334155', lineHeight: '1.6', fontSize: '1.05rem' }}>
                          {cal.title}
                        </td>
                        <td style={{ padding: '1.5rem', textAlign: 'center' }}>
                          <a 
                            href={cal.file_link} 
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
                              gap: '0.5rem',
                              transition: 'all 0.2s'
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--primary)';
                              e.currentTarget.style.color = 'white';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(0, 75, 141, 0.1)';
                              e.currentTarget.style.color = 'var(--primary)';
                            }}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            Download PDF
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '1.1rem' }}>No academic calendars found matching your search.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Note: All academic calendars are subject to change as per university council decisions. Please check the <a href="/circulars" style={{ color: 'var(--primary)', fontWeight: '600' }}>Circulars</a> section for amendments.
          </p>
        </div>
      </div>
    </div>
  );
}
