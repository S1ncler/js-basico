let num = 2
if (Number.isInteger(num)) {
    if (num === 0) console.log("LOL")
    else {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("XD")
        } else {
            if (num % 3 === 0) console.log("X")
            else if (num % 5 === 0) console.log("D")
            else console.log("LMAO")
        }
    }
}