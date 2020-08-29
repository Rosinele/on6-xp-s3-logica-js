const readline = require("readline-sync")

const metros = parseFloat(readline.question("Digite o valor em metros "))

function converteMilimetros(metros){
   const mm = metros * 1000
   console.log(mm)
   return console.log(`O valor de ${metros} metros em milímetros é: `, mm)
}

converteMilimetros(metros)