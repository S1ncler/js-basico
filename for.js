let txt = "Felipe"
let encrypted = ""
let desencrypted = ""

for(let i of txt) console.log(i)
for(let i in txt) console.log(txt[i])
for(let i in txt) console.log(txt[i].charCodeAt())

for(let i in txt){
    encrypted += String.fromCharCode(txt[i].charCodeAt() + 13)
}
console.log(encrypted)
for(let i in encrypted){
    desencrypted += String.fromCharCode(encrypted[i].charCodeAt() - 13)
}
console.log(desencrypted)