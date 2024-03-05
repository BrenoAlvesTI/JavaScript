function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >= 0 && hora < 12) {
        img.src = 'morning.jpg'
        document.body.style.background = '#D8BFD8'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#5F9EA0'
    }
    else {
        img.src = 'noite.jpg'
        document.body.style.background = '#4682B4'
    }
}