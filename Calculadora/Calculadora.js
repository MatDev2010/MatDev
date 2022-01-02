var calculo = ''
var elem1 = 0
var elem2 = 0
var limpar = false

function clique(tecla) {

    if (limpar) {
        calculo = ''
        limpar = !limpar
    }

    calculo += String(tecla[5])
    document.getElementById("calc").innerHTML = calculo

}   

function cont(tipo) {
    if (tipo == 'adicao') {
        calculo += ' + '
        document.getElementById("calc").innerHTML = calculo
    }
    else if (tipo == 'subtracao') {
        calculo += ' - '
        document.getElementById("calc").innerHTML = calculo
    }
    else if (tipo == 'divisao') {
        calculo += ' ÷ '
        document.getElementById("calc").innerHTML = calculo
    }
    else if (tipo == 'vezes') {
        calculo += ' x '
        document.getElementById("calc").innerHTML = calculo
    }
    else if (tipo == 'igual') {
        var calcular = calculo.split(' ')
        console.log(calcular)
        var resultado = Number(calcular[0])
       
        for (let i = 0; i <= calcular.length; i++) {
             if (calcular[i] == '+') {
                resultado += Number(calcular[i + 1])
                // console.log(i, typeof i, calcular[(i + 1)], resultado)
            }
            else if (calcular[i] == '-') {
                resultado -= Number(calcular[i + 1])
            }
            else if (calcular[i] == 'x') {
                resultado *= Number(calcular[i + 1])
            }
            else if (calcular[i] == '÷') {
                resultado /= Number(calcular[i + 1])
            } 
        }
        document.getElementById("calc").innerHTML = calculo += ' = ' + resultado
        limpar = true
    }
}

function reset() {
    calculo = ''
    elem1 = 0
    elem2 = 0
    document.getElementById("calc").innerHTML = 'Conta'
}