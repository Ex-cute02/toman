# Municipal Water & Sanitation Voice Helpdesk

## Project Overview
Vani (Voice-Activated Network Intelligence) is a real-time, human-like AI voice assistant for civic management designed to replace traditional, menu-based IVR systems. Built for the Stranger Tech Hackathon, this solution targets municipal bodies to automate citizen grievance registration and resource dispatch without human intervention. 

It allows citizens in semi-urban and rural areas to speak naturally in regional languages to report civic issues like water supply outages or sanitation emergencies.

## Core Features
* Multilingual Voice Interface: Processes natural speech inputs in regional languages without requiring numerical menus.
* Real-Time Sentiment & Urgency Detection: Analyzes caller tone and vocabulary to categorize tickets dynamically (Low, Medium, High, Critical).
* Automated Ticketing: Extracts location details and issue types directly from the conversation to generate geo-tagged tickets.
* Omnichannel Notification: Automatically triggers a WhatsApp message containing the official complaint ticket number and resolution timeline.
* Admin Dashboard: A live-updating view for administrators detailing active calls, real-time transcripts, sentiment gauges, and active civic issues.

## Technical Architecture
* Frontend: Next.js (App Router), Tailwind CSS
* Backend & API Layer: Next.js API Routes (REST)
* Database: MongoDB Atlas
* Speech-to-Text (STT): OpenAI Whisper API
* Core LLM (Processing & Intent): Groq (running Llama-3)
* Text-to-Speech (TTS): Azure TTS
* Automation & Webhooks: n8n Cloud (for WhatsApp API integration)

## Local Setup Instructions
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure environmental variables in `.env.local`:
   - `MONGODB_URI`
   - `OPENAI_API_KEY`
   - `GROQ_API_KEY`
   - `AZURE_TTS_KEY`
   - `AZURE_TTS_REGION`
   - `N8N_WEBHOOK_URL`
4. Run the development server using `npm run dev`.

## Hackathon Details
Developed during the 24-hour Stranger Tech hackathon.
