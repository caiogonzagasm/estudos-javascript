const velocidade = 120;

if (velocidade > 100) {
    console.log("Muito acima do limite")
}

else if(velocidade > 80){
    console.log("Acima do limite")
}

else if (velocidade >= 60){
    console.log("Velocidade normal")
}

else{
    console.log("Velocidade baixa")
}