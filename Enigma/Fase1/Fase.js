function resposta() {
    let resposta = document.getElementById("resposta").value
    let upcase = resposta.toUpperCase()
    if (upcase = "ILUSAO") {
        setInterval(() =>
        window.open("http://127.0.0.1:5500/Enigma/Fase2/indexFase2.html")
        , 2000)
        document.getElementById("res").innerHTML = "Correto, redirecionando-o para a próxima fase..."
    } else {
        document.getElementById("res").innerHTML = "Errado"
        setInterval(() =>
            document.getElementById("res").innerHTML = ""
            , 2000)
    }
}