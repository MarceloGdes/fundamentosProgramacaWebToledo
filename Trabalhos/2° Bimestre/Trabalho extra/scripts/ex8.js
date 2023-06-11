let ex8sexoInput =  document.querySelector('#ex8-sexoInput');
let ex8alturaInput =  document.querySelector('#ex8-alturaInput');
let ex8Btn = document.querySelector('#ex8-btn');
let ex8Result = document.querySelector('#ex8-result');

function calcCredito() {
    let altura = Number(ex8alturaInput.value);
    let sexo =  String(ex8sexoInput.value);
    let pesoIdeal = 0;

    if(sexo  == 'masculino') {
        pesoIdeal = (72.7 * altura) - 58;

    }else if(sexo == 'feminino') {
        pesoIdeal =  (62.1 * altura) - 44.7
    }

    ex8Result.innerHTML=`O peso é deal para você é ${pesoIdeal}`;
}

ex8Btn.onclick = () => {
    calcCredito();
}