function podeComprar(saldo, preco) {

    if (saldo >= preco) { 
        return "Compra aprovada"
}
    else {
        return "Saldo insuficiente"
    }
}

console.log(podeComprar(200, 150));
console.log(podeComprar(100, 150));