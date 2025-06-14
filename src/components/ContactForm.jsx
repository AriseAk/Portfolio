// ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setStatus(data.message);
    } catch (err) {
      setStatus('Something went wrong.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-800 via-pink-600 to-purple-900 p-6 rounded-2xl shadow-xl w-[90vw] max-w-md mx-auto text-white mt-12">
      <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
      <p className="text-gray-300 mb-6">Have something to discuss? Send me a message and let's talk.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="4"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 w-full p-3 rounded-lg font-semibold text-white flex justify-center items-center gap-2"
        >
          <span>🚀 Send Message</span>
        </button>
        <p className="text-sm text-center mt-2">{status}</p>
      </form>
    </div>
  );
};

export default ContactForm;
