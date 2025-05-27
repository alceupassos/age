
import { LabExam } from '@/components/labexams/types';

export const additionalLabExams: LabExam[] = [
  {
    id: 'exam006',
    name: 'Perfil Lipídico Completo',
    date: '2024-05-10',
    provider: 'Laboratório Vida Saudável',
    category: 'Bioquímica',
    status: 'warning', // Changed from 'attention'
    summary: 'Colesterol total e LDL elevados.',
    reportUrl: '/path/to/report6.pdf',
    groups: [
      {
        name: 'Colesterol Total',
        parameters: [
          { name: 'Colesterol Total', value: '245', unit: 'mg/dL', referenceRange: '<200', status: 'warning' },
        ],
      },
      {
        name: 'Lipoproteínas',
        parameters: [
          { name: 'HDL Colesterol', value: '40', unit: 'mg/dL', referenceRange: '>40', status: 'normal' },
          { name: 'LDL Colesterol', value: '165', unit: 'mg/dL', referenceRange: '<100', status: 'critical' },
          { name: 'VLDL Colesterol', value: '40', unit: 'mg/dL', referenceRange: '<30', status: 'warning' },
        ],
      },
      {
        name: 'Triglicerídeos',
        parameters: [
          { name: 'Triglicerídeos', value: '180', unit: 'mg/dL', referenceRange: '<150', status: 'warning' },
        ],
      },
    ],
  },
  {
    id: 'exam007',
    name: 'Função Renal (Ureia e Creatinina)',
    date: '2024-04-22',
    provider: 'Clínica CheckUp',
    category: 'Bioquímica',
    status: 'normal',
    summary: 'Função renal aparentemente normal.',
    reportUrl: '/path/to/report7.pdf',
    groups: [
      {
        name: 'Indicadores de Função Renal',
        parameters: [
          { name: 'Ureia', value: '35', unit: 'mg/dL', referenceRange: '15-40', status: 'normal' },
          { name: 'Creatinina', value: '0.9', unit: 'mg/dL', referenceRange: '0.6-1.2', status: 'normal' },
          { name: 'Taxa de Filtração Glomerular (TFG estimada)', value: '95', unit: 'mL/min/1.73m²', referenceRange: '>90', status: 'normal' },
        ],
      },
    ],
  },
  {
    id: 'exam008',
    name: 'Função Hepática (Enzimas)',
    date: '2024-03-15',
    provider: 'Hospital Central',
    category: 'Bioquímica',
    status: 'normal',
    summary: 'Enzimas hepáticas dentro dos limites.',
    reportUrl: '/path/to/report8.pdf',
    groups: [
      {
        name: 'Transaminases',
        parameters: [
          { name: 'AST (TGO)', value: '25', unit: 'U/L', referenceRange: '5-40', status: 'normal' },
          { name: 'ALT (TGP)', value: '30', unit: 'U/L', referenceRange: '7-56', status: 'normal' },
        ],
      },
      {
        name: 'Outros Marcadores Hepáticos',
        parameters: [
          { name: 'Gama GT', value: '40', unit: 'U/L', referenceRange: '5-60', status: 'normal' },
          { name: 'Fosfatase Alcalina', value: '80', unit: 'U/L', referenceRange: '40-129', status: 'normal' },
          { name: 'Bilirrubina Total', value: '0.8', unit: 'mg/dL', referenceRange: '0.2-1.2', status: 'normal' },
        ],
      },
    ],
  },
  {
    id: 'exam009',
    name: 'Hormônios Tireoidianos',
    date: '2024-02-01',
    provider: 'Laboratório Diagnóstico Avançado',
    category: 'Hormônios',
    status: 'warning', // Changed from 'attention'
    summary: 'TSH levemente elevado, sugere hipotireoidismo subclínico.',
    reportUrl: '/path/to/report9.pdf',
    groups: [
      {
        name: 'Função Tireoidiana',
        parameters: [
          { name: 'TSH (Hormônio Tireoestimulante)', value: '5.5', unit: 'µUI/mL', referenceRange: '0.4-4.5', status: 'warning' },
          { name: 'T4 Livre', value: '1.2', unit: 'ng/dL', referenceRange: '0.8-1.8', status: 'normal' },
          { name: 'T3 Total', value: '110', unit: 'ng/dL', referenceRange: '80-200', status: 'normal' },
        ],
      },
    ],
  },
  {
    id: 'exam010',
    name: 'Vitamina D (25-hidroxivitamina D)',
    date: '2024-01-10',
    provider: 'Clínica Sol & Saúde',
    category: 'Vitaminas',
    status: 'critical',
    summary: 'Deficiência severa de Vitamina D.',
    reportUrl: '/path/to/report10.pdf',
    groups: [
      {
        name: 'Níveis de Vitamina D',
        parameters: [
          { name: '25-hidroxivitamina D', value: '10', unit: 'ng/mL', referenceRange: '30-100', status: 'critical' },
        ],
      },
    ],
  },
  {
    id: 'exam011',
    name: 'Exame de Urina Tipo I (EAS)',
    date: '2024-05-20',
    provider: 'Posto de Saúde Comunitário',
    category: 'Urinálise',
    status: 'normal',
    summary: 'Exame de urina sem alterações significativas.',
    reportUrl: '/path/to/report11.pdf',
    groups: [
      {
        name: 'Características Físicas',
        parameters: [
          { name: 'Cor', value: 'Amarelo Citrino', unit: '', referenceRange: 'Amarelo Claro a Âmbar', status: 'normal' },
          { name: 'Aspecto', value: 'Límpido', unit: '', referenceRange: 'Límpido', status: 'normal' },
          { name: 'Densidade', value: '1.015', unit: '', referenceRange: '1.005-1.030', status: 'normal' },
        ],
      },
      {
        name: 'Exame Químico',
        parameters: [
          { name: 'pH', value: '6.0', unit: '', referenceRange: '4.5-8.0', status: 'normal' },
          { name: 'Proteínas', value: 'Ausente', unit: '', referenceRange: 'Ausente', status: 'normal' },
          { name: 'Glicose', value: 'Ausente', unit: '', referenceRange: 'Ausente', status: 'normal' },
          { name: 'Cetonas', value: 'Ausente', unit: '', referenceRange: 'Ausente', status: 'normal' },
          { name: 'Bilirrubina', value: 'Ausente', unit: '', referenceRange: 'Ausente', status: 'normal' },
          { name: 'Urobilinogênio', value: 'Normal', unit: '', referenceRange: 'Normal', status: 'normal' },
          { name: 'Sangue (Hemoglobina)', value: 'Ausente', unit: '', referenceRange: 'Ausente', status: 'normal' },
          { name: 'Nitrito', value: 'Negativo', unit: '', referenceRange: 'Negativo', status: 'normal' },
          { name: 'Leucócitos Esterase', value: 'Negativo', unit: '', referenceRange: 'Negativo', status: 'normal' },
        ],
      },
      {
        name: 'Sedimentoscopia',
        parameters: [
          { name: 'Células Epiteliais', value: 'Raras', unit: '/campo', referenceRange: 'Raras a Algumas', status: 'normal' },
          { name: 'Leucócitos', value: '0-2', unit: '/campo', referenceRange: '0-5', status: 'normal' },
          { name: 'Hemácias', value: '0-1', unit: '/campo', referenceRange: '0-3', status: 'normal' },
          { name: 'Cilindros', value: 'Ausentes', unit: '/campo', referenceRange: 'Ausentes', status: 'normal' },
          { name: 'Cristais', value: 'Ausentes', unit: '', referenceRange: 'Ausentes ou Raros', status: 'normal' },
          { name: 'Muco', value: 'Escasso', unit: '', referenceRange: 'Escasso', status: 'normal' },
        ],
      },
    ],
  },
  {
    id: 'exam012',
    name: 'PCR Ultrassensível',
    date: '2024-04-05',
    provider: 'Laboratório Coração Forte',
    category: 'Marcadores Inflamatórios',
    status: 'warning', // Changed from 'attention'
    summary: 'PCR-us elevada, indica risco cardiovascular aumentado.',
    reportUrl: '/path/to/report12.pdf',
    groups: [
      {
        name: 'Proteína C Reativa Ultrassensível',
        parameters: [
          { name: 'PCR-us', value: '3.5', unit: 'mg/L', referenceRange: '<1.0 (baixo risco), 1.0-3.0 (risco médio), >3.0 (alto risco)', status: 'warning' },
        ],
      },
    ],
  },
  {
    id: 'exam013',
    name: 'Hemoglobina Glicada (HbA1c)',
    date: '2024-03-20',
    provider: 'Diabetes Control Center',
    category: 'Diabetes',
    status: 'normal',
    summary: 'Controle glicêmico adequado.',
    reportUrl: '/path/to/report13.pdf',
    groups: [
      {
        name: 'Controle Glicêmico a Longo Prazo',
        parameters: [
          { name: 'Hemoglobina Glicada (A1c)', value: '5.5', unit: '%', referenceRange: '<5.7% (Normal), 5.7-6.4% (Pré-diabetes), >=6.5% (Diabetes)', status: 'normal' },
        ],
      },
    ],
  },
  {
    id: 'exam014',
    name: 'Ferritina',
    date: '2024-02-12',
    provider: 'Clínica CheckUp',
    category: 'Metabolismo do Ferro',
    status: 'warning', // Changed from 'attention'
    summary: 'Níveis de ferritina baixos, sugere deficiência de ferro.',
    reportUrl: '/path/to/report14.pdf',
    groups: [
      {
        name: 'Reserva de Ferro',
        parameters: [
          { name: 'Ferritina', value: '18', unit: 'ng/mL', referenceRange: '30-400 (homens), 15-150 (mulheres)', status: 'warning' },
        ],
      },
    ],
  },
  {
    id: 'exam015',
    name: 'Ácido Úrico',
    date: '2024-01-25',
    provider: 'Laboratório Vida Saudável',
    category: 'Metabolismo',
    status: 'normal',
    summary: 'Nível de ácido úrico normal.',
    reportUrl: '/path/to/report15.pdf',
    groups: [
      {
        name: 'Metabolismo das Purinas',
        parameters: [
          { name: 'Ácido Úrico', value: '5.0', unit: 'mg/dL', referenceRange: '3.4-7.0 (homens), 2.4-6.0 (mulheres)', status: 'normal' },
        ],
      },
    ],
  },
   {
    id: 'exam016',
    name: 'PSA Total (Antígeno Prostático Específico)',
    date: '2023-12-10',
    provider: 'Centro de Urologia Avançada',
    category: 'Marcadores Tumorais',
    status: 'normal',
    summary: 'PSA dentro da faixa esperada para a idade.',
    reportUrl: '/path/to/report16.pdf',
    groups: [
      {
        name: 'Marcador Prostático',
        parameters: [
          { name: 'PSA Total', value: '1.2', unit: 'ng/mL', referenceRange: '<4.0 (varia com idade)', status: 'normal' },
        ],
      },
    ],
  },
  {
    id: 'exam017',
    name: 'Gasometria Arterial (Exemplo)',
    date: '2023-11-05',
    provider: 'UTI Hospital das Clínicas',
    category: 'Gases Sanguíneos',
    status: 'critical',
    summary: 'Acidose metabólica compensada.',
    reportUrl: '/path/to/report17.pdf',
    groups: [
      {
        name: 'Equilíbrio Ácido-Base',
        parameters: [
          { name: 'pH', value: '7.30', unit: '', referenceRange: '7.35-7.45', status: 'critical' },
          { name: 'pCO2', value: '30', unit: 'mmHg', referenceRange: '35-45', status: 'warning' },
          { name: 'HCO3 (Bicarbonato)', value: '15', unit: 'mEq/L', referenceRange: '22-26', status: 'critical' },
          { name: 'BE (Excesso de Base)', value: '-8', unit: 'mEq/L', referenceRange: '-2 a +2', status: 'critical' },
        ],
      },
      {
        name: 'Oxigenação',
        parameters: [
          { name: 'pO2', value: '90', unit: 'mmHg', referenceRange: '80-100', status: 'normal' },
          { name: 'SatO2', value: '97', unit: '%', referenceRange: '95-100%', status: 'normal' },
        ],
      },
    ],
  },
  {
    id: 'exam018',
    name: 'Coagulograma Completo',
    date: '2023-10-15',
    provider: 'Laboratório Hematológico Central',
    category: 'Coagulação',
    status: 'normal',
    summary: 'Testes de coagulação dentro dos parâmetros normais.',
    reportUrl: '/path/to/report18.pdf',
    groups: [
      {
        name: 'Tempo de Protrombina (TP)',
        parameters: [
          { name: 'TP (Tempo)', value: '12.5', unit: 'segundos', referenceRange: '11-13.5', status: 'normal' },
          { name: 'TP (RNI/INR)', value: '1.0', unit: '', referenceRange: '0.8-1.2 (não anticoagulado)', status: 'normal' },
        ],
      },
      {
        name: 'Tempo de Tromboplastina Parcial Ativada (TTPA)',
        parameters: [
          { name: 'TTPA', value: '30', unit: 'segundos', referenceRange: '25-35', status: 'normal' },
        ],
      },
      {
        name: 'Contagem de Plaquetas',
        parameters: [ 
          { name: 'Plaquetas', value: '250000', unit: '/µL', referenceRange: '150000-450000', status: 'normal' },
        ],
      },
       {
        name: 'Fibrinogênio',
        parameters: [
          { name: 'Fibrinogênio', value: '300', unit: 'mg/dL', referenceRange: '200-400', status: 'normal' },
        ],
      },
    ],
  },
  {
    id: 'exam019',
    name: 'Marcadores Cardíacos (Troponina)',
    date: '2023-09-20',
    provider: 'Emergência Cardiológica',
    category: 'Cardiologia',
    status: 'normal',
    summary: 'Troponina negativa, sem evidência de infarto agudo do miocárdio recente.',
    reportUrl: '/path/to/report19.pdf',
    groups: [
      {
        name: 'Troponina I Ultrassensível',
        parameters: [
          { name: 'Troponina I hs', value: '0.005', unit: 'ng/mL', referenceRange: '<0.040 (varia conforme laboratório)', status: 'normal' },
        ],
      },
      {
        name: 'CK-MB Massa',
        parameters: [
          { name: 'CK-MB Massa', value: '1.5', unit: 'ng/mL', referenceRange: '<5.0', status: 'normal' },
        ],
      },
    ],
  },
  {
    id: 'exam020',
    name: 'Teste de Tolerância à Glicose Oral (Curva Glicêmica - 75g)',
    date: '2023-08-10',
    provider: 'Centro de Diabetes e Endocrinologia',
    category: 'Diabetes',
    status: 'warning', // Changed from 'attention'
    summary: 'Tolerância à glicose diminuída (pré-diabetes).',
    reportUrl: '/path/to/report20.pdf',
    groups: [
      {
        name: 'Glicemia em Jejuns',
        parameters: [
          { name: 'Glicemia Basal (Jejum)', value: '105', unit: 'mg/dL', referenceRange: '<100', status: 'warning' },
        ],
      },
      {
        name: 'Glicemia Pós-Sobrecarga',
        parameters: [
          { name: 'Glicemia 60 min após 75g Glicose', value: '180', unit: 'mg/dL', referenceRange: 'Não definido como critério diagnóstico principal', status: 'info' },
          { name: 'Glicemia 120 min após 75g Glicose', value: '155', unit: 'mg/dL', referenceRange: '<140 (Normal), 140-199 (Tolerância Diminuída), >=200 (Diabetes)', status: 'warning' },
        ],
      },
    ],
  },
];

