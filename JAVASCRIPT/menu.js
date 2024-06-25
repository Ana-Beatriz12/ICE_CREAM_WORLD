// scroll evento de rolagem.

// addEventListener serve para falar ao javascript quando um determinado evento acontecer.
window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 400)
})

// header.classList.toggle('') aqui está adicionando uma classe ao header. com javascript
// LINK DO VIDEO DO YOUTUBE PARA TERMINAR DE ASSISTIR E FAZER O CABEÇÃLHO RESPONSIVO
// https://youtu.be/nxoPx7qOAbQ?si=6BA9Z8DQTgNayoiK

//(rolagem',window.scrollY>0) aqui ele fala que a rolagem seja adicionada sempre que a miha janela
//tiver uma rolagem no eixo y(vertical ) e que a posição da rolagem seja maior que 0.