function resposta() {
    let resposta = document.getElementById("resposta").value
    if (resposta == "Ilusao") {
        setInterval(() =>
        window.open("http://127.0.0.1:5500/Enigma/Fase2/indexFase2.html")
        , 2000)
        document.getElementById("textoresposta").innerHTML = "Correto!"
    } else {
        document.getElementById("textoresposta").innerHTML = "Errado"
    }
}