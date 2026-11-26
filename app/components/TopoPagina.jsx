// Abertura das páginas internas: caminho de volta, título e uma linha de contexto.
export default function TopoPagina({ titulo, texto }) {
  return (
    <div className="topo-pagina">
      <div className="wrap">
        <nav aria-label="Você está em" className="trilha">
          <a href="/">Início</a> <span aria-hidden="true">/</span> <span aria-current="page">{titulo}</span>
        </nav>
        <h1 className="h1">{titulo}</h1>
        {texto && <p className="lead">{texto}</p>}
      </div>
    </div>
  );
}
