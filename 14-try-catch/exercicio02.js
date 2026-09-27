const saldo = 150;

try {
    if (saldo < 100) {
        throw new Error("Saldo insuficiente");
    }

    console.log("Compra realizada com sucesso!");
} catch (erro) {
    console.log(erro.message);
}