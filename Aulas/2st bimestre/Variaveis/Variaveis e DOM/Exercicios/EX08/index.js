let inputNum1 = document.querySelector('#input_num1')
let inputNum2 = document.querySelector('#input_num2')
let inputNum3 = document.querySelector('#input_num3')
let inputNum4 = document.querySelector('#input_num4')
let btmCalc = document.querySelector('#btmCalc')
let result = document.querySelector('#result')

    

function getMenorValor () {

    let num1 = Number(inputNum1.value);
    let num2 = Number(inputNum2.value);
    let num3 = Number(inputNum3.value);
    let num4 = Number(inputNum4.value);



    if ( num1 < num2 && num1 < num3 && num1 < num4) {
        result.textContent = `O Número ${num1} é o Menor`
    }else if(num2 < num1 && num2 < num4 && num2 < num3) {
        result.textContent = `O Número ${num2} é o Menor`
    }else if(num3 < num1 && num3 < num2 && num3 < num4) {
        result.textContent = `O Número ${num3} é o Menor`
    }else if(num4 < num1 && num4 < num2 && num4 < num3) {
        result.textContent = `O Número ${num4} é o Menor`
    }else {
        result.textContent = `Todos os números são iguais`
    }

}

btmCalc.onclick = () => {
    getMenorValor()
}