const preco = 25;
const quantidade = 4;
let dinheiro = 120;
const total = preco * quantidade;
const dinheiroSuficiente = dinheiro >= total;

console.log("O preço é: " + preco);
console.log("A quantidade é: " + quantidade);
console.log("Total é: " + preco * quantidade);
console.log("Dinheiro suficiente: " + dinheiroSuficiente);