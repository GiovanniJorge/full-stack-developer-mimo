# Full-Stack Developer - Mimo
Projetos relacionados ao curso "Full-Stack Developer" da Mimo — coleção de aplicações práticas que exemplificam conceitos de desenvolvimento web moderno. Ideal para estudantes que querem aprender e consolidar conhecimentos em desenvolvimento front-end e back-end.

## Conteúdo principal
- Projetos focados em problemas práticos para aprendizagem de desenvolvimento web.
- Estrutura organizada por tópicos e projetos finais.
- Exemplos que integram React, HTML, CSS e JavaScript (ES6+).
- Implementações que seguem boas práticas de modularização e reutilização de componentes.

## Badges
- Licença: MIT (ver arquivo LICENSE)

## Sumário
- [Visão geral](#visão-geral)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Como instalar e executar](#como-instalar-e-executar)
- [Boas práticas / recomendações](#boas-práticas--recomendações)
- [Contribuindo](#contribuindo)
- [Autor / Contato](#autor--contato)

## Visão geral
Este repositório organiza projetos práticos de desenvolvimento full-stack que exemplificam conceitos modernos de web development. Cada projeto é independente e resolve um problema específico de interface ou funcionalidade, geralmente acompanhado de componentes React bem estruturados e estilização CSS responsiva.

## Estrutura do repositório
```
full-stack-developer-mimo/
├── README.md                          — documentação principal
├── projetos-finais/                   — projetos completos de aprendizado
│   ├── pixel-grid/                    — aplicação interativa de desenho em pixel grid (React)
│   │   ├── src/
│   │   │   ├── App.js                 — componente principal com state management
│   │   │   ├── App.css                — estilos do componente App
│   │   │   ├── PixelGrid.jsx          — componente de renderização da grade
│   │   │   ├── PixelGrid.css          — estilos da grade
│   │   │   ├── Toolbar.jsx            — componente de seletor de cores
│   │   │   ├── Toolbar.css            — estilos da toolbar
│   │   │   ├── index.js               — ponto de entrada React
│   │   │   └── index.css              — estilos globais
│   │   ├── public/                    — arquivos estáticos
│   │   ├── package.json               — dependências e scripts do projeto
│   │   ├── server.js                  — backend opcional (Express.js)
│   │   ├── preview.png                — imagem de preview do projeto
│   │   └── README.md                  — documentação específica do projeto
│   └── [outros projetos]/             — adicionar novos projetos seguindo a mesma estrutura
└── [outros diretórios]/               — organização de tópicos específicos conforme necessário
```

### Como se encaixa:
- Cada pasta dentro de `projetos-finais/` é um projeto independente com seu próprio ambiente Node.js e dependências.
- A forma usual de usar o repositório é navegar para a pasta do projeto desejado e instalar/executar localmente.
- Cada projeto contém um `README.md` específico com instruções detalhadas.

## Como instalar e executar

### Pré-requisitos globais
Certifique-se de ter instalado:
- **Node.js** (versão 14.0 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Git** (para clonar o repositório)

Verifique a instalação no terminal:
```bash
node --version
npm --version
git --version
```

### Executando um projeto específico

#### Exemplo: Pixel Grid
```bash
# Clone o repositório
git clone https://github.com/GiovanniJorge/full-stack-developer-mimo.git

# Navegue até o projeto
cd full-stack-developer-mimo/projetos-finais/pixel-grid

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start

# O navegador abrirá em http://localhost:3000
```

#### Parando o servidor
Para parar qualquer projeto, pressione `Ctrl + C` no terminal.

### Scripts disponíveis (em cada projeto)

#### `npm start`
Executa a aplicação em modo de desenvolvimento.
Abre a aplicação no navegador e recarrega automaticamente ao fazer alterações.

#### `npm test`
Inicia o test runner em modo interativo (se configurado no projeto).

#### `npm run build`
Compila a aplicação para produção na pasta `build`.
Otimiza e minifica o código para melhor desempenho.

#### `npm run eject`
**Nota: esta é uma operação irreversível.**
Copia todas as configurações de webpack e ferramentas para controle total (não recomendado para iniciantes).

## Boas práticas / recomendações

### Desenvolvimento
- **Componentes:** Mantenha componentes React pequenos, focados e reutilizáveis.
- **Props:** Use tipagem com PropTypes ou TypeScript para melhor documentação.
- **State:** Prefira React Hooks (`useState`, `useEffect`) em vez de class components.
- **CSS:** Use metodologia BEM ou CSS Modules para evitar conflitos de estilos.
- **Commits:** Faça commits atômicos com mensagens claras e descritivas.

### Performance
- Use `React.memo()` para componentes que recebem as mesmas props.
- Implemente lazy loading para componentes grandes.
- Minifique e otimize imagens antes de adicionar ao repositório.

### Acessibilidade
- Use tags HTML semânticas (`<header>`, `<nav>`, `<main>`, `<footer>`).
- Adicione `aria-labels` em elementos interativos.
- Teste com leitores de tela (NVDA, JAWS, VoiceOver).
- Mantenha contraste de cores acima de 4.5:1 (WCAG AA).

### Documentação
- Documente cada projeto no `README.md` específico.
- Adicione comentários explicativos no código complexo.
- Mantenha o README principal atualizado com novos projetos.

## Contribuindo
Contribuições são bem-vindas! Sugestões: correções, novos projetos, melhorias de documentação, testes, exemplos adicionais.

### Fluxo sugerido:
1. Fork do repositório.
2. Criar branch com nome descritivo: `feature/novo-projeto` ou `fix/bug-descricao`.
3. Fazer commits atômicos com mensagens claras.
4. Abrir Pull Request descrevendo as mudanças e o objetivo educacional.
5. Se aplicável, inclua exemplos de uso ou screenshots do projeto.

### Sugestões adicionais:
- Adicione um pequeno README em cada pasta de projeto explicando os objetivos.
- Considere adicionar um `package.json` compartilhado ou configuração ESLint global.
- Para novos projetos, inclua um arquivo `.env.example` documentando variáveis de ambiente necessárias.

## Testes e automação (opcional)
- Poderia ser adicionado um GitHub Actions workflow que valida a sintaxe e estrutura de cada projeto.
- Para cada projeto, considere adicionar testes unitários com Jest ou Vitest.
- Adicione pre-commit hooks (Husky) para garantir qualidade do código antes de commits.

## Licença
Este repositório utiliza a licença MIT — consulte o arquivo `LICENSE` na raiz.

## Autor / Contato
Autor: Giovanni Jorge  
Repositório: [GiovanniJorge/full-stack-developer-mimo](https://github.com/GiovanniJorge/full-stack-developer-mimo)  
