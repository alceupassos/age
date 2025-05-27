import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { TooltipProvider } from "@/components/ui/tooltip"; 
import { 
  Smile, TrendingUp, TrendingDown, Clock, Zap, Activity, UserCheck, Users, Wind, Brain, Briefcase, FileText, BarChart3, 
  Meh, Frown, Minus, ArrowRight, ArrowUp, ArrowDown, Lightbulb, MessageSquare, Info, CheckCircle, AlertTriangle, ShieldCheck, Home, Award, DollarSign, GitCompareArrows, BookOpen, PieChart, LineChart, MessageCircle
} from 'lucide-react';

// Import new components
import QoLOverviewDashboard from '@/components/quality-of-life/QoLOverviewDashboard';
import QoLDomainsGrid from '@/components/quality-of-life/QoLDomainsGrid';
import QoLAdditionalAspectsGrid from '@/components/quality-of-life/QoLAdditionalAspectsGrid';
import QoLObjectiveDataGrid from '@/components/quality-of-life/QoLObjectiveDataGrid';
import QoLAIInsightsGrid from '@/components/quality-of-life/QoLAIInsightsGrid';
import QoLSectionContentRenderer from '@/components/quality-of-life/QoLSectionContentRenderer';
import QoLInternalSidebar from '@/components/quality-of-life/QoLInternalSidebar';

// Mock data remains here or could be moved to a data/qolData.ts file
const eq5dVASScore = 82; 
const eq5dVASTrend: 'up' | 'down' | 'stable' = 'up';
const overallStatus = { text: "Bem-Estar Estável", mood: "neutral" as 'good' | 'neutral' | 'bad' };
const lastCheckIn = "27/Mai às 10h45";

const qolSections = [
  { id: 'overview', name: 'Visão Geral', icon: <BarChart3 className="h-5 w-5" />, tooltip: "Visão geral da sua qualidade de vida." },
  { id: 'mobility', name: 'Mobilidade', icon: <Activity className="h-5 w-5" />, tooltip: "Sua capacidade de locomoção." },
  { id: 'selfcare', name: 'Cuidados Pessoais', icon: <UserCheck className="h-5 w-5" />, tooltip: "Sua capacidade de realizar tarefas de autocuidado." },
  { id: 'activities', name: 'Atividades Habituais', icon: <Zap className="h-5 w-5" />, tooltip: "Sua capacidade de realizar atividades diárias." },
  { id: 'pain', name: 'Dor / Desconforto', icon: <Meh className="h-5 w-5" />, tooltip: "Nível de dor ou desconforto físico." },
  { id: 'anxiety', name: 'Ansiedade / Depressão', icon: <Brain className="h-5 w-5" />, tooltip: "Seu estado emocional." },
  { id: 'social', name: 'Relações Sociais', icon: <Users className="h-5 w-5" />, tooltip: "Qualidade das suas relações pessoais." },
  { id: 'environment', name: 'Ambiente', icon: <Home className="h-5 w-5" />, tooltip: "Sua percepção sobre o ambiente." },
  { id: 'psychoSpiritual', name: 'Psicológico / Espiritual', icon: <Award className="h-5 w-5" />, tooltip: "Seus sentimentos, autoestima e sentido na vida." },
  { id: 'socioeconomic', name: 'Socioeconômico', icon: <DollarSign className="h-5 w-5" />, tooltip: "Sua satisfação com aspectos financeiros e trabalho." },
  { id: 'objectiveData', name: 'Dados Objetivos', icon: <PieChart className="h-5 w-5" />, tooltip: "Dados coletados por wearables e apps." },
  { id: 'insights', name: 'Insights IA', icon: <Lightbulb className="h-5 w-5" />, tooltip: "Análises e sugestões da IA." },
  { id: 'history', name: 'Histórico e Relatórios', icon: <FileText className="h-5 w-5" />, tooltip: "Seu histórico de qualidade de vida." },
  { id: 'source', name: 'Fonte', icon: <BookOpen className="h-5 w-5" />, tooltip: "Informações sobre os instrumentos e metodologia utilizados no Índice de Qualidade de Vida." },
  { id: 'exampleImplementation', name: 'Exemplo de Implementação', icon: <MessageCircle className="h-5 w-5" />, tooltip: "Exemplos de como um Agente IA no WhatsApp coletaria informações para os índices." },
];

const domainData = [
  { name: "Mobilidade", score: "2 (alguns problemas)", objective: "Média passos: 7500", trendIcon: <TrendingUp size={16} className="text-green-500 ml-1" />, tooltip: "Sua capacidade de locomoção. Avalia dificuldades para andar (EQ-5D) e sua média de passos." },
  { name: "Cuidados Pessoais", score: "1 (sem problemas)", objective: "Autonomia: Alta", trendIcon: <Minus size={16} className="text-gray-500 ml-1" />, tooltip: "Sua capacidade de realizar tarefas de autocuidado, como se lavar e se vestir (EQ-5D)." },
  { name: "Atividades Habituais", score: "1 (sem problemas)", objective: "Atividade: 60 min/dia", trendIcon: <TrendingUp size={16} className="text-green-500 ml-1" />, tooltip: "Sua capacidade de realizar atividades diárias como trabalho, estudos ou lazer (EQ-5D) e seu nível de atividade física." },
  { name: "Dor / Desconforto Físico", score: "2 (alguns problemas)", objective: "Dor média: Moderada", trendIcon: <TrendingDown size={16} className="text-red-500 ml-1" />, tooltip: "Nível de dor ou desconforto físico que você está sentindo atualmente (EQ-5D)." },
  { name: "Ansiedade / Depressão", score: "2 (alguns problemas)", objective: "HRV: Baixa", trendIcon: <TrendingDown size={16} className="text-red-500 ml-1" />, tooltip: "Seu estado emocional referente à ansiedade ou depressão (EQ-5D) e bem-estar psicológico geral (WHOQOL)." },
];

const additionalAspectsData = [
  { name: "Relações Sociais", score: "8.0/10", trend: 'up' as const, tooltip: "Qualidade das suas relações pessoais e nível de suporte social percebido." },
  { name: "Ambiente", score: "7.5/10", trend: 'stable' as const, tooltip: "Sua percepção sobre o ambiente físico e social ao seu redor (segurança, lar, recursos)." },
  { name: "Psicológico/Espiritual", score: "7.0/10", trend: 'up' as const, tooltip: "Avalia seus sentimentos positivos/negativos, autoestima, sentido na vida e crenças pessoais." },
  { name: "Socioeconômico", score: "6.5/10", trend: 'down' as const, tooltip: "Sua satisfação com aspectos financeiros, trabalho e oportunidades de educação." },
];

const objectiveWearablesData = [
  { name: "Qualidade do Sono", value: "7h30min/noite", graphType: "Gráfico Barras", tooltip: "Duração e qualidade do seu sono, com base em dados de wearables e/ou auto-relato." },
  { name: "Nível de Atividade Física", value: "7500 passos/dia", graphType: "Anéis Progresso", tooltip: "Quantidade de atividade física realizada, incluindo passos, minutos ativos e intensidade (dados de wearables)." },
  { name: "Frequência Cardíaca", value: "65 bpm repouso", graphType: "Gráfico Linha", tooltip: "Média dos seus batimentos cardíacos por minuto em estado de repouso (dados de wearables)." },
];

const aiInsightsData = [
    { title: "Correlação Identificada", text: "Sua ansiedade diminui após noites com mais de 7 horas de sono.", icon: <GitCompareArrows size={20} className="text-blue-500"/>, tooltip: "Relações significativas entre seus hábitos/respostas e seu bem-estar, identificadas pela IA." },
    { title: "Sugestão Personalizada", text: "Aumente atividade física para reduzir a percepção de dor.", icon: <Lightbulb size={20} className="text-yellow-500"/>, tooltip: "Dicas e recomendações da IA, adaptadas ao seu perfil, para promover sua qualidade de vida." },
    { title: "Ponto de Atenção", text: "Seu nível de estresse parece aumentar em dias com reuniões longas. Considere pausas.", icon: <AlertTriangle size={20} className="text-orange-500"/>, tooltip: "Aspectos que podem precisar de mais atenção para melhorar seu bem-estar, sugeridos pela IA." },
];


const QualityOfLifePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Helper functions for icons - can be moved to a utils file later if needed
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

  const renderOverviewContent = () => (
    <div className="space-y-6 animate-fade-in">
      <QoLOverviewDashboard
        eq5dVASScore={eq5dVASScore}
        eq5dVASTrend={eq5dVASTrend}
        overallStatus={overallStatus}
        lastCheckIn={lastCheckIn}
        renderTrendIcon={renderTrendIcon}
        renderMoodIcon={renderMoodIcon}
      />
      <QoLDomainsGrid domainData={domainData} />
      <QoLAdditionalAspectsGrid additionalAspectsData={additionalAspectsData} renderSmallTrendIcon={renderSmallTrendIcon} />
      <QoLObjectiveDataGrid objectiveWearablesData={objectiveWearablesData} />
      <QoLAIInsightsGrid aiInsightsData={aiInsightsData} />
      <div className="text-xs text-muted-foreground text-center italic mt-2">
        * Dados fictícios não reais usados para exemplo de software. Questionários como EQ-5D, WHOQOL, IQV, QWBS são ferramentas validadas.
      </div>
    </div>
  );

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row gap-6">
        <QoLInternalSidebar 
          qolSections={qolSections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="flex-1">
          <TooltipProvider> {/* TooltipProvider wraps all content that might use tooltips */}
            {activeSection === 'overview' ? (
              renderOverviewContent()
            ) : (
              <QoLSectionContentRenderer
                activeSection={activeSection}
                qolSections={qolSections}
                domainData={domainData}
                additionalAspectsData={additionalAspectsData}
                objectiveWearablesData={objectiveWearablesData}
                aiInsightsData={aiInsightsData}
                renderSmallTrendIcon={renderSmallTrendIcon}
              />
            )}
          </TooltipProvider>
        </div>
      </div>
    </MainLayout>
  );
};

export default QualityOfLifePage;
