let btn = document.querySelector('#btn');
let resultContainer = document.querySelector('#resultContainer');
let pesoTotalInput = document.querySelector('#pesoTotalInput');

function calcValorPagar() {
    let pesoTotal =  Number(pesoTotalInput.value);
    let valorPagar = 12 * pesoTotal;

    resultContainer.innerHTML = `<p class="text-center mt-4 fs-5">Ficou R$ ${valorPagar} o total a ser pago pela sua refeição.</p>` 
}


btn.onclick = () => {
    calcValorPagar()
}