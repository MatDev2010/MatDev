function resposta() {
    let resposta = document.getElementById("resposta").value
    let full = resposta.toUpperCase()
    console.log(full)
    if (full == "BATATAFRITA") {
        setInterval(() =>
        window.open('../Fase4/indexFase4.html')
        , 2000)
        document.getElementById("res").innerHTML = "Correto, redirecionando-o para a próxima fase..."
    }
    else {
        setInterval(() =>
        document.getElementById("res").innerHTML = ""
        , 2000)
        document.getElementById("res").innerHTML = "Errado"
    }
}