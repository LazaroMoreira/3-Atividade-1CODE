let numA = 0
let numB = 1
let numC = 0
let fibonacci = ""

fibonacci += numA + "" + numB

for(let contador = 1; numC <= 1000; contador++){
    numC= numA + numB
    fibonacci = " " + numC
    numA = numB
    numB = numC
}
console.log(fibonacci)