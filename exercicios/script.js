function carregar() {

  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  //var hora = data.getHours()
  var hora = 13

  msg.innerHTML = `Agora são ${hora}horas.`

  if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = "/modelo/foto da manhã.jpg"
    document.body.style.background = '#607E84'
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = "/modelo/foto da tarde.jpg"
    document.body.style.background = '#E2C095'

  } else {
    //BOA NOITE!
    img.src = "/modelo/foto da noite.jpg"
    document.body.style.background = '#0E2243'


  }

}