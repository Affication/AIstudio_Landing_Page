import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="SatisPro" 
                  className="w-8 h-8 object-contain rounded bg-white/10"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <svg className="w-8 h-8 text-white" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M10 20C10 14.4772 14.4772 10 20 10H28C29.1046 10 30 10.8954 30 12V14C30 15.1046 29.1046 16 28 16H20C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24H24C27.3137 24 30 26.6863 30 30C30 33.3137 27.3137 36 24 36H12C10.8954 36 10 35.1046 10 34V32C10 30.8954 10.8954 30 12 30H24C25.1046 30 26 29.1046 26 28C26 26.8954 25.1046 26 24 26H20C14.4772 26 10 21.5228 10 16V20Z" />
                  <circle cx="32" cy="12" r="2" className="text-blue-400" />
                  <circle cx="12" cy="32" r="2" className="text-blue-400" />
                </svg>
              )}
              <span className="font-bold text-xl text-white">SatisPro</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              AI Google review management & local SEO assistant for DACH, EU, and global businesses.
            </p>
            <div className="text-sm text-slate-400">
              <p>Vienna, Austria</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-blue-400">Features</a></li>
              <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
              <li><a href="#results" className="hover:text-blue-400">Results</a></li>
              <li><a href="https://app.satispro.net" className="hover:text-blue-400">Login</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="mailto:support@satispro.net" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Use</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Regions</h3>
            <ul className="space-y-2 text-sm">
              <li>DACH (Germany, Austria, Switzerland)</li>
              <li>European Union</li>
              <li>United Kingdom</li>
              <li>Worldwide</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} SatisPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};