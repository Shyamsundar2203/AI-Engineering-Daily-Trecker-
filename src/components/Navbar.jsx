import React, { useState } from 'react';
import { 
  Calendar, 
  Map, 
  Flame, 
  BookOpen, 
  BarChart2, 
  Database, 
  Menu, 
  X,
  Sparkles,
  Award,
  GitFork,
  Book,
  PenTool
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, stats, onOpenBackup }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'today', label: 'Today View', icon: Calendar },
    { id: 'roadmap', label: '120-Day Plan', icon: Map },
    { id: 'roadmapSh', label: 'roadmap.sh Tree', icon: GitFork },
    { id: 'streak', label: 'Streak & Heatmap', icon: Flame },
    { id: 'glossary', label: 'Glossary & Book Notes', icon: Book },
    { id: 'diary', label: 'Daily Diary', icon: PenTool },
    { id: 'shelf', label: 'Resource Shelf', icon: BookOpen },
    { id: 'weekly', label: 'Weekly Summary', icon: BarChart2 },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A101F]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('today')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-emerald-400 p-[2px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0A101F] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg text-white tracking-tight">AI Engineer</h1>
                <span className="text-[10px] uppercase font-extrabold tracking-wider bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20">
                  Pro Tracker
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Zero to Pro AI Engineer Roadmap</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  {item.label}
                  {item.id === 'streak' && stats.currentStreak > 0 && (
                    <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                      {stats.currentStreak}🔥
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Widgets */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Stats Pill */}
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg text-xs">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-300 font-medium">
                <strong className="text-white font-semibold">{stats.completedCount}</strong>/120 Done ({stats.percentComplete}%)
              </span>
            </div>

            {/* Backup & Import Button */}
            <button
              onClick={onOpenBackup}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 px-3 py-1.5 rounded-lg transition-all"
              title="Backup / Restore / Settings"
            >
              <Database className="w-3.5 h-3.5 text-cyan-400" />
              Backup
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBackup}
              className="p-2 text-slate-400 hover:text-white bg-slate-800/60 rounded-lg"
              title="Backup"
            >
              <Database className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A101F] border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  {item.label}
                </div>
                {item.id === 'streak' && stats.currentStreak > 0 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                    {stats.currentStreak} 🔥
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
