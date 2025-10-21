# 💼 Portfólio - Murilo Oliveira

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> Portfólio pessoal moderno e interativo, desenvolvido para apresentar meus projetos, habilidades e trajetória como desenvolvedor full-stack.

[🔗 Ver Portfólio](https://seu-dominio.com) | [📧 Contato](mailto:murilo.rafael.de.oliveira@gmail.com)

---

## 🎯 Sobre o Projeto

Este portfólio foi criado com foco em **design moderno**, **performance** e **experiência do usuário**. Utilizando apenas tecnologias web fundamentais (HTML, CSS e JavaScript), o projeto demonstra habilidades em front-end através de animações suaves, efeitos visuais sofisticados e interatividade rica.

### ✨ Características Principais

- 🎨 **Design Moderno**: Interface com gradientes, glassmorphism e elementos animados
- 📱 **Totalmente Responsivo**: Adaptável a todos os dispositivos e tamanhos de tela
- ⚡ **Performance Otimizada**: Carregamento rápido e animações suaves
- 🎭 **Interatividade Rica**: Efeitos de hover, scroll e cliques em elementos
- 🎯 **Filtro de Projetos**: Sistema de filtragem por categoria (Front-end/Back-end)
- 📊 **Contador Animado**: Estatísticas que animam ao entrar em viewport
- 💧 **Efeitos Especiais**: Gotas d'água ao clicar nas habilidades
- 🔝 **Scroll to Top**: Botão flutuante para retorno rápido ao topo

---

## 🚀 Tecnologias Utilizadas

### Core
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com animações e keyframes
- **JavaScript (ES6+)** - Interatividade e manipulação do DOM

### Bibliotecas e Frameworks
- **Tailwind CSS** - Utility-first CSS framework
- **Intersection Observer API** - Detecção de elementos no viewport
- **RequestAnimationFrame** - Animações otimizadas

---

## 📂 Estrutura do Projeto
```
portfolio/
│
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos e animações
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação
```

---

## 🎨 Funcionalidades Detalhadas

### 🎯 Seções do Portfólio

#### 1. **Hero Section**
- Animação de entrada com fade-in
- Blobs animados em background
- Botões call-to-action com efeitos hover

#### 2. **Sobre Mim**
- Cards de estatísticas com contador animado
- Texto com animação slide-in
- Grid responsivo

#### 3. **Habilidades**
- Tags coloridas por tecnologia
- Efeito de gota ao clicar
- Animação de entrada escalonada
- Hover com rotação e escala

#### 4. **Projetos**
- Sistema de filtro por categoria
- Cards com efeito shimmer
- Hover com elevação 3D
- Links para GitHub

#### 5. **Contato**
- Cards interativos com ícones
- Animação de shake ao hover
- Links diretos para email, GitHub e LinkedIn

---

## 💻 Como Usar

### Instalação Local

1. **Clone o repositório**
```bash
git clone https://github.com/MuriloOz/portfolio.git
```

2. **Navegue até a pasta**
```bash
cd portfolio
```

3. **Abra o arquivo HTML**
```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

Ou simplesmente abra o arquivo `index.html` em seu navegador preferido.

### Hospedagem

Este portfólio pode ser hospedado gratuitamente em:
- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Render](https://render.com/)

---

## 🎨 Paleta de Cores
```css
Primary Purple: #8b5cf6
Secondary Blue: #3b82f6
Accent Pink: #ec4899
Background Dark: #1a1a2e
Text Light: #ffffff
```

---

## 📊 Funcionalidades JavaScript

### 1. **Intersection Observer**
- Animação de seções ao scroll
- Contador animado nas estatísticas
- Lazy loading de elementos

### 2. **Filtro de Projetos**
- Filtragem dinâmica por categoria
- Transições suaves entre filtros

### 3. **Scroll Progress Bar**
- Barra de progresso no topo da página
- Atualização em tempo real

### 4. **Efeito de Gotas**
- Animação ao clicar nas habilidades
- Criação dinâmica de elementos

### 5. **Parallax nos Blobs**
- Movimento suave baseado no scroll

### 6. **Menu Mobile**
- Toggle responsivo
- Animação de abertura/fechamento

### 7. **Scroll to Top**
- Botão que aparece após scroll
- Animação suave de retorno

---

## 🛠️ Personalização

### Alterar Informações Pessoais

Edite o arquivo `index.html` nas seguintes seções:
- Nome e título no header
- Descrição na seção "Sobre"
- Links de contato no footer

### Adicionar Novos Projetos

No `index.html`, adicione um novo card dentro da seção de projetos:
```html
<div class="project-card" data-category="frontend">
  <div class="flex items-center mb-4">
    <div class="text-4xl mr-4">🚀</div>
    <h4 class="text-2xl font-bold">Nome do Projeto</h4>
  </div>
  <p class="text-gray-300 mb-4 leading-relaxed">
    Descrição do projeto...
  </p>
  <div class="flex flex-wrap gap-2 mb-4">
    <span class="tech-tag">Tecnologia</span>
  </div>
  <a href="#" target="_blank" class="project-link">
    Ver Projeto →
  </a>
</div>
```

### Modificar Cores

No `styles.css`, altere as variáveis de cor nos gradientes:
```css
background: linear-gradient(135deg, #SUA_COR_1, #SUA_COR_2);
```

---

## 📈 Projetos em Destaque

- **Flappy Bird** - Jogo desenvolvido com JavaScript puro
- **Projeto Login** - Interface de login responsiva
- **To-Do List** - Aplicação React com Vite
- **Pedra, Papel e Tesoura** - Full-stack com Python/Flask
- **Unit Converter** - Conversor de unidades
- **CalculadoraJS** - Calculadora web interativa
- **Projeto Cordel** - Página poética com HTML/CSS

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Murilo Oliveira**

- GitHub: [@MuriloOz](https://github.com/MuriloOz)
- LinkedIn: [Murilo Rafael](https://www.linkedin.com/in/murilo-oliveira-668b36a9/)
- Email: murilo.rafael.de.oliveira@gmail.com

---

## 🙏 Agradecimentos

- Design inspirado nas tendências modernas de UI/UX
- Ícones de emojis nativos do sistema
- Comunidade de desenvolvedores por feedback e sugestões

---

<div align="center">

Feito por [Murilo Oliveira](https://github.com/MuriloOz)

</div>