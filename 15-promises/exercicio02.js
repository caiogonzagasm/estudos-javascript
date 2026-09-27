const promessa = new Promise((resolve, reject) => {

    const login = false;
 
    if (login) {
        resolve('O login foi feito com sucesso');
    } else {
        reject('O login falhou');
    }
});

    promessa
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.log(erro);
    });