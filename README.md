# Desafio Minimalist Portfolio - Frontend-Mentor

Este é um desafio de um portfolio minimalista, proposto pelo site Frontend-Mentor.

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
    - [Imagens](#imagens)
    - [Link da página](#link)
- [Processo](#processo)
    - [Linguagens utilizadas](#linguagens-utilizadas)
    - [O que aprendi](#o-que-aprendi)
    - [Possíveis evoluções](#possíveis-evoluções)
- [Autor](#autor)

## Visão-geral

### Imagens

<br>

````
Versão de Desktop
````

   <img src="./src/design/desktop-design.gif" alt="desktop-design">

<br>

````
Versão Mobile

````

 <img src="./src/design/mobile-design.gif" alt="mobile-design">

<br>

````
Versão Tablet

````

 <img src="./src/design/tablet-design.gif" alt="mobile-design">

### Link

- Página no GitHub Pages: <a href="https://julio-mansan2.github.io/minimalist-portfolio/">Clique aqui!</a>

## Processo

### Linguagens utilizadas

<br>

- Marcações semânticas de HTML5
- Propriedades de customização do CSS3
- Estruturas de JavaScript

<br>

### O que aprendi

<br>

- Adicionar estilos a elementos com JavaScript:

````javascript

for (let i = 0; i < labelPortfolio.length; i ++) {
    labelHome[i].style.color = 'var(--grayishDarkBlue)'
    labelPortfolio[i].style.color = 'var(--grayishDarkBlue)'
    labelContact[i].style.color = 'var(--slightlyDesaturatedCyan)'
}

````

- Retirar ou adicionar classes utilizando JS:

````javascript

inputHome.addEventListener('click', function () {
    for (let i = 0; i < labelHome.length; i++) {
        if (inputHome.checked) {
            homePage.classList.add('selecionado')
            portfolioPage.classList.remove('selecionado')
            managePage.classList.remove('selecionado')
            bookmarkPage.classList.remove('selecionado')
            insurePage.classList.remove('selecionado')
            fyloPage.classList.remove('selecionado')
            contactPage.classList.remove('selecionado')
            labelHome[i].style.color = 'var(--slightlyDesaturatedCyan)'
            labelPortfolio[i].style.color = 'var(--grayishDarkBlue)'
            labelContact[i].style.color = 'var(--grayishDarkBlue)'
        } else if (inputHome.checked === false) {
            homePage.classList.remove('selecionado')
        }
    }
})

````
<br>

### Possíveis evoluções

<br>

- Códigos mais compactos;
- Otimizar o JS;

<br>

## Autor

GitHub - <a href="https://github.com/julio-mansan2">julio-mansan2</a> <br>
Front-end Mentor - <a href="https://www.frontendmentor.io/profile/julio-mansan2">julio-mansan2</a> <br>
LinkedIn - <a href="https://www.linkedin.com/in/j%C3%BAlio-a-mansan-3415a7249/">Júlio A.</a> <br>