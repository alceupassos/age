import {
    Zap,
    Wifi,
    CreditCard,
    Landmark,
    ScanLine,
    CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

export const BillsScreen = () => {
    const bills = [
        { name: "Conta de Luz", provider: "Enel", amount: "R$ 142,50", status: "Vence em 2 dias", icon: <Zap /> },
        { name: "Internet", provider: "Vivo Fibra", amount: "R$ 99,90", status: "Pago", icon: <Wifi />, paid: true },
        { name: "Plano de Saúde", provider: "Unimed", amount: "R$ 850,00", status: "Vence dia 15", icon: <ActivityIcon /> },
    ];

    return (
        <div className="p-4 flex flex-col gap-6">
            <header className="py-4">
                <h1 className="text-3xl font-bold text-gray-800">Pagamentos</h1>
                <p className="text-muted text-lg">Suas contas em dia, sem fila.</p>
            </header>

            {/* Main Action: Scan */}
            <motion.button
                whileTap={{ scale: 0.98 }}
                className="glass-card magnetic-button w-full h-32 flex-col gap-2 bg-gradient-to-r from-[#2E5C55] to-[#457870] text-white"
                style={{ border: 'none' }}
            >
                <ScanLine size={32} />
                <span className="text-xl">Pagar Boleto com Câmera</span>
            </motion.button>

            {/* INSS / Gov.br Integration */}
            <div className="glass-card p-6 flex items-center justify-between border-l-4 border-yellow-400">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-100 rounded-2xl text-yellow-700">
                        <Landmark size={28} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Meu INSS</h3>
                        <p className="text-sm text-muted">Benefício aprovado</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-bold text-xl text-green-700">R$ 3.200</p>
                    <p className="text-xs text-muted">Disponível dia 05</p>
                </div>
            </div>

            <section>
                <h2 className="text-xl font-bold mb-4 ml-1">Próximos Vencimentos</h2>
                <div className="flex flex-col gap-3">
                    {bills.map((bill, i) => (
                        <div key={i} className={`glass-card p-4 flex items-center justify-between ${bill.paid ? 'opacity-60' : ''}`}>
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-2xl ${bill.paid ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                    {bill.paid ? <CheckCircle2 /> : bill.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{bill.name}</h4>
                                    <p className="text-sm text-muted">{bill.provider}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-lg">{bill.amount}</p>
                                <p className={`text-xs font-medium ${bill.paid ? 'text-green-600' : 'text-red-500'}`}>
                                    {bill.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <motion.button className="magnetic-button btn-primary w-full mt-4">
                <CreditCard size={20} />
                Ver Todas as Contas
            </motion.button>
        </div>
    );
};

// Helper for icon
const ActivityIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
)
