
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingSlides from '@/components/onboarding/OnboardingSlides';
import AuthForm from '@/components/onboarding/AuthForm';
import LanguageSwitcher from '@/components/language/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'onboarding' | 'auth'>('onboarding');
  const { t } = useLanguage();
  
  const handleOnboardingComplete = () => {
    setStep('auth');
  };
  
  const handleAuthComplete = () => {
    navigate('/dashboard');
  };
  
  // For demo purposes, you can uncomment this to skip onboarding and auth
  // useEffect(() => {
  //   navigate('/dashboard');
  // }, [navigate]);
  
  return (
    <div className="min-h-screen dark">
      <div className="absolute top-6 left-6 z-10 flex items-center">
        <img 
          src="/lovable-uploads/f328f86f-9e20-428c-b571-91f861610d33.png" 
          alt="MedWallet Logo" 
          className="h-12 w-auto"
        />
        <span className="ml-2 text-xl font-bold text-white">MedWallet</span>
      </div>
      
      <div className="absolute top-6 right-6 z-10">
        <LanguageSwitcher />
      </div>
      
      {step === 'onboarding' ? (
        <OnboardingSlides onComplete={handleOnboardingComplete} />
      ) : (
        <AuthForm onComplete={handleAuthComplete} />
      )}
    </div>
  );
};

export default Index;
