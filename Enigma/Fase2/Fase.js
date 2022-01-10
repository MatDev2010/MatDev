function resposta() {
    let resposta = Number(document.getElementById("resposta").value)
    if (resposta == 1789) {
        document.getElementById("res").value = "Correto"
        console.log(resposta)
    }
    else document.getElementById("Uau").value = "Errado", console.log("a")
}