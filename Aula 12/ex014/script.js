function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var idade = ano - fano.value
    if (fano.value.length == 0 || fano.value > ano || idade > 150 || idade <= 0) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'Hbebe.jpg')
            } 
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'menino.jpg')
            }
            else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'Hadulto.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'Mbebe.jpg')
            }
            else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'menina.jpg')
            }
            else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'Dienifer.webp')
            }
            else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}