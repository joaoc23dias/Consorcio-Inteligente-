// Raio-X Patrimonial: as contas do presente lacrado, a partir das 5 respostas.
// Fontes: tabela HS Consórcios (Gaia Group, nov/2026); Regulamento HS item 60.1 (renda de 3x o aporte);
// financiamento de imóvel: Caixa SBPE 12,05% a.a. + TR, média set/2026 (Banco Central);
// financiamento de veículo: 26,42% a.a., média ago/2026 (Banco Central, série 20749).

// [crédito, aporte integral, 1/2 aporte, prazo]
export const IMOVEL = [
  [100000, 683.2, 341.5, 180], [120000, 819.84, 409.8, 180], [130000, 888.33, 444.16, 180],
  [140000, 956.48, 478.1, 180], [150000, 1024.8, 512.25, 180], [160000, 1093.12, 546.4, 180],
  [170000, 1045.5, 522.75, 200], [180000, 1107, 553.5, 200], [200000, 1230, 615, 200],
  [250000, 1537.5, 768.75, 200], [280000, 1722, 861, 200], [300000, 1845, 922.5, 200],
  [350000, 2152.5, 1076.25, 200], [400000, 2460, 1230, 200], [500000, 2795, 1397.5, 220],
  [600000, 3354, 1677, 220], [700000, 3913, 1956.5, 220], [800000, 4472, 2236, 220],
  [900000, 5031, 2515.5, 220], [1000000, 5590.9, 2795, 220], [1100000, 6149, 3074.5, 220],
  [1200000, 6708, 3354, 220], [1300000, 7268, 3634, 220], [1400000, 7827, 3913.5, 220],
  [1500000, 8386, 4193, 220],
];
// 100 mil e 120 mil em 120 meses ficaram fora: o custo da linha (39%) destoa das demais (16%). Conferir com a HS.
export const VEICULO = [
  [34000, 394.4, 197.2, 100], [37500, 435, 217.51, 100], [40000, 464, 232, 100], [42500, 493, 246.51, 100],
  [45000, 522, 261, 100], [50000, 580, 290, 100], [55000, 638, 319, 100], [60000, 696, 348, 100],
  [70000, 812, 406, 100], [80000, 928, 464, 100], [90000, 1044, 522, 100],
  [130000, 1256.58, 628.29, 120], [140000, 1353.24, 676.62, 120], [150000, 1449.9, 724.95, 120],
  [160000, 1546.56, 773.28, 120], [170000, 1643.22, 821.61, 120], [180000, 1739.88, 869.94, 120],
  [200000, 1933.2, 966.6, 120], [220000, 2126.52, 1063.26, 120], [250000, 2416.52, 1208.25, 120],
  [280000, 2706.48, 1353.24, 120], [300000, 2899.8, 1449.9, 120],
  [400000, 3314, 1657.2, 140], [500000, 4142.5, 2071.5, 140], [600000, 4971, 2485.8, 140],
  [700000, 5799.5, 2900.1, 140], [800000, 6628, 3314.4, 140],
];
const FIN = {
  imovel: { taxa: 0.1205, meses: 360, entrada: 0.2, fonte: 'Caixa, SBPE: 12,05% ao ano + TR, média de setembro de 2026 (Banco Central). TR não incluída.' },
  veiculo: { taxa: 0.2642, meses: 48, entrada: 0.2, fonte: 'Média de mercado: 26,42% ao ano, agosto de 2026 (Banco Central, série 20749).' },
};
// folga mensal: ponto médio de cada faixa respondida
const FOLGA = { 1: 900, 2: 1500, 4: 3000, 8: 6000, 12: 9000 };
export const FAIXA = { 1: 'até R$ 1 mil', 2: 'entre R$ 1 mil e R$ 2 mil', 4: 'entre R$ 2 mil e R$ 4 mil', 8: 'entre R$ 4 mil e R$ 8 mil', 12: 'acima de R$ 8 mil' };

export const PERGUNTAS = [
  { id: 'obj', t: 'O que você quer conquistar primeiro?', op: [['imovel', 'Imóvel para morar'], ['renda', 'Imóvel para gerar renda'], ['terreno', 'Terreno ou construção'], ['veiculo', 'Veículo'], ['empresa', 'Algo para a empresa'], ['decidir', 'Ainda estou decidindo']], prov: 'Primeira camada gravada. Ela já muda o que vem dentro.' },
  { id: 'mes', t: 'Quanto cabe no seu mês, com folga?', op: [['1', 'Até R$ 1 mil'], ['2', 'R$ 1 mil a R$ 2 mil'], ['4', 'R$ 2 mil a R$ 4 mil'], ['8', 'R$ 4 mil a R$ 8 mil'], ['12', 'Acima de R$ 8 mil']], prov: 'Essa resposta mudou bastante o seu cenário.' },
  { id: 'tempo', t: 'Quando você quer o crédito na mão?', op: [['ja', 'O quanto antes'], ['12m', 'Nos próximos 12 meses'], ['3a', 'Entre 1 e 3 anos'], ['plano', 'Sem pressa, quero planejar']], prov: 'Com essa, o seu caminho já tem forma.' },
  { id: 'rec', t: 'Você tem algo guardado para usar como lance?', op: [['0', 'Ainda não'], ['10', 'Até 10% do crédito'], ['30', 'Entre 10% e 30%'], ['31', 'Mais de 30%']], prov: 'Falta uma. É ela que fecha o lacre.' },
  { id: 'pri', t: 'O que pesa mais na sua decisão?', op: [['seg', 'Segurança: não apertar o orçamento'], ['vel', 'Velocidade: usar logo o crédito'], ['cres', 'Crescimento: somar patrimônio'], ['custo', 'Custo: pagar menos no total']], prov: '' },
];

export const brl = (v, cents = false) =>
  'R$ ' + Number(v).toLocaleString('pt-BR', { minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 });

export function perfil(r) {
  if ((r.tempo === 'ja' || r.tempo === '12m') && (r.rec === '30' || r.rec === '31' || r.pri === 'vel')) return ['O Acelerador', 'Você quer o crédito logo e tem como acelerar.'];
  if (r.pri === 'cres' || r.obj === 'renda' || r.obj === 'empresa') return ['O Construtor de Patrimônio', 'Você pensa em patrimônio como algo que se soma, um ativo depois do outro.'];
  if (r.pri === 'custo' || r.tempo === 'plano') return ['O Estrategista', 'Você prefere decidir com calma e pagar menos no total.'];
  return ['O Guardião', 'Para você, segurança vem antes de qualquer pressa.'];
}

export function calcula(r) {
  const tipo = r.obj === 'veiculo' ? 'veiculo' : 'imovel';
  const tab = tipo === 'veiculo' ? VEICULO : IMOVEL;
  const folga = FOLGA[r.mes] || 1500;
  const cabe = tab.filter((l) => l[1] <= folga);
  const c = cabe.length ? cabe[cabe.length - 1] : tab[0];
  const meiaL = tab.filter((l) => l[2] <= folga);
  const meia = meiaL.length ? meiaL[meiaL.length - 1] : null;
  const jogada = tab.find((l) => l[0] * 0.7 >= c[0] && l[2] <= folga) || meia;
  const f = FIN[tipo];
  const valor = c[0] * (1 - f.entrada);
  const i = Math.pow(1 + f.taxa, 1 / 12) - 1;
  const pmt = (valor * i) / (1 - Math.pow(1 + i, -f.meses));
  const fin = { entrada: c[0] * f.entrada, pmt, meses: f.meses, total: pmt * f.meses + c[0] * f.entrada, fonte: f.fonte };
  const total = c[1] * c[3];
  const cons = { total, pct: total / c[0] - 1 };
  return { tipo, bem: tipo === 'veiculo' ? 'veículo' : 'imóvel', folga, c, meia, jogada, fin, cons };
}

export function jogadas(r, k) {
  const { c, jogada: j } = k;
  const b = [];
  if (r.rec === '30' || r.rec === '31') {
    b.push(['Lance fixo com recursos próprios', `Você tem recursos para disputar o lance fixo de 30% sem tirar nada da carta. Numa carta de ${brl(c[0])}, o lance seria de ${brl(c[0] * 0.3)}, e o crédito liberado continua sendo ${brl(c[0])}. É a posição mais forte para quem quer chegar antes.`]);
  } else if (r.rec === '10') {
    b.push(['Lance combinado', `Os recursos que você tem guardados cobrem parte do lance. O restante pode sair da própria carta, com a alavancagem estratégica de até 30%. Numa carta de ${brl(c[0])}, um lance de 30% soma ${brl(c[0] * 0.3)}: uma parte sua, uma parte da carta.`]);
  } else {
    b.push(['Alavancagem estratégica, sem capital próprio', 'Mesmo sem recursos guardados, dá para disputar o lance usando até 30% da própria carta. O segredo é dimensionar a carta para que os 70% que ficam cubram o que você quer conquistar.']);
  }
  if (j && j[0] !== c[0]) {
    b.push(['A jogada para o seu caso', `Uma carta de ${brl(j[0])}, com 1/2 aporte de ${brl(j[2], true)} até a contemplação, cabe no seu mês. Com o lance de 30% saindo da própria carta, ficam cerca de ${brl(j[0] * 0.7)} para o seu objetivo. O que acontece com o aporte depois da contemplação muda tudo nessa conta, e é a página seguinte.`]);
  }
  if (r.tempo === 'ja' || r.tempo === '12m') {
    b.push(['Se o prazo não pode esperar', 'Existe um atalho: comprar uma carta já contemplada, com crédito liberado. Exige entrada, paga a quem vende a carta, e a transferência só acontece com a aprovação da HS. Para alguns perfis, é o caminho mais rápido até o bem.']);
  }
  return b;
}

// os dados do Raio-X viajam no link como base64 (sem e-mail nem telefone)
export const codifica = (o) => btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
export const decodifica = (s) => JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/')))));
