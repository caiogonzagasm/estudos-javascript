async function usuarios() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users"); 

        const dados = await resposta.json();
        dados.forEach((usuario) => {
            console.log(`Nome: ${usuario.name} Email: ${usuario.email}`);
        });

    } catch (erro) {
        console.log(erro);
    }
}

usuarios();