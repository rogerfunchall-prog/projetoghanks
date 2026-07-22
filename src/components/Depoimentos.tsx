/* Seção Depoimentos — prova social com 3 clientes fictícios */

const DEPOIMENTOS = [
  {
    nome: "Camila Rodrigues",
    cargo: "Proprietária",
    negocio: "Boutique Elegance",
    cidade: "Ribeirão Preto, SP",
    texto:
      "Em menos de 3 meses, minha loja de roupas apareceu na primeira página do Google para 'loja de roupas femininas Ribeirão Preto'. As vendas orgânicas cresceram mais de 40%. Sem gastar nada com Ads.",
    iniciais: "CR",
    cor: "bg-ghanks-blue",
  },
  {
    nome: "Dr. Fernando Lima",
    cargo: "Diretor Clínico",
    negocio: "Clínica Odonto Vida",
    cidade: "Joinville, SC",
    texto:
      "A G Hanks transformou a presença digital da nossa clínica. Hoje recebemos pacientes que nos encontram diretamente no Google, sem depender de anúncios pagos. O retorno sobre o investimento é incomparável.",
    iniciais: "FL",
    cor: "bg-ghanks-green",
  },
  {
    nome: "Ricardo Souza",
    cargo: "Fundador",
    negocio: "RS Reformas e Construções",
    cidade: "Uberlândia, MG",
    texto:
      "Eu não entendia nada de marketing digital. A equipe da G Hanks cuidou de tudo e hoje minha empresa aparece no topo do Google na minha cidade. O melhor é a exclusividade — meu concorrente não consegue o mesmo.",
    iniciais: "RS",
    cor: "bg-ghanks-red",
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ghanks-gray">
            Quem já está na{" "}
            <span className="text-ghanks-green">primeira página</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Veja o que nossos clientes dizem sobre o resultado orgânico no Google.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEPOIMENTOS.map((dep) => (
            <div
              key={dep.nome}
              className="bg-ghanks-light rounded-2xl p-6 border border-gray-100"
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-4" aria-label="5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-ghanks-yellow" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                &ldquo;{dep.texto}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${dep.cor} text-white flex items-center justify-center text-sm font-bold`}
                >
                  {dep.iniciais}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ghanks-gray">
                    {dep.nome}
                  </p>
                  <p className="text-xs text-gray-400">
                    {dep.cargo}, {dep.negocio} — {dep.cidade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
