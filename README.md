# JobBot

**JobBot** is your AI-powered career assistant, designed to help you with every aspect of the job search process—no matter your industry. Whether you need help with your resume, cover letter, job description analysis, or general career advice, JobBot is here to guide you with professional, industry-neutral support.

## Features

- 📝 **Resume/CV Improvements:** Get tailored suggestions to enhance your resume for any profession.
- ✍️ **Cover Letter Writing:** Craft compelling cover letters, personalized for your target job and industry.
- 💡 **Job Application Tips:** Receive actionable advice for job searching, applications, and interviews.
- 🔍 **Job Description Analysis:** Understand what employers are looking for and how to tailor your application.
- 📩 **Cold Outreach Help:** Write effective messages for reaching out to potential employers.
- 🎯 **Universal Guidance:** All advice is industry-neutral—JobBot never assumes you work in tech unless you say so.

## How It Works

- **Frontend:** A sleek, single-page chat interface (`index.html`) where you can interact with JobBot.
- **Backend API:** The `/api/chat` endpoint forwards your questions to the OpenRouter API (using the `mistralai/mistral-7b-instruct` model) and returns AI-generated responses.
- **CORS Proxy:** A local proxy server (`proxy.js` using `cors-anywhere`) is included to handle cross-origin requests if needed.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- An [OpenRouter API key](https://openrouter.ai/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/JobBot.git
   cd JobBot
   ```

2. **Install dependencies:**
   ```sh
   npm install
   cd cors-proxy
   npm install
   cd ..
   ```

3. **Set your OpenRouter API key:**
   - Create a `.env` file in the root directory:
     ```
     OPENROUTER_API_KEY=your_openrouter_api_key_here
     ```

### Running the App

#### 1. Start the CORS Proxy (if needed)
```sh
node proxy.js
```
- This runs a CORS proxy at [http://localhost:8080](http://localhost:8080).

#### 2. Serve the Frontend
- You can open `index.html` directly in your browser, or use a static server like [serve](https://www.npmjs.com/package/serve):
  ```sh
  npx serve .
  ```

#### 3. Start the API (if using a serverless or Node.js backend)
- Deploy `api/chat.js` as an API endpoint (e.g., with Vercel, Netlify, or your own Node.js server).

## Usage

- Open the chat interface in your browser.
- Ask JobBot anything about jobs, applications, resumes, or career advice.
- JobBot will respond with professional, industry-neutral guidance.

## Customization

- **Model:** The default model is `mistralai/mistral-7b-instruct`. You can change this in `index.html`.
- **Branding:** Update the UI and welcome popup in `index.html` to match your needs.

## License

MIT

---

**Created by BleachCarte**

*JobBot: Helping everyone land their dream job!*
