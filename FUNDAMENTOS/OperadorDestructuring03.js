function rand({ min = 0, max = 1000} = {}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 } 
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
console.log(rand())































// CODIGO DESCRITO ABAIXO, REFERENTE A AULA DE IF/ELSE IF:

/* Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const ImprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Aprovado!')
    } else if (nota.entre(7, 8.99)) {
        console.log('Quadro de Honra!')
    } else if (nota.entre(5, 6.99)) {
        console.log('Recuperação.')
    } else if (nota.entre(0, 5.88)) {
        console.log('Reprovado.')
    } else {
        console.log('Nota Inválida!')
    }
}

ImprimirResultado(10)
ImprimirResultado(8)
ImprimirResultado(6)
ImprimirResultado(2)
ImprimirResultado(-12) */