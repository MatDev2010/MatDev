function resposta() {
    let resposta = Number(document.getElementById("resposta").value)
    if (resposta == 1789) {
        setInterval(() =>
        window.open('../Fase3/indexFase3.html')
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