const nomes = ["Ana", "Caio", "Pedro", "Samara"];

const encontrado = nomes.find(function (nome) {
    return nome === "Pedro";
});

console.log(encontrado);