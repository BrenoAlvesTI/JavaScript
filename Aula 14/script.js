function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')  
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar'
        alert('[ERRO] Faltam dados!')
    }
    else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! considerando PASSO 1')
            p = 1
        }
        
        // Contagem Crescente
        if (i < f) {
            while (i <= f) {
                res.innerHTML += ` ${i} ->`
                i += p
            }
        }
        // Contagem Regressiva
        else {
            while (i >= f) {
                res.innerHTML += ` ${i} ->`
                i -= p
            }
        }
        res.innerHTML += ' Acabou!'
    }
}