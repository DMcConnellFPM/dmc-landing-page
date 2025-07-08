import React from 'react';
import './index.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-4">
      <header className="text-center py-16 max-w-2xl">
        <img src={logo} alt="DMC Development Logo" className="w-24 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">DMC Development</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Helping you stand out online with clean, fast, and functional websites.
        </p>
        <a href="#contact" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded transition">
          Book a Free Consultation
        </a>
      </header>

      <section className="max-w-4xl w-full py-12 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center">What I Offer</h2>
        <ul className="grid gap-6 md:grid-cols-2 text-gray-200">
          <li>• Website Development (from scratch or redesign)</li>
          <li>• UI/UX Design with specified monitor approach</li>
          <li>• Booking forms, dashboards, e-commerce setup</li>
          <li>• Ongoing support & SEO basics</li>
        </ul>
      </section>

      <section className="max-w-4xl w-full py-12 border-t border-gray-700 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Work With DMC?</h2>
        <p className="text-gray-300 text-lg">
          I specialise in websites that are fast, easy to use, and tailored for small business needs. No fluff — just effective design and clean code. I also have experience in User Interface design for Industrial Environments, such as Monitoring Systems and Dashboards.
        </p>
      </section>

      <section id="contact" className="max-w-xl w-full py-12 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Contact</h2>
        <form className="space-y-4">
          <input className="w-full p-3 bg-gray-800 border border-gray-600 rounded" placeholder="Your Name" required />
          <input className="w-full p-3 bg-gray-800 border border-gray-600 rounded" placeholder="Your Email" type="email" required />
          <textarea className="w-full p-3 bg-gray-800 border border-gray-600 rounded" placeholder="Your Message" rows="4" required />
          <button type="submit" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded">
            Send Message
          </button>
        </form>
      </section>

      <footer className="py-6 text-sm text-gray-500 text-center border-t border-gray-700 w-full">
        © {new Date().getFullYear()} DMC Development. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
