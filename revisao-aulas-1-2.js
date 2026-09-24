const nome = "Caio";
const idade = 19;
const cidade = "Salvador";
const estudante = true;

console.log("Nome: " + nome)
console.log("Idade: " + idade)
console.log("Cidade: " + cidade)
console.log("Estudante: " + estudante)

let saldo = 300;
saldo += 200;
saldo -= 120;
saldo += 50;

console.log("Saldo final: " + saldo)

const preco = 80;
const quantidade = 3;
const dinheiro = 250;
const totalCompra = preco * quantidade;
const podeComprar = dinheiro >= totalCompra;
const dinheiroRestante = dinheiro - totalCompra;

console.log("Total compra: " + totalCompra)
console.log("Pode comprar: " + podeComprar)
console.log("Dinheiro restante: " + dinheiroRestante)

const numero = 17;
const resto = numero % 5;

console.log("Resto da divisão: " + resto)

let nivel = 4;
nivel ++;
nivel ++;
nivel --;

console.log("Nível final: " + nivel)