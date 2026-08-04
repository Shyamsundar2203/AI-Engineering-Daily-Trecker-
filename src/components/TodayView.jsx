import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  BookOpen, 
  Calendar, 
  Save, 
  RotateCcw,
  Sparkles,
  AlertCircle,
  Video,
  FileText,
  Code,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TodayView({ 
  task, 
  phase, 
  totalTasksCount, 
  isCompleted, 
  isRescheduled, 
  isSkipped, 
  noteText, 
  onSaveNote, 
  onToggleComplete, 
  onReschedule, 
  onSkip, 
  onSelectDayIndex 
}) {
  const [localNote, setLocalNote] = useState(noteText || '');
  const [saveIndicator, setSaveIndicator] = useState(false);

  useEffect(() => {
    setLocalNote(noteText || '');
  }, [noteText, task.id]);

  const handleNoteChange = (e) => {
    const val = e.target.value;
    setLocalNote(val);
    onSaveNote(task.id, val);
    setSaveIndicator(true);
    setTimeout(() => setSaveIndicator(false), 1500);
  };

  const handleMarkComplete = () => {
    if (!isCompleted) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    onToggleComplete(task.id);
  };

  const getResourceTypeIcon = (type) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4 text-rose-400" />;
      case 'paper': return <FileText className="w-4 h-4 text-purple-400" />;
      case 'code': return <Code className="w-4 h-4 text-emerald-400" />;
      case 'course': return <GraduationCap className="w-4 h-4 text-amber-400" />;
      default: return <BookOpen className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Top Controls & Stepper */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectDayIndex(task.day - 2)}
            disabled={task.day <= 1}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300 transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          
          <button
            onClick={() => onSelectDayIndex(task.day)}
            disabled={task.day >= totalTasksCount}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300 transition-all"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Jump Selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-400 font-medium">Jump to Day:</label>
          <select
            value={task.day}
            onChange={(e) => onSelectDayIndex(parseInt(e.target.value) - 1)}
            className="bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-semibold rounded-lg px-3 py-1.5 outline-none focus:border-cyan-500"
          >
            {Array.from({ length: totalTasksCount }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                Day {i + 1}: {task.day === i + 1 ? task.title.slice(0, 25) + '...' : `Day ${i + 1}`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Focus Card */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden border border-slate-800">
        
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Phase Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${phase.badgeColor}`}>
              Phase {phase.id}: {phase.title}
            </span>
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Week {task.week}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> ~{task.estHours} hrs
            </span>
            <span className="text-xs font-bold text-slate-300 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20">
              Day {task.day} of {totalTasksCount}
            </span>
          </div>
        </div>

        {/* Task Title */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {task.title}
          </h2>

          {/* Status Alert Banner */}
          {isCompleted && (
            <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3.5 py-2 rounded-xl text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" /> Task Completed! Great job keeping your momentum!
            </div>
          )}
          {isRescheduled && (
            <div className="flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3.5 py-2 rounded-xl text-xs font-semibold">
              <AlertCircle className="w-4 h-4" /> Task Rescheduled to tomorrow.
            </div>
          )}
          {isSkipped && (
            <div className="flex items-center gap-2 bg-slate-800 text-slate-400 border border-slate-700 px-3.5 py-2 rounded-xl text-xs font-semibold">
              <RotateCcw className="w-4 h-4" /> Task Skipped. You can un-skip anytime.
            </div>
          )}
        </div>

        {/* Actionable Description */}
        <div className="bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-3">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Action Plan
          </h3>
          <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-line font-normal">
            {task.description}
          </p>
        </div>

        {/* Free Resource Card */}
        <div className="bg-gradient-to-r from-slate-900 to-[#131C31] p-5 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700">
              {getResourceTypeIcon(task.resourceType)}
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Free Required Resource</p>
              <h4 className="text-sm font-semibold text-white mt-0.5">{task.resourceName}</h4>
            </div>
          </div>

          <a
            href={task.resourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all transform active:scale-95"
          >
            Open Free Resource <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Done Condition Box */}
        <div className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl space-y-1.5">
          <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Done Condition (Deliverable Output)
          </h4>
          <p className="text-xs text-emerald-200 font-medium">
            {task.doneCondition}
          </p>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
          <button
            onClick={handleMarkComplete}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 ${
              isCompleted
                ? 'bg-slate-800 text-emerald-400 border border-emerald-500/40 hover:bg-slate-700'
                : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-emerald-500/20'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            {isCompleted ? 'Completed (Click to Undo)' : 'Mark Task Done'}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onReschedule(task.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                isRescheduled
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {isRescheduled ? 'Pushed to Tomorrow' : 'Push to Tomorrow'}
            </button>

            <button
              onClick={() => onSkip(task.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                isSkipped
                  ? 'bg-slate-700 text-slate-300 border-slate-600'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border-slate-800'
              }`}
            >
              {isSkipped ? 'Skipped' : 'Skip Task'}
            </button>
          </div>
        </div>

      </div>

      {/* Daily Notes / Learning Journal */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white">Daily Learning Journal & Notes</h3>
          </div>
          {saveIndicator && (
            <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 animate-pulse">
              <Save className="w-3 h-3" /> Auto-saved to browser
            </span>
          )}
        </div>
        <textarea
          value={localNote}
          onChange={handleNoteChange}
          placeholder="Jot down key derivations, formula intuition, repo links, code bugs solved, or summary notes for today..."
          rows={5}
          className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all font-mono leading-relaxed resize-y"
        />
        <p className="text-[11px] text-slate-400">
          Notes persist automatically across sessions and are included in your Weekly Summary recaps.
        </p>
      </div>

    </div>
  );
}
