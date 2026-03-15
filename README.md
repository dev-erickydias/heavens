# Heavens Hair

Site institucional do salão **Heavens Hair**, especializado em cabelos afro, cacheados e ondulados, localizado em Lisboa, Portugal. Desenvolvido com Next.js 14 e App Router.

## Sobre o Projeto

O Heavens Hair é um salão liderado pelo hairstylist Wessel Santos, com mais de 14 anos de experiência em cabelos afros, colorimetria e tratamentos capilares. O site apresenta os serviços do salão, galeria de trabalhos, página de cursos e sistema de agendamento integrado com o Google Calendar.

## Tecnologias

- **Next.js 14** — App Router com Server e Client Components
- **React 18** — Hooks, componentes funcionais
- **CSS Modules/Custom Properties** — Sistema de design tokens
- **Google Fonts** — Allura, Inter, Josefin Sans, Playfair Display
- **Swiper** — Carrosséis e sliders
- **Google Calendar API** — Integração de agendamento via URL

## Como Rodar

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/heavens.git

# 2. Instale as dependências
cd heavens
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm start` | Servidor de produção |
| `npm run lint` | Verificação de código com ESLint |

## Estrutura do Projeto

```
src/
├── app/                          # Rotas (App Router)
│   ├── layout.js                 # Layout global (NavMenu, Footer, PopupMenu)
│   ├── page.jsx                  # Página inicial (Home)
│   ├── not-found.jsx             # Página 404
│   ├── agendar/page.jsx          # Página de agendamento
│   ├── cursos/page.jsx           # Página de cursos
│   └── terms-of-responsibility/  # Termos de responsabilidade
│
├── components/                   # Componentes React
│   ├── agendamento/              # Sistema de agendamento (3 etapas + Google Calendar)
│   ├── contatoForm/              # Seção de contato (WhatsApp, Instagram, Facebook, Email)
│   ├── cursos/                   # Cards de cursos disponíveis
│   ├── customButton/             # Botão reutilizável
│   ├── customImage/              # Componente de imagem com next/image
│   ├── footer/                   # Rodapé com marca, redes sociais e navegação
│   ├── gallery/                  # Galeria de trabalhos com hover overlay
│   ├── header/
│   │   ├── header/               # Wrapper do header (Hero)
│   │   ├── hero/                 # Seção hero com CTA e estatísticas
│   │   ├── navMenu/              # Navegação desktop e mobile
│   │   └── navMenuItem/          # Item individual do menu
│   ├── heroCursos/               # Hero da página de cursos
│   ├── loader/                   # Componente de loading
│   ├── popupMenu/                # Menu mobile fullscreen
│   ├── saibaMaisCursos/          # CTA para página de cursos
│   ├── servicos/                 # Cards de serviços com preços
│   └── termsOfResponsibility/    # Página de termos
│
├── constants/
│   └── gallery.js                # Dados das imagens da galeria
│
├── data/
│   └── servicos.js               # Dados dos serviços (nome, preço, duração)
│
├── hooks/
│   └── useScrollAnimation.js     # Hook de animação por scroll (IntersectionObserver)
│
├── styles/
│   ├── globals.css               # Design tokens, variáveis CSS, estilos globais
│   ├── configsScroll.css         # Configurações de scroll suave
│   └── 404.css                   # Estilos da página 404
│
├── utils/
│   └── Api.js                    # (Descontinuado) Antiga integração com API externa
│
└── vendor/
    └── normalize.css             # Reset CSS
```

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial — Hero, Serviços, CTA Cursos, Galeria, Contato |
| `/agendar` | Sistema de agendamento em 3 etapas com integração Google Calendar |
| `/cursos` | Página de cursos profissionais de cabelo afro |
| `/terms-of-responsibility` | Termos de responsabilidade e uso |

## Serviços

Todos os serviços são geridos localmente no arquivo `src/data/servicos.js`. Para adicionar, remover ou alterar serviços, basta editar este arquivo.

| Serviço | Preço | Duração |
|---------|-------|---------|
| Corte Afro Feminino | 40€ | 60 min |
| Corte Afro Masculino | 40€ | 45 min |
| Coloração Completa | 40€ | 90 min |
| Madeixas & Luzes | 40€ | 120 min |
| Hidratação Profunda | 40€ | 60 min |
| Tratamento Capilar | 40€ | 75 min |
| Reconstrução Capilar | 40€ | 90 min |
| Botox Capilar | 40€ | 60 min |

### Como editar serviços

Abra `src/data/servicos.js` e altere/adicione objetos no array:

```javascript
{
  id_servico: 9,        // ID único
  nome: "Novo Serviço", // Nome exibido no site
  preco: 50,            // Preço em euros
  a_partir_de: 45,      // Duração em minutos
}
```

## Sistema de Design

O projeto usa CSS Custom Properties (variáveis) definidas em `src/styles/globals.css` para manter consistência visual.

### Paleta de Cores

| Variável | Cor | Uso |
|----------|-----|-----|
| `--hh-brown` | #734814 | Cor principal, texto de destaque |
| `--hh-green` | #296d65 | Verde marca, botões, links |
| `--hh-green-dark` | #1e403c | Backgrounds escuros, footer |
| `--hh-gold` | #d6b666 | Acentos dourados, CTAs premium |
| `--hh-cream` | #fffcf5 | Background claro principal |

### Tipografia

| Variável | Fonte | Uso |
|----------|-------|-----|
| `--font-display` | Playfair Display | Títulos principais |
| `--font-heading` | Josefin Sans | Subtítulos e navegação |
| `--font-cursive` | Allura | Detalhes decorativos |
| `--font-body` | Inter | Texto corrido |

### Breakpoints Responsivos

| Breakpoint | Uso |
|------------|-----|
| 480px | Mobile pequeno |
| 768px | Tablet / Mobile landscape |
| 1024px | Desktop |

## Sistema de Agendamento

O agendamento funciona em 3 etapas:

1. **Seleção do serviço** — o cliente escolhe entre os serviços disponíveis
2. **Data e horário** — seleção de data (a partir de amanhã) e horário (09:00 às 19:00)
3. **Dados pessoais** — nome, telefone e email do cliente

Após confirmar, é gerado um link para o **Google Calendar** com todos os detalhes do agendamento preenchidos automaticamente.

## Hook useScrollAnimation

Hook customizado que usa `IntersectionObserver` para disparar animações CSS quando o elemento entra no viewport. Utilizado nos componentes: Hero, Serviços, Galeria, Contato e Cursos CTA.

```javascript
const [ref, isVisible] = useScrollAnimation(0.1); // threshold de 10%
```

Retorna uma ref para o elemento e um booleano `isVisible` que ativa classes CSS de animação.

## Autor

**Ericky Dias** — [erickyhenriquesd@gmail.com](mailto:erickyhenriquesd@gmail.com)
