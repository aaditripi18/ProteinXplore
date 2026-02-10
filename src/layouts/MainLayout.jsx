import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Dna, Home, BarChart3 } from 'lucide-react';

function MainLayout() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      
      {/* ================= HEADER ================= */}
      <header className="border-b border-white/10 bg-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">

            {/* LOGO / TITLE */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all">
                <Dna className="h-6 w-6 text-white" />
              </div>

              <div className="leading-tight">
                <span className="text-xl font-bold text-white tracking-tight">
                  Protein
                  <span className="text-blue-400 text-2xl font-extrabold mx-0.5">
                    X
                  </span>
                  plore
                </span>
                <p className="text-xs text-gray-300">
                  Rare Disease Research
                </p>
              </div>
            </Link>

            {/* NAV LINKS */}
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'bg-white/20 text-white shadow-md'
                        : 'text-gray-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </div>

          </nav>
        </div>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main>
        <Outlet />
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-white/10 backdrop-blur-md mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* FOOTER BRAND */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
                <Dna className="h-5 w-5 text-white" />
              </div>

              <div className="leading-tight">
                <p className="text-sm font-semibold text-white">
                  Protein
                  <span className="text-blue-400 font-extrabold mx-0.5">
                    X
                  </span>
                  plore
                </p>
                <p className="text-xs text-gray-300">
                  Advanced Protein Structure Analysis Platform
                </p>
              </div>
            </div>

            {/* COPYRIGHT */}
            <div className="text-sm text-gray-300">
              © 2026 Protein
              <span className="text-blue-400 font-semibold mx-0.5">X</span>
              plore. Research tools for rare disease analysis.
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default MainLayout;
