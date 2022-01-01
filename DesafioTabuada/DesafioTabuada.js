let pontos = 0

function aleatorios() {
    let aleatorioTabuada = 0
    let aleatorioMultiplicador = 0

    while (aleatorioTabuada == 0) {
        aleatorioTabuada = Math.round(Math.random() * 10)
    }
    
    while (aleatorioMultiplicador == 0) {
        aleatorioMultiplicador = Math.round(Math.random() * 10)
    }

    return [aleatorioTabuada, aleatorioMultiplicador]
}

function iniciar() {
    resul = aleatorios()
    montaTabuada(resul)
}

function montaTabuada(resul) {
    document.getElementById("a1").innerHTML = resul[0]
    document.getElementById("b1").innerHTML = resul[0]
    document.getElementById("c1").innerHTML = resul[0]
    document.getElementById("d1").innerHTML = resul[0]
    document.getElementById("e1").innerHTML = resul[0]
    document.getElementById("f1").innerHTML = resul[0]
    document.getElementById("g1").innerHTML = resul[0]
    document.getElementById("h1").innerHTML = resul[0]
    document.getElementById("i1").innerHTML = resul[0]
    document.getElementById("j1").innerHTML = resul[0]

    document.getElementById("a5").innerHTML = resul[1] == 1 ? '' : resul[0] * 1
    document.getElementById("b5").innerHTML = resul[1] == 2 ? '' : resul[0] * 2
    document.getElementById("c5").innerHTML = resul[1] == 3 ? '' : resul[0] * 3
    document.getElementById("d5").innerHTML = resul[1] == 4 ? '' : resul[0] * 4
    document.getElementById("e5").innerHTML = resul[1] == 5 ? '' : resul[0] * 5
    document.getElementById("f5").innerHTML = resul[1] == 6 ? '' : resul[0] * 6
    document.getElementById("g5").innerHTML = resul[1] == 7 ? '' : resul[0] * 7
    document.getElementById("h5").innerHTML = resul[1] == 8 ? '' : resul[0] * 8
    document.getElementById("i5").innerHTML = resul[1] == 9 ? '' : resul[0] * 9
    document.getElementById("j5").innerHTML = resul[1] == 10 ? '' : resul[0] * 10

    document.getElementById("pontos").innerHTML = pontos
}

function checkDesafio() {
    let num = Number(document.getElementById("chute").value)
    document.getElementById("chute").value = ""

    if  (num == resul[0] * resul[1]) {
        pontos++
        console.log('acertou!', pontos)
        iniciar()
    } else {
        pontos--
        console.log('errou!', pontos)
        iniciar()
    }
}

iniciar()