const readline = require("readline-sync")

const numero = parseFloat(readline.question("Digite um valor:"))

var i = numero


let valor =0

function calc(numero) {
    while( i >= 1){
        valor = valor + i
        i = i - 1
        console.log(i)
    }
    return console.log("retorno: ", valor)
}

calc(numero)