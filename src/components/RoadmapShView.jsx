import React, { useState } from 'react';
import { 
  GitFork, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ExternalLink, 
  Layers, 
  Search,
  BookOpen,
  Filter
} from 'lucide-react';
import { ROADMAP_SOURCES } from '../data/roadmapShData';

export default function RoadmapShView({ nodes, completedDays, tasks, onSelectDayIndex }) {
  const [search, setSearch] = useState('');
  const [sourceFilter, setSourceFilter] = useState('all'); // all, roadmap-sh, agentic-labs
  const [completedNodes, setCompletedNodes] = useState({});

  const toggleNodeComplete = (topicId) => {
    setCompletedNodes(prev => ({ ...prev, [topicId]: !prev[topicId] }));
  };

  const filteredNodes = nodes.filter(category => {
    if (sourceFilter === 'roadmap-sh' && category.source === 'agentic-labs') return false;
    if (sourceFilter === 'agentic-labs' && category.source === 'roadmap-sh') return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Banner & Source Reference Badges */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <GitFork className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">AI Engineer Curriculum & Skill Tree</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Interactive skill tree integrating both official <strong>roadmap.sh/ai-engineer</strong> & <strong>AgenticAiLabs OSSU Open-Source Curriculum</strong>
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search skills, prompt engineering, RAG, agents..."
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all"
            />
          </div>
        </div>

        {/* Source Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {ROADMAP_SOURCES.map(src => (
            <a
              key={src.id}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/80 hover:bg-slate-800/80 p-3.5 rounded-xl border border-slate-800 hover:border-cyan-500/30 flex items-center justify-between transition-all group"
            >
              <div className="space-y-0.5">
                <span className="text-[10px] font-extrabold uppercase text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                  {src.badge}
                </span>
                <h4 className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {src.name}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-1">{src.description}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 flex-shrink-0 ml-2" />
            </a>
          ))}
        </div>

        {/* Filter Switcher */}
        <div className="flex items-center gap-1 pt-2 border-t border-slate-800">
          <span className="text-xs text-slate-400 font-medium mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter Curriculum:
          </span>
          {[
            { id: 'all', label: 'All Skill Nodes' },
            { id: 'roadmap-sh', label: 'roadmap.sh Official' },
            { id: 'agentic-labs', label: 'AgenticAiLabs OSSU' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSourceFilter(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                sourceFilter === f.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Nodes Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNodes.map(nodeCategory => {
          const filteredTopics = nodeCategory.topics.filter(t => {
            if (!search) return true;
            const q = search.toLowerCase();
            return t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q);
          });

          if (filteredTopics.length === 0) return null;

          return (
            <div 
              key={nodeCategory.id}
              className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {nodeCategory.category}
                </h3>
                <span className="text-xs font-semibold text-slate-400">
                  {filteredTopics.length} Skills
                </span>
              </div>

              {/* Skill Nodes List */}
              <div className="space-y-3">
                {filteredTopics.map(topic => {
                  const isDone = !!completedNodes[topic.id];

                  return (
                    <div 
                      key={topic.id}
                      className={`p-4 rounded-xl border transition-all ${
                        isDone 
                          ? 'bg-emerald-950/20 border-emerald-500/40' 
                          : 'bg-slate-900/70 hover:bg-slate-800/70 border-slate-800'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm text-white">{topic.name}</h4>
                            {isDone && (
                              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-extrabold px-1.5 py-0.5 rounded border border-emerald-500/30">
                                MASTERED
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">{topic.desc}</p>
                        </div>

                        <button
                          onClick={() => toggleNodeComplete(topic.id)}
                          className={`p-1.5 rounded-lg border transition-all flex-shrink-0 ${
                            isDone 
                              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' 
                              : 'bg-slate-800 text-slate-500 border-slate-700 hover:text-slate-300'
                          }`}
                          title={isDone ? 'Mark Uncompleted' : 'Mark Skill Mastered'}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
