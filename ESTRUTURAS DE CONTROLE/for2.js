const notas = [5.6, 7.1, 9.5, 8.3, 6.2]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 20,
    peso: 60
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]} `)
}