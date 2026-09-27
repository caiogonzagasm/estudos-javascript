async function usuarios() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        const dados = await resposta.json();
        dados.forEach((usuario) => {
            console.log(usuario.name);
            
        });

        console.log("Nome:", dados[0].name, "Email:", dados[0].email);
    
    } catch (erro) {
        console.log(erro);
    }
}

usuarios();