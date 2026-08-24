Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
        newArray.push(this[i])
    }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 19.99, fragil: false}
]

const acimade500 = produtos => produtos.preco >= 500
const fragilidade = produtos  => produtos.fragil? true : false // Em vez do operador Ternário pode ser utilizado: produtos.fragil

const resultado = produtos.filter2(acimade500).filter2(fragilidade)
console.log(resultado)