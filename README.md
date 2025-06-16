# TCC Fullstack - Plataforma de Gerenciamento Empresarial

Este é o repositório do projeto TCC Fullstack, uma plataforma abrangente de gerenciamento empresarial que oferece soluções como CMTool e PRB Management para organizações modernas.

### Visão Geral do Projeto

O objetivo principal deste projeto é fornecer uma ferramenta robusta e eficiente para otimizar as operações de negócios. A plataforma é construída com tecnologias modernas para garantir escalabilidade, desempenho e uma excelente experiência do usuário.

### Funcionalidades

* **CMTool (Content Management Tool):** Gerenciamento simplificado de conteúdo para diversas necessidades empresariais.
* **PRB Management (Problem Resolution Board Management):** Ferramenta para gerenciar e resolver problemas de forma eficaz.
* **Interface Intuitiva:** Design focado na usabilidade para uma navegação fácil e eficiente.
* **Tecnologias Modernas:** Construído com um stack tecnológico atualizado para performance e manutenibilidade.

### Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

* **React:** Biblioteca JavaScript para construção de interfaces de usuário interativas.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
* **Vite:** Ferramenta de build frontend que oferece uma experiência de desenvolvimento rápida.
* **Tailwind CSS:** Framework CSS utilitário para estilização rápida e responsiva.
* **PostCSS:** Ferramenta para transformar CSS com plugins JavaScript.
* **ESLint:** Ferramenta de linting para manter a qualidade do código.
* **React Router DOM:** Biblioteca para roteamento declarativo em aplicações React.
* **Lucide React:** Biblioteca de ícones.

### Configuração do Projeto

Este projeto utiliza `pnpm` como gerenciador de pacotes.

#### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/seu-usuario/tccfullstack.git](https://github.com/seu-usuario/tccfullstack.git)
    cd tccfullstack
    ```

2.  **Instale as dependências:**

    ```bash
    pnpm install
    ```

#### Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

* **`pnpm dev`**: Inicia o servidor de desenvolvimento.
* **`pnpm build`**: Compila o projeto para produção.
* **`pnpm lint`**: Executa o ESLint para verificar e relatar problemas no código.
* **`pnpm preview`**: Serve o build de produção localmente.

### Estrutura de Arquivos Relevantes

* `.gitignore`: Arquivos e diretórios ignorados pelo Git.
* `index.html`: O ponto de entrada principal da aplicação. Contém metadados da aplicação, como o título "Portal - Business Management Platform" e uma descrição para otimização de busca.
* `package.json`: Define as dependências do projeto e scripts.
* `package-lock.json`: Contém informações detalhadas sobre as dependências do projeto, incluindo suas versões exatas e as dependências aninhadas.
* `postcss.config.js`: Configuração do PostCSS, incluindo Tailwind CSS e Autoprefixer.
* `tailwind.config.js`: Configuração do Tailwind CSS, especificando os arquivos de conteúdo para detecção de classes.
* `tsconfig.app.json`: Configurações do TypeScript para a aplicação, incluindo a compilação para ES2020, uso de `DOM` e `DOM.Iterable` libs, e JSX com `react-jsx`.
* [cite_start]`tsconfig.node.json`: Configurações do TypeScript para ambientes Node.js, como o Vite. 

### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias, novas funcionalidades ou correção de bugs.

### Licença

Este projeto está licenciado sob a licença MIT.
