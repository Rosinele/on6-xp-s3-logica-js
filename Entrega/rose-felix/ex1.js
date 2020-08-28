const readline = require("readline-sync")

const celsius = parseFloat(readline.question("Digite o valor da temperatura em ºC: "))

function converteTemperatura(celsius){
   const f = (9 * (celsius/5) + 32).toFixed(2)
   console.log(celsius)
   return console.log("o valor da Temperatura em Fahrenheit é ",f)
}

converteTemperatura(celsius)