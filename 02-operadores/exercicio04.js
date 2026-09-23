const precoProduto = 80;
const quantidade = 2;
const dinheiro = 200;
const totalCompra = precoProduto * quantidade;
const podeComprar = dinheiro >= totalCompra;
const dinheiroRestante = dinheiro - totalCompra;

console.log("Preço do produto: " + precoProduto);
console.log("Quantidade: " + quantidade);
console.log("Total da compra: " + totalCompra);
console.log("Dinheiro disponível: " + dinheiro);
console.log("Pode comprar: " + podeComprar);
console.log("Dinheiro restante: " + dinheiroRestante);