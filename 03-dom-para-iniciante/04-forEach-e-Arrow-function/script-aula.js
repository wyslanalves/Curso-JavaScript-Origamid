/*
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){
//console.log(item,index,array)
});
*/
//array-like
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item,index,array){
    console.log(item);
});

//arrow Function

const imgs = document.querySelectorAll('img');
//por padão vamos sempre utilizar ()
imgs.forEach((item) => {
console.log(item,index,array)
});
imgs.forEach(() => {//se não tiver nem um item tem que colocar os parentes vaziu
    console.log(item,index,array)
});
imgs.forEach(item => {//quando tiver só um item não precisa de parentes
    console.log(item,index,array)
});

imgs.forEach((item, index) => {//quando tiver parametro tem que ter parentes
    console.log(item,index,array)
});

//as duas versão
let i = 0;
imgs.forEach(function() {console.log(i++)})
imgs.forEach(() => console.log(i++));

