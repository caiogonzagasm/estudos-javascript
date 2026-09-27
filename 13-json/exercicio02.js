const produto = {
  nome: "Notebook",
  preco: 2500,
  estoque: 10,
  
};

const json = JSON.stringify(produto);

const produtoConvertido =JSON.parse(json);

console.log(produtoConvertido.nome);
