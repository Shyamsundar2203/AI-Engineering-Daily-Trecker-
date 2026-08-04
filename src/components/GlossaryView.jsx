import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  Book,
  Code
} from 'lucide-react';

export default function GlossaryView({ terms, bookSummaries }) {
  const [activeSubTab, setActiveSubTab] = useState('glossary'); // glossary, bookNotes
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(terms.map(t => t.category)))];

  const filteredTerms = terms.filter(t => {
    if (selectedCategory !== 'all' && t.category !== selectedCategory) return false;
    if (!search) return true;
    const q = search.toLowerCase();
    return t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q) || (t.formula && t.formula.toLowerCase().includes(q));
  });

  const filteredBookSummaries = bookSummaries.filter(b => {
    if (!search) return true;
    const q = search.toLowerCase();
    return b.title.toLowerCase().includes(q) || b.authors.toLowerCase().includes(q) || b.keyChapters.some(c => c.chapter.toLowerCase().includes(q) || c.takeaway.toLowerCase().includes(q));
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Banner */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Book className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-bold text-white">AI Engineering Glossary & Textbook Notes</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Searchable reference shelf for mathematical formulations, terms, and chapter-by-chapter book summaries
            </p>
          </div>

          {/* Sub Tab Switcher */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveSubTab('glossary')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeSubTab === 'glossary'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Terms Glossary ({terms.length})
            </button>
            <button
              onClick={() => setActiveSubTab('bookNotes')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeSubTab === 'bookNotes'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Book Chapter Summaries ({bookSummaries.length})
            </button>
          </div>
        </div>

        {/* Search & Category Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search terms, formulas, or book chapters..."
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all"
            />
          </div>

          {activeSubTab === 'glossary' && (
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {cat === 'all' ? 'All Categories' : cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SubTab 1: AI Terms Glossary */}
      {activeSubTab === 'glossary' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.map(t => (
            <div 
              key={t.id}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/30">
                    {t.category}
                  </span>
                </div>

                <h3 className="font-bold text-base text-white">{t.term}</h3>

                {t.formula && (
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 font-mono text-xs text-cyan-300 overflow-x-auto">
                    <code>{t.formula}</code>
                  </div>
                )}

                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {t.definition}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SubTab 2: Book Chapter Summaries */}
      {activeSubTab === 'bookNotes' && (
        <div className="space-y-6">
          {filteredBookSummaries.map(book => (
            <div key={book.id} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/30">
                  TEXTBOOK NOTES
                </span>
                <h3 className="font-bold text-lg text-white mt-1">{book.title}</h3>
                <p className="text-xs text-cyan-400 font-medium">By {book.authors}</p>
              </div>

              <div className="space-y-3">
                {book.keyChapters.map((ch, idx) => (
                  <div key={idx} className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-1">
                    <h4 className="font-bold text-xs text-purple-300 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-purple-400" /> {ch.chapter}
                    </h4>
                    <p className="text-xs text-slate-200 leading-relaxed font-normal pt-1">
                      {ch.takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
