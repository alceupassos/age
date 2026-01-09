/**
 * GEMINI 3.0 & MCP CLIENT STUB
 * 
 * This service manages the connection to the Backend Agent via WebSocket/WebRTC.
 * It handles the "Proactive" logic and the Multimodal Audio streaming.
 */

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY;

// --- MCP Tool Definitions ---
// These match the schemas expected by Gemini 3.0 to control the app.
export const MCP_TOOLS = [
    {
        name: "read_vitals",
        description: "Lê os últimos sinais vitais do usuário (pressão, glicose)",
        parameters: { type: "object", properties: {} }
    },
    {
        name: "schedule_medication",
        description: "Agenda um lembrete de remédio",
        parameters: {
            type: "object",
            properties: {
                medication_name: { type: "string" },
                time: { type: "string" }
            },
            required: ["medication_name", "time"]
        }
    },
    {
        name: "emergency_call",
        description: "Aciona o contato de emergência do usuário",
        parameters: { type: "object", properties: {} }
    }
];

class GeminiAgent {
    private isConnected: boolean = false;
    private lastCheckIn: number = Date.now();

    constructor() {
        if (!GEMINI_API_KEY) {
            console.warn("Gemini API Key missing! Voice features will be simulated.");
        }
    }

    connect() {
        // In a real app, this would establish a WebRTC connection to the Gemini Multimodal Live API
        console.log("Connecting to Gemini 3.0 Multimodal Gateway...");
        this.isConnected = true;
    }

    disconnect() {
        this.isConnected = false;
    }

    // Proactive Logic: Run by a Background Worker (or useEffect in React)
    checkInStatus() {
        const now = Date.now();
        // Example: If inactive for > 12 hours (simulated as 12s here for demo)
        if (now - this.lastCheckIn > 12000) {
            this.triggerProactiveVoice();
        }
    }

    triggerProactiveVoice() {
        console.log("PROACTIVE AGENT: Triggering voice check-in...");
        // This would send a "push" to the UI to open the Voice overlay
        return {
            type: 'PROACTIVE_CHECKIN',
            text: 'Oi Maria, notei que você não entrou no app hoje. Está tudo bem?'
        };
    }

    updateActivity() {
        this.lastCheckIn = Date.now();
    }
}

export const geminiAgent = new GeminiAgent();
