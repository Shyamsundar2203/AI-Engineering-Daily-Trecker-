import React, { useState } from 'react';
import { 
  BarChart2, 
  CheckCircle2, 
  FileText, 
  Download, 
  Calendar, 
  Clock, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function WeeklySummary({ tasks, phases, completedDays, dayNotes }) {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const weekTasks = tasks.filter(t => t.week === selectedWeek);
  const weekCompleted = weekTasks.filter(t => completedDays[t.id]);
  const completedCount = weekCompleted.length;
  const totalWeekTasks = weekTasks.length;
  const weekPercent = Math.round((completedCount / totalWeekTasks) * 100);

  // Get notes taken during this week
  const weekNotes = weekTasks.filter(t => dayNotes[t.id]).map(t => ({
    day: t.day,
    title: t.title,
    note: dayNotes[t.id]
  }));

  // Identify main phase for this week
  const mainPhaseId = weekTasks[0]?.phaseId || 1;
  const phase = phases.find(p => p.id === mainPhaseId) || phases[0];

  const handleExportMarkdown = () => {
    let md = `# Weekly Progress Summary — Week ${selectedWeek}\n\n`;
    md += `**Phase:** Phase ${phase.id}: ${phase.title}\n`;
    md += `**Tasks Completed:** ${completedCount} / ${totalWeekTasks} (${weekPercent}%)\n`;
    md += `**Estimated Hours:** ~${completedCount * 1.5} hrs\n\n`;
    md += `--- \n\n## Daily Tasks Status\n\n`;

    weekTasks.forEach(t => {
      const isDone = !!completedDays[t.id];
      md += `### Day ${t.day}: ${t.title} [${isDone ? 'COMPLETED' : 'PENDING'}]\n`;
      md += `- **Resource:** [${t.resourceName}](${t.resourceUrl})\n`;
      md += `- **Deliverable:** ${t.doneCondition}\n`;
      if (dayNotes[t.id]) {
        md += `- **Notes:**\n> ${dayNotes[t.id].replace(/\n/g, '\n> ')}\n`;
      }
      md += `\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI_Engineer_Week_${selectedWeek}_Summary.md`;
    a.click();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Header & Week Selector */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Weekly Executive Summary</h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Track 5-day weekly velocity, phase progress, and recap your learning notes
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedWeek(prev => Math.max(1, prev - 1))}
              disabled={selectedWeek <= 1}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(parseInt(e.target.value))}
              className="bg-slate-900 border border-slate-700 text-cyan-400 font-bold text-xs rounded-xl px-4 py-2 outline-none focus:border-cyan-500"
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  Week {i + 1} of 24
                </option>
              ))}
            </select>

            <button
              onClick={() => setSelectedWeek(prev => Math.min(24, prev + 1))}
              disabled={selectedWeek >= 24}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleExportMarkdown}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition-all"
            >
              <Download className="w-3.5 h-3.5" /> Export Markdown
            </button>
          </div>
        </div>

        {/* Phase Info Banner */}
        <div className="flex items-center gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
          <span className={`text-xs font-extrabold px-3 py-1 rounded-md border ${phase.badgeColor}`}>
            Phase {phase.id}: {phase.title}
          </span>
          <span className="text-xs text-slate-400">
            {phase.description}
          </span>
        </div>
      </div>

      {/* Week Performance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Weekly Tasks Done</span>
          <p className="text-3xl font-extrabold text-white">{completedCount} <span className="text-sm font-normal text-slate-400">/ {totalWeekTasks}</span></p>
          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800 mt-2">
            <div className="h-full bg-emerald-400" style={{ width: `${weekPercent}%` }} />
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Weekly Completion Rate</span>
          <p className="text-3xl font-extrabold text-cyan-400">{weekPercent}%</p>
          <p className="text-[11px] text-slate-400 mt-1">Target: 100% (5 days/week)</p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Study Time Logged</span>
          <p className="text-3xl font-extrabold text-purple-400">~{completedCount * 1.5} <span className="text-sm font-normal text-slate-400">hrs</span></p>
          <p className="text-[11px] text-slate-400 mt-1">~1.5 hrs per task</p>
        </div>

      </div>

      {/* Daily Breakdown for Selected Week */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
        <h3 className="font-bold text-base text-white flex items-center gap-2">
          <Calendar className="w-4 h-4 text-cyan-400" />
          Week {selectedWeek} Daily Breakdown
        </h3>

        <div className="space-y-3">
          {weekTasks.map(t => {
            const isDone = !!completedDays[t.id];

            return (
              <div 
                key={t.id}
                className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg ${isDone ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-600'}`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-400">Day {t.day}</span>
                    <h4 className="text-sm font-semibold text-white">{t.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-1">{t.doneCondition}</p>
                  </div>
                </div>

                <span className={`text-xs font-extrabold px-2.5 py-1 rounded-md border ${
                  isDone 
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}>
                  {isDone ? 'COMPLETED' : 'PENDING'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Week Notes Recap */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
        <h3 className="font-bold text-base text-white flex items-center gap-2">
          <FileText className="w-4 h-4 text-purple-400" />
          Week {selectedWeek} Learning Notes Recap ({weekNotes.length} notes)
        </h3>

        {weekNotes.length === 0 ? (
          <p className="text-xs text-slate-500 italic py-2">
            No notes written for tasks in Week {selectedWeek} yet. Use the notes editor in Today view to jot down learnings!
          </p>
        ) : (
          <div className="space-y-3">
            {weekNotes.map(n => (
              <div key={n.day} className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-cyan-400">Day {n.day}: {n.title}</span>
                <p className="text-xs text-slate-200 font-mono whitespace-pre-line leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                  {n.note}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
