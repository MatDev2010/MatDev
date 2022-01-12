function resposta() {
    let resposta = Number(document.getElementById("resposta").value)
    console.log(resposta)
    if (resposta == 1789) {
        document.getElementById("res").innerHTML = "Correto"
        console.log(resposta)
    }
    else {
        document.getElementById("res").innerHTML = "Errado"
        console.log("a")
        setInterval(() =>
            document.getElementById("res").innerHTML = ""
            , 2000)
    }
}