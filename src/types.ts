export interface ResumeData {
  fileName: string;
  candidateName: string;
  score: number;
  summary: string;
  strengths: string[];
  concerns: string[];
  recommendation: string;
  experience?: string;
  education?: string;
  skills?: string[];
}

export interface AppState {
  isProcessing: boolean;
  reports: ResumeData[];
  error: string | null;
  processingFile: string | null;
  vacancyName: string;
  jobDescription: string;
  jdFile: File | null;
  selectedFiles: File[];
}
