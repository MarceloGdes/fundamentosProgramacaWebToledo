let weightPriceInput = document.querySelector('#weightPriceInput');
let weightInput = document.querySelector('#weightInput');
let btm = document.querySelector('#btm');
let result = document.querySelector('#result');

function calcWeight() {
    let valorFinal =  Number(weightPriceInput.value) * Number(weightInput.value);
    result.innerHTML = `O Valor total a ser pago é R$ ${valorFinal}`
}

btm.onclick = () => {
    calcWeight()
}
