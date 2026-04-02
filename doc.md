# 📄 Documentação Técnica — Heavens Hair

---

## 📌 Nome do Projeto

**Heavens Hair** — Site institucional do salão de beleza Heavens Hair.

---

## 📝 Descrição

O **Heavens Hair** é um site institucional desenvolvido para o salão de beleza homônimo, especializado em cabelos afro, cacheados e ondulados, localizado em Lisboa, Portugal. O salão é liderado pelo hairstylist **Wessel Santos**, com mais de 14 anos de experiência.

O site permite que os clientes:
- Conheçam os serviços oferecidos (cortes, coloração, tratamentos, etc.)
- Visualizem a galeria de trabalhos realizados
- Agendem horários com integração ao Google Calendar
- Explorem os cursos profissionais de formação capilar
- Entrem em contato via WhatsApp, Instagram, Facebook ou Email

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **Next.js** | 14.2.3 | Framework React com App Router, SSR e otimização |
| **React** | ^18 | Biblioteca de interfaces com componentes funcionais e hooks |
| **React DOM** | ^18 | Renderização no navegador |
| **Swiper** | ^11.1.3 | Biblioteca de carrosséis/sliders |
| **ESLint** | ^8 | Linting e qualidade de código |
| **eslint-config-next** | 14.2.3 | Configuração ESLint específica para Next.js |
| **CSS Custom Properties** | — | Sistema de design tokens e variáveis CSS |
| **Google Fonts** | — | Fontes: Allura, Inter, Josefin Sans, Playfair Display |
| **Google Calendar** | — | Integração de agendamento via URL |

---

## 📁 Estrutura do Projeto

```
heavens/
├── .eslintrc.json              # Configuração do ESLint (extends next/core-web-vitals)
├── .gitignore                  # Arquivos ignorados pelo Git
├── jsconfig.json               # Alias de caminhos (@/* → ./src/*)
├── next.config.mjs             # Configuração do Next.js
├── package.json                # Dependências e scripts do projeto
├── package-lock.json           # Lock das dependências
├── README.md                   # Documentação principal do projeto
├── doc.md                      # Esta documentação técnica detalhada
│
├── QA/
│   └── Squad_QA/
│       └── README.md           # Cenários de teste QA (Gherkin/BDD)
│
├── public/                     # Arquivos estáticos servidos diretamente
│   ├── logo.svg                # Logo do salão (SVG)
│   ├── menu.png                # Ícone de menu hamburger
│   ├── header__image.png       # Imagem do header
│   ├── Vector_full.png         # Ilustração principal (hero da home)
│   ├── Vector__cursos.png      # Ilustração da página de cursos
│   ├── cursos/                 # Imagens dos cursos
│   │   ├── colorimetria.png
│   │   └── iniciantes.png
│   ├── gallery/                # Imagens da galeria de trabalhos
│   │   ├── elementOne.png ... elementSix.png
│   │   └── logo.png
│   ├── icon/                   # Ícones de redes sociais
│   │   ├── email.png / emailBranco.png
│   │   ├── facebook.png / facebookBranco.png
│   │   └── instagram.png / instagramBranco.png
│   └── screensshots/           # Screenshots do site
│       ├── home.png
│       └── cursos.png
│
└── src/                        # Código-fonte da aplicação
    ├── app/                    # Rotas (Next.js App Router)
    │   ├── layout.js           # Layout raiz (NavMenu, Footer, PopupMenu)
    │   ├── page.jsx            # Página inicial (Home)
    │   ├── not-found.jsx       # Página 404
    │   ├── agendar/
    │   │   └── page.jsx        # Página de agendamento
    │   ├── cursos/
    │   │   └── page.jsx        # Página de cursos
    │   └── terms-of-responsibility/
    │       └── page.jsx        # Termos de responsabilidade
    │
    ├── components/             # Componentes React reutilizáveis
    │   ├── agendamento/        # Sistema de agendamento em 3 etapas
    │   ├── contatoForm/        # Seção de contato com links sociais
    │   ├── cursos/             # Cards dos cursos disponíveis
    │   ├── customButton/       # Botão genérico reutilizável
    │   ├── customImage/        # Componente de imagem customizado
    │   ├── footer/             # Rodapé com marca, social e navegação
    │   ├── gallery/            # Galeria de trabalhos com overlay
    │   ├── header/
    │   │   ├── header/         # Wrapper do Header (contém Hero)
    │   │   ├── hero/           # Seção hero com CTA e estatísticas
    │   │   ├── navMenu/        # Navegação principal (desktop + mobile)
    │   │   └── navMenuItem/    # Item individual do menu
    │   ├── heroCursos/         # Hero específico da página de cursos
    │   ├── loader/             # Componente spinner de carregamento
    │   ├── popupMenu/          # Menu mobile popup fullscreen
    │   ├── saibaMaisCursos/    # Seção CTA para cursos na home
    │   ├── servicos/           # Grid de cards dos serviços
    │   └── termsOfResponsibility/ # Termos de responsabilidade
    │
    ├── constants/
    │   └── gallery.js          # Array de dados da galeria (id, name, image)
    │
    ├── data/
    │   └── servicos.js         # Array de serviços (id, nome, preço, duração)
    │
    ├── hooks/
    │   └── useScrollAnimation.js # Hook customizado com IntersectionObserver
    │
    ├── styles/
    │   ├── globals.css         # Design tokens, variáveis, animações, estilos globais
    │   ├── configsScroll.css   # Personalização da scrollbar
    │   └── 404.css             # Estilos da página 404
    │
    └── vendor/
        └── normalize.css       # Reset CSS (normalize)
```

---

## 📖 Explicação Detalhada de Cada Arquivo/Componente

### 🗂️ Arquivos de Configuração

#### `package.json`
Define o projeto "heavens" v0.1.0. Scripts disponíveis: `dev`, `build`, `start`, `lint`. Dependências principais: Next.js 14.2.3, React 18 e Swiper 11.1.3.

#### `.eslintrc.json`
Configuração mínima do ESLint, estendendo `next/core-web-vitals` para regras de performance e acessibilidade do Next.js.

#### `jsconfig.json`
Define o alias `@/*` para `./src/*`, permitindo imports absolutos como `@/components/...`.

#### `next.config.mjs`
Configuração vazia do Next.js — usa os padrões do framework.

#### `.gitignore`
Ignora `node_modules`, `.next`, `build`, `.env*.local`, `.vercel`, `.DS_Store` e arquivos de debug.

---

### 🗺️ Rotas (App Router)

#### `src/app/layout.js` — Layout Raiz
- Configura o HTML com `lang="pt-br"` e metatags SEO (description, keywords, author)
- Importa os estilos globais (`globals.css`, `configsScroll.css`)
- Renderiza o `PopupMenu`, `NavMenu`, `{children}` (conteúdo da página) e `Footer`
- Metadados: título "Heavens Hair", descrição do salão

#### `src/app/page.jsx` — Página Inicial (Home)
- Compõe a página principal com os componentes: `Header` (Hero), `Servicos`, `SaibaMaisCursos`, `Gallery` e `ContactForm`
- É a landing page principal do salão

#### `src/app/cursos/page.jsx` — Página de Cursos
- Metadados específicos para SEO da página de cursos
- Renderiza: `HeroCursos`, `CustomImage` (logo decorativo) e `Cursos`

#### `src/app/agendar/page.jsx` — Página de Agendamento
- Metadados SEO para agendamento
- Renderiza apenas o componente `Agendamento`

#### `src/app/not-found.jsx` — Página 404
- Exibe mensagem "404 - Página não encontrada" com estilo decorativo (fonte Allura)
- Botão para voltar à página inicial

#### `src/app/terms-of-responsibility/page.jsx` — Termos de Responsabilidade
- Renderiza o componente `TermsOfResponsibility` com metadados SEO

---

### 🧩 Componentes

#### `components/header/header/Header.jsx`
Componente wrapper simples que envolve o `Hero` dentro de uma tag `<header>`.

#### `components/header/hero/Hero.jsx` + `hero.css`
- **Client Component** com seção hero principal da home
- Badge animado "Especialistas em Cabelos Afro"
- Título em duas linhas: "Desperte sua" (fonte cursiva Allura) + "Autenticidade" (Playfair Display bold)
- Subtítulo descritivo sobre o salão
- Dois CTAs: "Agende Aqui" (link para `/agendar`) e "Fale Conosco" (link para `#contact`)
- Estatísticas: "14+ Anos", "500+ Clientes", "Lisboa, Portugal"
- Imagem ilustrativa com efeito hover (scale + translateY)
- Animações CSS: fadeInUp, fadeInLeft, fadeInRight, slideInFromBottom
- Responsivo: mobile (coluna) → tablet/desktop (row com 50/50)

#### `components/header/navMenu/NavMenu.jsx` + `navMenu.css`
- **Client Component** com detecção de breakpoint (768px) e scroll
- Estado `isMobile`: renderiza `NavMenuMobile` ou menu desktop
- Estado `scrolled`: aplica classe `.nav--scrolled` com sombra e altura reduzida
- Menu desktop: logo SVG, 4 itens de navegação (Início, Serviços, Cursos, Contactos), botão CTA "Agende Aqui"
- Navbar sticky (`position: sticky; top: 0`) com backdrop-filter blur
- Responsivo: itens e CTA ocultos no mobile, visíveis a partir de 768px

#### `components/header/navMenu/navMenuMobile.jsx`
- **Client Component** com logo e botão hamburger (ícone SVG)
- Ao clicar, abre o popup menu via DOM (`classList.add("popup_opened")`)
- Recebe prop `scrolled` para estilização

#### `components/header/navMenuItem/NavMenuItem.jsx` + `navMenuItem.css`
- Componente reutilizável para item de menu: `<li>` com `<Link>` do Next.js
- Props: `href`, `children`, `className`, `onClick`
- CSS: underline animado dourado no hover com pseudo-elemento `::after`

#### `components/servicos/Servicos.jsx` + `servicos.css`
- **Client Component** com `useScrollAnimation` para animar ao entrar no viewport
- Importa dados de `src/data/servicos.js`
- Ícones SVG dinâmicos baseados no nome do serviço (corte → tesoura, cor → gota, tratamento → escudo)
- Grid responsivo: 1 coluna (mobile) → 2 colunas (480px) → 3 colunas (768px) → 4 colunas (1024px)
- Cards com: ícone, preço (badge dourado), nome, duração e botão "Agendar" (aparece no hover)
- Animações: barra de progresso colorida no topo do card no hover, ícone muda cor/fundo

#### `components/saibaMaisCursos/SaibaMaisCursos.jsx` + `saibaMaisCursos.css`
- **Client Component** com seção CTA para cursos
- Background gradiente verde escuro com elementos decorativos circulares
- Badge "Formação Profissional", título, descrição
- Lista de destaques: "Certificação reconhecida", "Turmas reduzidas", "Prática supervisionada"
- Botão CTA dourado "Explorar Cursos" com seta animada
- Responsivo: coluna no mobile, row no desktop

#### `components/gallery/Gallery.jsx` + `gallery.css`
- **Client Component** com `useScrollAnimation`
- Importa dados de `src/constants/gallery.js` (6 imagens)
- Grid responsivo: 1 col → 2 col (480px) → 3 col (768px)
- Primeiro item ocupa 2 colunas no desktop (`grid-column: span 2`)
- Overlay com nome da imagem no hover, efeito de zoom na imagem
- Animação scaleIn nos items ao entrar no viewport

#### `components/contatoForm/ContatoForm.jsx` + `contatoForm.css`
- **Client Component** com seção de contato dividida em duas áreas
- **Lado esquerdo**: informações de contato (localização, email, horário)
- **Lado direito**: cards clicáveis para WhatsApp, Instagram, Facebook e Email
- Cada card tem ícone colorido, título, descrição e seta animada no hover
- Background em creme com bordas arredondadas
- Responsivo: coluna → row a partir de 768px

#### `components/footer/Footer.jsx` + `footer.css`
- Footer com background verde escuro gradiente e cantos arredondados no topo
- **Marca**: logo, tagline, ícones sociais (Instagram, Facebook, WhatsApp, Email)
- **Navegação**: dois blocos — "Navegação" (links ativos) e "Serviços" (estáticos)
- **Rodapé inferior**: copyright dinâmico com ano atual + link para termos de privacidade
- Responsivo: coluna no mobile, row no desktop

#### `components/cursos/Cursos.jsx` + `cursos.css`
- Dois cards de cursos: "Formação de Colorimetria" e "Formação para Iniciantes"
- Cada card: imagem, título, descrição e botão "Entre em contato" (link para Instagram)
- Responsivo: coluna no mobile, row no desktop

#### `components/heroCursos/HeroCursos.jsx` + `heroCursos.css`
- Hero da página de cursos com título decorativo (fonte Allura) e subtítulo
- Botão CTA "Entre em contato"
- Imagem ilustrativa com texto sobreposto (biografia do Wessel Santos)
- Imagem oculta no mobile e tablet, visível apenas no desktop (1024px+)

#### `components/agendamento/Agendamento.jsx` + `agendamento.css`
- **Client Component** com sistema de agendamento em 3 etapas (wizard)
- **Etapa 1** — Seleção de serviço: lista todos os serviços com preço e duração
- **Etapa 2** — Data e horário: input de data (mínimo: amanhã) + grid de horários (09:00–19:00, intervalos de 30min)
- **Etapa 3** — Dados pessoais: nome (obrigatório), telefone e email + resumo do agendamento
- **Confirmação**: gera URL do Google Calendar com detalhes preenchidos (serviço, data, horário, dados do cliente)
- Barra de progresso visual com 3 passos
- Navegação: botões "Voltar" e "Próximo"/"Confirmar Agendamento"
- Responsivo com grid de horários adaptável (4 col → 5 col → 7 col)

#### `components/popupMenu/PopupMenu.jsx` + `popupMenu.css`
- **Client Component** — menu mobile fullscreen popup
- Overlay com blur, container centralizado com animação de escala
- Lista de links: Início, Serviços, Cursos, Contactos
- Botão CTA "Agende Aqui"
- Fecha ao clicar no overlay ou no botão X (rotação 90° no hover)
- Controle via classes CSS (`popup_opened`) manipuladas via DOM

#### `components/customButton/CustomButton.jsx`
- Componente genérico de botão: recebe `children`, `className` e spread de props adicionais

#### `components/customImage/CustomImage.jsx`
- Componente genérico de imagem: recebe `src`, `alt` e spread de props adicionais
- Usa tag `<img>` nativa (não usa `next/image`)

#### `components/loader/Loader.jsx` + `loader.css`
- Spinner de carregamento: círculo com borda animada (rotação infinita)
- Cores do tema verde Heavens

#### `components/termsOfResponsibility/TermsOfResponsibility.jsx` + `termsOfResponsibility.css`
- Página completa de termos de responsabilidade com 7 seções
- Informações do salão: endereço (Rua Francisco Tomás da Costa, Entre Campos, Portugal)
- Estilo: fundo creme, texto verde, bordas laterais douradas nos títulos de seção

---

### 📊 Dados e Constantes

#### `src/data/servicos.js`
Array de 8 serviços exportados como `SERVICOS`. Cada objeto contém: `id_servico`, `nome`, `preco` (em euros) e `a_partir_de` (duração em minutos). Todos com preço base de 40€.

#### `src/constants/gallery.js`
Array de 6 objetos exportados como `gallery`. Cada objeto contém: `id`, `name` e `image` (caminho para `/gallery/`).

---

### 🪝 Hooks Customizados

#### `src/hooks/useScrollAnimation.js`
- Hook que usa a API `IntersectionObserver` para detectar quando um elemento entra no viewport
- Parâmetro: `threshold` (padrão: 0.15 = 15% visível)
- Retorna: `[ref, isVisible]` — uma ref para o elemento e um booleano para controle de animação
- O observer é desconectado após a primeira interseção (animação dispara apenas uma vez)
- Usado nos componentes: Servicos, Gallery, ContatoForm, SaibaMaisCursos

---

### 🎨 Estilos Globais

#### `src/styles/globals.css`
- **Design Tokens**: variáveis CSS completas para cores, tipografia, sombras, raios e transições
- **Reset**: box-sizing border-box, margin/padding zero
- **Animações globais**: 10+ keyframes (fadeInUp, fadeInLeft, fadeInRight, scaleIn, float, shimmer, etc.)
- **Classes utilitárias**: `.animate-on-scroll`, `.stagger-1` a `.stagger-6`
- **Botões globais**: `.btn-primary` (gradiente verde) e `.btn-secondary` (outline verde)
- **Responsividade**: container `.page` com max-width 90% (mobile) → 80% (desktop)

#### `src/styles/configsScroll.css`
- Personalização da scrollbar do WebKit: thumb dourado (#D6B666), border-radius arredondado

#### `src/styles/404.css`
- Estilos da página 404: centralizado, título em fonte Allura 70px, botão verde para voltar

---

### 🧪 QA (Quality Assurance)

#### `QA/Squad_QA/README.md`
- Cenários de teste em formato Gherkin (BDD) escritos pelo QA Eduardo (13/08/2024)
- 8 cenários testados: navegação (Home, Cursos, Serviços, Contactos), redes sociais (Instagram, Facebook, Email) e agendamento
- Resultados: 6 passed, 2 failed (Serviços e Facebook)

---

## 📦 Como Instalar Dependências

### Pré-requisitos
- **Node.js** versão 18 ou superior
- **npm** (vem incluído com o Node.js) ou **yarn**

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/dev-erickydias/heavens.git

# 2. Acesse a pasta do projeto
cd heavens

# 3. Instale as dependências
npm install
```

---

## 🚀 Como Rodar o Projeto Localmente

### Servidor de Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em: **http://localhost:3000**

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Gera o build otimizado para produção |
| `npm start` | Inicia o servidor de produção (requer build prévio) |
| `npm run lint` | Executa o ESLint para verificação de código |

---

## 🔗 Como Clonar o Repositório

```bash
git clone https://github.com/dev-erickydias/heavens.git
```

---

## 🗺️ Rotas da Aplicação

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Hero, Serviços, CTA Cursos, Galeria, Contato |
| `/agendar` | Agendamento | Sistema de 3 etapas + Google Calendar |
| `/cursos` | Cursos | Cursos de formação profissional |
| `/terms-of-responsibility` | Termos | Termos de responsabilidade e uso |
| `404` | Não Encontrada | Página personalizada para rotas inexistentes |

---

## 🎨 Sistema de Design

### Paleta de Cores

| Variável | Hex | Uso |
|----------|-----|-----|
| `--hh-brown` | `#734814` | Texto de destaque, títulos decorativos |
| `--hh-green` | `#296d65` | Cor principal da marca, botões, links |
| `--hh-green-dark` | `#1e403c` | Backgrounds escuros, footer, navbar |
| `--hh-gold` | `#d6b666` | Acentos dourados, badges, CTAs premium |
| `--hh-cream` | `#fffcf5` | Background claro principal |
| `--hh-muted` | `#8a7a6a` | Textos secundários, labels |
| `--hh-border` | `#e8e0d4` | Bordas e divisores |

### Tipografia

| Variável | Fonte | Uso |
|----------|-------|-----|
| `--font-display` | Playfair Display | Títulos grandes e impactantes |
| `--font-heading` | Josefin Sans | Subtítulos, navegação, botões |
| `--font-cursive` | Allura | Detalhes decorativos, cursivo |
| `--font-body` | Inter | Texto corrido, parágrafos |

### Breakpoints

| Largura | Dispositivo |
|---------|-------------|
| < 480px | Mobile pequeno |
| 480px | Mobile |
| 768px | Tablet / Landscape |
| 1024px | Desktop |

---

## ✍️ Autor

**Ericky Dias**
- GitHub: [dev-erickydias](https://github.com/dev-erickydias)
