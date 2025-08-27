import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import LoginModal from '@/components/auth/LoginModal';
import LanguageSwitcher from '@/components/language/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Shield, 
  Calendar, 
  FileText, 
  Activity, 
  Users, 
  Smartphone,
  CheckCircle,
  ArrowRight,
  Heart,
  Brain,
  Stethoscope,
  CreditCard,
  Star
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { t } = useLanguage();

  const handleGetStarted = () => {
    setShowLoginModal(true);
  };

  const handleSkipToDemo = () => {
    navigate('/dashboard');
  };

  const features = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Secure Data",
      description: "Mean prisidek do iseres deled vierjents"
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "Easy Scheduling", 
      description: "Easy et sita em pivicta dells Menifeats"
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Unified Payments",
      description: "Mean pentey altre oumie tomel biemheats"
    }
  ];

  const benefits = [
    "Centralização de dados médicos",
    "Agilidade no atendimento",
    "Redução de custos",
    "Melhor comunicação médico-paciente",
    "Histórico completo sempre acessível",
    "Privacidade e segurança garantidas"
  ];

  const services = [
    {
      icon: <Stethoscope className="h-12 w-12" />,
      title: "Consultas Médicas",
      description: "Agende e acompanhe suas consultas com especialistas",
      action: "Agendar Consulta"
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Exames Laboratoriais",
      description: "Visualize e organize todos os seus resultados de exames",
      action: "Ver Exames"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Monitoramento Cardíaco",
      description: "Acompanhe sua pressão arterial e frequência cardíaca",
      action: "Monitorar"
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Análise Genética",
      description: "Entenda suas predisposições e riscos genéticos",
      action: "Explorar"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-secondary/80 border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <div className="bg-primary rounded-lg p-2 mr-3">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">MedWallet</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors underline">Home</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden bg-gradient-to-br from-background via-secondary to-background"
      >
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,111,60,0.3),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,169,157,0.2),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Health, Unified.{' '}
                <br />
                <span className="text-primary">Your Wallet, Smarter</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Manage appointments, prescriptions, and payments: 
                seamless with MedWallet
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleGetStarted} 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Get Started Free
                </Button>
              </div>
            </div>
            
            {/* Right side with decorative elements */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-success/20 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Key Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border text-center p-6 hover:shadow-lg transition-all">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Trust
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <Card className="bg-primary/10 border-primary/20 p-8">
              <CardContent className="space-y-6">
                <div className="text-6xl text-primary">"</div>
                <p className="text-lg text-card-foreground">
                  MedWallet transformed how I manage my family's health. It's indispensable.
                </p>
                <div className="text-sm text-muted-foreground">
                  — Sarah K., MedWallet User
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">HEALTHCARE</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive Healthcare</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">HEALTHCARE</h3>
                  <p className="text-sm text-muted-foreground">Best in Class</p>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <Button 
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted"
                >
                  Learn More
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Download Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-secondary border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <div className="bg-primary rounded-lg p-2 mr-3">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-lg font-bold text-foreground">MedWallet</span>
              <span className="ml-2 text-sm text-muted-foreground">by Angra Saúde</span>
            </div>
            
            <nav className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            </nav>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
};

export default LandingPage;