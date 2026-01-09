import { useState, useEffect } from 'react';
import {
    Mic,
    X,
    Settings,
    History,
    BookOpen,
    Gamepad2,
    Volume2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const VoiceScreen = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [aiMessage] = useState("Olá, Maria! Como posso te ajudar hoje? Quer conversar ou prefere que eu leia seus últimos exames?");

    // Simulate AI visual behavior
    useEffect(() => {
        if (isSpeaking) {
            const interval = setInterval(() => {
                setTranscript(prev => prev.length > 30 ? "Verificando meus exames..." : prev + ".");
            }, 500);
            return () => clearInterval(interval);
        }
    }, [isSpeaking]);

    return (
        <div className="flex-1 flex flex-col h-full bg-white relative overflow-hidden">
            <header className="p-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Voz</h1>
                <div className="flex gap-2">
                    <button className="p-4 rounded-full bg-gray-100 text-gray-600">
                        <Settings />
                    </button>
                </div>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center p-8 gap-8">
                {/* Visual Pulse for Voice */}
                <div className="relative">
                    <AnimatePresence>
                        {isSpeaking && (
                            <>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1.5, opacity: 0.2 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="absolute inset-0 bg-primary rounded-full"
                                />
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1.2, opacity: 0.4 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
                                    className="absolute inset-0 bg-primary rounded-full"
                                />
                            </>
                        )}
                    </AnimatePresence>
                    <button
                        onClick={() => setIsSpeaking(!isSpeaking)}
                        className={`w-32 h-32 rounded-full flex items-center justify-center shadow-xl transition-all z-10 relative ${isSpeaking ? 'bg-red-500 scale-110' : 'bg-primary'}`}
                    >
                        {isSpeaking ? <X size={48} color="white" /> : <Mic size={48} color="white" />}
                    </button>
                </div>

                <div className="text-center max-w-sm">
                    <h2 className="text-2xl font-bold mb-4">
                        {isSpeaking ? "Estou ouvindo..." : "Toque no botão para falar"}
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-2xl min-h-[120px] shadow-inner text-xl leading-relaxed">
                        {isSpeaking ? transcript : aiMessage}
                    </div>
                </div>
            </div>

            {/* Suggested Actions */}
            <footer className="p-6 grid grid-cols-2 gap-4 pb-32">
                {[
                    { icon: <History />, label: "Minhas Memórias" },
                    { icon: <BookOpen />, label: "Ler Notícias" },
                    { icon: <Gamepad2 />, label: "Jogos Cognitivos" },
                    { icon: <Volume2 />, label: "Velocidade da Voz" },
                ].map((item, i) => (
                    <button key={i} className="card-base flex items-center gap-3 py-4 text-left">
                        <div className="text-primary">{item.icon}</div>
                        <span className="font-semibold">{item.label}</span>
                    </button>
                ))}
            </footer>
        </div>
    );
};
