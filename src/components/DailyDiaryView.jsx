import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Sparkles, 
  Flame, 
  Save, 
  Trash2, 
  Download, 
  Plus, 
  CheckCircle2, 
  AlertCircle, 
  Search,
  PenTool
} from 'lucide-react';

export default function DailyDiaryView({ diaryEntries, onSaveDiaryEntry, onDeleteDiaryEntry }) {
  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [searchQuery, setSearchQuery] = useState('');

  // Current entry form state for selected date
  const currentEntry = diaryEntries[selectedDate] || {
    date: selectedDate,
    title: '',
    focusLevel: 4,
    wins: '',
    challenges: '',
    reflections: '',
    updatedAt: null
  };

  const [formState, setFormState] = useState(currentEntry);
  const [saveNotify, setSaveNotify] = useState(false);

  // Sync form when selected date changes
  React.useEffect(() => {
    setFormState(diaryEntries[selectedDate] || {
      date: selectedDate,
      title: '',
      focusLevel: 4,
      wins: '',
      challenges: '',
      reflections: '',
      updatedAt: null
    });
  }, [selectedDate, diaryEntries]);

  const handleChange = (field, val) => {
    setFormState(prev => ({ ...prev, [field]: val }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updated = {
      ...formState,
      date: selectedDate,
      updatedAt: new Date().toISOString()
    };
    onSaveDiaryEntry(selectedDate, updated);
    setSaveNotify(true);
    setTimeout(() => setSaveNotify(false), 2000);
  };

  const handleExportDiary = () => {
    const entriesList = Object.values(diaryEntries).sort((a, b) => b.date.localeCompare(a.date));
    let md = `# AI Engineer Daily Personal Journal & Diary\n\n`;
    md += `Exported on: ${new Date().toLocaleDateString()}\n\n---\n\n`;

    entriesList.forEach(entry => {
      md += `## 📅 ${entry.date} - ${entry.title || 'Untitled Entry'}\n`;
      md += `**Focus/Energy Level:** ${'🔥'.repeat(entry.focusLevel || 3)}\n\n`;
      if (entry.wins) md += `### 🏆 Wins & Breakthroughs\n${entry.wins}\n\n`;
      if (entry.challenges) md += `### ⚠️ Challenges & Blockers\n${entry.challenges}\n\n`;
      if (entry.reflections) md += `### 📝 Reflections & Learnings\n${entry.reflections}\n\n`;
      md += `---\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI_Engineer_Daily_Diary_Backup.md`;
    a.click();
  };

  // Filtered timeline entries
  const sortedEntries = Object.values(diaryEntries)
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter(entry => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        entry.date.includes(q) ||
        (entry.title && entry.title.toLowerCase().includes(q)) ||
        (entry.reflections && entry.reflections.toLowerCase().includes(q)) ||
        (entry.wins && entry.wins.toLowerCase().includes(q))
      );
    });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Banner */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <PenTool className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Daily Career Diary & Reflections</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Your personal daily log to record focus levels, wins, blockers, and career growth reflections
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportDiary}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition-all"
            >
              <Download className="w-3.5 h-3.5" /> Export All Diary Entries
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Form Column (Entry Editor) */}
        <div className="lg:col-span-7 glass-card rounded-2xl p-6 border border-slate-800 space-y-5">
          <form onSubmit={handleSave} className="space-y-4">
            
            {/* Date Header & Selector */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <label className="text-xs font-bold text-slate-300">Journal Date:</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-cyan-400 font-bold outline-none focus:border-cyan-500"
                />
              </div>

              {saveNotify && (
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 animate-pulse">
                  <CheckCircle2 className="w-4 h-4" /> Entry Saved!
                </span>
              )}
            </div>

            {/* Entry Title */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Today's Focus Headline / Title:</label>
              <input
                type="text"
                value={formState.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="e.g. Derived Adam Optimizer & Debugged Micrograd autograd!"
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all font-semibold"
              />
            </div>

            {/* Energy & Focus Rating */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>Energy & Focus Level:</span>
                <span className="text-amber-400 font-extrabold">{formState.focusLevel || 4} / 5 Stars</span>
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => handleChange('focusLevel', star)}
                    className={`p-2 rounded-xl border text-sm font-bold transition-all flex items-center gap-1 ${
                      formState.focusLevel >= star
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-slate-900 text-slate-600 border-slate-800'
                    }`}
                  >
                    <Flame className={`w-4 h-4 ${formState.focusLevel >= star ? 'text-amber-400 fill-amber-400' : ''}`} />
                    {star}
                  </button>
                ))}
              </div>
            </div>

            {/* Today's Wins */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Wins & Breakthroughs:
              </label>
              <textarea
                value={formState.wins || ''}
                onChange={(e) => handleChange('wins', e.target.value)}
                placeholder="What went well today? What code ran cleanly, what concept clicked?"
                rows={3}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3 text-xs text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all"
              />
            </div>

            {/* Blockers & Challenges */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" /> Challenges & Blockers Faced:
              </label>
              <textarea
                value={formState.challenges || ''}
                onChange={(e) => handleChange('challenges', e.target.value)}
                placeholder="What bug or math derivation was tricky? What needs review tomorrow?"
                rows={3}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3 text-xs text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all"
              />
            </div>

            {/* Freeform Journal Reflections */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5" /> Daily Personal Reflections:
              </label>
              <textarea
                value={formState.reflections || ''}
                onChange={(e) => handleChange('reflections', e.target.value)}
                placeholder="Write freeform thoughts, career progress notes, ideas for capstone projects, or internship reflections..."
                rows={4}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3 text-xs text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all font-mono"
              />
            </div>

            {/* Save Button */}
            <div className="pt-2 flex items-center justify-between">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
              >
                <Save className="w-4 h-4" /> Save Diary Entry
              </button>

              {diaryEntries[selectedDate] && (
                <button
                  type="button"
                  onClick={() => onDeleteDiaryEntry(selectedDate)}
                  className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Delete Entry
                </button>
              )}
            </div>

          </form>
        </div>

        {/* Right Timeline Column (Past Diary Log) */}
        <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" /> Past Journal Logs ({sortedEntries.length})
            </h3>
          </div>

          {/* Timeline Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search diary entries..."
              className="w-full bg-slate-900 border border-slate-700/80 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all"
            />
          </div>

          {/* Entries Timeline List */}
          <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
            {sortedEntries.length === 0 ? (
              <p className="text-xs text-slate-500 italic py-4 text-center">
                No diary entries logged yet. Write your first entry for today!
              </p>
            ) : (
              sortedEntries.map(entry => (
                <div 
                  key={entry.date}
                  onClick={() => setSelectedDate(entry.date)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    selectedDate === entry.date
                      ? 'bg-cyan-500/10 border-cyan-500/40 shadow-sm'
                      : 'bg-slate-900/60 hover:bg-slate-800/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400">{entry.date}</span>
                    <span className="text-[11px] text-amber-400 font-bold">
                      {'🔥'.repeat(entry.focusLevel || 3)}
                    </span>
                  </div>

                  <h4 className="font-semibold text-xs text-white mt-1 line-clamp-1">
                    {entry.title || 'Untitled Entry'}
                  </h4>

                  {entry.wins && (
                    <p className="text-[11px] text-emerald-300 line-clamp-1 mt-0.5">
                      🏆 {entry.wins}
                    </p>
                  )}
                  {entry.reflections && (
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      📝 {entry.reflections}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
