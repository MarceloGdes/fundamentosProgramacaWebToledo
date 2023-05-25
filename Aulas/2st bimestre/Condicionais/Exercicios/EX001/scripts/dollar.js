let dollarInput = document.querySelector('#dollarInput');
let dollarBtm = document.querySelector('#dollarBtm');
let resultDollar = document.querySelector('#resultDollar');
let resultDollar2 = document.querySelector('#resultDollar2');
let resultDollar3 = document.querySelector('#resultDollar3');
let resultDollar4 = document.querySelector('#resultDollar4');

function printReajusteDollar() {
    let dollar =  Number(dollarInput.value);

    resultDollar.textContent = `O Valor de $${dollar} reajustado em 1% é: ${getDolarReajustado(dollar, 1/100)}`;
    resultDollar2.textContent = `O Valor de $${dollar} reajustado em 2% é: ${getDolarReajustado(dollar, 2/100)}`;
    resultDollar3.textContent = `O Valor de $${dollar} reajustado em 5% é: ${getDolarReajustado(dollar, 5/100)}`;
    resultDollar4.textContent = `O Valor de $${dollar} reajustado em 10% é: ${getDolarReajustado(dollar, 10/100)}`;
}

function getDolarReajustado(dolar, reajuste) {
    let resultPorcentagen =  dolar * reajuste;
    return dolar + resultPorcentagen;
}


dollarBtm.onclick = () => {
    printReajusteDollar();
}

