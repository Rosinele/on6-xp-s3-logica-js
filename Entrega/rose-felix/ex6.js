
const qtdItens = 50
var total = 0

function calc(qtdItens) {
    console.log("Quase Dois - Tabela de preços")

    while (qtdItens <= 50 && qtdItens >= 1) {
        qtdItens = qtdItens-1
        total = qtdItens * 1.99
        console.log(`${qtdItens} itens dá um total de R$`, total)
    }
    return
}

calc(qtdItens)