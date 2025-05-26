
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dna, BarChart2, PieChart, Table, Users, Network, HelpCircle, FileText, Sigma } from 'lucide-react';

const GeneticDataPage = () => {
  const reports = [
    {
      id: "perfil-genetico",
      title: "Perfil Genético Pessoal",
      icon: <FileText className="mr-2 h-5 w-5 text-purple-500" />,
      content: "Resumo dos principais genes analisados, variantes identificadas e suas implicações clínicas.",
      graphs: "Mapa cromossômico interativo destacando variantes relevantes; gráficos de barras comparando frequências alélicas.",
      explanations: "Descrições simples sobre o que cada gene faz e como as variantes podem influenciar a saúde.",
      sources: ["SciELO Brasil", "Wikipédia", "Wikipédia"]
    },
    {
      id: "risco-doencas",
      title: "Risco Genético para Doenças Comuns",
      icon: <PieChart className="mr-2 h-5 w-5 text-purple-500" />,
      content: "Avaliação do risco genético para doenças como diabetes tipo 2, hipertensão, doenças cardiovasculares e certos tipos de câncer.",
      graphs: "Gráficos de pizza ou barras mostrando o risco individual comparado à média populacional.",
      explanations: "Informações sobre como os fatores genéticos contribuem para o risco e sugestões de medidas preventivas."
    },
    {
      id: "farmacogenetica",
      title: "Farmacogenética",
      icon: <Table className="mr-2 h-5 w-5 text-purple-500" />,
      content: "Informações sobre como o paciente pode responder a determinados medicamentos com base em seu perfil genético.",
      graphs: "Tabelas coloridas indicando eficácia, risco de efeitos colaterais e dosagens recomendadas para diferentes medicamentos.",
      explanations: "Orientações sobre a importância de discutir essas informações com profissionais de saúde antes de iniciar ou alterar tratamentos."
    },
    {
      id: "ancestralidade",
      title: "Ancestralidade Genética",
      icon: <Users className="mr-2 h-5 w-5 text-purple-500" />,
      content: "Distribuição percentual das origens ancestrais do paciente.",
      graphs: "Mapas geográficos interativos e gráficos de barras mostrando a composição ancestral.",
      explanations: "Contextualização sobre como a ancestralidade pode influenciar características genéticas e predisposições."
    },
    {
      id: "portador-condicoes",
      title: "Portador de Condições Genéticas",
      icon: <Network className="mr-2 h-5 w-5 text-purple-500" />,
      content: "Identificação de variantes genéticas que o paciente pode transmitir a seus descendentes, mesmo que não apresentem sintomas.",
      graphs: "Diagramas de heredogramas simples mostrando possíveis padrões de herança.",
      explanations: "Informações sobre o que significa ser portador e implicações para planejamento familiar."
    },
    {
      id: "vus",
      title: "Relatório de Variantes de Significado Incerto (VUS)",
      icon: <HelpCircle className="mr-2 h-5 w-5 text-purple-500" />,
      content: "Listagem de variantes genéticas cujo impacto na saúde ainda não é totalmente compreendido.",
      graphs: "Listas categorizadas com indicadores de nível de evidência científica.",
      explanations: "Esclarecimentos sobre a natureza dessas variantes e a importância de monitoramento contínuo da pesquisa científica.",
      sources: ["Wikipédia"]
    }
  ];

  const additionalVisualizations = [
    { title: "Gráficos de Manhattan", description: "Utilizados para mostrar associações entre variantes genéticas e doenças específicas, destacando as mais significativas.", icon: <BarChart2 className="mr-2 h-4 w-4 text-blue-500" /> },
    { title: "Infográficos Educativos", description: "Representações visuais que explicam conceitos genéticos complexos de maneira simplificada, como a diferença entre genótipo e fenótipo.", icon: <Sigma className="mr-2 h-4 w-4 text-blue-500" /> },
    { title: "Mapas Conceituais", description: "Diagramas que organizam e relacionam informações genéticas, facilitando a compreensão de como diferentes genes interagem.", sources: ["Wikipédia"], icon: <Network className="mr-2 h-4 w-4 text-blue-500" /> }
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        <header className="flex items-center space-x-3">
          <Dna className="h-8 w-8 text-purple-600" />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Dados Genéticos</h1>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Relatórios Genéticos Recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => (
              <Card key={report.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    {report.icon}
                    {report.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Conteúdo:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{report.content}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Gráficos Sugeridos:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{report.graphs} <em className="text-xs block">(Visualização do gráfico aqui)</em></p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Explicações:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{report.explanations}</p>
                  </div>
                  {report.sources && (
                    <div className="text-xs text-gray-500 dark:text-gray-500 pt-2 border-t border-gray-200 dark:border-gray-700">
                      Fontes: {report.sources.join(', ')}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Visualizações e Explicações Adicionais</h2>
          <div className="space-y-4">
            {additionalVisualizations.map((viz, index) => (
               <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center text-md">
                    {viz.icon}
                    {viz.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{viz.description}</p>
                  {viz.sources && (
                    <div className="text-xs text-gray-500 dark:text-gray-500 pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                      Fontes: {viz.sources.join(', ')}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default GeneticDataPage;

