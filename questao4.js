//  2; 3; 5 ;7; 11; 13; 17; 19

var multprimos = 1

for (let i = 1; i <= 20; i++) {
  var contador = 0

  for (let j = 2; j <= 20; j++) {
    if (i % j == 0) { contador++ }
  }
  if (contador == 1) {
    multprimos *= i
  }
}
console.log(multprimos)
