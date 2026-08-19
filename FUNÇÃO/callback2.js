const notas = [7.5, 8.9, 5.4, 2.6, 9.5, 6.4]

// Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(function (notas) {
    return notas < 7
})

console.log(notasBaixas2)

// Callback com Arrow Function
const notasBaixas3 = notas.filter(notas => notas < 7)

console.log(notasBaixas3)
