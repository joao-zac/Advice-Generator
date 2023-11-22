<h1 align="center">Advice Generator</h1>
<div align="center">

![Design-site](./design/desktop-design.jpg)

<p align="center"><strong>Status do Projeto:<br></strong> <i>Concluído</i> ✔️</p>

</div>
<p align="center">
<span><strong>Tecnologias e Ferramentas utilizadas:</strong></span>
<br>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,js,react,github,git" style="height: 25px;"/>
  </a>
</p>

## Índice

- [1. Resumo do Projeto](#1-resumo-do-projeto)
- [2. Definição de Produto](#2-definição-de-produto)
- [3. Design](#3-design)
- [4. Instalação](#4-instalação)
- [5. Inicialização](#5-inicialização)
- [6. Tecnologias e Ferramentas Utilizadas](#6-tecnologias-e-ferramentas-utilizadas)
- [7. Desafios do Projeto](#7-desafios-do-projeto)
- [8. Desenvolvedor](#8-desenvolvedor)

## 1. Resumo do Projeto

Este projeto é um desafio do [Front-End Mentor](https://www.frontendmentor.io) que consiste numa aplicação React que consome uma API que resgata um conselho aleatório.

## 2. Definição de Produto

O Projeto Advice Generator tem uma página com duas partes principais: **Card** e **Botão**.

### Card

O **Card** é o componente principal da aplicação, ela está centralizada na página e dentro possui no topo um id respectivo ao conselho resgatado, o respectivo texto ocupando maior tamanho, um ícone divisor e um **Botão** na parte inferior.

## Botão

O **Botão** é responsável por ativar a função que requisitará a API, ele está posicionado de forma que fique meio fora do **Card** meio dentro. Quando o usuário passar o mouse sobre, é preciso exibir um efeito neon que destaque o mesmo.

## 3. Design

O Design foi fornecido pela desafiador, foram dadas sontes, cores e imagens de refêrencia para o projeto, é possível vê-los no arquivo [style-guide.md](style-guide.md). Segue as imagens de referência:

### Desktop

![Desktop](./design/desktop-design.jpg)

### Estados ativados

![Estados ativados](./design/active-states.jpg)

### Mobile

![Mobile](./design/mobile-design.jpg)

## 4. Instalação

### Pré-requisitos:

- Node.js
- npm

Para instalar as dependências no diretório do seu projeto, execute o seguinte comando:

```
npm install
```

## 5. Inicialização

Para iniciar o aplicativo, execute o seguinte comando:

```
npm run dev
```

## 6. Tecnologias e Ferramentas Utilizadas

Este site foi construído com:

- JavaScript
- TypeScript
- React
- Axios
- API

## 7. Desafios do Projeto

- **Gerais:**

  - [✔️] O site deve seguir o [design](style-guide.md) proposto;

  - [✔️] A aplicação deve consumir a API [Advice Slip](https://api.adviceslip.com "Slip advide API").
  - [✔️] Criar um readme do projeto;

- **Botão:**

  - [✔️] Estar localizado exatamente como no design;

  - [✔️] Efeito neon quando o pointer estiver sobre;

  - [✔️] Disparar função que requisitará a API;

- **Responsividade**

  - [✔️] Mudar o tamanho do ícone quando dimensões mobile.

  - [✔️] Estar devidamente responsivo para outras dimensões de dispositivos.

## 8. Desenvolvedor

Este projeto foi Proposto por: [Front-End Mentor](https://www.frontendmentor.io)

Desenvolvido por:

**João Zacarias** : [LinkedIn](https://br.linkedin.com/in/joão-zacarias-neto-593441237) | [GitHub](https://github.com/joao-zac)
