import React from 'react';
import { ResumeData } from '../types';

interface ReportProps {
  reports: ResumeData[];
  vacancyName: string;
  jobDescription: string;
  jdFileName?: string;
}

const Report: React.FC<ReportProps> = ({ reports, vacancyName, jdFileName }) => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-black text-slate-900 mb-2">Screening Results</h2>
        <p className="text-slate-500 font-medium">
          <span className="text-indigo-600 font-bold">{vacancyName}</span> • {reports.length} candidate{reports.length !== 1 ? 's' : ''} analyzed
        </p>
        {jdFileName && (
          <p className="text-xs text-slate-400 mt-2">Job Description: {jdFileName}</p>
        )}
      </div>

      {/* Reports List */}
      <div className="grid gap-6">
        {reports.map((report, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{report.candidateName || 'Candidate ' + (index + 1)}</h3>
                <p className="text-sm text-slate-500 font-medium">{report.fileName}</p>
              </div>
              <div className="text-right">
                <div className={`text-4xl font-black ${
                  report.score >= 80 ? 'text-emerald-600' : 
                  report.score >= 60 ? 'text-indigo-600' : 
                  report.score >= 40 ? 'text-amber-600' : 
                  'text-rose-600'
                }`}>
                  {report.score}%
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Match Score</p>
              </div>
            </div>

            <div className="space-y-4">
              {report.summary && (
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Summary</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{report.summary}</p>
                </div>
              )}

              {report.strengths && report.strengths.length > 0 && (
                <div>
                  <h4 className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-2">Strengths</h4>
                  <ul className="space-y-1">
                    {report.strengths.map((strength, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">✓</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {report.concerns && report.concerns.length > 0 && (
                <div>
                  <h4 className="text-xs font-black text-amber-600 uppercase tracking-widest mb-2">Concerns</h4>
                  <ul className="space-y-1">
                    {report.concerns.map((concern, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-amber-500 mt-1">⚠</span>
                        <span>{concern}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {report.recommendation && (
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Recommendation</h4>
                  <p className="text-sm font-bold text-slate-700">{report.recommendation}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
