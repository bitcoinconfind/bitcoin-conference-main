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
  const [page, setPage] = useState(1);
  const pageSize = 20;

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

      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;
      const [cq, spk, spn] = await Promise.all([
        supabase.from('contact_queries').select('*').order('created_at', { ascending: false }).range(from, to),
        supabase.from('speaker_applications').select('*').order('created_at', { ascending: false }).range(from, to),
        supabase.from('sponsorship_inquiries').select('*').order('created_at', { ascending: false }).range(from, to)
      ]);

      setContact(cq.data || []);
      setSpeakers(spk.data || []);
      setSponsors(spn.data || []);
      setLoading(false);
    };

    run();
    return () => { try { document.head.removeChild(noindex); } catch {} };
  }, [page]);

  const filtered = useMemo(() => {
    const byStatus = (rows) => {
      if (filter === 'all') return rows;
      const target = filter === 'pending' ? 'pending' : 'handled';
      return rows.filter(r => (r.status || 'pending') === target);
    };
    return {
      contact: byStatus(contact),
      speakers: byStatus(speakers),
      sponsors: byStatus(sponsors),
    };
  }, [filter, contact, speakers, sponsors]);

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.replace('/admin/login');
  };

  const markHandled = async (table, id) => {
    await supabase.from(table).update({ status: 'handled' }).eq('id', id);
    // refresh current page
    const current = page;
    setPage(current);
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
    <section className="min-h-screen w-full px-4 sm:px-8 lg:px-20 py-20 bg-black">
      <div className="max-w-6xl mx-auto text-white">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-familjen">Admin Dashboard</h1>
          <button onClick={signOut} className="px-4 py-2 rounded-lg border border-[#585858] text-[#FFFFFFCC] hover:bg-[#2a2a2a]">Sign out</button>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <label className="text-[#FFFFFF80]">Filter:</label>
          <select value={filter} onChange={(e) => { setFilter(e.target.value); setPage(1); }} className="bg-[#1F1F1F] border border-[#585858] rounded-lg px-3 py-2">
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="handled">Handled</option>
          </select>
          <div className="ml-auto flex items-center gap-2">
            <button disabled={page===1} onClick={() => setPage(p => Math.max(1, p-1))} className="px-3 py-2 rounded-lg border border-[#585858] disabled:opacity-50">Prev</button>
            <span className="text-[#FFFFFF80]">Page {page}</span>
            <button onClick={() => setPage(p => p+1)} className="px-3 py-2 rounded-lg border border-[#585858]">Next</button>
          </div>
        </div>

        <Section title="Contact Queries (latest)">
          <table className="w-full text-sm">
            <thead className="text-left text-[#FFFFFF80]">
              <tr>
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Email</th>
                <th className="py-2 pr-4">Subject</th>
                <th className="py-2 pr-4">Created</th>
              </tr>
            </thead>
            <tbody>
              {filtered.contact.map((r) => (
                <tr key={r.id} className="border-t border-[#2a2a2a]">
                  <td className="py-2 pr-4">{r.name}</td>
                  <td className="py-2 pr-4">{r.email}</td>
                  <td className="py-2 pr-4">{r.subject}</td>
                  <td className="py-2 pr-4">{new Date(r.created_at).toLocaleString()}</td>
                  <td className="py-2 pr-4">
                    {(r.status || 'pending') === 'pending' && (
                      <button onClick={() => markHandled('contact_queries', r.id)} className="px-3 py-1 rounded border border-green-600 text-green-400">Mark handled</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="Speaker Applications (latest)">
          <table className="w-full text-sm">
            <thead className="text-left text-[#FFFFFF80]">
              <tr>
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Email</th>
                <th className="py-2 pr-4">Topic</th>
                <th className="py-2 pr-4">Created</th>
              </tr>
            </thead>
            <tbody>
              {filtered.speakers.map((r) => (
                <tr key={r.id} className="border-t border-[#2a2a2a]">
                  <td className="py-2 pr-4">{r.name}</td>
                  <td className="py-2 pr-4">{r.email}</td>
                  <td className="py-2 pr-4">{r.topic_title}</td>
                  <td className="py-2 pr-4">{new Date(r.created_at).toLocaleString()}</td>
                  <td className="py-2 pr-4">
                    {(r.status || 'pending') === 'pending' && (
                      <button onClick={() => markHandled('speaker_applications', r.id)} className="px-3 py-1 rounded border border-green-600 text-green-400">Mark handled</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="Sponsorship Inquiries (latest)">
          <table className="w-full text-sm">
            <thead className="text-left text-[#FFFFFF80]">
              <tr>
                <th className="py-2 pr-4">Company</th>
                <th className="py-2 pr-4">Contact</th>
                <th className="py-2 pr-4">Type</th>
                <th className="py-2 pr-4">Created</th>
              </tr>
            </thead>
            <tbody>
              {filtered.sponsors.map((r) => (
                <tr key={r.id} className="border-t border-[#2a2a2a]">
                  <td className="py-2 pr-4">{r.company_name}</td>
                  <td className="py-2 pr-4">{r.contact_name}</td>
                  <td className="py-2 pr-4">{r.sponsorship_type}</td>
                  <td className="py-2 pr-4">{new Date(r.created_at).toLocaleString()}</td>
                  <td className="py-2 pr-4">
                    {(r.status || 'pending') === 'pending' && (
                      <button onClick={() => markHandled('sponsorship_inquiries', r.id)} className="px-3 py-1 rounded border border-green-600 text-green-400">Mark handled</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </div>
    </section>
  );
};

export default Admin;


