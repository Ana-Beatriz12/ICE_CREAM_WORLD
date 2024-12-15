// Exibir ou ocultar o menu mobile
function menuShow() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("open"); // Adiciona ou remove a classe "open"
}

// Fechar o menu mobile ao clicar em um link e rolar suavemente para a seção correspondente
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Impede o comportamento padrão de pular direto para a seção
        const targetId = this.getAttribute("href"); // Pega o ID da seção
        const targetSection = document.querySelector(targetId); // Seleciona a seção correspondente

        // Fecha o menu mobile (se estiver aberto)
        const menu = document.querySelector(".mobile-menu");
        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
        }

        // Rola suavemente até a seção correspondente
        targetSection.scrollIntoView({
            behavior: "smooth", // Anima a rolagem
            block: "start" // Posiciona no início da seção
        });
    });
});