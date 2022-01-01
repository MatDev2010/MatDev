let contador = 0
const points = [1, 2, 3, 4, 5, 6, 7, 8, 0].sort(function (a, b) { return 0.5 - Math.random() });
// const points = [1, 2, 3, 4, 5, 6, 7, 0, 8]

// document.getElementById("demo").innerHTML = points

function iniciar() {
    let num = Number(document.getElementById("botaoInicio").value)
    if (num < 1 || num > 10) {
        document.getElementById("botaoInicio").value = ""
        return
    }
    else
        montaTabuada(num)
}

function montaTabuada(num) {
    document.getElementById("a1").innerHTML = num
    document.getElementById("b1").innerHTML = num
    document.getElementById("c1").innerHTML = num
    document.getElementById("d1").innerHTML = num
    document.getElementById("e1").innerHTML = num
    document.getElementById("f1").innerHTML = num
    document.getElementById("g1").innerHTML = num
    document.getElementById("h1").innerHTML = num
    document.getElementById("i1").innerHTML = num
    document.getElementById("j1").innerHTML = num

    document.getElementById("a5").innerHTML = num * 1
    document.getElementById("b5").innerHTML = num * 2
    document.getElementById("c5").innerHTML = num * 3
    document.getElementById("d5").innerHTML = num * 4
    document.getElementById("e5").innerHTML = num * 5
    document.getElementById("f5").innerHTML = num * 6
    document.getElementById("g5").innerHTML = num * 7
    document.getElementById("h5").innerHTML = num * 8
    document.getElementById("i5").innerHTML = num * 9
    document.getElementById("j5").innerHTML = num * 10


}
