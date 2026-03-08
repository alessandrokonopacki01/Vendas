// Seleciona o modal e a imagem de destino
const modal = document.getElementById("meuModal");
const modalImg = document.getElementById("imgExpandida");
const span = document.querySelector(".fechar");

// Seleciona todas as imagens com a classe 'zoom'
const imagens = document.querySelectorAll(".zoom");

// Adiciona o evento de clique em cada uma delas
imagens.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Pega o caminho da imagem clicada
    }
});

// Fecha ao clicar no X
span.onclick = function() { 
    modal.style.display = "none";
}

// Fecha ao clicar em qualquer lugar fora da imagem
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}