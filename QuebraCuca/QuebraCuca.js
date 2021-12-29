let contador = 0
const points = [1, 2, 3, 4, 5, 6, 7, 8, 0].sort(function (a, b) { return 0.5 - Math.random() });
// const points = [1, 2, 3, 4, 5, 6, 7, 0, 8]

// document.getElementById("demo").innerHTML = points

montaQuebraCuca()

function montaQuebraCuca() {
    document.getElementById("a1").innerHTML = points[0] == 0 ? ' ' : points[0]
    document.getElementById("a2").innerHTML = points[1] == 0 ? ' ' : points[1]
    document.getElementById("a3").innerHTML = points[2] == 0 ? ' ' : points[2]
    document.getElementById("a4").innerHTML = points[3] == 0 ? ' ' : points[3]
    document.getElementById("a5").innerHTML = points[4] == 0 ? ' ' : points[4]
    document.getElementById("a6").innerHTML = points[5] == 0 ? ' ' : points[5]
    document.getElementById("a7").innerHTML = points[6] == 0 ? ' ' : points[6]
    document.getElementById("a8").innerHTML = points[7] == 0 ? ' ' : points[7]
    document.getElementById("a9").innerHTML = points[8] == 0 ? ' ' : points[8]
}

function myFunction1() {
    points.sort();
    document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
    points.sort(function (a, b) { return a - b });
    document.getElementById("demo").innerHTML = points;
}

function checkTerminou() {
    
    let cheCkfinal = points.toString()
    // document.getElementById("msg").innerHTML = `checando...${cheCkfinal} versus '1,2,3,4,5,6,7,8'`

    if (cheCkfinal == '1,2,3,4,5,6,7,8, ') {
            document.getElementById("msg").innerHTML = `Parabéns, você terminou!!!`
            clearInterval(myInterval)
    }
}

function moveNumber(cel) {
    contador++
    document.getElementById("Contador").innerHTML = contador;

    loc = Number(cel[1])

    arrayDeTestes = []
    if (loc == 1) arrayDeTestes = [2, 4]
    else if (loc == 2) arrayDeTestes = [1, 3, 5]
    else if (loc == 3) arrayDeTestes = [2, 6]
    else if (loc == 4) arrayDeTestes = [1, 5, 7]
    else if (loc == 5) arrayDeTestes = [2, 6, 4, 8]
    else if (loc == 6) arrayDeTestes = [3, 5, 9]
    else if (loc == 7) arrayDeTestes = [4, 8]
    else if (loc == 8) arrayDeTestes = [7, 5, 9]
    else if (loc == 9) arrayDeTestes = [8, 6];

    // document.getElementById("msg").innerHTML = `${loc} e array de testes ${arrayDeTestes}`

    for (locTeste in arrayDeTestes) {

        if (points[(arrayDeTestes[(locTeste)] - 1)] == ' ') {
            // document.getElementById("msg").innerHTML = `${loc} e array de testes ${arrayDeTestes} entrei aqui ${arrayDeTestes[locTeste]}`

            points[(arrayDeTestes[(locTeste)] - 1)] = points[(loc-1)]
            points[(loc - 1)] = ' '

            montaQuebraCuca()
            checkTerminou()
            return
        }
    }
}

let dataI = new Date()

function temporizador(data) {

    myInterval = setInterval(() => {
        const dataC = new Date()
        const lag = (dataC - dataI) / 1000

        var dateX = new Date(null);
        dateX.setSeconds(lag); // specify value for SECONDS here
        var result = dateX.toISOString().substring(11, 19);

        document.getElementById("Tempor").innerHTML = result
        // console.log(dataI, dataC, lag, result)
        // console.log(result)
    }, 1000)
}

function iniciar() {
    let dataI = new Date()
    temporizador(dataI)
}