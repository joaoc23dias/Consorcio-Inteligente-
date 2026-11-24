// Conteúdo central do site. Itens entre colchetes [ ] são espaços reservados:
// troque pelo material real antes de publicar (depoimentos, números, logo HS).

export const WHATSAPP = '5519998187567';

export const ESCRITORIOS = [
  { cidade: 'Ribeirão Preto', endereco: 'Av. Independência, 712, Centro' },
  { cidade: 'São José do Rio Pardo', endereco: 'Rua Benjamin Constant, 368, Centro' },
  { cidade: 'Mococa', endereco: 'Rua João Anzaloni Filho, 511, Sala 1' },
];

export const PASSOS = [
  { n: '01', t: 'Conversa', d: 'O que você quer conquistar e em quanto tempo.' },
  { n: '02', t: 'Diagnóstico patrimonial', d: 'Quanto você pode aportar por mês sem apertar o seu fluxo.' },
  { n: '03', t: 'Estratégia', d: 'Crédito, grupo e estratégia de contemplação na mesma mesa, antes de assinar.' },
  { n: '04', t: 'Acompanhamento', d: 'O time acompanha as assembleias até você acessar o crédito.' },
];

export const QUANDO_NAO = [
  { t: 'Você precisa do bem amanhã', d: 'Consórcio não é compra imediata. Avaliamos uma carta contemplada ou dizemos que não é o caso.' },
  { t: 'O aporte aperta o seu mês', d: 'Se não couber com folga, refazemos o plano ou recuamos.' },
  { t: 'O objetivo ainda não está claro', d: 'Primeiro estruturamos, depois escolhemos o crédito.' },
  { t: 'Alguém prometeu data de contemplação', d: 'Não existe data garantida. Existe estratégia.' },
];

export const PILARES = [
  { t: 'Segurança', d: 'O plano respeita o seu fluxo e a sua reserva.' },
  { t: 'Patrimônio', d: 'Cada aporte constrói um ativo, não um passivo.' },
  { t: 'Alavancagem', d: 'Estratégia de contemplação para acelerar o próximo ativo.' },
];

export const DEPOIMENTOS = [
  { nome: '[Nome do cliente] · [cidade]', detalhe: 'Contemplado no imóvel · atendido por João Dias · [mês/ano]' },
  { nome: '[Nome do cliente] · [cidade]', detalhe: 'Plano de investimento · atendido por [consultor] · [mês/ano]' },
  { nome: '[Nome do cliente] · [cidade]', detalhe: 'Contemplado no veículo · atendido por [consultor] · [mês/ano]' },
];

export const NUMEROS_JOAO = [
  { valor: '[clientes]', rotulo: 'atendidos' },
  { valor: '[R$ crédito]', rotulo: 'estruturado' },
];

export const NUMEROS_HS = ['[anos de mercado]', '[consorciados]', '[crédito entregue]'];

export const FAQ = [
  { q: 'Qual a relação entre João Dias, a Gaia Group e a HS?', a: 'João atende pela Gaia Group, que tem a HS Consórcios (Grupo Herval) como administradora exclusiva. A HS é autorizada pelo Banco Central e administra os grupos, as assembleias e as contemplações.' },
  { q: 'Em quanto tempo sou contemplado?', a: 'Não existe data garantida. Existe estratégia de contemplação, definida com dados do grupo no seu diagnóstico.' },
  { q: 'Consórcio tem juros?', a: 'Não. Existe a estrutura operacional do grupo, apresentada antes da assinatura.' },
  { q: 'Quanto custa o diagnóstico patrimonial?', a: 'Nada. É personalizado e você só segue se fizer sentido.' },
  { q: 'Já sou cliente. Com quem falo?', a: 'Com o seu consultor, direto no WhatsApp.' },
];

// Tabelas oficiais HS Consórcios (referência out/2026). Atualizar sempre que a HS mudar a tabela.
// [crédito, aporte integral, meio aporte, prazo em meses]
export const TABELA_REF = 'Tabela HS Consórcios de referência (out/2026)';
export const TABELA_HS = {
  imovel: [
    [100000, 683.2, 341.5, 180], [150000, 1024.8, 512.25, 180], [200000, 1230, 615, 200],
    [250000, 1537.5, 768.75, 200], [300000, 1845, 922.5, 200], [350000, 2152.5, 1076.25, 200],
    [400000, 2460, 1230, 200], [500000, 2795, 1397.5, 220], [600000, 3354, 1677, 220],
    [700000, 3913, 1956.5, 220], [800000, 4472, 2236, 220], [1000000, 5590.9, 2795, 220],
    [1200000, 6708, 3354, 220], [1500000, 8386, 4193, 220],
  ],
  veiculo: [
    [40000, 464, 232, 100], [50000, 580, 290, 100], [60000, 696, 348, 100],
    [80000, 928, 464, 100], [100000, 1160, 580, 120], [120000, 1392, 696, 120],
    [150000, 1449.9, 724.95, 120], [200000, 1933.2, 966.6, 120], [250000, 2416.52, 1208.25, 120],
    [300000, 2899.8, 1449.9, 120], [400000, 3314, 1657.2, 140], [500000, 4142.5, 2071.5, 140],
  ],
};

// Dados institucionais (preencher antes de publicar)
export const GAIA = {
  razaoSocial: '[Razão social da Gaia Group]',
  cnpj: '[CNPJ da Gaia Group]',
  email: '[e-mail de contato]',
};

// Consulta oficial de instituições autorizadas no Banco Central
export const BC_URL = 'https://www.bcb.gov.br/estabilidadefinanceira/encontreinstituicao';

// Comparativo ilustrativo: crédito de R$ 400 mil em 200 meses.
// Consórcio: tabela HS (out/2026), estrutura operacional 22% + fundo de reserva 1%, sem reajuste anual.
// Financiamento: Caixa SBPE (SFH), TR + 10,99% a.a. (taxa mínima divulgada em mar/2026), sistema SAC,
// sem TR, seguros e tarifas. Recalcular se a tabela HS ou as taxas mudarem.
export const COMPARATIVO = {
  credito: 400000,
  prazo: 200,
  consorcio: { primeiroAporte: 1230, aporteIntegral: 2460, custoAlem: 92000, total: 492000 },
  financiamento: { taxa: 'TR + 10,99% a.a.', primeiraPrestacao: 5491, custoAlem: 350826, total: 750826 },
  fonte: {
    texto: 'Taxa mínima da Caixa para aquisição residencial (SBPE/SFH), divulgada em março de 2026',
    url: 'https://borainvestir.b3.com.br/noticias/do-minha-casa-minha-vida-ao-alto-padrao-veja-as-taxas-de-juros-para-financiar-imovel-pela-caixa/',
  },
};
