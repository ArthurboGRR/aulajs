// let tema = localStorage.getItem("tema");
// console.log(tema);

// localStorage.setItem("curso", "EngSoft");

// let produtos = []

// let notebook = {
//     id: 1,
//     nome: "Notebbook",
//     preco: 8000.00
// }

// let iphone = {
//     id: 2,
//     nome: "Iphone 18 ProMax",
//     preco: 12000
// }

// produtos.push(notebook)
// produtos.push(iphone)

// console.table(produtos)

// let produtosTexto = JSON.stringify(produtos);
// console.log(produtosTexto);
// localStorage.setItem("produtos", produtosTexto);

// let produtosObjeto = JSON.parse(localStorage.getItem("produtos"));

// console.table(produtosObjeto);

const incrementarBtn = document.querySelector("#incrementarBtn");
const totalRotulo = document.querySelector("#total");

let contador = 0;

function incrementar(){
    contador++;
    totalRotulo.textContent = contador;
    localStorage.setItem("contador", contador);
}

function carregardados(){
    contador = Number(localStorage.getItem("contador"))
    totalRotulo.textContent = contador;
}

window.addEventListener("load", carregardados)
incrementarBtn.addEventListener("click", incrementar)