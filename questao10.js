
var pi = 0
var numeroDeTermos = 1000

for (let i = 0; i < numeroDeTermos; i++) {
  let numerador = 4 * (-1) ** i
  let denominador = 2 * i + 1

  pi += numerador / denominador
}
console.log(pi)
