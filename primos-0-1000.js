let linea = ""
for (let i = 2; i <= 1000; i++) {
    let divisores = 0
    for (let j = i; j >= 0; j--) {
        if (i % j === 0) divisores++
    }
    if (divisores <= 2) {
        if (i < 10) linea += `0${i}, `
        else if (i >= 10 && i < 997) linea += `${i}, `
        else linea += `${i}`
    }
}
console.log(linea)