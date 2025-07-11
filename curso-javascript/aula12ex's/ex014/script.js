function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'foto-manha.png'
        document.body.style.background = '#cfa573'
    }else if (hora >= 12 && hora <= 18) {
        img.src = 'foto-tarde.png'
        document.body.style.background = '#fe9e3d'
    } else {
        img.src = 'foto-noite.png'
        document.body.style.background = '#1a3356'
    }
}

