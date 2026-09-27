const promessa = new Promise((resolve, reject) => {
    const sucesso = false;

    if (sucesso) {
        resolve("Dados carregados");
    } else {
        reject("Erro ao carregar dados");
    }
});

async function executar() {
    try {
        const resultado = await promessa;
        console.log(resultado);
    } catch (erro) {
        console.log(erro);
    }
}

executar();