
let lista = [45, 23, 78, 32, 12, 1, 4, 8, 34, 32, 1000, 34, 37, 22, 0, -4, -6]

function organizar(lista) {
    for (let i = 0; i < lista.length - 1; i++) {
        for (let j = 0; j < lista.length - i - 1; j++) {
            if (lista[j] > lista[parseInt(j) + 1]) {
                let carry = lista[parseInt(j) + 1]
                lista[parseInt(j) + 1] = lista[j]
                lista[j] = carry
            }
        }
    }
    return lista
}
console.log(`lista sin ordenar ${lista} lista ordenada ${organizar(lista)}`)