import { COMPARATIVO as C } from '../content';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const brl2 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });

const LINHAS = [
  { rotulo: 'Crédito', a: brl.format(C.credito), b: brl.format(C.credito) },
  { rotulo: 'Entrada exigida', a: 'Não exige', b: `${brl.format(C.financiamento.entrada)} (20% do imóvel)` },
  { rotulo: 'Prazo', a: `${C.consorcio.prazo} meses`, b: `${C.financiamento.prazo} meses (35 anos)` },
  { rotulo: 'Primeiro mês', a: `${brl.format(C.consorcio.primeiroAporte)} (meio aporte)`, b: `${brl2.format(C.financiamento.primeiraPrestacao)} (SAC)` },
  { rotulo: 'Custo além do crédito', a: `${brl.format(C.consorcio.custoAlem)} (estrutura do grupo)`, b: `${brl.format(C.financiamento.custoAlem)} em juros` },
  { rotulo: 'Total no prazo', a: brl.format(C.consorcio.total), b: brl.format(C.financiamento.total), destaque: true },
  { rotulo: 'Acesso ao imóvel', a: 'Após a contemplação, com estratégia', b: 'Imediato, após aprovação do crédito' },
];

export default function Comparativo() {
  const diferenca = C.financiamento.total - C.consorcio.total;
  return (
    <section className="sec comp-sec" aria-labelledby="comp-titulo">
      <div className="wrap">
        <div className="row" style={{ gap: 48, alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div className="col" style={{ flex: '1 1 560px' }}>
            <h2 id="comp-titulo" className="cartas-h2 comp-h2" style={{ margin: 0 }}>
              O mesmo imóvel. <span className="num">{brl.format(diferenca)}</span> de diferença.
            </h2>
          </div>
          <p className="cp col" style={{ flex: '0 1 360px' }}>
            Os dois caminhos têm o seu lugar. A escolha certa vem com os números na mesa: quanto cada um custa e quando você acessa o imóvel.
          </p>
        </div>

        <div className="comp-table" style={{ overflowX: 'auto', marginTop: 48 }}>
          <table className="num" style={{ width: '100%', minWidth: 620, borderCollapse: 'collapse', fontSize: 15 }}>
            <caption className="sr-only">Comparativo para crédito de {brl.format(C.credito)}</caption>
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: 'left', padding: '22px 0 16px', width: '28%' }} />
                <th scope="col" className="comp-a comp-a-topo" style={{ textAlign: 'left', padding: '22px 20px 16px', fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 20, color: 'var(--green)' }}>Consórcio estratégico HS</th>
                <th scope="col" style={{ textAlign: 'left', padding: '22px 20px 16px', fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 20, color: 'var(--ink-soft)' }}>Financiamento bancário</th>
              </tr>
            </thead>
            <tbody>
              {LINHAS.map((l) => (
                <tr key={l.rotulo} className={l.destaque ? 'comp-destaque' : undefined}>
                  <th scope="row" className="label" style={{ textAlign: 'left', padding: '18px 0 18px 12px', fontWeight: 600 }}>{l.rotulo}</th>
                  <td className="comp-a" style={{ padding: '18px 20px', fontWeight: l.destaque ? 600 : 400, color: 'var(--ink)', fontSize: l.destaque ? 22 : 15 }}>{l.a}</td>
                  <td className="comp-b" style={{ padding: '18px 20px', fontWeight: l.destaque ? 600 : 400, color: 'var(--ink-soft)', fontSize: l.destaque ? 20 : 15 }}>{l.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="comp-cards" style={{ marginTop: 32 }}>
          <div className="comp-m-topo">
            <span className="comp-m-a">Consórcio estratégico HS</span>
            <span className="comp-m-b">Financiamento bancário</span>
          </div>
          {LINHAS.map((l) => (
            <div key={l.rotulo} className={`comp-m-linha${l.destaque ? ' comp-destaque' : ''}`}>
              <span className="comp-m-rot">{l.rotulo}</span>
              <span className="comp-m-a num">{l.a}</span>
              <span className="comp-m-b num">{l.b}</span>
            </div>
          ))}
        </div>

        <p className="cp" style={{ fontSize: 12, marginTop: 20, maxWidth: '62ch' }}>
          Financiamento: números do <a href={C.fonte.url} target="_blank" rel="noopener noreferrer">{C.fonte.texto}</a> para um imóvel de R$ 500 mil com R$ 400 mil financiados: taxa efetiva de {C.financiamento.taxa}, sistema SAC, {C.financiamento.prazo} meses e primeiro pagamento de {brl2.format(C.financiamento.primeiraPrestacao)}. O total soma apenas amortização e juros com essa taxa; seguros, TR e tarifas não entram, então o custo real é maior. Consórcio: tabela HS de referência (out/2026), estrutura operacional de 22% e fundo de reserva de 1%, sem o reajuste anual do grupo. Valores de referência, sujeitos a análise de crédito e às condições de cada contratação.
        </p>
      </div>
    </section>
  );
}
