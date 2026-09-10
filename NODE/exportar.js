console.log(module.exports === this)
console.log(module.exports === exports)

thos.a = 1
exports.b = 2
module.exports.c = 3

// Não se pode atribuir um novo objeto utilizando "exports"
exports = {
    nome: 'Teste'
}

console.log(module.exports)

// Só é possivel atribuir um novo objeto utilizando o "module.exports"
module.exports = {
    publico: true
}