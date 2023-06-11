let ex5SalarioInput =  document.querySelector('#ex5-salarioInput');
let ex5CargoInput =  document.querySelector('#ex5-cargoInput');
let ex5Btn = document.querySelector('#ex5-btn');
let ex5Result = document.querySelector('#ex5-result');

function calcAumento() {
    let cargo = String(ex5CargoInput.value);
    let salario = Number(ex5SalarioInput.value);
    let taxaAumento = 0

    if(cargo == 'Gerente') {
        taxaAumento =  0.1;
    }else if(cargo == 'Engenheiro') {
        taxaAumento =  0.2;
    }else if(cargo == 'Técnico') {
        taxaAumento =  0.3;
    }else {
        taxaAumento = 0.4;
    }

    let aumento =  salario * taxaAumento;
    let salarioAtualizado = salario + aumento;

    ex5Result.innerHTML = `Seu salário saiu de R$ ${salario} e aumentou para R$ ${salarioAtualizado}, tendo uma diferença de R$ ${aumento}`
}

ex5Btn.onclick = () => {
    calcAumento();
}