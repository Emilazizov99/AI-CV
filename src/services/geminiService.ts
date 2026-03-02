import { ResumeData } from '../types';

/**
 * Analyzes a resume against a job description using Google Gemini API
 * 
 * @param base64 - Base64 encoded file content (for PDF/images)
 * @param mimeType - MIME type of the file
 * @param vacancyName - Name of the vacancy position
 * @param jobDescription - Job description text
 * @param fileName - Name of the resume file
 * @param jdBase64 - Base64 encoded JD file (optional)
 * @param jdMimeType - MIME type of JD file (optional)
 * @param rawText - Extracted text from Word documents (optional)
 * @param jdRawText - Extracted text from JD Word document (optional)
 * @returns Promise with resume analysis data
 */
export async function analyzeResume(
  base64: string | null,
  mimeType: string,
  vacancyName: string,
  jobDescription: string,
  fileName: string,
  jdBase64: string,
  jdMimeType: string,
  rawText?: string,
  jdRawText?: string
): Promise<ResumeData> {
  // This is a placeholder implementation
  // In a real application, this would call the Google Gemini API
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    console.warn('VITE_GEMINI_API_KEY not found in environment variables. Using mock data.');
    // Return mock data for development
    return createMockAnalysis(fileName);
  }

  try {
    // Prepare the prompt
    let prompt = `Analyze this resume for the position: ${vacancyName}\n\n`;
    prompt += `Job Description: ${jobDescription}\n\n`;
    
    if (jdRawText) {
      prompt += `Additional JD from file: ${jdRawText}\n\n`;
    }
    
    if (rawText) {
      prompt += `Resume Content (extracted text): ${rawText}\n\n`;
    }
    
    prompt += `Please provide:\n`;
    prompt += `1. Candidate name (if found)\n`;
    prompt += `2. Match score (0-100)\n`;
    prompt += `3. Brief summary\n`;
    prompt += `4. Key strengths (3-5 points)\n`;
    prompt += `5. Potential concerns (2-3 points)\n`;
    prompt += `6. Final recommendation\n\n`;
    prompt += `Format the response as JSON.`;

    // In a real implementation, you would make an API call here
    // For now, return mock data
    console.log('Would analyze with prompt:', prompt.substring(0, 200) + '...');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return createMockAnalysis(fileName);
  } catch (error) {
    console.error('Error analyzing resume:', error);
    throw new Error('Failed to analyze resume. Please try again.');
  }
}

/**
 * Creates mock analysis data for development/testing
 */
function createMockAnalysis(fileName: string): ResumeData {
  const scores = [85, 72, 91, 68, 78, 88, 65, 94, 76, 82];
  const score = scores[Math.floor(Math.random() * scores.length)];
  
  return {
    fileName,
    candidateName: `Candidate from ${fileName.split('.')[0]}`,
    score,
    summary: `Experienced professional with relevant background. ${score >= 80 ? 'Strong alignment with job requirements.' : score >= 60 ? 'Moderate fit for the position.' : 'Some gaps in required qualifications.'}`,
    strengths: [
      'Strong technical skills in relevant areas',
      'Good communication abilities',
      'Relevant industry experience',
      'Educational background aligns well'
    ].slice(0, score >= 80 ? 4 : 3),
    concerns: score < 70 ? [
      'Limited experience in some key areas',
      'May require additional training'
    ] : [
      'Minor gaps in specific technical requirements'
    ],
    recommendation: score >= 80 
      ? 'Strongly recommended for interview' 
      : score >= 60 
        ? 'Recommended for further consideration' 
        : 'Consider for alternative roles',
    skills: ['JavaScript', 'React', 'TypeScript', 'Node.js']
  };
}
