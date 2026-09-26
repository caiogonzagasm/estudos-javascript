const alunos = [
    { nome: "Caio", nota: 8 },
    { nome: "Ana", nota: 5 },
    { nome: "Pedro", nota: 7 }
];

for (let i = 0; i < alunos.length; i++) {

    if(alunos[i].nota >=7) {

        console.log(alunos[i].nome);
    }
}