// Pega os elementos
var modal = document.getElementById("meuModal");
var img = document.getElementById("imgGarrafa"); // Id da sua imagem
var modalImg = document.getElementById("imgExpandida");
var span = document.getElementsByClassName("fechar")[0];

// Quando clicar na imagem, abre o modal
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Quando clicar no (x), fecha o modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Fecha se clicar fora da imagem
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}