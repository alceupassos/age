
import { ChevronLeft, Download, Share2, Printer, AlertTriangle, FileText, TrendingUp, ArrowRight, CheckCircle, HelpCircle, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LabExam, LabExamParameter } from './types';
import { Separator } from '@/components/ui/separator';

interface ExamResultsProps {
  exam: LabExam;
  onBack: () => void;
}

const ExamResults = ({ exam, onBack }: ExamResultsProps) => {
  const getValueStatus = (status: string) => {
    switch (status) {
      case 'normal':
        return (
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span className="text-xs font-medium">Normal</span>
          </div>
        );
      case 'warning':
        return (
          <div className="flex items-center gap-1 text-amber-600">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-xs font-medium">Alterado</span>
          </div>
        );
      case 'critical':
        return (
          <div className="flex items-center gap-1 text-red-600">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-xs font-medium">Crítico</span>
          </div>
        );
      default:
        return null;
    }
  };
  
  const renderReferenceIndicator = (parameter: LabExamParameter) => {
    if (parameter.status === 'normal') return null;
    
    if (typeof parameter.value === 'number') {
      const valueNum = parameter.value;
      const range = parameter.referenceRange.split(' a ');
      
      if (range.length === 2) {
        const minValue = parseFloat(range[0]);
        const maxValue = parseFloat(range[1].split(' ')[0]);
        const totalRange = maxValue - minValue;
        
        // Calculate position on scale (0-100)
        let position = 50; // Default middle position
        
        if (valueNum < minValue) {
          position = Math.max(0, 50 - ((minValue - valueNum) / (totalRange / 2)) * 50);
        } else if (valueNum > maxValue) {
          position = Math.min(100, 50 + ((valueNum - maxValue) / (totalRange / 2)) * 50);
        } else {
          position = 50 + ((valueNum - minValue) / totalRange - 0.5) * 100;
        }
        
        return (
          <div className="w-full mt-1">
            <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="relative h-full w-full">
                <div className="absolute inset-y-0 left-0 bg-green-100 dark:bg-green-900/30 h-full" style={{ width: '33%' }}></div>
                <div className="absolute inset-y-0 left-[33%] bg-green-500 dark:bg-green-500 h-full" style={{ width: '34%' }}></div>
                <div className="absolute inset-y-0 left-[67%] bg-green-100 dark:bg-green-900/30 h-full" style={{ width: '33%' }}></div>
                <div 
                  className={`absolute top-0 h-full w-1 ${parameter.status === 'critical' ? 'bg-red-500' : 'bg-amber-500'}`} 
                  style={{ left: `${position}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Abaixo</span>
              <span>Normal</span>
              <span>Acima</span>
            </div>
          </div>
        );
      }
    }
    
    return null;
  };

  const countAbnormalResults = () => {
    let count = 0;
    exam.groups.forEach(group => {
      group.parameters.forEach(param => {
        if (param.status === 'warning' || param.status === 'critical') {
          count++;
        }
      });
    });
    return count;
  };
  
  const abnormalCount = countAbnormalResults();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button 
          variant="ghost" 
          className="gap-2" 
          onClick={onBack}
        >
          <ChevronLeft className="h-4 w-4" />
          Voltar para exames
        </Button>
        
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2" size="sm">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Baixar</span>
          </Button>
          <Button variant="outline" className="gap-2" size="sm">
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Compartilhar</span>
          </Button>
          <Button variant="outline" className="gap-2" size="sm">
            <Printer className="h-4 w-4" />
            <span className="hidden sm:inline">Imprimir</span>
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <CardTitle>{exam.name}</CardTitle>
              <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                <span>Data: {exam.date}</span>
                <Separator className="hidden sm:block h-4 w-[1px]" orientation="vertical" />
                <span>Laboratório: {exam.provider}</span>
                {exam.doctor && (
                  <>
                    <Separator className="hidden sm:block h-4 w-[1px]" orientation="vertical" />
                    <span>Médico: {exam.doctor}</span>
                  </>
                )}
              </CardDescription>
            </div>
            
            <div>
              <Badge variant={exam.status === 'normal' ? 'outline' : 'secondary'} className={
                exam.status === 'normal' 
                  ? 'bg-green-500/10 text-green-600 border-green-400/20' 
                  : exam.status === 'warning'
                    ? 'bg-amber-500/10 text-amber-600 border-amber-400/20'
                    : 'bg-red-500/10 text-red-600 border-red-400/20'
              }>
                {abnormalCount > 0 
                  ? `${abnormalCount} parâmetros alterados` 
                  : 'Todos os parâmetros normais'}
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="resultados">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-md mb-6">
              <TabsTrigger value="resultados">Resultados</TabsTrigger>
              <TabsTrigger value="grafico">Gráficos</TabsTrigger>
              <TabsTrigger value="historico">Histórico</TabsTrigger>
              <TabsTrigger value="interpretacao">Interpretação</TabsTrigger>
            </TabsList>
            
            <TabsContent value="resultados" className="space-y-6">
              {exam.imageUrl && (
                <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Imagem original do exame</p>
                      <p className="text-xs text-muted-foreground">Documento digitalizado</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Visualizar <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </div>
              )}
              
              {exam.groups.map((group, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-medium">{group.name}</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b text-left text-muted-foreground text-sm">
                          <th className="py-2 px-3 font-medium">Parâmetro</th>
                          <th className="py-2 px-3 font-medium">Resultado</th>
                          <th className="py-2 px-3 font-medium">Referência</th>
                          <th className="py-2 px-3 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.parameters.map((parameter, paramIndex) => (
                          <tr key={paramIndex} className="border-b">
                            <td className="py-3 px-3 align-top">
                              <div className="font-medium">{parameter.name}</div>
                              {parameter.description && <div className="text-xs text-muted-foreground mt-1">{parameter.description}</div>}
                            </td>
                            <td className="py-3 px-3 align-top">
                              <div className="flex gap-1 items-center font-medium">
                                {parameter.value} {parameter.unit}
                                {parameter.trend && parameter.trend === 'up' && (
                                  <TrendingUp className="h-3.5 w-3.5 text-red-500" />
                                )}
                                {parameter.trend && parameter.trend === 'down' && (
                                  <TrendingUp className="h-3.5 w-3.5 text-blue-500 rotate-180" />
                                )}
                              </div>
                            </td>
                            <td className="py-3 px-3 align-top text-muted-foreground">
                              {parameter.referenceRange}
                            </td>
                            <td className="py-3 px-3 align-top">
                              {getValueStatus(parameter.status)}
                              {renderReferenceIndicator(parameter)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="grafico">
              <div className="flex flex-col items-center justify-center h-64 border rounded-lg bg-muted/30">
                <HelpCircle className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center max-w-sm">
                  Os gráficos de evolução estarão disponíveis quando você tiver mais de um exame do mesmo tipo.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="historico">
              <div className="flex flex-col items-center justify-center h-64 border rounded-lg bg-muted/30">
                <HelpCircle className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center max-w-sm">
                  O histórico de exames anteriores estará disponível quando você adicionar mais exames do mesmo tipo.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="interpretacao">
              <Card className="border-amber-200/30 bg-amber-50/10 dark:bg-amber-900/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-base font-medium mb-2">Aviso importante</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Esta interpretação é gerada automaticamente com base nos resultados do exame, mas não substitui
                        a avaliação de um profissional de saúde. Sempre consulte seu médico para interpretação adequada
                        dos seus resultados.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-medium">Interpretação Preliminar</h3>
                
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                      Hemoglobina e Hematócrito Reduzidos
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Seus valores de hemoglobina (11,3 g/dL) e hematócrito (35,3%) estão ligeiramente abaixo da faixa de referência,
                      o que pode indicar uma anemia leve. 
                    </p>
                    <div className="text-sm">
                      <p className="font-medium mb-1">Possíveis causas incluem:</p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Deficiência de ferro na alimentação</li>
                        <li>Perda sanguínea recente ou crônica</li>
                        <li>Deficiência de vitaminas como B12 ou ácido fólico</li>
                        <li>Condições inflamatórias crônicas</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Contagem de Leucócitos Normal
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Sua contagem de células brancas (leucócitos) está dentro da faixa normal (7.700/mm³), 
                      indicando que não há sinais de infecção ou inflamação aguda no momento do exame.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Plaquetas Normais
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Sua contagem de plaquetas está normal (202.000/mm³), indicando boa capacidade de coagulação sanguínea.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Recomendações Gerais</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-primary" />
                          Consulte seu médico
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Devido aos valores alterados, recomenda-se agendar uma consulta com seu médico para avaliar
                          os resultados e discutir possíveis investigações adicionais.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium flex items-center gap-2 mb-2">
                          <FileText className="h-4 w-4 text-primary" />
                          Considere exames adicionais
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Seu médico pode solicitar exames complementares como ferritina, ferro sérico,
                          vitamina B12 e ácido fólico para investigar a causa da possível anemia.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="text-xs text-muted-foreground text-center italic mt-2">
        * Dados fictícios não reais usados para exemplo de software
      </div>
    </div>
  );
};

export default ExamResults;
