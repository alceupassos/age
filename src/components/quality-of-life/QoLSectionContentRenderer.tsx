import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import QoLSourceInfoSection from './QoLSourceInfoSection'; // Import the new component

// Define types for data passed to this component
interface QoLSection {
  id: string;
  name: string;
  icon: React.ReactNode;
  tooltip: string;
}
interface DomainDataItem { name: string; score: string; objective: string; trendIcon: React.ReactNode; tooltip: string; }
interface AdditionalAspectItem { name: string; score: string; trend: 'up' | 'down' | 'stable'; tooltip: string; }
interface ObjectiveWearableItem { name: string; value: string; graphType: string; tooltip: string; }
interface AIInsightItem { title: string; text: string; icon: React.ReactNode; tooltip: string; }


interface QoLSectionContentRendererProps {
  activeSection: string;
  qolSections: QoLSection[];
  domainData: DomainDataItem[];
  additionalAspectsData: AdditionalAspectItem[];
  objectiveWearablesData: ObjectiveWearableItem[];
  aiInsightsData: AIInsightItem[];
  renderSmallTrendIcon: (trend: 'up' | 'down' | 'stable') => React.ReactNode;
}

// Sample data for detail charts
const detailedLineData = Array.from({length: 30}, (_, i) => ({ name: `D-${29-i}`, value: Math.floor(Math.random() * 5) + 1}));
const detailedBarData = Array.from({length: 12}, (_, i) => ({ name: `M${i+1}`, value: Math.floor(Math.random() * 30) + 60 }));


const QoLSectionContentRenderer: React.FC<QoLSectionContentRendererProps> = ({
  activeSection,
  qolSections,
  domainData,
  additionalAspectsData,
  objectiveWearablesData,
  aiInsightsData,
  renderSmallTrendIcon,
}) => {
  const currentSectionInfo = qolSections.find(s => s.id === activeSection);

  if (!currentSectionInfo) {
    return (
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>Seção não encontrada</CardTitle>
        </CardHeader>
        <CardContent><p>A seção solicitada não pôde ser encontrada.</p></CardContent>
      </Card>
    );
  }
  
  const renderDetailChartPlaceholder = (chartType: "Line" | "Bar" | "Trend" = "Line", height = 240) => {
    let data;
    let ChartComponent;
    switch(chartType) {
        case "Bar":
            data = detailedBarData;
            ChartComponent = (
                <BarChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize={10} />
                    <YAxis fontSize={10} />
                    <RechartsTooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            );
            break;
        case "Trend": // Similar to AdditionalAspectCard's chart
             data = Array.from({ length: 6 }, (_, i) => ({ name: `M${i+1}`, score: Math.floor(Math.random() * 4) + 6 }));
             ChartComponent = (
                <BarChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                    <XAxis dataKey="name" fontSize={10} />
                    <YAxis fontSize={10} domain={[0,10]}/>
                    <RechartsTooltip />
                    <Bar dataKey="score" fill="#82ca9d" barSize={20} />
                </BarChart>
             );
            break;
        case "Line":
        default:
            data = detailedLineData;
            ChartComponent = (
                <LineChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize={10} />
                    <YAxis fontSize={10} />
                    <RechartsTooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 6 }} dot={{r:2}} />
                </LineChart>
            );
            break;
    }
    return (
        <ResponsiveContainer width="100%" height={height}>
            {ChartComponent}
        </ResponsiveContainer>
    );
  };


  switch (currentSectionInfo.id) {
    case 'mobility':
    case 'selfcare':
    case 'activities':
    case 'pain':
    case 'anxiety': {
      const data = domainData.find(d => d.name === currentSectionInfo.name || (currentSectionInfo.name === "Dor / Desconforto" && d.name === "Dor / Desconforto Físico") || (currentSectionInfo.name === "Ansiedade / Depressão" && d.name === "Ansiedade / Depressão"));
      if (!data) return <p>Dados não encontrados para {currentSectionInfo.name}.</p>;
      
      return (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="capitalize flex items-center">
              {currentSectionInfo.icon && React.cloneElement(currentSectionInfo.icon as React.ReactElement, { className: "h-6 w-6 mr-3" })}
              {currentSectionInfo.name}
            </CardTitle>
            <CardDescription>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-default text-left flex items-center">
                      <span>{data.tooltip}</span>
                      <Info size={12} className="ml-1 text-gray-400 inline flex-shrink-0" />
                  </TooltipTrigger>
                  <TooltipContent><p>{data.tooltip}</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Pontuação (EQ-5D)</p>
                <p className="text-2xl font-semibold">{data.score} {data.trendIcon}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Objetivo / Métrica Chave</p>
                <p className="text-lg font-medium">{data.objective}</p>
              </div>
            </div>
            {renderDetailChartPlaceholder("Line")}
            <p className="text-xs text-muted-foreground">Este gráfico mostra a evolução da sua pontuação e métricas relacionadas a {currentSectionInfo.name.toLowerCase()} ao longo do tempo.</p>
          </CardContent>
        </Card>
      );
    }

    case 'social':
    case 'environment':
    case 'psychoSpiritual':
    case 'socioeconomic': {
      const data = additionalAspectsData.find(d => d.name === currentSectionInfo.name || (currentSectionInfo.id === "psychoSpiritual" && d.name === "Psicológico/Espiritual"));
      if (!data) return <p>Dados não encontrados para {currentSectionInfo.name}.</p>;

      return (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="capitalize flex items-center">
              {currentSectionInfo.icon && React.cloneElement(currentSectionInfo.icon as React.ReactElement, { className: "h-6 w-6 mr-3" })}
              {currentSectionInfo.name}
            </CardTitle>
             <CardDescription>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-default text-left flex items-center">
                      <span>{data.tooltip}</span>
                      <Info size={12} className="ml-1 text-gray-400 inline flex-shrink-0" />
                  </TooltipTrigger>
                  <TooltipContent><p>{data.tooltip}</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-4 border rounded-lg">
               <div>
                  <p className="text-sm text-muted-foreground">Pontuação (WHOQOL/IQV)</p>
                  <p className="text-2xl font-semibold">{data.score} {renderSmallTrendIcon(data.trend)}</p>
                </div>
            </div>
            {renderDetailChartPlaceholder("Trend")}
            <p className="text-xs text-muted-foreground">Este gráfico mostra a tendência da sua pontuação para {currentSectionInfo.name.toLowerCase()}.</p>
          </CardContent>
        </Card>
      );
    }
    
    case 'objectiveData': {
      return (
        <div className="space-y-6 animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="capitalize flex items-center">
                {currentSectionInfo.icon && React.cloneElement(currentSectionInfo.icon as React.ReactElement, { className: "h-6 w-6 mr-3" })}
                {currentSectionInfo.name}
              </CardTitle>
              <CardDescription>
                  <TooltipProvider>
                      <Tooltip>
                          <TooltipTrigger className="cursor-default text-left flex items-center">
                              <span>{currentSectionInfo.tooltip}</span>
                              <Info size={12} className="ml-1 text-gray-400 inline flex-shrink-0" />
                          </TooltipTrigger>
                          <TooltipContent><p>{currentSectionInfo.tooltip}</p></TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {objectiveWearablesData.map(item => (
                <Card key={item.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                     <CardDescription>
                      <TooltipProvider>
                          <Tooltip>
                              <TooltipTrigger className="cursor-default text-left flex items-center">
                                  <span>{item.tooltip}</span>
                                  <Info size={12} className="ml-1 text-gray-400 inline flex-shrink-0" />
                              </TooltipTrigger>
                              <TooltipContent><p>{item.tooltip}</p></TooltipContent>
                          </Tooltip>
                      </TooltipProvider>
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-semibold mb-2">{item.value}</p>
                    {item.graphType === "Gráfico Barras" && renderDetailChartPlaceholder("Bar", 160) }
                    {item.graphType === "Anéis Progresso" && renderDetailChartPlaceholder("Trend", 160) /* Using Trend as placeholder, ideally a specific ring chart here */}
                    {item.graphType === "Gráfico Linha" && renderDetailChartPlaceholder("Line", 160) }
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      );
    }

    case 'insights': {
      return (
        <div className="space-y-6 animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="capitalize flex items-center">
                {currentSectionInfo.icon && React.cloneElement(currentSectionInfo.icon as React.ReactElement, { className: "h-6 w-6 mr-3" })}
                {currentSectionInfo.name}
              </CardTitle>
               <CardDescription>
                  <TooltipProvider>
                      <Tooltip>
                          <TooltipTrigger className="cursor-default text-left flex items-center">
                              <span>{currentSectionInfo.tooltip}</span>
                              <Info size={12} className="ml-1 text-gray-400 inline flex-shrink-0" />
                          </TooltipTrigger>
                          <TooltipContent><p>{currentSectionInfo.tooltip}</p></TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiInsightsData.map(item => (
                <Card key={item.title}>
                  <CardHeader className="flex flex-row items-start space-x-3 space-y-0">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 20, className: "text-blue-500"})} {/* Example styling */}
                    <div className="flex-1">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>
                          <TooltipProvider>
                              <Tooltip>
                                  <TooltipTrigger className="cursor-default text-left flex items-center">
                                      <span>Clique para mais detalhes.</span>
                                      <Info size={12} className="ml-1 text-gray-400 inline flex-shrink-0" />
                                  </TooltipTrigger>
                                  <TooltipContent><p>{item.tooltip}</p></TooltipContent>
                              </Tooltip>
                          </TooltipProvider>
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      );
    }
    
    case 'history': {
      return (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="capitalize flex items-center">
              {currentSectionInfo.icon && React.cloneElement(currentSectionInfo.icon as React.ReactElement, { className: "h-6 w-6 mr-3" })}
              {currentSectionInfo.name}
            </CardTitle>
            <CardDescription>
              <TooltipProvider>
                  <Tooltip>
                      <TooltipTrigger className="cursor-default text-left flex items-center">
                         <span>Acesse o histórico completo e detalhado de todos os seus índices de qualidade de vida.</span>
                         <Info size={12} className="ml-1 text-gray-400 inline flex-shrink-0" />
                      </TooltipTrigger>
                      <TooltipContent><p>Acesse o histórico completo e detalhado de todos os seus índices de qualidade de vida.</p></TooltipContent>
                  </Tooltip>
              </TooltipProvider>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Esta seção apresentará um histórico detalhado de todas as suas avaliações de qualidade de vida ao longo do tempo.</p>
            <p className="mt-2">Você poderá ver gráficos de evolução, comparar períodos e entender melhor suas tendências.</p>
            {renderDetailChartPlaceholder("Line", 300)}
             <Button variant="outline" className="w-full justify-center text-base py-3 h-auto mt-6">
                <BookOpen className="h-5 w-5 mr-3 flex-shrink-0" /> Ver Guias de Interpretação
            </Button>
          </CardContent>
        </Card>
      );
    }
    
    case 'source': // New case for the "Fonte" section
      return <QoLSourceInfoSection section={currentSectionInfo} />;

    default:
      return (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="capitalize flex items-center">
              {currentSectionInfo?.icon && React.cloneElement(currentSectionInfo.icon as React.ReactElement, { className: "h-6 w-6 mr-3" })}
              {currentSectionInfo?.name || "Seção Desconhecida"}
            </CardTitle>
            <CardDescription>Conteúdo para {currentSectionInfo?.name || "esta seção"} será implementado em breve.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Detalhes e gráficos específicos para <strong>{currentSectionInfo?.name || "esta seção"}</strong> estão em desenvolvimento.</p>
            {renderDetailChartPlaceholder("Line")}
          </CardContent>
        </Card>
      );
  }
};

export default QoLSectionContentRenderer;
