var numeroimpresso


for (let i = 0; i <= 100; i++) {

    numeroimpresso = i
    if (i % 3 == 0) {
        numeroimpresso = 'fizz'
    } else if (i % 5 == 0) {
        numeroimpresso = 'buzz'
    }
    if (i % 3 == 0 && i % 5 == 0) {
        numeroimpresso = 'fizzbuzz'
    }


    console.log(numeroimpresso)

}


