

//numA = 0
//numB = 1


//for (pell = 0 ; pell <= 20; pell++){

//var nextTerm = 2 * numA + numB;

//numA = numB; 
//numB = nextTerm;
//}
//console.log(pell)
// a - u


let a = 0;
let b = 1;


for (let i = 0; i < 20; i++) {
  console.log(a);

  let nextTerm = 2 * b + a;

  a = b;
  b = nextTerm;
}
