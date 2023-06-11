let ex6SaldoInput =  document.querySelector('#ex6-saldoInput');
let ex6Btn = document.querySelector('#ex6-btn');
let ex6Result = document.querySelector('#ex6-result');

function calcCredito() {
    let saldoMedio = Number(ex6SaldoInput.value);
    let taxaCredito =  0

    if(saldoMedio <= 200) {
        ex6Result.innerHTML=`Você não tem direito a crédito.`
        return
    }else if( saldoMedio >= 201 & saldoMedio <= 400) {
        taxaCredito = 0.2;
    }else if( saldoMedio >= 401 & saldoMedio <= 600) {
        taxaCredito = 0.3
    }else {
        taxaCredito = 0.4
    }

    let valorCredito = saldoMedio * taxaCredito;

    ex6Result.innerHTML=`Para o saldo médio de R$ ${saldoMedio} você tem liberado R$ ${valorCredito} de crédito`
}

ex6Btn.onclick = () => {
    calcCredito();
}