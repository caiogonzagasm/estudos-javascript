const idade = 19;

if (idade >= 18) {
    console.log("Maior de idade")
}
else{
    console.log("Menor de idade")
}

const  nota = 6;

if (nota >= 7) {
    console.log("Aprovado")
}

else if(nota >=5 ){
    console.log("Recuperação")
}

else {
    console.log("Reprovado")
}

const saldo = 200;
const preco = 200;

if (saldo > preco){
    console.log("Compra aprovada e sobra dinheiro")
}

else if (saldo === preco) {
    console.log("Compra aprovada e saldo zerado")
}

else {
    console.log("Saldo insuficiente")
}

const temperatura = 25;

if (temperatura >=30) {
    console.log("Muito quente")
}

else if(temperatura >=20) {
    console.log("Clima agradável")
}

else{
    console.log("Frio")
}