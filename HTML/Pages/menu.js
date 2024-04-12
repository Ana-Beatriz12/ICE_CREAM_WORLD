// scroll evento de rolagem.

// addEventListener serve para falar ao javascript quando um determinado evento acontecer.
window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('')
})

// header.classList.toggle('') aqui está adicionando uma classe ao header. com javascript
// LINK DO VIDEO DO YOUTUBE PARA TERMINAR DE ASSISTIR E FAZER O CABEÇÃLHO RESPONSIVO
// https://youtu.be/nxoPx7qOAbQ?si=6BA9Z8DQTgNayoiK
