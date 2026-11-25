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
  { t: 'Você precisa do bem amanhã', d: 'Consórcio não é compra imediata. Se você tem entrada, avaliamos uma carta contemplada; se não tem, dizemos que não é o caso.' },
  { t: 'O aporte aperta o seu mês', d: 'Se não couber com folga, refazemos o plano ou recuamos.' },
  { t: 'O objetivo ainda não está claro', d: 'Primeiro estruturamos, depois escolhemos o crédito.' },
  { t: 'Alguém prometeu data de contemplação', d: 'Ninguém pode garantir data de contemplação. Desconfie de quem promete.' },
];

export const PILARES = [
  { t: 'Segurança', d: 'O plano respeita o seu fluxo e a sua reserva.' },
  { t: 'Patrimônio', d: 'Cada aporte vira patrimônio que fica com você.' },
  { t: 'Alavancagem', d: 'Estratégia de contemplação para acelerar o próximo ativo.' },
];

export const DEPOIMENTOS = [
  { nome: 'Cliente Gaia Group', detalhe: 'Casa própria · contemplado, vendeu a carta e aumentou o poder de lance', citacao: 'Logo no primeiro mês nós já fomos contemplados. Vendemos essa carta e aumentou o nosso potencial de lance para as próximas.', video: '/casos/caso-carta-vendida.mp4', poster: '/casos/caso-carta-vendida.jpg' },
  { nome: '[Nome do cliente] · [cidade]', detalhe: 'Plano de investimento · atendido por [consultor] · [mês/ano]' },
  { nome: '[Nome do cliente] · [cidade]', detalhe: 'Contemplado no veículo · atendido por [consultor] · [mês/ano]' },
];

// Fontes: gaiagroup.com.br (famílias e anos) e site institucional da Gaia em construção (créditos), consultados em 25/11/2026.
export const NUMEROS_JOAO = [
  { valor: '+R$ 250 mi', rotulo: 'em créditos comercializados' },
  { valor: '+2.000', rotulo: 'famílias atendidas' },
  { valor: '9 anos', rotulo: 'de entregas reais' },
];

// Fonte: site oficial da HS Consórcios (hsconsorcios.com.br, seção "Nossos números"), consultado em 25/11/2026.
export const HS_DESTAQUE = 'Maior administradora do Brasil no setor imobiliário';
export const NUMEROS_HS = [
  { valor: '30+ anos', rotulo: 'de mercado, desde 1993' },
  { valor: '+410 mil', rotulo: 'cotas ativas' },
  { valor: '+R$ 3 bi', rotulo: 'em bens entregues em 2025' },
  { valor: '+2.600', rotulo: 'contemplações por mês' },
];
// Fonte: página da HS Consórcios no Reclame Aqui, dados de 01/03/2026 a 31/08/2026.
export const RECLAME_AQUI = { reputacao: 'Ótima', nota: '8,6', periodo: 'mar. a ago. de 2026', url: 'https://www.reclameaqui.com.br/empresa/hs-consorcios/' };
export const NUMEROS_HS_FONTE = 'Dados divulgados pela HS Consórcios em hsconsorcios.com.br, novembro de 2026.';

export const FAQ = [
  { q: 'Qual a relação entre João Dias, a Gaia Group e a HS?', a: 'João atende pela Gaia Group, que tem a HS Consórcios (Grupo Herval) como administradora exclusiva. A HS é autorizada pelo Banco Central e administra os grupos, as assembleias e as contemplações.' },
  { q: 'Em quanto tempo sou contemplado?', a: 'Ninguém pode garantir uma data. No diagnóstico, definimos a estratégia de contemplação com os dados reais do grupo.' },
  { q: 'Consórcio tem juros?', a: 'No lugar dos juros do financiamento, o consórcio tem a estrutura operacional do grupo e o fundo de reserva, apresentados antes da assinatura.' },
  { q: 'Vocês trabalham com carta contemplada?', a: 'Sim. Para quem já tem entrada e quer o crédito agora, ou para quem contemplou e quer vender. A cotação é individual, direto no WhatsApp, na seção Cartas contempladas.' },
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
  email: 'contato@gaiagroup.com.br',
  horario: 'Segunda a sexta, das 9h às 18h',
};

// Consulta oficial de instituições autorizadas no Banco Central
export const BC_URL = 'https://www.bcb.gov.br/estabilidadefinanceira/encontreinstituicao';

// Comparativo: crédito de R$ 400 mil.
// Financiamento: simulador oficial da Caixa (simuladorhabitacao.caixa.gov.br, Calculadora > Valor do imóvel + renda),
// consultado em 24/11/2026: imóvel R$ 500 mil, entrada mínima R$ 100 mil, financiamento R$ 400 mil,
// taxa efetiva 11,49% a.a., SAC, 420 meses, primeira parcela R$ 4.753,15.
// O total soma só amortização + juros com essa taxa no SAC (sem seguros, TR e tarifas).
// Consórcio: tabela HS (out/2026), estrutura operacional 22% + fundo de reserva 1%, sem reajuste anual.
// Refazer a simulação na Caixa e atualizar quando a taxa mudar.
export const COMPARATIVO = {
  credito: 400000,
  consorcio: { prazo: 200, primeiroAporte: 1230, custoAlem: 92000, total: 492000 },
  financiamento: { prazo: 420, taxa: '11,49% a.a.', primeiraPrestacao: 4753.15, entrada: 100000, custoAlem: 766635, total: 1166635 },
  fonte: {
    texto: 'Simulador oficial da Caixa, consultado em 24/11/2026',
    url: 'https://simuladorhabitacao.caixa.gov.br/home',
  },
};

// Cartas contempladas: prova social e caso real.
// Preencher SOMENTE com clientes reais e autorização por escrito. Enquanto houver [colchetes], o bloco aparece como espaço reservado.
export const CARTAS_DEPOIMENTOS = [
  { lado: 'Comprou uma carta', texto: '[Frase real do cliente, 1 a 2 linhas: o que ele queria e o que aconteceu]', nome: '[Nome do cliente] · [cidade]', detalhe: 'Carta de [imóvel/veículo] · [mês/ano]', foto: '' },
  { lado: 'Vendeu a carta', texto: '[Frase real do cliente, 1 a 2 linhas: por que vendeu e como foi a negociação]', nome: '[Nome do cliente] · [cidade]', detalhe: 'Carta de [imóvel/veículo] · [mês/ano]', foto: '' },
];

export const CARTAS_CASOS = [
  {
    video: '/casos/caso-paulo-investidor.mp4',
    poster: '/casos/caso-paulo-investidor.jpg',
    cliente: 'Paulo',
    profissao: 'Corretor de seguros',
    perfil: 'Investidor',
    titulo: 'Começou com uma carta para conhecer. Hoje tem uma carteira de 15.',
    etapas: [
      { rotulo: 'Começo', texto: 'Fez a primeira carta para entender, na prática, como o consórcio funciona como investimento.' },
      { rotulo: 'Confiança', texto: 'Com a primeira funcionando, fez mais três. Depois da contemplação delas, montou uma carteira de 15 cartas.' },
      { rotulo: 'Resultado', texto: 'Foi contemplado já no primeiro mês em uma das cartas, com retorno relevante para a carteira.' },
    ],
  },
];

// Logo da HS (public/logo-hs.png), usado na faixa de confiança das cartas.
export const LOGO_HS = '/logo-hs.png';

// Cartas contempladas: conteúdo das perguntas frequentes (usado na página e nos dados estruturados do Google)
export const CARTAS_PARA_QUEM = {
  e: [
    'Tem a entrada disponível e quer comprar o imóvel ou o veículo agora, sem esperar contemplação',
    'Tem renda compatível com os aportes restantes e passa na análise de crédito da administradora',
    'Quer comparar, número contra número, com o financiamento antes de decidir',
    'Contemplou, não vai usar o crédito agora e quer transformar a carta em capital',
  ],
  porque: [
    'Crédito já liberado: você negocia o bem como comprador à vista',
    'Custo estrutural do consórcio no lugar dos juros do financiamento bancário',
    'Aportes previsíveis até o fim do grupo, sem depender da aprovação de um banco',
    'Transferência formal, com contrato e aprovação da HS Consórcios',
  ],
  nao: [
    'Quem não tem entrada: para você, o caminho certo é o consórcio estratégico desde o início',
    'Quem tem restrição no nome ou renda que não comporta os aportes restantes',
    'Quem procura crédito sem custo ou ganho garantido na revenda',
    'Quem quer apenas especular, sem um bem definido para comprar',
  ],
};

export const CARTAS_PASSOS = [
  { t: 'Separe a entrada', d: 'A entrada é o valor pago a quem está vendendo a carta. Sem ela, a compra não acontece.' },
  { t: 'Peça a cotação', d: 'Clique no botão, informe bem, crédito e entrada. A cotação chega no seu WhatsApp.' },
  { t: 'Análise e contrato', d: 'Avaliamos saldo e aportes restantes. A transferência é formalizada e aprovada pela administradora.' },
  { t: 'Compre o bem', d: 'Com a aprovação, o crédito é usado na compra do imóvel ou veículo, e você segue com os aportes.' },
];

export const CARTAS_FAQ = [
  { q: 'Preciso ter entrada para comprar uma carta contemplada?', a: 'Sim, a entrada é obrigatória. Ela é o valor pago a quem está vendendo a carta; o restante segue em aportes mensais no grupo. Sem entrada, a compra não acontece, e o caminho certo para você é o consórcio estratégico desde o início.' },
  { q: 'Para quem é a carta contemplada?', lista: CARTAS_PARA_QUEM.e },
  { q: 'Por que usar uma carta contemplada?', lista: CARTAS_PARA_QUEM.porque },
  { q: 'Como usar uma carta contemplada?', passos: CARTAS_PASSOS },
  { q: 'Para quem a carta contemplada não é?', lista: CARTAS_PARA_QUEM.nao },
  { q: 'É seguro comprar ou vender uma carta?', a: 'Sim, quando a transferência é feita do jeito certo: com contrato, cessão registrada e aprovação da administradora. Nada de acordo de gaveta: os contratos passam pelo jurídico da Gaia Group, conduzido por advogada especialista em direito imobiliário, e nós conduzimos cada etapa.' },
  { q: 'Quem compra a minha carta?', a: 'Pessoas que já têm entrada e querem o crédito agora, e investidores que acompanham esse mercado. Nosso papel é encontrar o comprador certo e conduzir a negociação.' },
  { q: 'Quanto vale a minha carta?', a: 'Depende do crédito, do saldo devedor, dos aportes restantes e do momento do mercado. Por isso não publicamos valores: você solicita a cotação e recebe o número da sua cota, analisada individualmente.' },
  { q: 'Quanto tempo leva?', a: 'Varia conforme a negociação e a análise da administradora. Na cotação você já recebe uma estimativa realista para o seu caso.' },
];

// Avaliações públicas da Gaia Group no Google (5 estrelas), como aparecem em gaiagroup.com.br.
// Ficaram de fora as que prometem lucro ou rendimento, por conformidade.
export const AVALIACOES_GOOGLE = [
  { nome: 'Taquara Pesca', data: 'agosto de 2025', texto: 'Super recomendo! Já são duas cartas adquiridas, uma de automóvel contemplada em 12 meses. A assessoria do pessoal fez toda diferença para envolver o melhor plano de investimento! Nota 10' },
  { nome: 'Paulo Cezar Gracias Junior', data: 'agosto de 2025', texto: 'Tinha um certo receio com o consórcio até conhecer o escritório. Após toda a explicação fiz uma carta e fui contemplado. Atualmente tenho mais de 4 cartas de consórcio. Recomendo totalmente o escritório pelo seu atendimento e seriedade!' },
  { nome: 'Gabriel Vicente', data: 'agosto de 2025', texto: 'Uma empresa íntegra, correta e coerente! Com ótimo atendimento, que nos direciona sempre ao melhor investimento! Gaia é certeza de bons negócios!' },
  { nome: 'Moacyr Petrocelli', data: 'agosto de 2025', texto: 'Excelentes serviços! Atendimento personalizado e assertivo para cada necessidade! Parabéns!' },
  { nome: 'André Luiz Abbiati', data: 'agosto de 2025', texto: 'Excelente empresa, recomendo!' },
];
