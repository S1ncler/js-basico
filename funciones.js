
Saludo();

function Saludo() {
    console.log("hola")
}


let Saludo2 = () => {
    console.log("hola 2")
}
Saludo2();








function Saludo1() {
    console.log("hola");
    let nombres = [`Juan`, true, 10, 3.7, null, undefined, {}, ["Hola", 47, false]]
    for (let i in nombres) console.log(i)
    for (let i of nombres) console.log(i)
    let j = 0
    while (j < nombres.length) {
        console.log(nombres[j])
        j++
    }
    do {
        let i = 0
        console.log(nombres[i])
        i++
    } while (j < nombres.length)
}

const SaludoFlanders = () => {
    console.log("halo");
}
SaludoFlanders();

function isOdd(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    return false;
}

function isOddNoIf(numero) {
    return numero % 2 == 0;
}
function isOddTern(numero) { return numero % 2 == 0 ? `El numero ${numero} es par` : `El numero ${numero} es impar`; }

console.log(isOdd(numero = 3))
console.log(isOddNoIf(numero = 10))
console.log(isOddTern(numero = 10))

let names = ["Carlos react", "Michael Git", "Daniela Bootstrap"]

console.log(names.length)

names.push("Camilo Divs")

console.log(names.length)
