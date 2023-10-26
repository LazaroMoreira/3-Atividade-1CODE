
//Questão 8: Gere uma pirâmide de números como a mostrada abaixo usando uma estrutura de
//repetição:
//1
//22
//333
//4444
//55555



for (let i = 1; i <= 5; i++) {
    var piramide = "";
    for (let j = 1; j <= i; j++) {
        piramide += i;
    }
    console.log(piramide);

}