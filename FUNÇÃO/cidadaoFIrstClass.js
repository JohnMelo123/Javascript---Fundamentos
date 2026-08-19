// Função em JS é First-Class Object 
// Higher-order function

// criar de forma literal
function fun1 () {}

// Função anonima
const fun2 = function () {}

// Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 5))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como parametro
function run() {
    fun()
}

run(function () {console.log('Executando..')})

// Uma função pode conter/retornar uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
