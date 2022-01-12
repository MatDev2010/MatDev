function resposta() {
    let resposta = document.getElementById("resposta").value
    console.log(resposta)
    if (resposta == "Ilusao") {
        document.getElementById("resposta").value = "Correto"
    } else {
        document.getElementById("textoresposta").innerHTML = "Errado"
    }
}