function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) "xor"
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))
console.log(compras(false, true))




























/* 

v e v -> v
v e f -> f
f e ? -> f

// Quando utiliza o "e" : so pode ser verdadeiro se os dois valores forem verdadeiros.

v ou ? -> v
f ou v -> v
f ou f -> f

// Quando utiliza o "ou" : é verdadeiro quando pelo menos um dos valores é verdadeiro.

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

// Quando utiliza-se o "xor" : Quando o valores são diferentes, é verdadeiro; quando os valores são iguais, é falso.

 */