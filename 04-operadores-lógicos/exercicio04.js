const idade = 20;
const temIngresso = true;
const bloqueado = false;

if (idade >=18 && temIngresso && !bloqueado) {
    console.log("Entrada permitida")
}

else {
    console.log("Entrada negada")
}

const temDinheiro = false;
const temCartao = true;

if (temDinheiro || temCartao) {
    console.log("Pode pagar")
}

else {
    console.log("Não pode pagar")
}