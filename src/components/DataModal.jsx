import React, { useRef } from 'react';
import { 
  X, 
  Database, 
  Download, 
  Upload, 
  RotateCcw, 
  AlertTriangle,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export default function DataModal({ 
  isOpen, 
  onClose, 
  onExportData, 
  onImportData, 
  onResetData, 
  startDate, 
  onSetStartDate 
}) {
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        onImportData(json);
        alert('Data imported successfully!');
        onClose();
      } catch (err) {
        alert('Invalid JSON file format.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-lg w-full border border-slate-800 space-y-6 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Data Persistence & Backup</h3>
            <p className="text-xs text-slate-400 mt-0.5">Manage your local storage, export backup JSON, or restore progress</p>
          </div>
        </div>

        {/* Info Callout */}
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-1.5">
          <h4 className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Automatic Local Storage Active
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Your daily progress, streak history, notes, and rescheduled tasks are automatically saved to your browser's <code className="text-cyan-300 font-mono">localStorage</code>.
          </p>
        </div>

        {/* Program Start Date */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-400" /> Program Start Date (Aligns Contribution Heatmap):
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => onSetStartDate(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-cyan-400 font-bold outline-none focus:border-cyan-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            onClick={onExportData}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
          >
            <Download className="w-4 h-4" /> Export Backup JSON File
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json"
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs border border-slate-700 transition-all"
          >
            <Upload className="w-4 h-4" /> Restore / Import Backup JSON File
          </button>

          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to reset all progress? This action cannot be undone unless you exported a backup!')) {
                  onResetData();
                  onClose();
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-bold text-xs border border-rose-500/30 transition-all"
            >
              <RotateCcw className="w-4 h-4" /> Reset All Tracker Progress
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
