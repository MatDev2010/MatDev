var calculo = ''
var fator1 = 0
var fator2 = 0

function clique(tecla) {
    calculo += String(tecla[5])
    document.getElementById("calc").innerHTML = calculo

}   

function cont(tipo) {
    if (tipo == 'adicao') {
        fator1 = Number(calculo)
        calculo += ' + '
        document.getElementById("calc").innerHTML = calculo
    }
}

function reset() {
    calculo = ''
    fator1 = 0
    fator2 = 0
    document.getElementById("calc").innerHTML = 'Conta'
}