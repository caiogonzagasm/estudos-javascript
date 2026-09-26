const idades = [15, 18, 21, 16, 30];

const maiores = idades.filter(function (idade) {
    return idade >= 18;
}); 

console.log(maiores);