import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  ExternalLink, 
  Clock, 
  FileText, 
  Search, 
  Filter, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function RoadmapView({ 
  phases, 
  tasks, 
  completedDays, 
  rescheduledDays, 
  skippedDays, 
  dayNotes, 
  onToggleComplete, 
  onSelectDayIndex,
  onJumpToToday 
}) {
  // Collapsed by default as requested
  const [expandedPhases, setExpandedPhases] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false });
  const [filterStatus, setFilterStatus] = useState('all'); // all, completed, pending, rescheduled
  const [searchQuery, setSearchQuery] = useState('');

  const togglePhase = (phaseId) => {
    setExpandedPhases(prev => ({ ...prev, [phaseId]: !prev[phaseId] }));
  };

  const toggleExpandAll = (expand) => {
    setExpandedPhases({ 1: expand, 2: expand, 3: expand, 4: expand, 5: expand, 6: expand });
  };

  const getTaskStatus = (taskId) => {
    if (completedDays[taskId]) return 'completed';
    if (rescheduledDays[taskId]) return 'rescheduled';
    if (skippedDays[taskId]) return 'skipped';
    return 'pending';
  };

  const totalTasks = tasks.length;
  const completedCount = Object.keys(completedDays).length;
  const overallPercent = Math.round((completedCount / totalTasks) * 100);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Overview Banner */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Curriculum Roadmap</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              6 Phases • 24 Weeks • 120 Actionable Daily Tasks
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleExpandAll(true)}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20"
            >
              Expand All
            </button>
            <button
              onClick={() => toggleExpandAll(false)}
              className="text-xs font-semibold text-slate-400 hover:text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-300">Overall Progress</span>
            <span className="text-cyan-400">{completedCount} of {totalTasks} Tasks ({overallPercent}%)</span>
          </div>
          <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-400 transition-all duration-500"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        
        {/* Search Input */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks, resources, or topics..."
            className="w-full bg-slate-900 border border-slate-700/80 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all"
          />
        </div>

        {/* Status Filter Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
          {[
            { id: 'all', label: 'All Tasks' },
            { id: 'completed', label: 'Completed' },
            { id: 'pending', label: 'Pending' },
            { id: 'rescheduled', label: 'Rescheduled' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterStatus(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                filterStatus === f.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Phase Accordions */}
      <div className="space-y-4">
        {phases.map(phase => {
          const phaseTasks = tasks.filter(t => t.phaseId === phase.id);
          const phaseCompleted = phaseTasks.filter(t => completedDays[t.id]).length;
          const phasePercent = Math.round((phaseCompleted / phaseTasks.length) * 100);
          const isExpanded = expandedPhases[phase.id];

          // Filter matching tasks inside this phase
          const filteredPhaseTasks = phaseTasks.filter(t => {
            const status = getTaskStatus(t.id);
            if (filterStatus === 'completed' && status !== 'completed') return false;
            if (filterStatus === 'pending' && status !== 'pending') return false;
            if (filterStatus === 'rescheduled' && status !== 'rescheduled') return false;
            if (searchQuery) {
              const query = searchQuery.toLowerCase();
              return (
                t.title.toLowerCase().includes(query) ||
                t.description.toLowerCase().includes(query) ||
                t.resourceName.toLowerCase().includes(query)
              );
            }
            return true;
          });

          return (
            <div 
              key={phase.id} 
              className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-all"
            >
              {/* Accordion Header */}
              <div 
                onClick={() => togglePhase(phase.id)}
                className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-800/40 transition-colors select-none"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`p-2 rounded-xl border ${phase.badgeColor}`}>
                    {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-base text-white">
                        Phase {phase.id}: {phase.title}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-medium">({phase.weeks})</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 max-w-2xl line-clamp-1">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Phase Mini Progress */}
                <div className="hidden sm:flex items-center gap-3 pl-4">
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-200">{phaseCompleted}/{phaseTasks.length}</span>
                    <span className="text-[11px] text-slate-400 block">{phasePercent}%</span>
                  </div>
                  <div className="w-20 h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div 
                      className="h-full bg-cyan-400 transition-all duration-300"
                      style={{ width: `${phasePercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Accordion Body */}
              {isExpanded && (
                <div className="border-t border-slate-800/80 bg-slate-950/40 divide-y divide-slate-800/60">
                  {filteredPhaseTasks.length === 0 ? (
                    <div className="p-6 text-center text-xs text-slate-500">
                      No tasks matching filters in this phase.
                    </div>
                  ) : (
                    filteredPhaseTasks.map(task => {
                      const status = getTaskStatus(task.id);
                      const hasNotes = !!dayNotes[task.id];

                      return (
                        <div 
                          key={task.id}
                          className="p-4 flex flex-wrap items-center justify-between gap-4 hover:bg-slate-900/60 transition-colors"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-[260px]">
                            {/* Checkbox Button */}
                            <button
                              onClick={() => onToggleComplete(task.id)}
                              className={`p-1 rounded-lg transition-all ${
                                status === 'completed' 
                                  ? 'text-emerald-400 hover:text-emerald-300' 
                                  : 'text-slate-600 hover:text-slate-400'
                              }`}
                              title={status === 'completed' ? 'Mark Incomplete' : 'Mark Completed'}
                            >
                              <CheckCircle2 className={`w-5 h-5 ${status === 'completed' ? 'fill-emerald-500/20' : ''}`} />
                            </button>

                            {/* Task Title & Info */}
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-bold text-cyan-400">Day {task.day}</span>
                                <h4 
                                  onClick={() => onSelectDayIndex(task.day - 1)}
                                  className={`text-sm font-semibold cursor-pointer hover:text-cyan-300 transition-colors ${
                                    status === 'completed' ? 'line-through text-slate-400' : 'text-slate-100'
                                  }`}
                                >
                                  {task.title}
                                </h4>
                                {hasNotes && (
                                  <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded border border-purple-500/30 flex items-center gap-1">
                                    <FileText className="w-3 h-3" /> Note
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                Deliverable: {task.doneCondition}
                              </p>
                            </div>
                          </div>

                          {/* Right Controls */}
                          <div className="flex items-center gap-3">
                            <span className="text-[11px] text-slate-400 hidden lg:flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {task.estHours}h
                            </span>

                            <a
                              href={task.resourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800 hover:border-cyan-500/30 transition-all"
                            >
                              Resource <ExternalLink className="w-3 h-3" />
                            </a>

                            <button
                              onClick={() => onSelectDayIndex(task.day - 1)}
                              className="text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-lg border border-cyan-500/30 transition-all"
                            >
                              View Task
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
