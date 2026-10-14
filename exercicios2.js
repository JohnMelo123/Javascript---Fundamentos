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

// Função Booleano e númerico inverso:
function inverso(valor) {
  if (typeof valor === "boolean") {
    return !valor;
  }

  if (typeof valor === "number") {
    return -valor;
  }

  return `booleano ou numérico esperado, mas o parâmetro é do tipo ${typeof valor}`;
}
console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(5))
console.log(inverso(-27))
console.log(inverso('100'))

// Função 4 parametros(numero, minimo, maximo, inclusivo)
function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if(numero > minimo && numero < maximo) {
        return true;    
    } else if (inclusivo === true) {
        return numero === minimo || numero === maximo;
    } else {
        return false
    }
}
console.log(estaEntre(10, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))

// Função de multiplicação sem o operador de multiplicação
function multiplicar(a, b) {
  let resultado = 0;
  for (let i = 0; i < b; i++) {
    resultado += a;
  }
  return resultado;
}
console.log(multiplicar(4, 3)); // 12
console.log(multiplicar(5, 0)); // 0 (o loop nem executa)
console.log(multiplicar(0, 7)); // 0 (soma 0 sete vezes)
console.log(multiplicar(0, 0)); // 0
// Não consegui fazer, foco em estudo no loop 'for'.

// Função de repetir Array
function repetir(elemento, quantRepeticao) {
  const resultado = [];

  for (let i = 0; i < quantRepeticao; i++) {
    resultado.push(elemento);
  }

  return resultado;
}
console.log(repetir("código", 2))
console.log(repetir(7, 3)) 
console.log(repetir(20, 12))
// Não consegui fazer, foco em estudo no loop 'for'
// Tentei utilizar 'forEach' , mas ele so percorre os itens de um array que ja existe. 


/* Função que recebe número como parametro e retorna uma string com o simbolo "+" ]
na quantidade especificada no parametro: */
function simboloMais (numero) { 
  let resultado = ""
  for (let c = 0; c < numero; c++) {
    resultado += "+"
  }
  return resultado 
}
console.log(simboloMais(2))
console.log(simboloMais(4))
/* Mais uma vez.. não utilizei a lógica da estrutura de control: for, para
aplicar uma ação a cada vez que o contador fosse para o valor seguinte */

/* Função que recebe um Array e retorna o primeiro e o ultimo elemento desse Array 
como um novo Array: */
function getFirstAndLastElement(array) {
  return [array[0], array[array.length - 1]];
}
console.log(getFirstAndLastElement([7, 14, "olá"]))
console.log(getFirstAndLastElement([-100, "aplicativo", 16]))

/* Função que recebe um objeto, e a propriedade desse objeto como parametro; e retorna
a cópia do objeto sem a propriedade dele: */
function removerPropriedade(obj, propriedade){
  const copia = {...obj}
  delete copia[propriedade]
  return copia
}
console.log(removerPropriedade({a: 1, b: 2}, "a"))
console.log(removerPropriedade({id: 20, nome: "caneta", descricao: "Não preenchido"}, "descricao"))
/* O que me faltou para finalizar o código: conhecimento correto acerca do 
(spread) -> {...obj}, onde foi criado um novo objeto com as mesmas propriedades(uma copia). */
