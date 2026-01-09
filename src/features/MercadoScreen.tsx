import {
    Stethoscope,
    Home,
    Package,
    ShieldCheck,
    Truck,
    Accessibility,
    ChevronRight,
    Search
} from 'lucide-react';

export const MercadoScreen = () => {
    const categories = [
        { title: "Telemedicina", sub: "Médicos 24h por vídeo", icon: <Stethoscope size={32} />, color: "#E3F2FD" },
        { title: "Exames em Casa", sub: "Coleta rápida e segura", icon: <Home size={32} />, color: "#E8F5E9" },
        { title: "Assinatura Remédios", sub: "Não deixe faltar", icon: <Package size={32} />, color: "#FFF3E0" },
        { title: "Serviços e Cuidados", sub: "Enfermagem e fisioterapia", icon: <Accessibility size={32} />, color: "#F3E5F5" },
        { title: "Ambulância & SOS", sub: "Atendimento prioridade", icon: <ShieldCheck size={32} />, color: "#FFEBEE" },
        { title: "Equipamentos", sub: "Aluguel de camas e cadeiras", icon: <Truck size={32} />, color: "#F5F5F5" },
    ];

    return (
        <div className="p-4 flex flex-col gap-6">
            <header className="py-4">
                <h1 className="text-3xl font-bold">Mercado Sênior</h1>
                <p className="text-muted text-lg">Produtos e serviços para você</p>
            </header>

            <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="O que você precisa hoje?"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 bg-white text-lg focus:outline-none focus:border-primary transition-colors"
                />
            </div>

            <div className="grid grid-cols-1 gap-4">
                {categories.map((cat, i) => (
                    <div key={i} className="card-base flex items-center justify-between p-1 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                            <div
                                className="w-20 h-20 flex items-center justify-center rounded-2xl"
                                style={{ backgroundColor: cat.color, color: 'var(--text-main)' }}
                            >
                                {cat.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">{cat.title}</h3>
                                <p className="text-muted">{cat.sub}</p>
                            </div>
                        </div>
                        <div className="pr-4">
                            <ChevronRight className="text-gray-300" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="card-base bg-primary text-white p-6 mt-4 flex flex-col gap-4">
                <h3 className="text-2xl font-bold italic">Clube MelhorID</h3>
                <p className="text-white/90">Tenha descontos exclusivos em todos os parceiros por apenas R$ 29/mês.</p>
                <button className="button-base bg-white text-primary w-full mt-2">
                    Saber mais
                </button>
            </div>
        </div>
    );
};
