const aprovados = ['Rafael', 'John', 'Elisa', 'Maria']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
})

aprovados.forEach(nome => console.log(nome))


const exibirAprovados = function (aprovado) {
     console.log(aprovado)
}
aprovados.forEach(exibirAprovados)
