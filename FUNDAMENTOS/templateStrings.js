const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
      Olá
      ${nome}!`
console.log(concatenacao, template) 

// expressões que podem estar nos template string:
console.log(`1 + 1 = ${1 + 1}`)

// função arrow ainda será estudada*
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)