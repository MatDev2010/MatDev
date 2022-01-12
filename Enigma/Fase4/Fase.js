function resposta() {
    let resposta = document.getElementById("resposta").value
    if (resposta == "amFuZWlybw==") {
        document.getElementById("res").innerHTML = "Correto, redirecionando-o para a próxima fase..."
    }
    else {
        setInterval(() =>
        document.getElementById("res").innerHTML = ""
        , 2000)
        document.getElementById("res").innerHTML = "Errado"
    }
}