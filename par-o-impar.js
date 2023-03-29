let numero = 0

if (numero != null || numero != undefined) {
    if (Number.isInteger(numero)) {
        if (numero === 0) console.log("el numero: ", numero, "es un numero sin paridad")
        if (numero % 2 === 0 && numero != 0) console.log("el numero: ", numero, "es par")
        if (numero % 2 != 0) console.log("el numero:", numero, "es impar")
    } else console.log("el valor introducido no es un numero")
}else console.log("La variable que se intenta evaluar no existe")