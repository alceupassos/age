
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import LoginModal from '@/components/auth/LoginModal';
import LanguageSwitcher from '@/components/language/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { t } = useLanguage();

  const handleGetStarted = () => {
    setShowLoginModal(true);
  };

  const handleSkipToDemo = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="absolute top-6 left-6 z-10 flex items-center">
        <img 
          src="/lovable-uploads/f328f86f-9e20-428c-b571-91f861610d33.png" 
          alt="MedWallet Logo" 
          className="h-12 w-auto"
        />
        <span className="ml-2 text-xl font-bold text-white">MedWallet</span>
      </div>
      
      <div className="absolute top-6 right-6 z-10 flex items-center space-x-4">
        <LanguageSwitcher />
        <Button
          onClick={handleSkipToDemo}
          variant="outline"
          size="sm"
          className="border-slate-600 text-slate-300 hover:bg-slate-700"
        >
          Ver Demo
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-8 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Sua Saúde,{' '}
              <span className="text-gradient-medical">Unificada</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg mx-auto">
              A plataforma mais segura para gerenciar sua saúde digital
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGetStarted} 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              Começar Agora
            </Button>
            <Button 
              onClick={handleSkipToDemo}
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8"
            >
              Explorar Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
};

export default Index;
