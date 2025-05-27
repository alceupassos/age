
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Smile, TrendingUp, TrendingDown, Clock, Zap, Activity, UserCheck, Users, Wind, Brain, Briefcase, FileText, BarChart3, 
  Meh, Frown, Minus, ArrowRight, ArrowUp, ArrowDown, Lightbulb, MessageSquare, Info, CheckCircle, AlertTriangle, ShieldCheck, Home, Award, DollarSign, GitCompareArrows, BookOpen, BarChartHorizontal, PieChart, LineChart
} from 'lucide-react';

// Mock data for demonstration
const eq5dVASScore = 82; 
const eq5dVASTrend: 'up' | 'down' | 'stable' = 'up';
const overallStatus = { text: "Bem-Estar Estável", mood: "neutral" as 'good' | 'neutral' | 'bad' };
const lastCheckIn = "27/Mai às 10h45";

const qolSections = [
  { id: 'overview', name: 'Visão Geral', icon: <BarChart3 className="h-5 w-5" /> },
  { id: 'mobility', name: 'Mobilidade', icon: <Activity className="h-5 w-5" /> },
  { id: 'selfcare', name: 'Cuidados Pessoais', icon: <UserCheck className="h-5 w-5" /> },
  { id: 'activities', name: 'Atividades Habituais', icon: <Zap className="h-5 w-5" /> },
  { id: 'pain', name: 'Dor / Desconforto', icon: <Meh className="h-5 w-5" /> }, // Changed icon
  { id: 'anxiety', name: 'Ansiedade / Depressão', icon: <Brain className="h-5 w-5" /> },
  { id: 'social', name: 'Relações Sociais', icon: <Users className="h-5 w-5" /> },
  { id: 'environment', name: 'Ambiente', icon: <Home className="h-5 w-5" /> }, // Changed icon
  { id: 'psychoSpiritual', name: 'Psicológico / Espiritual', icon: <Award className="h-5 w-5" /> }, // Changed icon
  { id: 'socioeconomic', name: 'Socioeconômico', icon: <DollarSign className="h-5 w-5" /> }, // Changed icon
  { id: 'objectiveData', name: 'Dados Objetivos', icon: <PieChart className="h-5 w-5" /> }, // Changed icon
  { id: 'insights', name: 'Insights IA', icon: <Lightbulb className="h-5 w-5" /> }, // Changed icon
  { id: 'history', name: 'Histórico e Relatórios', icon: <FileText className="h-5 w-5" /> },
];

// Domain data for "Meio do Dashboard"
const domainData = [
  { name: "Mobilidade", score: "2 (alguns problemas)", objective: "Média passos: 7500", trendIcon: <TrendingUp size={16} className="text-green-500 ml-1" />, tooltip: "Sua capacidade de locomoção. Avalia dificuldades para andar (EQ-5D) e sua média de passos." },
  { name: "Cuidados Pessoais", score: "1 (sem problemas)", objective: "Autonomia: Alta", trendIcon: <Minus size={16} className="text-gray-500 ml-1" />, tooltip: "Sua capacidade de realizar tarefas de autocuidado, como se lavar e se vestir (EQ-5D)." },
  { name: "Atividades Habituais", score: "1 (sem problemas)", objective: "Atividade: 60 min/dia", trendIcon: <TrendingUp size={16} className="text-green-500 ml-1" />, tooltip: "Sua capacidade de realizar atividades diárias como trabalho, estudos ou lazer (EQ-5D) e seu nível de atividade física." },
  { name: "Dor / Desconforto Físico", score: "2 (alguns problemas)", objective: "Dor média: Moderada", trendIcon: <TrendingDown size={16} className="text-red-500 ml-1" />, tooltip: "Nível de dor ou desconforto físico que você está sentindo atualmente (EQ-5D)." },
  { name: "Ansiedade / Depressão", score: "2 (alguns problemas)", objective: "HRV: Baixa", trendIcon: <TrendingDown size={16} className="text-red-500 ml-1" />, tooltip: "Seu estado emocional referente à ansiedade ou depressão (EQ-5D) e bem-estar psicológico geral (WHOQOL)." },
];

// Additional aspects data
const additionalAspectsData = [
  { name: "Relações Sociais", score: "8.0/10", trend: 'up' as const, tooltip: "Qualidade das suas relações pessoais e nível de suporte social percebido." },
  { name: "Ambiente", score: "7.5/10", trend: 'stable' as const, tooltip: "Sua percepção sobre o ambiente físico e social ao seu redor (segurança, lar, recursos)." },
  { name: "Psicológico/Espiritual", score: "7.0/10", trend: 'up' as const, tooltip: "Avalia seus sentimentos positivos/negativos, autoestima, sentido na vida e crenças pessoais." },
  { name: "Socioeconômico", score: "6.5/10", trend: 'down' as const, tooltip: "Sua satisfação com aspectos financeiros, trabalho e oportunidades de educação." },
];

// Objective data (wearables)
const objectiveWearablesData = [
  { name: "Qualidade do Sono", value: "7h30min/noite", graphType: "Gráfico Barras", tooltip: "Duração e qualidade do seu sono, com base em dados de wearables e/ou auto-relato." },
  { name: "Nível de Atividade Física", value: "7500 passos/dia", graphType: "Anéis Progresso", tooltip: "Quantidade de atividade física realizada, incluindo passos, minutos ativos e intensidade (dados de wearables)." },
  { name: "Frequência Cardíaca", value: "65 bpm repouso", graphType: "Gráfico Linha", tooltip: "Média dos seus batimentos cardíacos por minuto em estado de repouso (dados de wearables)." },
];

// AI Insights
const aiInsightsData = [
    { title: "Correlação Identificada", text: "Sua ansiedade diminui após noites com mais de 7 horas de sono.", icon: <GitCompareArrows size={20} className="text-blue-500 mr-2"/>, tooltip: "Relações significativas entre seus hábitos/respostas e seu bem-estar, identificadas pela IA." },
    { title: "Sugestão Personalizada", text: "Aumente atividade física para reduzir a percepção de dor.", icon: <Lightbulb size={20} className="text-yellow-500 mr-2"/>, tooltip: "Dicas e recomendações da IA, adaptadas ao seu perfil, para promover sua qualidade de vida." },
];


const QualityOfLifePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const renderTrendIcon = (trend: 'up' | 'down' | 'stable', size: number = 32) => {
    if (trend === 'up') return <TrendingUp style={{height: size, width: size}} className="inline text-green-500 ml-2" />;
    if (trend === 'down') return <TrendingDown style={{height: size, width: size}} className="inline text-red-500 ml-2" />;
    return <Minus style={{height: size, width: size}} className="inline text-gray-500 ml-2" />;
  };
  
  const renderSmallTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    if (trend === 'up') return <ArrowUp size={16} className="inline text-green-500 ml-1" />;
    if (trend === 'down') return <ArrowDown size={16} className="inline text-red-500 ml-1" />;
    return <ArrowRight size={16} className="inline text-gray-500 ml-1" />;
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch p-4 bg-card rounded-lg shadow">
              <div className="md:col-span-1 flex flex-col items-center justify-center text-center">
                <Tooltip>
                  <TooltipTrigger className="cursor-default">
                    <CardTitle className="text-lg mb-1 text-muted-foreground flex items-center justify-center">Minha Qualidade de Vida Hoje (EQ-5D VAS) <Info size={14} className="ml-1 text-gray-400" /></CardTitle>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Sua autoavaliação geral do estado de saúde, numa escala de 0 (pior) a 100 (melhor).</p>
                  </TooltipContent>
                </Tooltip>
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
                <Tooltip>
                  <TooltipTrigger className="cursor-default">
                    <CardTitle className="text-lg mb-2 text-muted-foreground flex items-center justify-center">Status Geral (IA) <Info size={14} className="ml-1 text-gray-400" /></CardTitle>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Resumo interpretativo da IA sobre seu bem-estar atual, baseado nos seus últimos dados.</p>
                  </TooltipContent>
                </Tooltip>
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
                <Tooltip>
                  <TooltipTrigger className="cursor-default">
                    <CardTitle className="text-lg mb-2 text-muted-foreground flex items-center justify-center">Último Check-in Realizado <Info size={14} className="ml-1 text-gray-400" /></CardTitle>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Data e hora da sua última resposta aos questionários de qualidade de vida.</p>
                  </TooltipContent>
                </Tooltip>
                <p className="text-xl font-semibold">{lastCheckIn}</p>
              </div>
            </div>
            
            {/* Meio do Dashboard (Domínios Principais) */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Detalhamento por Domínios Principais</CardTitle>
                <CardDescription>Avaliação dos 5 domínios chave da qualidade de vida.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {domainData.map(domain => (
                  <Card key={domain.name} className="flex flex-col">
                    <CardHeader className="pb-2">
                      <Tooltip>
                        <TooltipTrigger className="cursor-default w-full">
                          <CardTitle className="text-base font-semibold text-center flex items-center justify-center">{domain.name} <Info size={12} className="ml-1 text-gray-400" /></CardTitle>
                        </TooltipTrigger>
                        <TooltipContent><p>{domain.tooltip}</p></TooltipContent>
                      </Tooltip>
                      <CardDescription className="text-sm text-center text-muted-foreground mt-1">
                        {domain.score} {domain.trendIcon}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-md mt-2 flex items-center justify-center text-xs text-muted-foreground">Gráfico Linha (7 dias)</div>
                      <p className="text-xs text-center text-muted-foreground mt-2">{domain.objective}</p>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Aspectos Adicionais */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Aspectos Adicionais de Qualidade de Vida</CardTitle>
                <CardDescription>Outras dimensões importantes para o seu bem-estar.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {additionalAspectsData.map(aspect => (
                  <Card key={aspect.name}>
                    <CardHeader className="pb-2">
                       <Tooltip>
                        <TooltipTrigger className="cursor-default w-full">
                           <CardTitle className="text-base font-semibold text-center flex items-center justify-center">{aspect.name} <Info size={12} className="ml-1 text-gray-400" /></CardTitle>
                        </TooltipTrigger>
                        <TooltipContent><p>{aspect.tooltip}</p></TooltipContent>
                      </Tooltip>
                      <CardDescription className="text-sm text-center text-muted-foreground mt-1">
                        {aspect.score} {renderSmallTrendIcon(aspect.trend)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-md mt-2 flex items-center justify-center text-xs text-muted-foreground">Mini Gráfico Tendência</div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Dados Objetivos (Wearables) */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Monitoramento Objetivo (Dados de Wearables/Apps)</CardTitle>
                <CardDescription>Informações coletadas por seus dispositivos e aplicativos.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {objectiveWearablesData.map(data => (
                  <Card key={data.name}>
                     <CardHeader className="pb-2">
                        <Tooltip>
                          <TooltipTrigger className="cursor-default w-full">
                            <CardTitle className="text-base font-semibold text-center flex items-center justify-center">{data.name} <Info size={12} className="ml-1 text-gray-400" /></CardTitle>
                          </TooltipTrigger>
                          <TooltipContent><p>{data.tooltip}</p></TooltipContent>
                        </Tooltip>
                        <CardDescription className="text-sm text-center text-muted-foreground mt-1">{data.value}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-md mt-2 flex items-center justify-center text-xs text-muted-foreground">{data.graphType}</div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
            
            {/* Insights IA */}
             <Card>
              <CardHeader>
                <CardTitle className="text-xl">Insights e Recomendações da IA</CardTitle>
                <CardDescription>Análises e sugestões personalizadas para você.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aiInsightsData.map(insight => (
                  <Card key={insight.title}>
                    <CardHeader className="pb-2">
                      <Tooltip>
                        <TooltipTrigger className="cursor-default w-full">
                          <CardTitle className="text-base font-semibold flex items-center">{insight.icon} {insight.title} <Info size={12} className="ml-auto text-gray-400" /></CardTitle>
                        </TooltipTrigger>
                        <TooltipContent><p>{insight.tooltip}</p></TooltipContent>
                      </Tooltip>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{insight.text}</p>
                    </CardContent>
                  </Card>
                ))}
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
                {sectionDetails?.icon && React.cloneElement(sectionDetails.icon, { className: "h-6 w-6 mr-3" })} {/* Increased icon size slightly */}
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
          <Tooltip>
            <TooltipTrigger className="w-full text-left">
              <h2 className="text-lg font-semibold px-3 mb-2 text-primary flex items-center">Índice de Qualidade de Vida <Info size={14} className="ml-1 text-gray-400" /></h2>
            </TooltipTrigger>
            <TooltipContent>
              <p>Navegue pelas diferentes seções da sua avaliação de Qualidade de Vida.</p>
            </TooltipContent>
          </Tooltip>
          {qolSections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "secondary" : "ghost"}
              className="w-full justify-start text-base py-3 h-auto" 
              onClick={() => setActiveSection(section.id)}
            >
              {React.cloneElement(section.icon, { className: "h-5 w-5 mr-3 flex-shrink-0" })}
              <span className="truncate">{section.name}</span>
            </Button>
          ))}
           <div className="mt-auto pt-4 border-t border-border">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-base py-3 h-auto mb-2" onClick={() => setActiveSection('history')}>
                  <FileText className="h-5 w-5 mr-3 flex-shrink-0" /> Ver Histórico Completo
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Acesse o histórico completo e detalhado de todos os seus índices de qualidade de vida.</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-base py-3 h-auto">
                  <ArrowRight className="h-5 w-5 mr-3 flex-shrink-0" /> Exportar Relatório PDF
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Gere um relatório resumido em PDF para visualizar ou compartilhar com profissionais de saúde.</p>
              </TooltipContent>
            </Tooltip>
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

