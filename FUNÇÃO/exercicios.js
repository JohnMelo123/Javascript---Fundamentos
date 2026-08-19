// Soma, subtração, multiplicação e divisão

function calc (a = 8, b = 5) {
   console.log(`soma = ${a + b}`)
   console.log(`subtração = ${a - b}`)
   console.log(`multiplicação = ${a * b}`)
   console.log(`divisão = ${a / b}`)
}

calc(5, 9)

// Lados dos Triangulos

function calcComprimento (a, b, c) {

    if (a == b && b == c && c == a) { 
        console.log('O triangulo é equilatero')
    } 
    else if (a == b || b == c || a == c)  {
        console.log('O triangulo é isoceles')
    }
    else if (a != b && b != c && c != a) {
        console.log('O triangulo é escaleno')
    }

}

calcComprimento(8, 7, 5)
calcComprimento(6, 6, 6)
calcComprimento(3, 3, 9) 
calcComprimento(4, 1, 1)
calcComprimento(7, 5, 7)

// Base e expoente

potenciação = (x, y) => x ** y
console.log(potenciação(5, 4))

// Divisor e dividendo

divisão = (a, b) => a / b
console.log(divisão(10, 2))

// Ponto flutuante

function floatpoint (a = 0.300000000000004) {

    let valorCorrigido = a.toFixed(2);        
    let valorFormatado = valorCorrigido.replace('.', ','); 
    return `R$${valorFormatado}`;
}

console.log(floatpoint())
    
// Calculo de juros simples e composto

jurosSimples = function (capInicial, txJuros, tempAplic) {
        
    return capInicial * (txJuros / 100) * txJuros      
} 

jurosComposto = function (capInicial, txJuros, tempAplic) {
    
    return capInicial * (1 + (txJuros / 100)) ** tempAplic
}   

console.log(`Os juros simples são: ${jurosSimples(1000, 12, 6)}`)
console.log(`Os juros compostos são: ${jurosComposto(1000, 12, 6)}`)

// Formula de Bhaskara

function Bhaskara(a = 3, b = -5, c = 12) {
    let delta = b ** 2 - 4 * a * c;

    if (delta < 0) {
        return ['Delta é negativo'];
    }

    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return [x1, x2];
}

console.log(Bhaskara());       

/* Nesse código, eu só criei uma vericação do delta e não o resultado da Bhaskara em si. */
function Bhaskara (a = 3, x1, b = -5, x2, c = 12) {

    if (b ** 2 - 4 * a * c == 0) {
        console.log('Possui raizes iguais')
    }
    else if (b ** 2 - 4 * a * c >= 0) {
        console.log('Possui raizes diferentes')
    }
    else if (b ** 2 - 4 * a * c <= 0) {
        console.log('Delta é negativo')
    }

}

Bhaskara()





















