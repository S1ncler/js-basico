let linea = ""
for(let i = 1; i <= 100; i++){
    if(i < 10) linea += `0${i}, `
    else if(i >= 10 && i < 100) linea += `${i}, `
    else linea += `${i}`
}
console.log(linea)


console.log([...Array(100).keys()].map(i => i < 9 ? '0' + (i + 1) : i === 99 ? '100' : i + 1).join(', '));