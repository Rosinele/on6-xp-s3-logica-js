
const qtdItens = 50
var total = 0

function calc(qtdItens) {
    console.log("Quase Dois - Tabela de preços")

    while (qtdItens <= 50) {
        let itens = qtdItens--
        total = itens * 1.99

        console.log(`${itens} itens dá um total de `, total)

    }
    return
}

calc(qtdItens)