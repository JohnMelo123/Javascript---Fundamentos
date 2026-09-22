const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Desafio Mulher chinesa com menor salário:

const chineses = function (funcionarios) {
    funcionarios.pais === 'China'
}

const mulheres = function (funcionarios) {
    funcionarios.genero === 'F'
}

const menorSalario = function (func,funcAtual) {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios
         .filter(chineses)
         .filter(mulheres)
         .filter(menorSalario)
    console.log(func)
})

