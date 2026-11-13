
# QA Automation Portfolio

Portfólio de automação de testes desenvolvido para demonstrar minhas habilidades práticas em Quality Assurance (QA).

## Sobre o projeto

Este projeto utiliza Playwright para automatizar testes funcionais de aplicações web.

O objetivo é validar funcionalidades, identificar possíveis falhas e contribuir para a qualidade do software.

## Tecnologias utilizadas

- Playwright
- TypeScript
- Node.js
- Visual Studio Code
- Git e GitHub
- GitHub Actions (configuração inicial)

## Testes implementados

### 1. Validação do título da página inicial
- Acessar https://playwright.dev/
- Verificar se o título contém "Playwright"
- Resultado: Aprovado no Firefox

### 2. Validação do link Get started
- Acessar a página inicial
- Localizar o link "Get started"
- Verificar se está visível
- Resultado: Aprovado no Firefox

## Execução dos testes

Instalar as dependências:

```bash
npm install
```

Instalar os navegadores:

```bash
npx playwright install
```

Executar todos os testes:

```bash
npx playwright test
```

Executar somente no Firefox:

```bash
npx playwright test --project=firefox
```

## Resultados

Os dois testes autorais foram executados e aprovados no Firefox durante o desenvolvimento.

O projeto também contém testes de exemplo do Playwright.

## Próximas melhorias

- Ampliar os cenários de testes funcionais
- Implementar testes de navegação
- Validar a execução automatizada no GitHub Actions
- Adicionar evidências dos testes

## Autora

Renata Meirelles

Profissional em transição de carreira para QA Engineering, com formação pela Mate Academy e conhecimentos em testes manuais, automatizados e APIs.
