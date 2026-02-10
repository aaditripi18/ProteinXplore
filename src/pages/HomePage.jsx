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
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600 rounded-2xl shadow-md">
                  <Dna className="h-14 w-14 text-white" />
                </div>
              </div>

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

              {/* ================= TEAM ================= */}
              <div className="pt-10">
                <p className="text-sm uppercase tracking-wide text-slate-500 mb-4">
                  Project Team
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { name: 'Moinuddin Hasan Raichur Mohammed', reg: '23BCT0213' },
                    { name: 'Aditya Sridhar', reg: '23BCE2269' },
                    { name: 'Aaditya Tripathi', reg: '23BCE2214' },
                    { name: 'Goureesankar S Nair', reg: '23BCE2217' },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm"
                    >
                      <p className="font-medium text-slate-900 text-sm">
                        {member.name}
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        Reg. No: {member.reg}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ================= BACKGROUND SECTION ================= */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-24 space-y-20">
          <h2 className="text-3xl font-semibold text-slate-900 border-l-4 border-blue-600 pl-4">
            Background
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                ProteinXplore is inspired by large-scale protein structure
                prediction platforms such as AlphaFold, which leverage artificial
                intelligence to predict three-dimensional protein structures
                directly from amino acid sequences.
              </p>

              <p>
                These predictions allow researchers to analyze protein folding,
                stability, and functional domains at an unprecedented scale,
                accelerating biological discovery and rare disease research.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <img
                src="https://alphafold.ebi.ac.uk/assets/img/Q8I3H7_1.webp"
                alt="Predicted protein structure"
                className="w-full rounded-md"
              />
              <p className="text-xs text-slate-500 mt-3">
                Example predicted protein structure (AlphaFold-style visualization)
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 order-2 md:order-1">
              <img
                src="https://alphafold.ebi.ac.uk/assets/img/Q8W3K0.webp"
                alt="Confidence visualization"
                className="w-full rounded-md"
              />
              <p className="text-xs text-slate-500 mt-3">
                Residue-level confidence visualization (pLDDT coloring)
              </p>
            </div>

            <div className="space-y-6 text-slate-700 text-lg leading-relaxed order-1 md:order-2">
              <p>
                Confidence scores provide insight into the reliability of each
                predicted residue, helping researchers distinguish stable
                structural regions from flexible or uncertain ones.
              </p>

              <p>
                ProteinXplore builds upon these ideas by integrating mutation
                analysis, spatial hotspot detection, and AI-assisted interpretation
                to support rare disease research workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
