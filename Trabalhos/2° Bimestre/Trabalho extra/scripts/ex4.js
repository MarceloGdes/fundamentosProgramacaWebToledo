let ex4VrlVeiculoInput =  document.querySelector('#ex4-vrlVeiculoInput');
let ex4AnoVeiculoinput =  document.querySelector('#ex4-anoVeiculoinput');
let ex4Btn = document.querySelector('#ex4-btn');
let ex4Result = document.querySelector('#ex4-result');

function calcTaxa() {
    let vlrVeiculo =  Number(ex4VrlVeiculoInput.value);
    let AnoVeiculo =  Number(ex4AnoVeiculoinput.value);
    let imposto = 0
    if( AnoVeiculo >= 1990) {
        imposto =  vlrVeiculo * 0.15
        ex4Result.innerHTML = `O Valor a ser pago se imposto será: R$ ${imposto}`
    }else {
        imposto =  vlrVeiculo * 0.1
        ex4Result.innerHTML = `O Valor a ser pago se imposto será: R$ ${imposto}`
    }
}

ex4Btn.onclick = () => {
    calcTaxa();
}