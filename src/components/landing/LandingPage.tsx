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
  Stethoscope
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
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança Total",
      description: "Dados criptografados e protegidos com tecnologia blockchain"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Agendamento Fácil",
      description: "Marque consultas e exames de forma rápida e intuitiva"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Prontuário Digital",
      description: "Todos os seus dados médicos organizados em um só lugar"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Monitoramento",
      description: "Acompanhe suas métricas de saúde em tempo real"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Acesso Controlado",
      description: "Compartilhe informações com médicos de forma segura"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "QR de Emergência",
      description: "Acesso rápido aos dados vitais em situações críticas"
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
      <header className="navbar fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-secondary-bg/80">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/f328f86f-9e20-428c-b571-91f861610d33.png" 
              alt="MedWallet Logo" 
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-primary">MedWallet</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-item">Recursos</a>
            <a href="#services" className="nav-item">Serviços</a>
            <a href="#about" className="nav-item">Sobre</a>
            <a href="#contact" className="nav-item">Contato</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button
              onClick={handleSkipToDemo}
              variant="outline"
              size="sm"
              className="border-medium-grey text-light-grey hover:bg-light-orange hover:text-white transition-smooth"
            >
              Ver Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-primary-bg/60"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Sua Saúde,{' '}
            <span className="text-gradient-orange">Unificada</span>
          </h1>
          <p className="text-xl lg:text-2xl text-light-grey max-w-2xl mx-auto mb-8">
            A plataforma mais segura e moderna para gerenciar toda sua saúde digital em um só lugar
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={handleGetStarted} 
              size="lg"
              className="bg-gradient-orange hover:shadow-orange text-white px-8 py-4 text-lg font-semibold transition-smooth"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleSkipToDemo}
              variant="outline" 
              size="lg"
              className="border-light-grey text-light-grey hover:bg-light-orange hover:text-white hover:border-light-orange px-8 py-4 text-lg transition-smooth"
            >
              Explorar Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-light-grey/80">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>LGPD Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-success" />
              <span>+10k Usuários</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-secondary-bg">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Recursos <span className="text-gradient-orange">Inovadores</span>
            </h2>
            <p className="text-xl text-light-grey max-w-2xl mx-auto">
              Tecnologia de ponta para uma experiência única em saúde digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-medium-grey shadow-card hover:shadow-orange transition-smooth">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-light-grey text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nossos <span className="text-gradient-orange">Serviços</span>
            </h2>
            <p className="text-xl text-light-grey max-w-2xl mx-auto">
              Acesso simplificado a todos os serviços de saúde em uma única plataforma
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-medium-grey shadow-card hover:shadow-orange transition-smooth group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 text-primary group-hover:text-light-orange transition-smooth">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-light-grey mb-4">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
                  >
                    {service.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-secondary-bg">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Por que escolher o <span className="text-gradient-orange">MedWallet</span>?
              </h2>
              <p className="text-xl text-light-grey mb-8">
                Transformamos a gestão da sua saúde com tecnologia avançada e design centrado no usuário.
              </p>
              
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                    <span className="text-light-grey">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-lg shadow-card">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">+10k</div>
                  <div className="text-light-grey">Usuários Ativos</div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-success">99.9%</div>
                    <div className="text-sm text-light-grey">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">24/7</div>
                    <div className="text-sm text-light-grey">Suporte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para revolucionar sua <span className="text-gradient-orange">saúde digital</span>?
            </h2>
            <p className="text-xl text-light-grey mb-8">
              Junte-se a milhares de usuários que já confiam no MedWallet para gerenciar sua saúde.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGetStarted} 
                size="lg"
                className="bg-gradient-orange hover:shadow-orange text-white px-8 py-4 text-lg font-semibold transition-smooth"
              >
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={handleSkipToDemo}
                variant="outline" 
                size="lg"
                className="border-light-grey text-light-grey hover:bg-light-orange hover:text-white hover:border-light-orange px-8 py-4 text-lg transition-smooth"
              >
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-dark-grey border-t border-medium-grey">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/f328f86f-9e20-428c-b571-91f861610d33.png" 
                  alt="MedWallet Logo" 
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-lg font-bold text-primary">MedWallet</span>
              </div>
              <p className="text-light-grey text-sm">
                Sua saúde, nossa prioridade. Tecnologia que cuida de você.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-light-grey">
                <li><a href="#" className="hover:text-light-orange transition-smooth">Prontuário Digital</a></li>
                <li><a href="#" className="hover:text-light-orange transition-smooth">Agendamentos</a></li>
                <li><a href="#" className="hover:text-light-orange transition-smooth">Exames</a></li>
                <li><a href="#" className="hover:text-light-orange transition-smooth">QR Emergência</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-light-grey">
                <li><a href="#" className="hover:text-light-orange transition-smooth">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-light-orange transition-smooth">Contato</a></li>
                <li><a href="#" className="hover:text-light-orange transition-smooth">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-light-orange transition-smooth">Privacidade</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-light-grey">
                <li><a href="#" className="hover:text-light-orange transition-smooth">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-light-orange transition-smooth">Carreiras</a></li>
                <li><a href="#" className="hover:text-light-orange transition-smooth">Blog</a></li>
                <li><a href="#" className="hover:text-light-orange transition-smooth">Imprensa</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-medium-grey mt-8 pt-8 text-center">
            <p className="text-light-grey text-sm">
              © 2024 MedWallet - Angra Saúde. Todos os direitos reservados.
            </p>
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