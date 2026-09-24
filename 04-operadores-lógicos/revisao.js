const idade = 19;
const temDocumento = true;

if (idade >=18 && temDocumento) {
    console.log("Entrada liberada")
}

else {
    console.log("Entrada negada")
}

const temPix = false;
const temCartao = true;

if (temPix || temCartao) {
    console.log("Pagamento disponível")
}

else {
    console.log("Sem forma de pagamento")
}

const bloqueado = false;

if (!bloqueado) {
    console.log("Usuário liberado")
}

else {
    console.log("Usuário bloqueado")
}

