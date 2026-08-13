/* Seção institucional — Quem Está Por Trás da G Hanks */

import Image from "next/image";

const FUNDADORES = [
  {
    nome: "Roger Funchal",
    cargo: "CEO e Founder",
    foto: "/roger-funchal.jpg",
    headline: "O cara que ajudou o Google a colocar o Brasil no mapa",
    bio: "Enquanto a maioria das agências de marketing ainda está aprendendo a usar IA, Roger Funchal já foi contratado pelo próprio Google para o lançamento do Street View no Brasil. Com mais de 25 anos de tecnologia e especialização em Inteligência Artificial, ele decidiu virar essa bagagem contra o próprio jogo: tirar empresas invisíveis do Google e colocá-las na frente de quem já está procurando por elas. Também é CEO da AgroBusca e carrega uma obsessão que vai além do resultado comercial — ensinar e transformar quem cruza o caminho dele.",
  },
  {
    nome: "Matheus Rangel",
    cargo: "Head de Desenvolvimento e Founder",
    foto: "/matheus-rangel.jpg",
    headline: "Quem transforma promessa em código que funciona",
    bio: "Matheus Rangel é quem faz com que cada resultado prometido pela G Hanks vire estrutura técnica sólida por trás da tela. Especialista em Inteligência Artificial e em liderança de times de desenvolvimento, ele já comandou squads inteiros antes de cofundar a G Hanks — hoje aplica IA não como modismo, mas como motor de posicionamento orgânico real para os clientes.",
  },
];

/* Endereços dos escritórios (NAP) */
const ESCRITORIOS = [
  {
    cidade: "São Paulo (Matriz)",
    endereco: "Av. Brig. Faria Lima, 1811 - Conj. 1120 - Jardins",
    cep: "São Paulo - SP, 01452-001",
  },
  {
    cidade: "Limeira",
    endereco: "R. Sen. Vergueiro, 995 - Sl 51|B - Centro",
    cep: "Limeira - SP, 13480-001",
  },
];

export default function QuemSomos() {
  return (
    <section className="py-16 md:py-24 bg-ghanks-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title text-ghanks-gray">
            Quem está por trás da{" "}
            <span className="text-ghanks-blue">G Hanks</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Conheça a equipe e os fundadores que trabalham para colocar sua
            empresa na primeira página do Google.
          </p>
        </div>

        {/* Foto do escritório / equipe */}
        <div className="relative w-full max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/equipe-ghanks.jpg"
            alt="Equipe G Hanks trabalhando no escritório com a identidade visual da marca na parede"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* Cards dos fundadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FUNDADORES.map((f) => (
            <div
              key={f.nome}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-5 mb-4">
                <Image
                  src={f.foto}
                  alt={`${f.nome}, ${f.cargo} da G Hanks`}
                  width={96}
                  height={96}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover shrink-0"
                />
                <div>
                  <h3 className="text-lg font-bold text-ghanks-gray">
                    {f.nome}
                  </h3>
                  <p className="text-sm text-ghanks-blue font-medium">
                    {f.cargo}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-600 italic">
                    &ldquo;{f.headline}&rdquo;
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {f.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Escritórios */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-ghanks-gray text-center mb-6">
            Nossos escritórios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ESCRITORIOS.map((esc) => (
              <div
                key={esc.cidade}
                className="bg-white rounded-xl p-5 border border-gray-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full mb-3">
                  <svg className="w-5 h-5 text-ghanks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-ghanks-gray">{esc.cidade}</p>
                <p className="text-sm text-gray-500 mt-1">{esc.endereco}</p>
                <p className="text-sm text-gray-400">{esc.cep}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
