# Full-Stack Developer - Mimo

Projetos relacionados ao curso "Full-Stack Developer" da Mimo — coleção de aplicações práticas que exemplificam conceitos de desenvolvimento web moderno. Ideal para estudantes que querem aprender e consolidar conhecimentos em desenvolvimento front-end e back-end.

## Conteúdo principal
- Projetos focados em problemas práticos para aprendizagem de desenvolvimento web.
- Estrutura organizada por tópicos e projetos finais.
- Exemplos que integram React, HTML, CSS e JavaScript (ES6+).
- Implementações que seguem boas práticas de modularização e reutilização de componentes.

## Badges
![Licença](https://img.shields.io/github/license/GiovanniJorge/full-stack-developer-mimo?style=flat-square)
![Projetos](https://img.shields.io/badge/quantidade-1%20projeto-blue?style=flat-square)

## Sumário
- [Visão geral](#visão-geral)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Destaques do repositório](#destaques-do-repositório)
- [Como instalar e executar](#como-instalar-e-executar)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor / Contato](#autor--contato)

## Visão geral
Este repositório organiza projetos práticos de desenvolvimento full-stack que exemplificam conceitos modernos de web development. Cada projeto é independente e resolve um problema específico de interface ou funcionalidade, geralmente acompanhado de componentes React bem estruturados e estilização CSS responsiva.

## Estrutura do repositório
Top-level:
```text
├── README.md                  # Documentação principal
├── LICENSE
├── .gitattributes
└── projetos-finais/           # Projetos completos de aprendizado
    └── pixel-grid/            # Aplicação interativa de desenho em pixel grid (React)
        ├── src/               # Componentes, gerenciamento de estado e estilos
        │   ├── App.js
        │   ├── App.css
        │   ├── PixelGrid.jsx
        │   ├── PixelGrid.css
        │   ├── Toolbar.jsx
        │   ├── Toolbar.css
        │   ├── index.js
        │   └── index.css
        ├── public/            # Arquivos estáticos
        ├── package.json       # Dependências e scripts do projeto
        ├── server.js          # Backend opcional (Express.js)
        ├── preview.png        # Imagem de preview do projeto
        └── README.md          # Documentação específica do projeto
```

### Como se encaixa:
- O repositório abriga uma variedade de projetos independentes criados ao longo do curso.
- Cada pasta dentro de `projetos-finais/` funciona como um ambiente independente com seu próprio ecossistema Node.js, dependências e documentação dedicada.

## Destaques do repositório

### Pixel Grid
* **Descrição:** Aplicação interativa de desenho em grade de pixels que utiliza gerenciamento de estado para controle dinâmico da paleta e renderização.
* **Tecnologias:** React, Express.js (backend opcional), CSS3.

## Como instalar e executar

### Pré-requisitos
- **Node.js** (v14.0 ou superior)
- **npm** como gerenciador de pacotes
- **Git** para clonar o repositório

### Passos para execução

1. **Clone o repositório:**
```bash
git clone [https://github.com/GiovanniJorge/full-stack-developer-mimo.git](https://github.com/GiovanniJorge/full-stack-developer-mimo.git)
cd full-stack-developer-mimo
```

2. **Navegue até a pasta do projeto e instale as dependências (Exemplo com Pixel Grid):**
```bash
cd projetos-finais/pixel-grid
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm start
```
A aplicação abrirá automaticamente em `http://localhost:3000`. Para encerrar o processo no terminal, use `Ctrl + C`.

## Contribuindo
Contribuições são bem-vistas! Se deseja adicionar um novo projeto ou sugerir melhorias na arquitetura existente, siga os passos abaixo:

1. Faça um **Fork** do repositório.
2. Crie uma branch com nome descritivo: `feature/novo-projeto` ou `fix/bug-descricao`.
3. Faça commits atômicos com mensagens claras e objetivas.
4. Abra um **Pull Request** detalhando as alterações implementadas.

## Licença
Este repositório utiliza a licença MIT — consulte o arquivo [LICENSE](LICENSE) na raiz.

## Autor / Contato
- **Autor:** Giovanni Jorge  
- **Repositório:** [https://github.com/GiovanniJorge/full-stack-developer-mimo](https://github.com/GiovanniJorge/full-stack-developer-mimo)
