const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(5, 7)
imprimirResultado(5, 7, soma)
imprimirResultado(5, 7, function (x, y) {
    return x - y
})
imprimirResultado(5, 7, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
} 
pessoa.falar()