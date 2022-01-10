function resposta() {
    let resposta = document.getElementById("resposta").value
    if (resposta == "Ilusao") {
        document.getElementById("resposta").value = "Correto"
    }
    document.getElementById("resposta").value = "Errado"
}