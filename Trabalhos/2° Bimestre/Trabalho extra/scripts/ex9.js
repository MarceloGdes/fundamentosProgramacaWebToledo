let ex9valorTotalInput =  document.querySelector('#ex9-valorTotalInput');
let ex9metodoPagSelect =  document.querySelector('#ex9-metodoPagSelect');
let ex9Btn = document.querySelector('#ex9-btn');
let ex9Result = document.querySelector('#ex9-result');

function calcCredito() {
    let valorTotal = Number(ex9valorTotalInput.value);
    let metodoPag =  ex9metodoPagSelect.options[ex9metodoPagSelect.selectedIndex].value
    let valorAPagar = 0;

    if(metodoPag == 'Àvista em dinheiro ou cheque') {
        valorAPagar = valorTotal - (valorTotal * 0.1)
    }else if(metodoPag == 'Àvista no cartão de crédito') {
        valorAPagar = valorTotal - (valorTotal * 0.15)
    }else if(metodoPag == 'Em duas vezes c/ juros') {
        valorAPagar = valorTotal;
    }else if(metodoPag == 'Em duas vezes s/ juros') {
        valorAPagar = valorTotal + (valorTotal * 0.1)
    }

    ex9Result.innerHTML=`O Valor total a pagar será R$ ${valorAPagar}`;
}

ex9Btn.onclick = () => {
    calcCredito();
}