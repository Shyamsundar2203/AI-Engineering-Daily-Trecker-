import React from 'react';
import { 
  Flame, 
  Trophy, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Award, 
  TrendingUp,
  Zap,
  Sparkles
} from 'lucide-react';

export default function StreakView({ stats, completedDays, startDate }) {
  // Generate 52 weeks x 7 days heat map data based on completed task dates
  const weeks = 52;
  const daysPerWeek = 7;
  const totalGridDays = weeks * daysPerWeek;

  // Build dates array ending today/startDate
  const today = new Date();
  const calendarCells = [];

  for (let i = totalGridDays - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    
    // Count completions on this specific date
    let count = 0;
    Object.values(completedDays).forEach(comp => {
      if (comp.completedAt && comp.completedAt.startsWith(dateStr)) {
        count++;
      }
    });

    calendarCells.push({
      dateStr,
      count,
      dayOfWeek: d.getDay()
    });
  }

  // Cell color helper matching GitHub contribution heatmap aesthetic
  const getCellColor = (count) => {
    if (count === 0) return 'bg-[#162032] border-slate-800/80';
    if (count === 1) return 'bg-cyan-900/70 border-cyan-700/50 shadow-sm shadow-cyan-500/10';
    if (count === 2) return 'bg-cyan-500 border-cyan-400 shadow-md shadow-cyan-500/20';
    return 'bg-emerald-400 border-emerald-300 shadow-lg shadow-emerald-400/30';
  };

  const milestones = [
    { id: 1, name: "Math & ML Rigor Refresh", requirement: "Complete Phase 1 (Days 1–20)", phaseId: 1 },
    { id: 2, name: "Deep Learning Mastery", requirement: "Complete Phase 2 (Days 21–45)", phaseId: 2 },
    { id: 3, name: "NLP, Transformers & LLMs", requirement: "Complete Phase 3 (Days 46–70)", phaseId: 3 },
    { id: 4, name: "MLOps Infrastructure Specialist", requirement: "Complete Phase 4 (Days 71–90)", phaseId: 4 },
    { id: 5, name: "Open Source & Kaggle Proof", requirement: "Complete Phase 5 (Days 91–110)", phaseId: 5 },
    { id: 6, name: "Top-Tier AI Engineer Ready", requirement: "Graduate Phase 6 (Days 111–120)", phaseId: 6 }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Overview Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Current Streak</span>
            <Flame className="w-5 h-5 text-amber-400 animate-bounce" />
          </div>
          <p className="text-3xl font-extrabold text-white tracking-tight">{stats.currentStreak} <span className="text-sm font-semibold text-slate-400">Days</span></p>
          <p className="text-[11px] text-amber-400 font-medium">Keep completing 1 task daily!</p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Longest Streak</span>
            <Trophy className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-3xl font-extrabold text-white tracking-tight">{stats.longestStreak} <span className="text-sm font-semibold text-slate-400">Days</span></p>
          <p className="text-[11px] text-purple-300 font-medium">Personal Best Record</p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Completed</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-3xl font-extrabold text-white tracking-tight">{stats.completedCount} <span className="text-sm font-semibold text-slate-400">/ 120</span></p>
          <p className="text-[11px] text-emerald-400 font-medium">{stats.percentComplete}% of overall roadmap</p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Hours Invested</span>
            <Clock className="w-5 h-5 text-cyan-400" />
          </div>
          <p className="text-3xl font-extrabold text-white tracking-tight">~{stats.completedCount * 1.5} <span className="text-sm font-semibold text-slate-400">hrs</span></p>
          <p className="text-[11px] text-cyan-400 font-medium">1-1.5 hrs/day momentum</p>
        </div>

      </div>

      {/* GitHub-Style Contribution Heatmap Matrix */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-400" />
              Contribution Calendar Heatmap
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Visualizing daily task completion activity over the past 52 weeks
            </p>
          </div>

          {/* Heatmap Legend */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Less</span>
            <div className="w-3 h-3 rounded-sm bg-[#162032] border border-slate-800" />
            <div className="w-3 h-3 rounded-sm bg-cyan-900/70 border border-cyan-700/50" />
            <div className="w-3 h-3 rounded-sm bg-cyan-500 border border-cyan-400" />
            <div className="w-3 h-3 rounded-sm bg-emerald-400 border border-emerald-300" />
            <span>More</span>
          </div>
        </div>

        {/* Heatmap Grid Container */}
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[720px]">
            <div className="grid grid-flow-col grid-rows-7 gap-1.5">
              {calendarCells.map((cell, idx) => (
                <div
                  key={idx}
                  title={`${cell.dateStr}: ${cell.count} task(s) completed`}
                  className={`w-3.5 h-3.5 rounded-sm border transition-all ${getCellColor(cell.count)} hover:scale-125 hover:z-10 cursor-pointer`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Milestone Badges Section */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          <h3 className="font-bold text-lg text-white">Career Capstone Milestones</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {milestones.map(m => {
            // Check if phase tasks completed
            const isUnlocked = stats.completedPhases && stats.completedPhases[m.phaseId];

            return (
              <div 
                key={m.id}
                className={`p-4 rounded-xl border transition-all ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-emerald-950/40 to-slate-900 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/40 border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl border ${isUnlocked ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                    {isUnlocked ? <Sparkles className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded border ${isUnlocked ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-slate-800 text-slate-500 border-slate-700'}`}>
                      {isUnlocked ? 'UNLOCKED' : 'LOCKED'}
                    </span>
                    <h4 className="font-bold text-sm text-white mt-1">{m.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{m.requirement}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
