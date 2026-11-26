import { GAIA, WHATSAPP } from '../../content';

export const metadata = {
  title: 'Política de Privacidade | João Dias · Consórcio Inteligente',
  description: 'Como tratamos os dados pessoais enviados pelo site, conforme a Lei Geral de Proteção de Dados (LGPD).',
  alternates: { canonical: '/privacidade' },
};

// Rascunho: revisar com o jurídico da Gaia Group antes de publicar.
export default function Privacidade() {
  const whats = `+${WHATSAPP.slice(0, 2)} (${WHATSAPP.slice(2, 4)}) ${WHATSAPP.slice(4, 9)}-${WHATSAPP.slice(9)}`;
  const temDados = !GAIA.cnpj.startsWith('[');
  const temEmail = !GAIA.email.startsWith('[');
  return (
        <section className="sec">
          <div className="wrap texto">
            <p className="eyebrow">Transparência</p>
            <h1 className="h2">Política de Privacidade</h1>
            <p>
              Esta política explica como os dados pessoais enviados por este site são tratados, conforme a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais, LGPD).
            </p>

            <h2>Quem é o controlador</h2>
            <p>{temDados ? `${GAIA.razaoSocial}, CNPJ ${GAIA.cnpj}` : 'Gaia Group Investimentos & Consórcios'}, por meio do especialista João Dias. Contato: {temEmail ? `${GAIA.email} ou ` : ''}WhatsApp {whats}.</p>

            <h2>Quais dados coletamos</h2>
            <ul>
              <li>Os que você informa no formulário: nome, WhatsApp, cidade, objetivo e horário preferido para contato.</li>
              <li>Os valores que você escolhe no simulador, quando decide enviá-los pelo WhatsApp.</li>
              <li>Dados de navegação anônimos e agregados, para medir o uso do site (páginas vistas e cliques), sem cookies de publicidade.</li>
            </ul>

            <h2>Para que usamos</h2>
            <ul>
              <li>Entrar em contato para agendar e realizar o seu diagnóstico patrimonial.</li>
              <li>Apresentar propostas de consórcio administradas pela HS Consórcios, quando você pedir.</li>
              <li>Melhorar o site e o atendimento.</li>
            </ul>
            <p>A base legal é o seu consentimento e os procedimentos preliminares a um contrato solicitados por você (art. 7º, incisos I e V, da LGPD).</p>

            <h2>Com quem compartilhamos</h2>
            <p>
              Com a HS Consórcios, apenas quando você decide seguir com uma proposta, e com fornecedores que operam o site e o atendimento (hospedagem e mensagens), sempre limitados ao necessário. Não vendemos seus dados.
            </p>

            <h2>Por quanto tempo guardamos</h2>
            <p>Pelo tempo necessário ao atendimento ou ao cumprimento de obrigações legais. Depois disso, os dados são eliminados ou anonimizados.</p>

            <h2>Seus direitos</h2>
            <p>
              Você pode pedir, a qualquer momento, confirmação do tratamento, acesso, correção, eliminação dos dados, informação sobre compartilhamento e revogação do consentimento. Basta {temEmail ? `escrever para ${GAIA.email} ou ` : ''}chamar no WhatsApp {whats}.
            </p>

            <p style={{ marginTop: 40, fontSize: 13 }}>Última atualização: [data de publicação].</p>
          </div>
        </section>
  );
}
