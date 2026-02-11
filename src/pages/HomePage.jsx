import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Dna } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>ProteinXplore</title>
        <meta
          name="description"
          content="ProteinXplore – AI-powered protein structure exploration for rare disease research."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-slate-200">
        <section className="relative min-h-screen flex items-center justify-center">

          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/60 via-slate-100/80 to-blue-100/60" />

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600 rounded-2xl shadow-md">
                  <Dna className="h-14 w-14 text-white" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
                Protein
                <span className="text-7xl font-extrabold text-blue-600">X</span>
                plore
              </h1>

              <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto">
                Advanced Protein Structure Analysis for Rare Disease Research
              </p>

              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Visualize protein structures, analyze mutations, and explore
                biological impact using AI-powered insights.
              </p>

              {/* Launch Button */}
              <div className="pt-6">
                <Link to="/dashboard">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg shadow-md"
                  >
                    Launch Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

            </motion.div>
          </div>
        </section>
      </div>

      {/* ================= BACKGROUND SECTION ================= */}
      <section className="bg-blue-50 border-t border-blue-100">
        <div className="max-w-6xl mx-auto px-6 py-24 space-y-20">

          <h2 className="text-3xl font-semibold text-slate-900 border-l-4 border-blue-600 pl-4">
            Background
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                ProteinXplore is inspired by large-scale protein structure
                databases such as AlphaFold, which use artificial intelligence
                to predict three-dimensional protein structures from amino acid
                sequences.
              </p>

              <p>
                These predictions allow researchers to study protein folding,
                structural stability, and molecular function at unprecedented
                scale, accelerating biological and medical discovery.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <img
                src="https://alphafold.ebi.ac.uk/assets/img/Q8I3H7_1.webp"
                alt="Predicted protein structure"
                className="w-full rounded-md border"
              />
              <p className="text-xs text-slate-500 mt-3">
                Example predicted protein structure (AlphaFold-style visualization)
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default HomePage;
