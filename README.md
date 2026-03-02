# CV-Expert AI

An AI-powered CV screening application that helps recruiters and hiring managers analyze multiple resumes against job descriptions using Google's Gemini API.

## Features

- 🚀 **Bulk Resume Analysis** - Upload and analyze multiple CVs simultaneously
- 🤖 **AI-Powered Matching** - Uses Google Gemini AI to evaluate candidate fit
- 📄 **Multiple File Formats** - Supports PDF, Word (.doc/.docx), images, and text files
- 📊 **Detailed Reports** - Get comprehensive analysis with scores, strengths, and concerns
- 🎯 **Job Description Matching** - Upload JD files or paste text for accurate matching
- ⚡ **Real-time Processing** - See results as they're generated

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **AI**: Google Gemini API
- **Document Processing**: Mammoth (for Word documents)

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Emilazizov99/AI-CV.git
   cd AI-CV
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Enter Vacancy Details**
   - Fill in the vacancy name
   - Either paste the job description or upload a JD file

2. **Upload CVs**
   - Click "Add CV Attachments" to upload one or multiple resumes
   - Supported formats: PDF, DOC, DOCX, images

3. **Run Analysis**
   - Click "Run AI Screening" to start the analysis
   - Results appear progressively as each CV is processed

4. **Review Results**
   - View match scores, strengths, concerns, and recommendations
   - Compare candidates side-by-side

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Environment Variables

- `VITE_GEMINI_API_KEY` - Your Google Gemini API key (required for production)

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Project Structure

```
AI-CV/
├── src/
│   ├── components/
│   │   ├── Icon.tsx          # Icon components
│   │   └── Report.tsx        # Results display component
│   ├── services/
│   │   └── geminiService.ts  # Gemini API integration
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   ├── index.css             # Global styles
│   └── types.ts              # TypeScript type definitions
├── public/                    # Static assets
├── index.html                 # HTML entry point
└── package.json              # Dependencies and scripts
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Support

For issues and questions, please open an issue in the GitHub repository.
