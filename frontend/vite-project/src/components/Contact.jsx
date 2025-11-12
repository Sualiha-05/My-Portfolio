import React, { useState } from 'react';

/* Inline SVG icons to avoid external deps */
const IconUser = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="currentColor"/>
    <path d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6v1H4v-1z" fill="currentColor"/>
  </svg>
);

const IconEnvelope = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 7.5l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconPlane = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M2 21l20-9L2 10l6 4-6 7z" fill="currentColor" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const validateEmail = email => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setStatus({ error: 'Please fill all required fields.' });
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus({ error: 'Email looks invalid.' });
      return;
    }

    const endpoint = import.meta?.env?.VITE_API_URL
      ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/api/contact`
      : 'http://localhost:5173/api/contact';

    try {
      setSending(true);
      console.log('Sending contact to:', endpoint, form);

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      // Helpful debug info
      console.log('Response status:', res.status);
      const data = await res.json().catch(() => ({}));
      console.log('Response body:', data);

      if (res.ok) {
        setStatus({ success: '✅ Message sent successfully!' });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ error: data.error || `Server returned ${res.status}` });
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus({ error: 'Server error — try again later.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="mx-auto px-4 w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center">Get In Touch</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
          Whether you want to discuss a project or just say hi — my inbox is open!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          noValidate
        >
          <div className="grid md:grid-cols-2 gap-6">
            <label className="relative">
              <span className="absolute left-3 top-3 text-yellow-500"><IconUser /></span>
              <input
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name *"
                className="w-full pl-12 pr-3 py-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700
                           focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-800 dark:text-gray-100 transition"
                aria-label="Your name"
                required
              />
            </label>

            <label className="relative">
              <span className="absolute left-3 top-3 text-yellow-500"><IconEnvelope /></span>
              <input
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="Email *"
                className="w-full pl-12 pr-3 py-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700
                           focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-800 dark:text-gray-100 transition"
                aria-label="Email"
                required
                type="email"
              />
            </label>
          </div>

          <label className="block mt-6">
            <input
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-800 dark:text-gray-100 transition"
              aria-label="Subject"
            />
          </label>

          <label className="block mt-6">
            <textarea
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="Your Message *"
              rows="6"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-800 dark:text-gray-100 transition resize-none"
              aria-label="Message"
              required
            />
          </label>

          {/* Status messages */}
          <div className="mt-4 min-h-[2.25rem]">
            {status?.error && <div className="text-red-600 bg-red-50 dark:bg-red-900/30 py-2 px-3 rounded">{status.error}</div>}
            {status?.success && <div className="text-green-600 bg-green-50 dark:bg-green-900/30 py-2 px-3 rounded">{status.success}</div>}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={sending}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white
                         bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-md hover:shadow-lg
                         transform hover:-translate-y-1 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? 'Sending...' : (
                <>
                  <span>Send Message</span>
                  <span className="inline-flex items-center">{/* plane icon */} <IconPlane /></span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
