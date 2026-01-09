import { useState, useEffect } from 'react';
import {
  Home,
  HeartPulse,
  Utensils,
  ShoppingCart,
  Mic,
  Plus,
  AlertCircle,
  CreditCard,
  Scale,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HealthScreen } from './features/HealthScreen';
import { MercadoScreen } from './features/MercadoScreen';
import { VoiceScreen } from './features/VoiceScreen';
import { BillsScreen } from './features/BillsScreen';
import { LegalScreen } from './features/LegalScreen';

// --- Types ---
type Tab = 'hoje' | 'saude' | 'pagamentos' | 'mercado' | 'voz' | 'direitos';

// --- Proactive Check-in Component ---
const ProactiveCheckIn = ({ onDismiss }: { onDismiss: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 100 }}
    className="fixed inset-x-4 bottom-32 z-[2000] glass-card p-6 flex flex-col gap-4 border-2 border-primary shadow-2xl"
  >
    <div className="flex justify-between items-start">
      <div className="bg-primary-light p-3 rounded-full text-primary">
        <Mic size={32} />
      </div>
      <button onClick={onDismiss} className="text-gray-400 p-2"><X /></button>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-primary">Oi Maria, tudo bem?</h3>
      <p className="text-lg text-muted mt-1">Notei que você sumiu um pouquinho. Estava preocupada, está sentindo alguma coisa ou só descansando?</p>
    </div>
    <div className="flex gap-3">
      <button className="magnetic-button btn-primary flex-1" onClick={onDismiss}>Estou bem!</button>
      <button className="magnetic-button bg-gray-100 flex-1" onClick={() => alert("Acionando apoio...")}>Preciso de ajuda</button>
    </div>
  </motion.div>
);

// --- Today Screen ---
const HojeScreen = () => (
  <div className="p-4 flex flex-col gap-6">
    <header className="py-4">
      <h1 className="text-3xl font-bold">Olá, Maria</h1>
      <p className="text-muted text-lg">Hoje é Quinta, 8 de Janeiro</p>
    </header>

    <div className="glass-card flex flex-col gap-4 border-l-8 border-l-blue-500 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-xl">Remédio: Pressão</h3>
          <p className="text-muted">Tomar com um copo d'água</p>
        </div>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">08:00</span>
      </div>
      <button className="magnetic-button btn-primary w-full">Clique para confirmar</button>
    </div>

    <section>
      <h2 className="text-xl font-bold mb-4 ml-1">Acesso Rápido</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: <Plus size={32} />, label: "Ler Exame", color: "rgba(46, 92, 85, 0.1)" },
          { icon: <HeartPulse size={32} />, label: "Sinais Vitais", color: "#E3F2FD" },
          { icon: <ShoppingCart size={32} />, label: "Mercado", color: "#FFF8E1" },
          { icon: <Mic size={32} />, label: "Falar", color: "#F3E5F5" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.95 }}
            className="glass-card flex flex-col items-center justify-center text-center gap-2 p-6"
            style={{ backgroundColor: item.color }}
          >
            <div className="text-primary">{item.icon}</div>
            <span className="font-bold">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    <div className="glass-card flex items-center gap-4 bg-green-50 p-6">
      <div className="bg-green-100 p-3 rounded-full text-primary">
        <Utensils />
      </div>
      <div>
        <h4 className="font-bold text-lg">Sugestão de Almoço</h4>
        <p className="text-muted text-sm">Frango grelhado e purê</p>
      </div>
    </div>
  </div>
);

// --- Main App ---
function App() {
  const [activeTab, setActiveTab] = useState<Tab>('hoje');
  const [showCheckIn, setShowCheckIn] = useState(false);

  // Simulate proactive check-in after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCheckIn(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'hoje': return <HojeScreen />;
      case 'saude': return <HealthScreen />;
      case 'pagamentos': return <BillsScreen />;
      case 'mercado': return <MercadoScreen />;
      case 'voz': return <VoiceScreen />;
      case 'direitos': return <LegalScreen />;
      default: return <HojeScreen />;
    }
  };

  return (
    <div className="infinite-container">
      <main className="flex-1 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Proactive Check-in Overlay */}
      <AnimatePresence>
        {showCheckIn && <ProactiveCheckIn onDismiss={() => setShowCheckIn(false)} />}
      </AnimatePresence>

      {/* SOS Fixed */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="sos-float"
        onClick={() => alert("SOS ACIONADO! Ligando para emergência e família...")}
      >
        <AlertCircle size={32} />
        <span>SOS</span>
      </motion.button>

      {/* Navigation */}
      <nav className="glass-nav">
        {[
          { id: 'hoje', icon: <Home />, label: 'Hoje' },
          { id: 'saude', icon: <HeartPulse />, label: 'Saúde' },
          { id: 'pagamentos', icon: <CreditCard />, label: 'Contas' },
          { id: 'mercado', icon: <ShoppingCart />, label: 'Mercado' },
          { id: 'voz', icon: <Mic />, label: 'Voz' },
          { id: 'direitos', icon: <Scale />, label: 'Direitos' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as Tab)}
            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
