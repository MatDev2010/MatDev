function resposta() {
    let resposta = document.getElementById("resposta").value
    if (resposta == "Ilusao") {
        document.getElementById("textoresposta").value = "Correto!"
        setInterval(() =>
        window.location.replace("http://127.0.0.1:5500/Enigma/Fase2/index.html")
        , 2000)
    } else {
        document.getElementById("textoresposta").innerHTML = "Errado"
    }
}