var numero = 5000


let numA = 0
let numB = 1
let numC = 0
let fibonacci = ""

fibonacci += numA + "" + numB

for (let contador = 1; numC <= numero; contador++) {
    numC = numA + numB
    fibonacci = " " + numC
    numA = numB
    numB = numC
}
console.log(fibonacci)