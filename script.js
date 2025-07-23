const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => 
nav.classList.toggle("active"));

function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = "5585996155015"
    
    const texto = `Ola! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')

}