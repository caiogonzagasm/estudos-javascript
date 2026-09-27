async function buscarDados() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1");

        const dados = await resposta.json();

        console.log(dados.name);
        console.log(dados.email);
        console.log(dados.address.city);

    } catch (erro) {
        console.log(erro);
    }
}

buscarDados();