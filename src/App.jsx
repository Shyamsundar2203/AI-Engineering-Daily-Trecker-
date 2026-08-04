import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import TodayView from './components/TodayView';
import RoadmapView from './components/RoadmapView';
import RoadmapShView from './components/RoadmapShView';
import StreakView from './components/StreakView';
import GlossaryView from './components/GlossaryView';
import DailyDiaryView from './components/DailyDiaryView';
import ResourceShelf from './components/ResourceShelf';
import WeeklySummary from './components/WeeklySummary';
import DataModal from './components/DataModal';

import { PHASES, BOOKS, YOUTUBE_CHANNELS, ROADMAP_TASKS } from './data/roadmapData';
import { ROADMAP_SH_NODES } from './data/roadmapShData';
import { AI_GLOSSARY_TERMS, BOOK_SUMMARIES } from './data/termsGlossaryData';

const LOCAL_STORAGE_KEY = 'ai_engineer_tracker_v1';
const DIARY_STORAGE_KEY = 'ai_engineer_diary_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState('today');
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  // Persistent Tracker State
  const [completedDays, setCompletedDays] = useState({});
  const [rescheduledDays, setRescheduledDays] = useState({});
  const [skippedDays, setSkippedDays] = useState({});
  const [dayNotes, setDayNotes] = useState({});
  const [startDate, setStartDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [isBackupOpen, setIsBackupOpen] = useState(false);

  // Persistent Diary State
  const [diaryEntries, setDiaryEntries] = useState({});

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedTracker = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedTracker) {
        const parsed = JSON.parse(savedTracker);
        if (parsed.completedDays) setCompletedDays(parsed.completedDays);
        if (parsed.rescheduledDays) setRescheduledDays(parsed.rescheduledDays);
        if (parsed.skippedDays) setSkippedDays(parsed.skippedDays);
        if (parsed.dayNotes) setDayNotes(parsed.dayNotes);
        if (parsed.startDate) setStartDate(parsed.startDate);
      }

      const savedDiary = localStorage.getItem(DIARY_STORAGE_KEY);
      if (savedDiary) {
        setDiaryEntries(JSON.parse(savedDiary));
      }
    } catch (e) {
      console.error('Failed to load state from localStorage:', e);
    }
  }, []);

  // Save tracker state to localStorage
  useEffect(() => {
    try {
      const stateToSave = {
        completedDays,
        rescheduledDays,
        skippedDays,
        dayNotes,
        startDate
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.error('Failed to save tracker state to localStorage:', e);
    }
  }, [completedDays, rescheduledDays, skippedDays, dayNotes, startDate]);

  // Save diary state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(diaryEntries));
    } catch (e) {
      console.error('Failed to save diary state to localStorage:', e);
    }
  }, [diaryEntries]);

  // Set default selected day to first uncompleted day on first load
  useEffect(() => {
    const firstUncompletedIndex = ROADMAP_TASKS.findIndex(t => !completedDays[t.id]);
    if (firstUncompletedIndex !== -1) {
      setSelectedDayIndex(firstUncompletedIndex);
    }
  }, []);

  // Calculated Stats
  const stats = useMemo(() => {
    const totalCount = ROADMAP_TASKS.length;
    const completedCount = Object.keys(completedDays).length;
    const percentComplete = Math.round((completedCount / totalCount) * 100);

    const dates = Object.values(completedDays)
      .map(c => c.completedAt ? c.completedAt.split('T')[0] : null)
      .filter(Boolean)
      .sort();

    const uniqueDates = Array.from(new Set(dates));
    
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;

    const todayStr = new Date().toISOString().split('T')[0];
    const yesterdayStr = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if (uniqueDates.includes(todayStr) || uniqueDates.includes(yesterdayStr)) {
      currentStreak = 1;
      let checkDate = new Date(uniqueDates.includes(todayStr) ? Date.now() - 86400000 : Date.now() - 172800000);
      
      while (true) {
        const dStr = checkDate.toISOString().split('T')[0];
        if (uniqueDates.includes(dStr)) {
          currentStreak++;
          checkDate.setDate(checkDate.getDate() - 1);
        } else {
          break;
        }
      }
    }

    for (let i = 0; i < uniqueDates.length; i++) {
      if (i === 0) {
        tempStreak = 1;
      } else {
        const prev = new Date(uniqueDates[i - 1]);
        const curr = new Date(uniqueDates[i]);
        const diffDays = Math.round((curr - prev) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          tempStreak++;
        } else {
          tempStreak = 1;
        }
      }
      if (tempStreak > longestStreak) longestStreak = tempStreak;
    }

    if (currentStreak > longestStreak) longestStreak = currentStreak;

    const completedPhases = {};
    PHASES.forEach(p => {
      const pTasks = ROADMAP_TASKS.filter(t => t.phaseId === p.id);
      const isAllDone = pTasks.every(t => completedDays[t.id]);
      completedPhases[p.id] = isAllDone;
    });

    return {
      completedCount,
      percentComplete,
      currentStreak,
      longestStreak,
      completedPhases
    };
  }, [completedDays]);

  // Handlers
  const handleToggleComplete = (taskId) => {
    setCompletedDays(prev => {
      const copy = { ...prev };
      if (copy[taskId]) {
        delete copy[taskId];
      } else {
        copy[taskId] = {
          completedAt: new Date().toISOString()
        };
      }
      return copy;
    });
  };

  const handleReschedule = (taskId) => {
    setRescheduledDays(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const handleSkip = (taskId) => {
    setSkippedDays(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const handleSaveNote = (taskId, noteText) => {
    setDayNotes(prev => ({
      ...prev,
      [taskId]: noteText
    }));
  };

  const handleSaveDiaryEntry = (dateStr, entryObj) => {
    setDiaryEntries(prev => ({
      ...prev,
      [dateStr]: entryObj
    }));
  };

  const handleDeleteDiaryEntry = (dateStr) => {
    setDiaryEntries(prev => {
      const copy = { ...prev };
      delete copy[dateStr];
      return copy;
    });
  };

  const handleExportData = () => {
    const backupObj = {
      version: "2.0",
      exportedAt: new Date().toISOString(),
      completedDays,
      rescheduledDays,
      skippedDays,
      dayNotes,
      diaryEntries,
      startDate
    };

    const blob = new Blob([JSON.stringify(backupObj, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI_Engineer_Tracker_Complete_Backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  const handleImportData = (jsonObj) => {
    if (jsonObj.completedDays) setCompletedDays(jsonObj.completedDays);
    if (jsonObj.rescheduledDays) setRescheduledDays(jsonObj.rescheduledDays);
    if (jsonObj.skippedDays) setSkippedDays(jsonObj.skippedDays);
    if (jsonObj.dayNotes) setDayNotes(jsonObj.dayNotes);
    if (jsonObj.diaryEntries) setDiaryEntries(jsonObj.diaryEntries);
    if (jsonObj.startDate) setStartDate(jsonObj.startDate);
  };

  const handleResetData = () => {
    setCompletedDays({});
    setRescheduledDays({});
    setSkippedDays({});
    setDayNotes({});
    setDiaryEntries({});
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    localStorage.removeItem(DIARY_STORAGE_KEY);
  };

  const currentTask = ROADMAP_TASKS[selectedDayIndex] || ROADMAP_TASKS[0];
  const currentPhase = PHASES.find(p => p.id === currentTask.phaseId) || PHASES[0];

  return (
    <div className="min-h-screen bg-[#0A101F] text-slate-100 flex flex-col font-sans">
      
      {/* Navbar Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        stats={stats}
        onOpenBackup={() => setIsBackupOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {activeTab === 'today' && (
          <TodayView
            task={currentTask}
            phase={currentPhase}
            totalTasksCount={ROADMAP_TASKS.length}
            isCompleted={!!completedDays[currentTask.id]}
            isRescheduled={!!rescheduledDays[currentTask.id]}
            isSkipped={!!skippedDays[currentTask.id]}
            noteText={dayNotes[currentTask.id] || ''}
            onSaveNote={handleSaveNote}
            onToggleComplete={handleToggleComplete}
            onReschedule={handleReschedule}
            onSkip={handleSkip}
            onSelectDayIndex={setSelectedDayIndex}
          />
        )}

        {activeTab === 'roadmap' && (
          <RoadmapView
            phases={PHASES}
            tasks={ROADMAP_TASKS}
            completedDays={completedDays}
            rescheduledDays={rescheduledDays}
            skippedDays={skippedDays}
            dayNotes={dayNotes}
            onToggleComplete={handleToggleComplete}
            onSelectDayIndex={(idx) => {
              setSelectedDayIndex(idx);
              setActiveTab('today');
            }}
          />
        )}

        {activeTab === 'roadmapSh' && (
          <RoadmapShView
            nodes={ROADMAP_SH_NODES}
            completedDays={completedDays}
            tasks={ROADMAP_TASKS}
            onSelectDayIndex={(idx) => {
              setSelectedDayIndex(idx);
              setActiveTab('today');
            }}
          />
        )}

        {activeTab === 'streak' && (
          <StreakView
            stats={stats}
            completedDays={completedDays}
            startDate={startDate}
          />
        )}

        {activeTab === 'glossary' && (
          <GlossaryView
            terms={AI_GLOSSARY_TERMS}
            bookSummaries={BOOK_SUMMARIES}
          />
        )}

        {activeTab === 'diary' && (
          <DailyDiaryView
            diaryEntries={diaryEntries}
            onSaveDiaryEntry={handleSaveDiaryEntry}
            onDeleteDiaryEntry={handleDeleteDiaryEntry}
          />
        )}

        {activeTab === 'shelf' && (
          <ResourceShelf
            books={BOOKS}
            youtubeChannels={YOUTUBE_CHANNELS}
          />
        )}

        {activeTab === 'weekly' && (
          <WeeklySummary
            tasks={ROADMAP_TASKS}
            phases={PHASES}
            completedDays={completedDays}
            dayNotes={dayNotes}
          />
        )}

      </main>

      {/* Persistent Backup / Import / Export Modal */}
      <DataModal
        isOpen={isBackupOpen}
        onClose={() => setIsBackupOpen(false)}
        onExportData={handleExportData}
        onImportData={handleImportData}
        onResetData={handleResetData}
        startDate={startDate}
        onSetStartDate={setStartDate}
      />

      {/* Footer */}
      <footer className="bg-slate-950/80 border-t border-slate-800/80 py-6 text-center text-xs text-slate-500 space-y-1">
        <p className="font-semibold text-slate-400">
          AI Engineer Pro Career Tracker • Complete Self-Contained Master Suite
        </p>
        <p className="text-[11px] text-slate-400">
          Includes 120-day daily tasks, roadmap.sh skill tree, 40+ terms glossary, book notes & daily diary journal.
        </p>
      </footer>

    </div>
  );
}
