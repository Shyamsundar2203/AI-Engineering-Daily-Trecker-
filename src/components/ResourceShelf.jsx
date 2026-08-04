import React, { useState } from 'react';
import { 
  BookOpen, 
  Youtube, 
  ExternalLink, 
  CheckCircle2, 
  Search, 
  Book, 
  Sparkles,
  Info
} from 'lucide-react';

export default function ResourceShelf({ books, youtubeChannels }) {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, books, youtube, free

  const filteredBooks = books.filter(b => {
    if (filterType === 'youtube') return false;
    if (filterType === 'free' && !b.isFree) return false;
    if (!search) return true;
    const q = search.toLowerCase();
    return b.title.toLowerCase().includes(q) || b.authors.toLowerCase().includes(q) || b.description.toLowerCase().includes(q);
  });

  const filteredYT = youtubeChannels.filter(yt => {
    if (filterType === 'books' || filterType === 'free') return false;
    if (!search) return true;
    const q = search.toLowerCase();
    return yt.name.toLowerCase().includes(q) || yt.topics.toLowerCase().includes(q) || yt.creator.toLowerCase().includes(q);
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Banner */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Permanent Free Resource Shelf</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Curated textbook references and video channels accessible anytime outside daily tasks
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1">
            {[
              { id: 'all', label: 'All Resources' },
              { id: 'books', label: 'Textbooks' },
              { id: 'youtube', label: 'YouTube Channels' },
              { id: 'free', label: 'Free Online Books' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filterType === f.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative pt-2">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search books, authors, YouTube channels, or topics..."
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all"
          />
        </div>
      </div>

      {/* Books Section */}
      {(filterType === 'all' || filterType === 'books' || filterType === 'free') && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Book className="w-5 h-5 text-purple-400" />
            <h3 className="font-bold text-lg text-white">Recommended AI Textbooks</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBooks.map(book => (
              <div 
                key={book.id}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded border ${
                      book.isFree
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    }`}>
                      {book.accessBadge}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-white">{book.title}</h4>
                  <p className="text-xs text-cyan-400 font-medium">{book.authors}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{book.description}</p>
                </div>

                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-cyan-300 border border-slate-700 transition-all"
                >
                  Access Resource <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* YouTube Section */}
      {(filterType === 'all' || filterType === 'youtube') && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <Youtube className="w-5 h-5 text-rose-500" />
            <h3 className="font-bold text-lg text-white">Curated Free YouTube Channels</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredYT.map(yt => (
              <div 
                key={yt.id}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">
                      YouTube
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-white">{yt.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">By {yt.creator}</p>
                  <p className="text-xs text-slate-300">{yt.description}</p>
                  <div className="pt-1">
                    <span className="text-[11px] text-cyan-300 bg-slate-900 px-2 py-1 rounded border border-slate-800 block line-clamp-1">
                      Topics: {yt.topics}
                    </span>
                  </div>
                </div>

                <a
                  href={yt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-xs font-bold text-rose-300 border border-rose-500/30 transition-all"
                >
                  Visit Channel <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
