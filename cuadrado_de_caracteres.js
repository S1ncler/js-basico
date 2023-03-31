let lado = 6
for(let i = 0; i < lado; i++){
    let linea = ""
    for (let j = 0; j < lado; j++){
        if(i === 0 || i === lado - 1 || j === 0 || j === lado - 1) linea += "*"
        else linea += " "
    }
    console.log(linea)
}