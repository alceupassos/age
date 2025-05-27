
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress';
import { Badge } from "@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Smile, TrendingUp, TrendingDown, Clock, Zap, Activity, UserCheck, Users, Wind, Brain, Briefcase, FileText, BarChart3, ArrowRight } from 'lucide-react';

// Mock data for demonstration
const eq5dVASScore = 75; // Example score 0-100
const overallStatus = { text: "Bem-Estar Estável", mood: "neutral" }; // "good", "neutral", "bad"
const lastCheckIn = "27/05/2025, 10:30";

const qolSections = [
  { id: 'overview', name: 'Visão Geral', icon: <BarChart3 className="h-5 w-5 mr-3" /> },
  { id: 'mobility', name: 'Mobilidade', icon: <Activity className="h-5 w-5 mr-3" /> },
  { id: 'selfcare', name: 'Cuidados Pessoais', icon: <UserCheck className="h-5 w-5 mr-3" /> },
  { id: 'activities', name: 'Atividades Habituais', icon: <Zap className="h-5 w-5 mr-3" /> },
  { id: 'pain', name: 'Dor / Desconforto', icon: <TrendingDown className="h-5 w-5 mr-3" /> },
  { id: 'anxiety', name: 'Ansiedade / Depressão', icon: <Brain className="h-5 w-5 mr-3" /> },
  { id: 'social', name: 'Relações Sociais', icon: <Users className="h-5 w-5 mr-3" /> },
  { id: 'environment', name: 'Ambiente', icon: <Wind className="h-5 w-5 mr-3" /> },
  { id: 'psychoSpiritual', name: 'Psicológico / Espiritual', icon: <Smile className="h-5 w-5 mr-3" /> },
  { id: 'socioeconomic', name: 'Socioeconômico', icon: <Briefcase className="h-5 w-5 mr-3" /> },
  { id: 'objectiveData', name: 'Dados Objetivos', icon: <Clock className="h-5 w-5 mr-3" /> },
  { id: 'insights', name: 'Insights IA', icon: <TrendingUp className="h-5 w-5 mr-3" /> },
  { id: 'history', name: 'Histórico e Relatórios', icon: <FileText className="h-5 w-5 mr-3" /> },
];

const QualityOfLifePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Smile size={24} className="mr-2 text-primary" />
                  EQ-5D VAS (Escala Visual Analógica)
                </CardTitle>
                <CardDescription>Sua autoavaliação de saúde geral hoje.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="text-5xl font-bold text-primary">{eq5dVASScore}</div>
                  <div className="flex-1">
                    <Progress value={eq5dVASScore} className="h-4" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Pior saúde imaginável (0)</span>
                      <span>Melhor saúde imaginável (100)</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3 italic">
                  Comparado a 72 na semana passada <TrendingUp className="inline h-4 w-4 text-green-500" />
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Status Geral (IA)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant={overallStatus.mood === 'good' ? 'default' : overallStatus.mood === 'neutral' ? 'secondary' : 'destructive'} className="text-lg">
                    {overallStatus.text}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    Baseado na sua última avaliação e dados recentes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Último Check-in</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{lastCheckIn}</p>
                  <p className="text-sm text-muted-foreground">
                    Mantenha seus dados atualizados para melhores insights.
                  </p>
                </CardContent>
              </Card>
            </div>
             <div className="text-xs text-muted-foreground text-center italic mt-2">
              * Dados fictícios não reais usados para exemplo de software. Questionários como EQ-5D, WHOQOL, IQV, QWBS são ferramentas validadas.
            </div>
          </div>
        );
      default:
        return (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="capitalize">{qolSections.find(s => s.id === activeSection)?.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conteúdo para {qolSections.find(s => s.id === activeSection)?.name} será implementado aqui.</p>
              <p className="mt-4 text-sm text-muted-foreground">Gráficos animados e detalhamentos aparecerão nesta seção.</p>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Internal Sidebar */}
        <nav className="md:w-72 lg:w-80 space-y-2 bg-card p-4 rounded-lg shadow-sm md:sticky md:top-20 md:max-h-[calc(100vh-10rem)] overflow-y-auto">
          <h2 className="text-lg font-semibold px-3 mb-2 text-primary">Índice de Qualidade de Vida</h2>
          {qolSections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "secondary" : "ghost"}
              className="w-full justify-start text-base py-3 h-auto"
              onClick={() => setActiveSection(section.id)}
            >
              {section.icon}
              {section.name}
            </Button>
          ))}
        </nav>

        {/* Main Content Area */}
        <div className="flex-1">
          {renderSectionContent()}
        </div>
      </div>
    </MainLayout>
  );
};

export default QualityOfLifePage;

