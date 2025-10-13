import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-familjen text-white mb-4">{title}</h2>
    <div className="bg-[#1F1F1F] border border-[#2a2a2a] rounded-xl p-4 overflow-auto">
      {children}
    </div>
  </div>
);

const Admin = () => {
  const [authorized, setAuthorized] = useState(null); // null | true | false
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [filter, setFilter] = useState("all"); // all | pending | handled
  const [activeTab, setActiveTab] = useState("contact"); // contact | speakers | sponsors

  useEffect(() => {
    const noindex = document.createElement('meta');
    noindex.name = 'robots';
    noindex.content = 'noindex, nofollow';
    document.head.appendChild(noindex);

    const run = async () => {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setAuthorized(false);
        setLoading(false);
        window.location.replace('/admin/login');
        return;
      }

      const { data: adminRow } = await supabase
        .from('admins')
        .select('user_id')
        .eq('user_id', user.id)
        .single();

      if (!adminRow) {
        setAuthorized(false);
        setLoading(false);
        window.location.replace('/admin/login');
        return;
      }

      setAuthorized(true);

      try {
        const [cq, spk, spn] = await Promise.all([
          supabase.from('contact_queries').select('*', { count: 'exact' }).order('created_at', { ascending: false }),
          supabase.from('speaker_applications').select('*', { count: 'exact' }).order('created_at', { ascending: false }),
          supabase.from('sponsorship_inquiries').select('*', { count: 'exact' }).order('created_at', { ascending: false })
        ]);

        if (cq.error) {
          console.error('Contact queries error:', cq.error);
          alert('Error loading contact queries: ' + cq.error.message);
        }
        if (spk.error) {
          console.error('Speaker applications error:', spk.error);
          alert('Error loading speaker applications: ' + spk.error.message);
        }
        if (spn.error) {
          console.error('Sponsorship inquiries error:', spn.error);
          alert('Error loading sponsorship inquiries: ' + spn.error.message);
        }

        // Debug logging
        console.log('Contact queries count:', cq.data?.length, 'Total available:', cq.count);
        console.log('Speaker applications count:', spk.data?.length, 'Total available:', spk.count);
        console.log('Sponsorship inquiries count:', spn.data?.length, 'Total available:', spn.count);

        setContact(cq.data || []);
        setSpeakers(spk.data || []);
        setSponsors(spn.data || []);
      } catch (error) {
        console.error('Database error:', error);
        alert('Database error: ' + error.message);
      }
      
      setLoading(false);
    };

    run();
    return () => { try { document.head.removeChild(noindex); } catch {} };
  }, []);

  const filtered = useMemo(() => {
    const byStatus = (rows) => {
      if (filter === 'all') return rows;
      const target = filter === 'pending' ? 'pending' : 'handled';
      return rows.filter(r => (r.status || 'pending') === target);
    };
    
    const allData = {
      contact: byStatus(contact),
      speakers: byStatus(speakers),
      sponsors: byStatus(sponsors),
    };
    
    return allData[activeTab] || [];
  }, [filter, contact, speakers, sponsors, activeTab]);

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.replace('/admin/login');
  };

  const toggleStatus = async (id, currentStatus) => {
    const tableMap = {
      contact: 'contact_queries',
      speakers: 'speaker_applications',
      sponsors: 'sponsorship_inquiries'
    };
    
    const table = tableMap[activeTab];
    if (!table) return;
    
    const newStatus = currentStatus === 'pending' ? 'handled' : 'pending';
    
    try {
      const { error } = await supabase.from(table).update({ status: newStatus }).eq('id', id);
      if (error) {
        console.error('Update error:', error);
        alert('Error updating status: ' + error.message);
        return;
      }
      
      // Update local state immediately for instant UI refresh
      const updateLocalState = (setter, currentData) => {
        setter(currentData.map(item => 
          item.id === id 
            ? { ...item, status: newStatus }
            : item
        ));
      };
      
      if (activeTab === 'contact') {
        updateLocalState(setContact, contact);
      } else if (activeTab === 'speakers') {
        updateLocalState(setSpeakers, speakers);
      } else if (activeTab === 'sponsors') {
        updateLocalState(setSponsors, sponsors);
      }
      
    } catch (error) {
      console.error('Update error:', error);
      alert('Error updating status: ' + error.message);
    }
  };

  if (loading) {
    return (
      <section className="min-h-[70vh] w-full flex items-center justify-center px-4 sm:px-8 lg:px-20 py-20">
        <p className="text-white">Loading...</p>
      </section>
    );
  }

  if (authorized === false) {
    return (
      <section className="min-h-[70vh] w-full flex items-center justify-center px-4 sm:px-8 lg:px-20 py-20">
        <div className="max-w-md w-full bg-[#1F1F1F] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 text-white text-center">
          <h1 className="text-3xl font-familjen mb-4">Access denied</h1>
          <p className="mb-6">You must be an admin and signed in to view this page.</p>
          <a href="/admin/login" className="text-[#FFBF00] hover:underline">Go to Admin Login</a>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full px-4 sm:px-8 lg:px-20 py-4 sm:py-20 bg-black">
      <div className="max-w-6xl mx-auto text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h1 className="text-2xl sm:text-4xl font-familjen">Admin Dashboard</h1>
          <div className="flex gap-2">
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 rounded-lg border border-[#585858] text-[#FFFFFFCC] hover:bg-[#2a2a2a] text-sm sm:text-base"
            >
              Refresh All
            </button>
            <button onClick={signOut} className="px-4 py-2 rounded-lg border border-[#585858] text-[#FFFFFFCC] hover:bg-[#2a2a2a] text-sm sm:text-base">Sign out</button>
          </div>
        </div>

        {/* Tab Navigation - Mobile Responsive */}
        <div className="mb-6">
          {/* Mobile: Stack tabs vertically on small screens */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button 
                onClick={() => setActiveTab('contact')} 
                className={`px-3 py-2 rounded-lg border text-sm ${
                  activeTab === 'contact' 
                    ? 'border-[#FFBF00] bg-[#FFBF00]/10 text-[#FFBF00]' 
                    : 'border-[#585858] text-[#FFFFFF80] hover:bg-[#2a2a2a]'
                }`}
              >
                <span className="hidden sm:inline">Contact Queries</span>
                <span className="sm:hidden">Contact</span>
                <span className="ml-1">({contact.length})</span>
              </button>
              <button 
                onClick={() => setActiveTab('speakers')} 
                className={`px-3 py-2 rounded-lg border text-sm ${
                  activeTab === 'speakers' 
                    ? 'border-[#FFBF00] bg-[#FFBF00]/10 text-[#FFBF00]' 
                    : 'border-[#585858] text-[#FFFFFF80] hover:bg-[#2a2a2a]'
                }`}
              >
                <span className="hidden sm:inline">Speaker Applications</span>
                <span className="sm:hidden">Speakers</span>
                <span className="ml-1">({speakers.length})</span>
              </button>
              <button 
                onClick={() => setActiveTab('sponsors')} 
                className={`px-3 py-2 rounded-lg border text-sm ${
                  activeTab === 'sponsors' 
                    ? 'border-[#FFBF00] bg-[#FFBF00]/10 text-[#FFBF00]' 
                    : 'border-[#585858] text-[#FFFFFF80] hover:bg-[#2a2a2a]'
                }`}
              >
                <span className="hidden sm:inline">Sponsorship Inquiries</span>
                <span className="sm:hidden">Sponsors</span>
                <span className="ml-1">({sponsors.length})</span>
              </button>
            </div>
            
            {/* Mobile: Stack controls vertically */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto sm:ml-auto">
              <div className="flex items-center gap-2">
                <label className="text-[#FFFFFF80] text-sm">Filter:</label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-[#1F1F1F] border border-[#585858] rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none">
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="handled">Handled</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Queries Tab */}
        {activeTab === 'contact' && (
          <Section title="Contact Queries">
            <div className="space-y-4">
              {filtered.map((r) => (
                <div key={r.id} className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-base sm:text-lg">{r.name}</h3>
                      <p className="text-[#FFFFFF80] text-sm sm:text-base break-all">{r.email}</p>
                      {r.phone && <p className="text-[#FFFFFF80] text-sm">Phone: {r.phone}</p>}
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <span className={`px-2 py-1 rounded text-xs self-start sm:self-auto ${
                        (r.status || 'pending') === 'pending' 
                          ? 'bg-yellow-600/20 text-yellow-400' 
                          : 'bg-green-600/20 text-green-400'
                      }`}>
                        {(r.status || 'pending').toUpperCase()}
                      </span>
                      <p className="text-[#FFFFFF60] text-xs sm:text-sm">{new Date(r.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Subject:</h4>
                    <p className="text-white text-sm sm:text-base break-words">{r.subject}</p>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Message:</h4>
                    <p className="text-white whitespace-pre-wrap text-sm sm:text-base break-words">{r.message}</p>
                  </div>
                  
                  <button 
                    onClick={() => toggleStatus(r.id, r.status || 'pending')} 
                    className={`px-3 py-2 rounded border text-sm w-full sm:w-auto ${
                      (r.status || 'pending') === 'pending'
                        ? 'border-green-600 text-green-400 hover:bg-green-600/10'
                        : 'border-yellow-600 text-yellow-400 hover:bg-yellow-600/10'
                    }`}
                  >
                    {(r.status || 'pending') === 'pending' ? 'Mark as Handled' : 'Mark as Pending'}
                  </button>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Speaker Applications Tab */}
        {activeTab === 'speakers' && (
          <Section title="Speaker Applications">
            <div className="space-y-4">
              {filtered.map((r) => (
                <div key={r.id} className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-base sm:text-lg">{r.name}</h3>
                      <p className="text-[#FFFFFF80] text-sm sm:text-base break-all">{r.email}</p>
                      <p className="text-[#FFFFFF80] text-sm">Phone: {r.phone}</p>
                      {r.company && <p className="text-[#FFFFFF80] text-sm">Company: {r.company}</p>}
                      {r.job_title && <p className="text-[#FFFFFF80] text-sm">Job Title: {r.job_title}</p>}
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <span className={`px-2 py-1 rounded text-xs self-start sm:self-auto ${
                        (r.status || 'pending') === 'pending' 
                          ? 'bg-yellow-600/20 text-yellow-400' 
                          : 'bg-green-600/20 text-green-400'
                      }`}>
                        {(r.status || 'pending').toUpperCase()}
                      </span>
                      <p className="text-[#FFFFFF60] text-xs sm:text-sm">{new Date(r.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Topic Title:</h4>
                    <p className="text-white font-medium text-sm sm:text-base break-words">{r.topic_title}</p>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Topic Abstract:</h4>
                    <p className="text-white whitespace-pre-wrap text-sm sm:text-base break-words">{r.topic_abstract}</p>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Bio:</h4>
                    <p className="text-white whitespace-pre-wrap text-sm sm:text-base break-words">{r.bio}</p>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Experience:</h4>
                    <p className="text-white whitespace-pre-wrap text-sm sm:text-base break-words">{r.experience}</p>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Target Audience:</h4>
                    <p className="text-white whitespace-pre-wrap text-sm sm:text-base break-words">{r.audience}</p>
                  </div>
                  
                  {r.previous_speaking && (
                    <div className="mb-3">
                      <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Previous Speaking:</h4>
                      <p className="text-white whitespace-pre-wrap text-sm sm:text-base break-words">{r.previous_speaking}</p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 sm:gap-4 mb-3">
                    {r.linkedin && (
                      <a href={r.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                        LinkedIn
                      </a>
                    )}
                    {r.twitter && (
                      <a href={r.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                        Twitter
                      </a>
                    )}
                    {r.website && (
                      <a href={r.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                        Website
                      </a>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => toggleStatus(r.id, r.status || 'pending')} 
                    className={`px-3 py-2 rounded border text-sm w-full sm:w-auto ${
                      (r.status || 'pending') === 'pending'
                        ? 'border-green-600 text-green-400 hover:bg-green-600/10'
                        : 'border-yellow-600 text-yellow-400 hover:bg-yellow-600/10'
                    }`}
                  >
                    {(r.status || 'pending') === 'pending' ? 'Mark as Handled' : 'Mark as Pending'}
                  </button>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Sponsorship Inquiries Tab */}
        {activeTab === 'sponsors' && (
          <Section title="Sponsorship Inquiries">
            <div className="space-y-4">
              {filtered.map((r) => (
                <div key={r.id} className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-base sm:text-lg">{r.company_name}</h3>
                      <p className="text-[#FFFFFF80] text-sm sm:text-base">Contact: {r.contact_name}</p>
                      <p className="text-[#FFFFFF80] text-sm sm:text-base break-all">{r.contact_email}</p>
                      <p className="text-[#FFFFFF80] text-sm">Phone: {r.contact_phone}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <span className={`px-2 py-1 rounded text-xs self-start sm:self-auto ${
                        (r.status || 'pending') === 'pending' 
                          ? 'bg-yellow-600/20 text-yellow-400' 
                          : 'bg-green-600/20 text-green-400'
                      }`}>
                        {(r.status || 'pending').toUpperCase()}
                      </span>
                      <p className="text-[#FFFFFF60] text-xs sm:text-sm">{new Date(r.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3">
                    <div>
                      <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Sponsorship Type:</h4>
                      <p className="text-white text-sm sm:text-base break-words">{r.sponsorship_type}</p>
                    </div>
                    <div>
                      <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Budget Range:</h4>
                      <p className="text-white text-sm sm:text-base break-words">{r.budget_range}</p>
                    </div>
                    {r.company_size && (
                      <div>
                        <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Company Size:</h4>
                        <p className="text-white text-sm sm:text-base break-words">{r.company_size}</p>
                      </div>
                    )}
                    {r.industry && (
                      <div>
                        <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Industry:</h4>
                        <p className="text-white text-sm sm:text-base break-words">{r.industry}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Message:</h4>
                    <p className="text-white whitespace-pre-wrap text-sm sm:text-base break-words">{r.message}</p>
                  </div>
                  
                  {r.previous_sponsorship && (
                    <div className="mb-3">
                      <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Previous Sponsorship:</h4>
                      <p className="text-white whitespace-pre-wrap text-sm sm:text-base break-words">{r.previous_sponsorship}</p>
                    </div>
                  )}
                  
                  {r.goals && (
                    <div className="mb-3">
                      <h4 className="text-[#FFBF00] font-medium mb-1 text-sm sm:text-base">Goals:</h4>
                      <p className="text-white whitespace-pre-wrap text-sm sm:text-base break-words">{r.goals}</p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 sm:gap-4 mb-3">
                    {r.website && (
                      <a href={r.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                        Website
                      </a>
                    )}
                    {r.linkedin && (
                      <a href={r.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                        LinkedIn
                      </a>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => toggleStatus(r.id, r.status || 'pending')} 
                    className={`px-3 py-2 rounded border text-sm w-full sm:w-auto ${
                      (r.status || 'pending') === 'pending'
                        ? 'border-green-600 text-green-400 hover:bg-green-600/10'
                        : 'border-yellow-600 text-yellow-400 hover:bg-yellow-600/10'
                    }`}
                  >
                    {(r.status || 'pending') === 'pending' ? 'Mark as Handled' : 'Mark as Pending'}
                  </button>
                </div>
              ))}
            </div>
          </Section>
        )}
      </div>
    </section>
  );
};

export default Admin;


