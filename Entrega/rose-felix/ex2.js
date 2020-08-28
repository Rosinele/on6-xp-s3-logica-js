const readline = require("readline-sync")

const fahrenheit = parseFloat(readline.question("Digite o valor da temperatura em Fahrenheit: "))

function converteTemperatura(fahrenheit){
   const c = ((fahrenheit -32) * (5/9)).toFixed(2)
   console.log(fahrenheit)
   return console.log("o valor da Temperatura em Grau Celsius é ", c)
}

converteTemperatura(fahrenheit)