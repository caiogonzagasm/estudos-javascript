async function buscarDados() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1");

        const dados = await resposta.json();

        console.log(dados);
    } catch (erro) {
        console.log(erro);
    }
}

buscarDados();