const readline = require("readline-sync")

const n1 = parseFloat(readline.question("Digite o primeiro valor:"))
const n2 = parseFloat(readline.question("Digite o segundo valor:"))
const n3 = parseFloat(readline.question("Digite o terceiro valor:"))

function calc(n1, n2, n3) {
   if (n1 != "" && n2 != "" && n3 != "") {
      let valor = (n1 + n2) / n3
      console.log(n1, n2, n3)
      console.log("Todos os valores foram repassados. Total: ", valor)
   } else if (n1 === "" && n2 === "" && n3 === "") {
      console.log("Não recebeu parâmetro")
   }else if((n1 === "" && n2 === "") || (n1 === "" && n3 === "") || (n2 === "" && n3 === "")){
      console.log("Apenas um parâmetro foi repassado.", n1, n2, n3)
   }else{
      let valor = n1 + n2 + n3
      console.log("Dois parâmetros foram repassados. O resultado da sema é: ", valor)
   }
}

calc(n1, n2, n3)