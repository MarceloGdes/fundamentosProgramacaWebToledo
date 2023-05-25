let numInt1Input =  document.querySelector('#numInt1Input')
let numInt2Input =  document.querySelector('#numInt2Input')
let numIntBtm =  document.querySelector('#numIntBtm')
let resultNumInt =  document.querySelector('#resultNumInt')

function calc() {
    let num1 = Number(numInt1Input.value)
    let num2 =  Number(numInt2Input.value)

    let soma =  num1 + num2;
    let sub =  num1 - num2;
    let mult =  num1 * num2;
    let div =  num1 / num2

    resultNumInt.innerHTML = `
    <p>A soma dos números ${num1} e ${num2} é igual a: ${soma}</p>
    <p>A subtração dos números ${num1} e ${num2} é igual a: ${sub}</p>
    <p>A Multiplicação dos números ${num1} e ${num2} é igual a: ${mult}</p>
    <p>A Divisão dos números ${num1} e ${num2} é igual a: ${div}</p>
    `
}


numIntBtm.onclick = () => {
    calc()
}
