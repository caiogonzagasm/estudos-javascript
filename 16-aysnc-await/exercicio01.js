const promessa = new Promise((resolve, reject) => {
    resolve("Deu certo");
});

async function executar() {
    const resultado = await promessa;

    console.log(resultado);
}

executar();