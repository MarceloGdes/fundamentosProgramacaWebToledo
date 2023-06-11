let ex10qntdAulasInput =  document.querySelector('#ex10-qntdAulasInput');
let ex10nivelSelect =  document.querySelector('#ex10-nivelSelect');
let ex10Btn = document.querySelector('#ex10-btn');
let ex10Result = document.querySelector('#ex10-result');

function calcSalario() {
    let qntdAulas = Number(ex10qntdAulasInput.value);
    let nivel =  ex10nivelSelect.options[ex10nivelSelect.selectedIndex].value
    let salario = 1;

    if(nivel === 'nivel 1') {
        salario = 12.00 *  qntdAulas * 4.5;
    }else if(nivel === 'nivel 2') {
        salario = 17.00 *  qntdAulas * 4.5;
    }else if(nivel === 'nivel 3') {
        salario = 25.00 * qntdAulas * 4.5;
    }
   

    ex10Result.innerHTML=`Salário a ser recebido: R$ ${salario}`;
}

ex10Btn.onclick = () => {
    calcSalario();
}