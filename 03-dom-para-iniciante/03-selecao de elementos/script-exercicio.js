// retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

// retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// selecine todos os links internos (onde o href começa com #);
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

//selecione o primeiro h2 de .animais-descricâo
const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);

const animais = document.querySelector('.animais-descricao h2');
const h2Animais2 = animais.querySelector('h2')
console.log(h2Animais);
console.log(h2Animais2);

//selecione o ltimo p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);// vai sempre retorna o ultimo paragrafo 