var n = document.getElementById('txtn')
var lista = document.getElementById('txtnum')
var res = document.getElementById('resp')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if (isNumero(n.value) && !inLista(n.value, valores)) {
        valores.push(Number(n.value))
        var item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        alert('ERRO! Valor inválido ou já encontrado na lista')
    }
    n.value = ''
    n.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    }
    else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores informador é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores informados é ${media}</p>`
    }
}