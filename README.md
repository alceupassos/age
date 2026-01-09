# MelhorID - Super App Sênior 55-90+

> **A Life Companion for healthy aging, rights management, and social connection.**

## 🌟 Vision

MelhorID is not just an app; it's a **proactive guardian**. It combines high-end accessibility design (**"Sereno Future Premium"**) with advanced AI (**Gemini 3.0 Multimodal**) to empower senior users.

### Key Features

1. **Cockpit "Hoje"**: A dashboard that simplifies daily life.
2. **Health 360**: Vitals, Exams (OCR), and Medication management.
3. **Marketplace Sênior**: One-click access to Doctors, Ambulances, and Equipment.
4. **Rights & Bills**: Pays bills via camera and provides Legal AI for INSS rights.
5. **Proactive Voice Agent**: The app checks on the user if they are inactive.

## 🚀 How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Setup Environment**:
   Copy `.env.example` to `.env.local` and add your keys:
   ```bash
   cp .env.example .env.local
   ```
   *Required Keys*: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_GEMINI_KEY`.

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

## 🏗 Architecture

### Tech Stack

* **Frontend**: React + TypeScript + Vite
* **Styling**: Vanilla CSS (CSS Variables) + Framer Motion (Animations)
* **Icons**: Lucide React
* **Backend (Stub)**: Supabase Integration (`src/services/supabase.ts`)
* **AI**: Gemini 3.0 Agent Stub (`src/services/gemini.ts`)

### File Structure

* `src/index.css`: **The Design System**. Defines the "Glassmorphism" look, spacing tokens, and typography.
* `src/App.tsx`: **Main Orchestrator**. Handles Navigation and the **Proactive Check-in** logic.
* `src/features/`: Contains the specialized modules (Bills, Health, Voice, etc.).

### Proactive Agent Logic

The Proactive Agent is simulated in `src/App.tsx` via a `useEffect` timer. in production, this would be an Android `WorkManager` job that runs even when the app is closed, triggering a high-priority notification or a VoIP call.

## 🎨 Design System: "Sereno Future"

* **Glassmorphism**: High contrast glass cards for depth perception.
* **Magnetic Touch**: Buttons have extra padding to accommodate reduced dexterity.
* **Swiss Typography**: "Outfit" and "Inter" for maximum readability.
