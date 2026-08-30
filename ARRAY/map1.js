const nums = [1, 2, 3, 4, 5]

// For ou forEach, com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma5 = e => e + 5
const mult10 = e => e * 10
const forMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` 

resultado = nums.map(soma5).map(mult10).map(forMoney)
console.log(resultado)