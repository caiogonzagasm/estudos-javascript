function verificarNumero(numero) {
    if(numero > 0) {
        return "Positivo"
    }

    else if (numero >= 0) {
        return "Zero"
    }

    else {
        return "Negativo"
    }
}

console.log(verificarNumero(5));
console.log(verificarNumero(0));
console.log(verificarNumero(-3));

function maiorNumero(a, b) {
    
    if(a > b) {
        return a;
    }

    else {
        return b;
    }
}

console.log(maiorNumero(10, 7));
console.log(maiorNumero(4, 9));
  
 