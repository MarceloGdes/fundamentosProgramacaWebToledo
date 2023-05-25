let inputNum1 = document.querySelector('#input_num1')
let inputNum2 = document.querySelector('#input_num2')
let inputNum3 = document.querySelector('#input_num3')
let btmCalc = document.querySelector('#btmCalc')
let result = document.querySelector('#result')

function calcularMedias () {
    let num1 = Number(inputNum1.value)
    let num2 = Number(inputNum2.value)
    let num3 = Number(inputNum3.value)

    console.log(num1, num2, num3)

    let mediaAritimetica = (num1 + num2 + num3) / 3

    let somaValorPeso = (num1 * 3) + (num2 * 2) + (num1 * 5)
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValorPeso / somaPesos;

    let somaMedias =  mediaAritimetica + mediaPonderada;

    let mediaMedias =  somaMedias / 2

    result.innerHTML = `
    Média Aritimetica: ${mediaAritimetica} <br>
    Media Ponderada:  ${mediaPonderada} <br>
    Soma das Medias: ${somaMedias} <br>
    Media das Medias: ${mediaMedias}`
}

btmCalc.onclick = () => {
    calcularMedias()
}
