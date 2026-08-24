Array.prototype.map2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


const carrinho = [
    '{ "nome": "Borracha", "preco": "3.34" }',
    '{ "nome": "Caderno", "preco": "13.90" }',
    '{ "nome":"Kit da lapis", "preco": "41.22" }',
    '{ "nome":"Caneta", "preco": "7.50" }'
]

//Retornar um Array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
    
