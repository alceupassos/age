import {
    FileText,
    Activity,
    Pill,
    Calendar,
    ChevronRight,
    TrendingUp,
    Download
} from 'lucide-react';

export const HealthScreen = () => {
    return (
        <div className="p-4 flex flex-col gap-6">
            <header className="py-4">
                <h1 className="text-3xl font-bold">Saúde</h1>
                <p className="text-muted text-lg">Seu resumo médico</p>
            </header>

            {/* Vitals Summary Card */}
            <div className="card-base bg-blue-50 flex flex-col gap-4">
                <div className="flex justify-between items-center text-blue-800">
                    <div className="flex items-center gap-2">
                        <Activity />
                        <span className="font-bold">Sinais Vitais (Sincronizado)</span>
                    </div>
                    <TrendingUp size={20} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <p className="text-sm text-muted">Pressão</p>
                        <p className="text-2xl font-bold">12/8</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <p className="text-sm text-muted">Glicose</p>
                        <p className="text-2xl font-bold">98 mg</p>
                    </div>
                </div>
            </div>

            {/* Action Sections */}
            <section className="flex flex-col gap-3">
                <h2 className="text-xl font-bold">Minhas Utilidades</h2>

                <div className="flex flex-col gap-2">
                    {[
                        { icon: <FileText className="text-blue-500" />, title: "Meus Exames", sub: "12 exames salvos", count: 4 },
                        { icon: <Pill className="text-orange-500" />, title: "Medicamentos", sub: "Próximo às 14:00", count: 1 },
                        { icon: <Calendar className="text-purple-500" />, title: "Consultas", sub: "Cardiologista em 2 dias" },
                    ].map((item, i) => (
                        <div key={i} className="card-base flex items-center justify-between py-4 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="bg-gray-100 p-3 rounded-full">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-muted text-sm">{item.sub}</p>
                                </div>
                            </div>
                            <ChevronRight className="text-gray-400" />
                        </div>
                    ))}
                </div>
            </section>

            {/* OCR Prompt */}
            <div className="card-base border-dashed border-2 border-primary bg-green-50 flex flex-col items-center gap-3 text-center py-6">
                <div className="bg-primary text-white p-4 rounded-full">
                    <FileText size={40} />
                </div>
                <div>
                    <h3 className="font-bold text-xl">Novo Exame?</h3>
                    <p className="text-muted px-4">Tire uma foto do resultado e eu organizo tudo para você.</p>
                </div>
                <button className="button-base button-primary mt-2">
                    Ler Exame Agora
                </button>
            </div>

            <button className="button-base border-2 border-primary text-primary bg-transparent w-full">
                <Download size={20} />
                Baixar Relatório para Médico
            </button>
        </div>
    );
};
