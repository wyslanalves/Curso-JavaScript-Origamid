const animais = document.getElementById('animais');
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

//=====mais utilizado====

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linksInterno = document.querySelector('[href^="#"]');
console.log(linksInterno);

//=======querySelectorAll============

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[1]);

//====diferença entre HTMLCollection vs NodeList

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);// esse atualiza 
console.log(gridSectionNode);// esse não atualiza static

gridSectionNode.forEach(function(item, index){
    console.log(item);
})

//tudo que HTMLCollection em array

const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.pop();
arrayGrid.forEach(function(item, index){
    console.log(item)
})



