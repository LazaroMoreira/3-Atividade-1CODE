numeros = [1, 3, 5, 4, 8, 10, 15, 16, 20, 9, 27]

let numerosImpares = numeros.filter(numeros => numeros % 2 === 1)

somaimpar = 0

for (let i = 0; i < numerosImpares.length; i++) {
    somaimpar += numerosImpares[i]
}
console.log(somaimpar)
