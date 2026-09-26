const nome = "Caio";
const idade = 19;
const cidade = "Salvador";
const estudante = true;

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Cidade: " + cidade);
console.log("Estudante: " + estudante);

function saudacao(nome) {
    return "Olá, " + nome + "!";
}

function somar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

function verificarNota(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

function podeComprar(saldo, preco) {
    if (saldo >= preco) {
        return "Compra aprovada";
    } else {
        return "Saldo insuficiente";
    }
}

console.log(saudacao(nome));
console.log("Soma: " + somar(10, 5));
console.log("Multiplicação: " + multiplicar(4, 5));
console.log("Idade: " + verificarIdade(idade));
console.log("Nota: " + verificarNota(8));
console.log("Compra: " + podeComprar(200, 150));

console.log("Números pares de 1 até 10:");

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Contagem regressiva:");

let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}