let inputNum1 = document.querySelector('#input_num1')
let inputNum2 = document.querySelector('#input_num2')
let btmCalc = document.querySelector('#btmCalc')
let result = document.querySelector('#result')

function getMaiorValor () {

    let num1 = Number(inputNum1.value);
    let num2 = Number(inputNum2.value);

    if (num1 > num2) {
        result.textContent = `O Número ${num1} é maior que ${num2}`
    }else if(num1 === num2) {
        result.textContent = `Os números são iguais`
    }else {
        result.textContent = `O Número ${num2} é maior que ${num1}`
    }

}

btmCalc.onclick = () => {
    getMaiorValor()
}