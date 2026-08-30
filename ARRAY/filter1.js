const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 19.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return false
}))

const acimade500 = produtos => produtos.preco >= 500
const fragilidade = produtos  => produtos.fragil? true : false

const resultado = produtos.filter(acimade500).filter(fragilidade)
console.log(resultado)