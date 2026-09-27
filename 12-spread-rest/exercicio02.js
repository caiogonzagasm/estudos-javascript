const produto = {
    nome: "VEJA",
    preco: 19
};

const produtoCompleto = {
    ...produto,
    estoque: "SIM"
};

console.log(produtoCompleto);