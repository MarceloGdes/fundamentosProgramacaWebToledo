let btn = document.querySelector('#btn');
let resultContainer = document.querySelector('#resultContainer');

let salarioInput = document.querySelector('#salarioInput');


function calcNovoSalario() {

    let salario =  Number(salarioInput.value);
    let aumentoSalario = salario + salario * 0.15;
    let descontoSalario = aumentoSalario - aumentoSalario * 0.08;

    resultContainer.innerHTML = `
        <p class="text-center mt-4 fs-5">Seu salário com aumento de 15% fica: R$ ${aumentoSalario}</p>
        <p class="text-center mt-4 fs-5">Seu salário com desconto de 8% fica: R$ ${descontoSalario}</p>
    `;

}



btn.onclick = () => {
 calcNovoSalario()
}
   