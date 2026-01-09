import { useState } from 'react';
import {
    Scale,
    MessageCircle,
    FileText,
    ShieldCheck,
    Send
} from 'lucide-react';

export const LegalScreen = () => {
    const [messages] = useState([
        { id: 1, type: 'bot', text: "Olá! Sou seu assistente de direitos. Posso ajudar com dúvidas sobre o INSS, isenções ou Estatuto do Idoso. O que você gostaria de saber?" }
    ]);

    return (
        <div className="p-4 flex flex-col h-full gap-4">
            <header className="py-4">
                <h1 className="text-3xl font-bold text-gray-800">Seus Direitos</h1>
                <p className="text-muted text-lg">Assistência jurídica especializada.</p>
            </header>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mb-2">
                <button className="glass-card p-4 flex flex-col items-center gap-2 text-center hover:bg-white/40">
                    <Scale className="text-primary" size={28} />
                    <span className="font-bold text-sm">Consultar INSS</span>
                </button>
                <button className="glass-card p-4 flex flex-col items-center gap-2 text-center hover:bg-white/40">
                    <ShieldCheck className="text-primary" size={28} />
                    <span className="font-bold text-sm">Golpes & Segurança</span>
                </button>
            </div>

            {/* Chat Interface */}
            <div className="flex-1 glass-card flex flex-col overflow-hidden">
                <div className="bg-primary/5 p-4 border-b border-glass-border">
                    <h3 className="font-bold flex items-center gap-2">
                        <MessageCircle size={20} />
                        Chat Jurídico Sênior
                    </h3>
                </div>

                <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] p-4 rounded-2xl ${msg.type === 'user'
                                ? 'bg-primary text-white rounded-br-none'
                                : 'bg-white border border-gray-100 rounded-bl-none shadow-sm'
                                }`}>
                                <p className="text-lg leading-snug">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-white/50 border-t border-glass-border flex gap-2">
                    <input
                        type="text"
                        placeholder="Digite sua dúvida aqui..."
                        className="flex-1 p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-lg"
                    />
                    <button className="bg-primary text-white p-4 rounded-xl">
                        <Send />
                    </button>
                </div>
            </div>

            <div className="glass-card p-4 flex items-center gap-4">
                <FileText className="text-gray-500" />
                <div>
                    <h4 className="font-bold">Cartilha do Idoso 2026</h4>
                    <p className="text-xs text-muted">Atualizada com novas leis.</p>
                </div>
            </div>
        </div>
    );
};
