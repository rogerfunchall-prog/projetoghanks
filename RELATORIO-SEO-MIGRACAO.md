# Relatório de Migração SEO — G Hanks

**Data:** 21 de agosto de 2026  
**Domínio oficial:** https://www.ghanks.com.br/  
**Status:** Implementação concluída, build validado

---

## 1. Resumo Executivo

Migração completa de SEO realizada para consolidar o domínio oficial `https://www.ghanks.com.br/` como única versão canônica do site. Todas as referências ao domínio de preview `projetoghanks.vercel.app` foram removidas e substituídas pelo domínio oficial.

### Principais alterações:
- Configuração central `siteConfig` criada em `src/lib/config.ts`
- Todas as URLs canônicas, metadata, sitemap, robots e JSON-LD apontam para `https://www.ghanks.com.br`
- Metadata única e otimizada por rota (title, description, OG, Twitter)
- JSON-LD revisado: Organization, ProfessionalService, BreadcrumbList, FAQPage, Article, OfferCatalog
- Claims comerciais ajustados para usar linguagem de "estratégia" e "objetivo" ao invés de promessas diretas
- Contadores numéricos substituídos por textos qualitativos (StatsCounter)
- Build validado sem erros

---

## 2. Arquivos Alterados

### Novos arquivos criados:
- `src/lib/config.ts` — Configuração central do site (URL, contatos, endereços, fundador)
- `src/app/contato/layout.tsx` — Metadata para página de contato (client component)
- `src/app/treinamentos-presenciais/layout.tsx` — Metadata para página de treinamentos (client component)

### Arquivos modificados:
- `src/app/layout.tsx` — Metadata global, JSON-LD Organization/ProfessionalService
- `src/app/page.tsx` — Metadata da home
- `src/app/sitemap.ts` — Sitemap XML com 14 URLs canônicas
- `src/app/robots.ts` — Robots.txt apontando para sitemap oficial
- `src/app/seo-organico/page.tsx` — Metadata + JSON-LD Article
- `src/app/metodo/page.tsx` — Metadata + JSON-LD
- `src/app/planos/page.tsx` — Metadata + JSON-LD OfferCatalog
- `src/app/portfolio/page.tsx` — Metadata + JSON-LD ItemList
- `src/app/empresa/page.tsx` — Metadata + JSON-LD AboutPage
- `src/app/faq/page.tsx` — Metadata + JSON-LD FAQPage
- `src/app/diagnostico-gratuito/page.tsx` — Metadata
- `src/app/franquias/page.tsx` — Metadata
- `src/app/servicos/page.tsx` — Metadata
- `src/app/trafego-pago/page.tsx` — Metadata
- `src/app/gestao-redes-sociais/page.tsx` — Metadata
- `src/components/Breadcrumb.tsx` — JSON-LD BreadcrumbList com siteConfig
- `src/components/Hero.tsx` — Headline ajustada para linguagem de estratégia
- `src/components/StatsCounter.tsx` — Contadores substituídos por textos qualitativos

---

## 3. URLs Incluídas no Sitemap

Todas as URLs abaixo estão no `sitemap.xml` e apontam para `https://www.ghanks.com.br`:

| URL | Prioridade | Change Frequency |
|-----|-----------|------------------|
| `/` | 1.0 | weekly |
| `/servicos` | 0.9 | monthly |
| `/seo-organico` | 0.9 | monthly |
| `/metodo` | 0.8 | monthly |
| `/planos` | 0.8 | monthly |
| `/portfolio` | 0.8 | monthly |
| `/empresa` | 0.7 | monthly |
| `/faq` | 0.7 | monthly |
| `/diagnostico-gratuito` | 0.8 | monthly |
| `/contato` | 0.6 | monthly |
| `/treinamentos-presenciais` | 0.7 | monthly |
| `/franquias` | 0.7 | monthly |
| `/trafego-pago` | 0.7 | monthly |
| `/gestao-redes-sociais` | 0.7 | monthly |

**Total:** 14 URLs canônicas, públicas e indexáveis.

---

## 4. Metadata por Rota

### Home (`/`)
- **Title:** G Hanks | SEO Orgânico e Growth Hacking no Google
- **Description:** Estratégias de SEO orgânico, growth hacking e SEO local para aumentar a presença da sua empresa no Google. Solicite um diagnóstico gratuito.

### SEO Orgânico (`/seo-organico`)
- **Title:** SEO Orgânico | Posicionamento Sustentável no Google
- **Description:** Entenda como o SEO orgânico transforma buscas em demanda com estratégia, conteúdo, autoridade e otimização técnica.

### Método (`/metodo`)
- **Title:** Método H.A.N.K.S. | Estratégia de SEO da G Hanks
- **Description:** Conheça os cinco pilares do Método H.A.N.K.S. para unir growth hacking, autoridade, keywords e sustentabilidade no SEO.

### Planos (`/planos`)
- **Title:** Planos de SEO Orgânico | G Hanks
- **Description:** Conheça os planos de SEO orgânico, setup, manutenção, exclusividade por cidade e diferenças entre SEO e Google Ads.

### Portfólio (`/portfolio`)
- **Title:** Cases de SEO Orgânico | Resultados da G Hanks
- **Description:** Conheça cases de posicionamento orgânico em diferentes nichos, cidades e objetivos de negócio.

### Empresa (`/empresa`)
- **Title:** Sobre a G Hanks | Agência de SEO Orgânico em São Paulo e Limeira
- **Description:** Conheça a G Hanks, agência de SEO orgânico e growth hacking com escritórios em São Paulo e Limeira.

### FAQ (`/faq`)
- **Title:** FAQ de SEO Orgânico | Dúvidas sobre Posicionamento
- **Description:** Tire dúvidas sobre SEO orgânico, Google Ads, prazo, investimento, exclusividade, manutenção e acompanhamento de resultados.

### Diagnóstico (`/diagnostico-gratuito`)
- **Title:** Diagnóstico Gratuito de SEO | G Hanks
- **Description:** Descubra oportunidades de crescimento orgânico para sua empresa, nicho e cidade com uma análise estratégica inicial.

### Contato (`/contato`)
- **Title:** Contato | Fale com a G Hanks
- **Description:** Entre em contato com a G Hanks para conversar sobre SEO orgânico, posicionamento no Google e oportunidades de crescimento.

### Treinamentos (`/treinamentos-presenciais`)
- **Title:** Treinamentos Presenciais | Capacitação Sob Demanda — G Hanks
- **Description:** Treinamentos presenciais sob demanda para empresas: SEO, marketing digital, IA e gestão.

### Franquias (`/franquias`)
- **Title:** Franquias G Hanks | Expansão em SEO e Marketing Digital
- **Description:** Conheça a oportunidade de expansão G Hanks e manifeste seu interesse em operar uma unidade na sua região.

### Serviços (`/servicos`)
- **Title:** Soluções de Crescimento Digital | SEO, Tráfego e Redes Sociais — G Hanks
- **Description:** Conheça as soluções da G Hanks: SEO orgânico, tráfego pago orientado a dados, gestão de redes sociais e treinamentos.

### Tráfego Pago (`/trafego-pago`)
- **Title:** Tráfego Pago | Gestão de Google Ads e Meta Ads — G Hanks
- **Description:** Gestão profissional de campanhas em Google Ads e Meta Ads com foco em dados, CPL e geração de demanda.

### Gestão de Redes Sociais (`/gestao-redes-sociais`)
- **Title:** Gestão de Redes Sociais para Empresas | Estratégia e Conteúdo — G Hanks
- **Description:** Estratégia, conteúdo e gestão de redes sociais para empresas que querem deixar de postar sem direção.

---

## 5. JSON-LD Implementado

### Global (layout.tsx)
- **Tipo:** ProfessionalService
- **Campos:** name, alternateName, url, logo, image, description, telephone, email, priceRange, areaServed, serviceType, sameAs, parentOrganization, founder, address (2 unidades)

### Por rota:
- **SEO Orgânico:** Article (autor, data, imagem)
- **Método:** BreadcrumbList
- **Planos:** OfferCatalog (3 planos com preços)
- **Portfólio:** ItemList (cases)
- **Empresa:** AboutPage (ProfessionalService com founder)
- **FAQ:** FAQPage (perguntas visíveis)
- **Diagnóstico:** BreadcrumbList
- **Franquias:** BreadcrumbList
- **Serviços:** BreadcrumbList
- **Tráfego Pago:** Service + BreadcrumbList
- **Gestão de Redes Sociais:** Service + BreadcrumbList
- **Treinamentos:** BreadcrumbList
- **Contato:** BreadcrumbList

---

## 6. Validações Executadas

### ✅ Build
```bash
npm run build
```
**Resultado:** Compilado com sucesso, TypeScript validado, 24 páginas estáticas geradas.

### ✅ Referências ao domínio de preview
```bash
rg "projetoghanks" src/
```
**Resultado:** Nenhuma ocorrência encontrada.

### ✅ Canonical autorreferente
Todas as páginas têm `alternates.canonical` apontando para `https://www.ghanks.com.br/[rota]`.

### ✅ Metadata única por rota
Cada rota tem title e description únicos, otimizados para SEO.

### ✅ JSON-LD coerente
Todos os JSON-LD usam `siteConfig.url` para URLs e imagens.

---

## 7. Itens que Dependem de Decisão Humana

### 7.1. Configuração de DNS e Redirects
Para completar a migração, é necessário configurar no provedor de DNS:

1. **Redirects permanentes (301):**
   - `http://ghanks.com.br` → `https://www.ghanks.com.br`
   - `http://www.ghanks.com.br` → `https://www.ghanks.com.br`
   - `https://ghanks.com.br` → `https://www.ghanks.com.br`
   - `https://projetoghanks.vercel.app/*` → `https://www.ghanks.com.br/*` (se possível)

2. **Arquivo `_redirects` ou `vercel.json`:**
   Se o site estiver na Vercel, criar `vercel.json` com:
   ```json
   {
     "redirects": [
       { "source": "/(.*)", "has": [{ "type": "host", "value": "projetoghanks.vercel.app" }], "destination": "https://www.ghanks.com.br/$1", "permanent": true }
     ]
   }
   ```

### 7.2. Google Search Console
- Adicionar propriedade `https://www.ghanks.com.br` no Search Console
- Enviar sitemap: `https://www.ghanks.com.br/sitemap.xml`
- Monitorar indexação e erros

### 7.3. Google Analytics / Tag Manager
- Configurar eventos de conversão para:
  - Clique no WhatsApp
  - Envio do formulário de diagnóstico
  - Envio do formulário de contato
  - Envio do formulário de franquias

### 7.4. Imagens Sociais
- Verificar se `/opengraph-image.png` e `/twitter-image.png` existem e têm 1200x630px
- Se não existirem, criar imagens com a identidade visual da G Hanks

### 7.5. Blog (Estrutura Preparada)
A estrutura de blog não foi implementada nesta migração. Quando criar artigos:
- Usar `src/app/blog/[slug]/page.tsx`
- Incluir metadata única, canonical, Article JSON-LD, autor, data, imagem social
- Adicionar breadcrumbs e links para diagnóstico

### 7.6. Páginas de Nicho/Cidade
Não foram criadas páginas em massa de nicho/cidade. Quando criar:
- Garantir conteúdo original e relevante
- Incluir dados reais, área atendida, valor para o usuário
- Não gerar páginas duplicadas ou conteúdo raso

---

## 8. Critérios de Aceite

| # | Critério | Status |
|---|----------|--------|
| 1 | `curl -I https://www.ghanks.com.br/` retorna HTTPS e status válido | ⏳ Depende de deploy |
| 2 | `robots.txt` existe e aponta para sitemap oficial | ✅ Implementado |
| 3 | `sitemap.xml` retorna XML válido com URLs oficiais | ✅ Implementado |
| 4 | Nenhuma ocorrência de `projetoghanks.vercel.app` no código | ✅ Validado |
| 5 | Cada rota tem title, description, canonical e H1 adequados | ✅ Implementado |
| 6 | JSON-LD válido e coerente | ✅ Implementado |
| 7 | Sem links quebrados ou canonical apontando para outro host | ✅ Validado |
| 8 | Build passa sem erro | ✅ Validado |
| 9 | Relatório final gerado | ✅ Este documento |
| 10 | Commit com mensagem clara | ⏳ Pendente |

---

## 9. Próximos Passos para Publicação

### 9.1. Commit e Push
```bash
cd C:\Users\Mathew\.verdent\verdent-projects\httpsgithubcomrogerfunchallpro\projetoghanks
git add .
git commit -m "feat: implement canonical SEO metadata sitemap and robots for official domain"
git push origin main
```

### 9.2. Deploy na Vercel
Se o projeto está conectado à Vercel:
1. Fazer push para o repositório GitHub
2. A Vercel detectará automaticamente e fará deploy
3. Configurar domínio personalizado `www.ghanks.com.br` nas configurações da Vercel
4. Aguardar propagação DNS

### 9.3. Validação Pós-Deploy
Após o deploy, validar:
```bash
# Verificar robots.txt
curl https://www.ghanks.com.br/robots.txt

# Verificar sitemap
curl https://www.ghanks.com.br/sitemap.xml

# Verificar canonical da home
curl -I https://www.ghanks.com.br/

# Testar no Rich Results Test
# https://search.google.com/test/rich-results?url=https://www.ghanks.com.br/
```

---

## 10. Notas Técnicas

### Framework
- Next.js 16.2.11 com Turbopack
- React 19
- TypeScript
- Tailwind CSS 4

### Geração
- Páginas estáticas (SSG) para melhor performance
- API route dinâmica apenas para `/api/diagnostico`

### Performance
- Imagens otimizadas com Next.js Image
- Fontes com `display: swap`
- CSS e JS minificados automaticamente pelo Next.js

### Acessibilidade
- Alt text em todas as imagens
- Hierarquia de headings correta (H1 único por página)
- Breadcrumbs visuais e estruturados
- Contraste WCAG AA

---

## 11. Contato

Para dúvidas sobre esta implementação:
- **Arquivo de configuração:** `src/lib/config.ts`
- **Sitemap:** `src/app/sitemap.ts`
- **Robots:** `src/app/robots.ts`
- **Layout global:** `src/app/layout.tsx`

---

**Fim do relatório**
