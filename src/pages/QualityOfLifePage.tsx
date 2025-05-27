import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { 
  Smile, TrendingUp, TrendingDown, Clock, Zap, Activity, UserCheck, Users, Wind, Brain, Briefcase, FileText, BarChart3, 
  Meh, Frown, Minus, CheckCircle, AlertTriangle, ArrowRight
} from 'lucide-react';

// Mock data for demonstration
const eq5dVASScore = 82; // Example score 0-100
const eq5dVASTrend: 'up' | 'down' | 'stable' = 'up'; // 'up', 'down', 'stable'
const overallStatus = { text: "Bem-Estar Estável", mood: "neutral" as 'good' | 'neutral' | 'bad' };
const lastCheckIn = "27/Mai às 10h45";

const qolSections = [
  { id: 'overview', name: 'Visão Geral', icon: <BarChart3 className="h-5 w-5 mr-3" /> },
  { id: 'mobility', name: 'Mobilidade', icon: <Activity className="h-5 w-5 mr-3" /> },
  { id: 'selfcare', name: 'Cuidados Pessoais', icon: <UserCheck className="h-5 w-5 mr-3" /> },
  { id: 'activities', name: 'Atividades Habituais', icon: <Zap className="h-5 w-5 mr-3" /> },
  { id: 'pain', name: 'Dor / Desconforto', icon: <TrendingDown className="h-5 w-5 mr-3" /> }, // Note: Using TrendingDown as placeholder, could be specific pain icon
  { id: 'anxiety', name: 'Ansiedade / Depressão', icon: <Brain className="h-5 w-5 mr-3" /> },
  { id: 'social', name: 'Relações Sociais', icon: <Users className="h-5 w-5 mr-3" /> },
  { id: 'environment', name: 'Ambiente', icon: <Wind className="h-5 w-5 mr-3" /> },
  { id: 'psychoSpiritual', name: 'Psicológico / Espiritual', icon: <Smile className="h-5 w-5 mr-3" /> }, // Changed to generic Smile
  { id: 'socioeconomic', name: 'Socioeconômico', icon: <Briefcase className="h-5 w-5 mr-3" /> },
  { id: 'objectiveData', name: 'Dados Objetivos (Wearables)', icon: <Clock className="h-5 w-5 mr-3" /> },
  { id: 'insights', name: 'Insights IA', icon: <TrendingUp className="h-5 w-5 mr-3" /> }, // Note: Using TrendingUp, could be Lightbulb
  { id: 'history', name: 'Histórico e Relatórios', icon: <FileText className="h-5 w-5 mr-3" /> },
];

const QualityOfLifePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const renderTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    if (trend === 'up') return <TrendingUp className="inline h-8 w-8 text-green-500 ml-2" />;
    if (trend === 'down') return <TrendingDown className="inline h-8 w-8 text-red-500 ml-2" />;
    return <Minus className="inline h-8 w-8 text-gray-500 ml-2" />; // For stable
  };

  const renderMoodIcon = (mood: 'good' | 'neutral' | 'bad') => {
    if (mood === 'good') return <Smile className="h-8 w-8 text-green-500 mr-2" />;
    if (mood === 'neutral') return <Meh className="h-8 w-8 text-yellow-500 mr-2" />;
    return <Frown className="h-8 w-8 text-red-500 mr-2" />;
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6 animate-fade-in">
            {/* Topo do Dashboard (Visão Geral) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-4 bg-card rounded-lg shadow">
              <div className="md:col-span-1 flex flex-col items-center justify-center text-center">
                <CardTitle className="text-lg mb-1 text-muted-foreground">EQ-5D VAS Geral</CardTitle>
                <div className="flex items-center">
                  <span className="text-7xl font-bold text-primary">{eq5dVASScore}</span>
                  {renderTrendIcon(eq5dVASTrend)}
                </div>
                <Progress value={eq5dVASScore} className="w-full h-3 mt-2" 
                  indicatorClassName={
                    eq5dVASScore > 70 ? "bg-green-500" : eq5dVASScore > 40 ? "bg-yellow-500" : "bg-red-500"
                  }
                />
                 <div className="flex justify-between text-xs text-muted-foreground mt-1 w-full px-1">
                    <span>0</span>
                    <span>100</span>
                  </div>
              </div>
              <div className="md:col-span-1 flex flex-col items-center justify-center text-center">
                 <CardTitle className="text-lg mb-2 text-muted-foreground">Status Geral</CardTitle>
                <div className="flex items-center">
                  {renderMoodIcon(overallStatus.mood)}
                  <Badge 
                    variant={overallStatus.mood === 'good' ? 'default' : overallStatus.mood === 'neutral' ? 'secondary' : 'destructive'} 
                    className="text-lg"
                  >
                    {overallStatus.text}
                  </Badge>
                </div>
              </div>
              <div className="md:col-span-1 flex flex-col items-center justify-center text-center">
                <CardTitle className="text-lg mb-2 text-muted-foreground">Último Check-in</CardTitle>
                <p className="text-xl font-semibold">{lastCheckIn}</p>
              </div>
            </div>
            
            {/* Placeholder for Meio do Dashboard (Domínios Principais) */}
            <Card>
              <CardHeader><CardTitle>Detalhamento por Domínios Principais</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Cinco colunas para Mobilidade, Cuidados Pessoais, Atividades Habituais, Dor Física, Ansiedade/Depressão com gráficos de linha e dados objetivos serão implementadas aqui.</p>
                {/* Example structure for one column - to be repeated and made dynamic */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                  {['Mobilidade', 'Cuidados Pessoais', 'Atividades Habituais', 'Dor Física', 'Ansiedade'].map(domain => (
                    <div key={domain} className="p-3 border rounded-md">
                      <h4 className="font-semibold text-center">{domain}</h4>
                      <p className="text-sm text-center text-muted-foreground mt-1">2 (alguns problemas)</p>
                      <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-md mt-2 flex items-center justify-center text-xs text-muted-foreground">Gráfico Linha (7 dias)</div>
                      <p className="text-xs text-center text-muted-foreground mt-1">Dados objetivos aqui</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Placeholder for Aspectos Adicionais */}
            <Card>
              <CardHeader><CardTitle>Aspectos Adicionais de Qualidade de Vida</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Quatro cards horizontais para Relações Sociais, Ambiente, Psicológico/Espiritual, Socioeconômico com mini gráficos de tendência serão implementados aqui.</p>
              </CardContent>
            </Card>

            {/* Placeholder for Dados Objetivos (Wearables) */}
            <Card>
              <CardHeader><CardTitle>Dados Objetivos (Wearables)</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Três blocos para Sono, Atividade Física, Frequência Cardíaca com gráficos de barras, anéis de progresso, e gráficos de linha serão implementados aqui.</p>
              </CardContent>
            </Card>
            
            {/* Placeholder for Insights IA */}
             <Card>
              <CardHeader><CardTitle>Insights e Recomendações IA</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Dois cards com insights como "Sua ansiedade diminui após noites com mais de 7 horas de sono" serão implementados aqui.</p>
              </CardContent>
            </Card>

             <div className="text-xs text-muted-foreground text-center italic mt-2">
              * Dados fictícios não reais usados para exemplo de software. Questionários como EQ-5D, WHOQOL, IQV, QWBS são ferramentas validadas.
            </div>
          </div>
        );
      default:
        // Placeholder for other sections clicked in the sidebar
        const sectionDetails = qolSections.find(s => s.id === activeSection);
        return (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="capitalize flex items-center">
                {sectionDetails?.icon}
                {sectionDetails?.name}
              </CardTitle>
              <CardDescription>Conteúdo detalhado e gráficos para {sectionDetails?.name}.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Implementação específica para <strong>{sectionDetails?.name}</strong> virá aqui, com gráficos animados e detalhamentos conforme o layout.</p>
              <p className="mt-4 text-sm text-muted-foreground">Isto incluirá pontuações atuais, tendências, comparações e dados objetivos relevantes.</p>
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
              className="w-full justify-start text-base py-3 h-auto" // text-base py-3 h-auto
              onClick={() => setActiveSection(section.id)}
            >
              {React.cloneElement(section.icon, { className: "h-5 w-5 mr-3 flex-shrink-0" })} {/* Ensure icon styles */}
              <span className="truncate">{section.name}</span> {/* Truncate long names */}
            </Button>
          ))}
           {/* Placeholder for Histórico e Relatórios Button */}
           <div className="mt-auto pt-4 border-t border-border">
            <Button variant="outline" className="w-full justify-start text-base py-3 h-auto mb-2">
              <FileText className="h-5 w-5 mr-3 flex-shrink-0" /> Ver Histórico Completo
            </Button>
            <Button variant="outline" className="w-full justify-start text-base py-3 h-auto">
              <ArrowRight className="h-5 w-5 mr-3 flex-shrink-0" /> Exportar Relatório PDF
            </Button>
          </div>
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
