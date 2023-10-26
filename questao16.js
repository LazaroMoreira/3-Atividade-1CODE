
const words = ["oi", "ola", "tudo bem", "parabéns"]
tamanho = words.length
var tam = 0;
var palavraComprida = ""
for (let i = 0; i < tamanho; i++) {

    if (words[i].length > tam) {
        tam = words[i].length
    }
    else (palavraComprida = words[i])
}
console.log(palavraComprida)