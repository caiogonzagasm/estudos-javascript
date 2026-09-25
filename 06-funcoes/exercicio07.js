
function verificarIdade(idade) {

    if (idade >= 18) {
        return "Maior de idade";
    } 
    
    else {
        return "Menor de idade";
    }

}

const resultado = verificarIdade(19);
console.log(resultado);