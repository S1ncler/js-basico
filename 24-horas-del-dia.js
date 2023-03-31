for (let i = 0; i <= 23; i++) {
    for (let j = 0; j <= 59; j++) {
        if (i < 10 && j < 10) console.log(`0${i}:0${j}`)
        if (i >= 10 && j < 10) console.log(`${i}:0${j}`)
        if (i < 10 && j >= 10) console.log(`0${i}:${j}`)
        if (i >= 10 && j >= 10) console.log(`${i}:${j}`)
    }
}