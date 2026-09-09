// Função retornada com template string:
function saudacao (nome) { 
    return 'Olá, ' + nome + '!'
}
console.log(saudacao("John Melo"))


// Função que recebe idade em anos e retorna em dias:
function converterIdade (idade) {
    return idade * 365
}
console.log(converterIdade(15))
console.log(converterIdade(21))


// Função de calculo de salário:
const calcularSalario = function (horas, salHora) {
    return `Salário igual a R$ ${horas * salHora}`
}
console.log(calcularSalario(176, 32.6))
console.log(calcularSalario(180, 50))


// Função de mes do ano:
function nomeDoMes (mes) {
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[mes-1]   
}
console.log(nomeDoMes(12))


// Função de teste Maior ou Igual:
function maiorOuIgual (x, y) {
    return x >= y? true:false
}
console.log(maiorOuIgual(5,20))
console.log(maiorOuIgual(14, 7))
console.log(maiorOuIgual('100', 22))