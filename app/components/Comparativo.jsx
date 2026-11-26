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
    <section className="sec" aria-labelledby="comp-titulo">
      <div className="wrap">
        <div className="row" style={{ gap: 48, alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div className="col" style={{ flex: '1 1 560px' }}>
            <h2 id="comp-titulo" className="h2" style={{ margin: 0 }}>
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
                <th scope="col" style={{ textAlign: 'left', padding: '0 0 16px', width: '28%' }} />
                <th scope="col" style={{ textAlign: 'left', padding: '0 16px 16px', fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 20, color: 'var(--green)' }}>Consórcio estratégico HS</th>
                <th scope="col" style={{ textAlign: 'left', padding: '0 16px 16px', fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 20, color: 'var(--ink-soft)' }}>Financiamento bancário</th>
              </tr>
            </thead>
            <tbody>
              {LINHAS.map((l) => (
                <tr key={l.rotulo} style={{ borderTop: '1px solid var(--rule)', background: l.destaque ? 'var(--bg-alt)' : 'transparent' }}>
                  <th scope="row" className="label" style={{ textAlign: 'left', padding: '18px 0 18px 12px', fontWeight: 600 }}>{l.rotulo}</th>
                  <td style={{ padding: '18px 16px', fontWeight: l.destaque ? 600 : 400, color: 'var(--ink)', fontSize: l.destaque ? 20 : 15 }}>{l.a}</td>
                  <td style={{ padding: '18px 16px', fontWeight: l.destaque ? 600 : 400, color: 'var(--ink-soft)', fontSize: l.destaque ? 20 : 15 }}>{l.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="comp-cards" style={{ marginTop: 36 }}>
          {[
            { nome: 'Consórcio estratégico HS', cor: 'var(--green)', k: 'a' },
            { nome: 'Financiamento bancário', cor: 'var(--ink-soft)', k: 'b' },
          ].map((col) => (
            <div key={col.k} style={{ background: col.k === 'a' ? 'var(--bg-alt)' : 'transparent', border: '1px solid var(--rule)', padding: 22, marginBottom: 14 }}>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 20, color: col.cor, marginBottom: 10 }}>{col.nome}</div>
              <dl className="num" style={{ margin: 0 }}>
                {LINHAS.map((l) => (
                  <div key={l.rotulo} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '10px 0', borderTop: '1px solid var(--rule)' }}>
                    <dt className="label" style={{ paddingTop: 2 }}>{l.rotulo}</dt>
                    <dd style={{ margin: 0, textAlign: 'right', fontWeight: l.destaque ? 600 : 400, fontSize: l.destaque ? 18 : 14 }}>{l[col.k]}</dd>
                  </div>
                ))}
              </dl>
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
