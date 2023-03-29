let numero = -0

if (numero != null || numero != undefined) {
    if (Number.isInteger(numero)) {
        if (numero > 0) console.log("el numero: ", numero, "es positivo")
        if (numero === 0) console.log("el numero:", numero, "es neutro")
        if (numero < 0) console.log("el numero:", numero, "es negativo")
    } else console.log("el valor introducido no es un numero")
}else console.log("La variable que se intenta evaluar no existe")