const saldo = 200;
const valorCompra = 250;

if (saldo > valorCompra) {
    console.log("Compra aprovada e ainda sobra dinheiro");
}

else if(saldo === valorCompra) {
    console.log("Compra aprovada, saldo zerado");
}

else {
    console.log("Saldo insuficiente");
}