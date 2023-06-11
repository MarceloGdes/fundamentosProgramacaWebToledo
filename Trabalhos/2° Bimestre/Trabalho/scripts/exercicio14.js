let btn = document.querySelector('#btn');
let valorTotalInput = document.querySelector('#valorTotalInput');

let raioInput = document.querySelector('#raioInput');


function dividirConta() {
    let valorTotal = Number(valorTotalInput.value);

    let carlos = Math.floor(valorTotal / 3) 
    let andre =  Math.floor(valorTotal / 3)
    let felipe = Math.floor(valorTotal / 3) + valorTotal % 3

    resultContainer.innerHTML = `
        <p class="text-center mt-4 fs-5">A divisão da conta de R$ ${valorTotal} resulta em R$ ${carlos} para o Carlos, R$ ${andre} para o André e R$ ${felipe} para o Felipe</p>
    `;

}



btn.onclick = () => {
    dividirConta()
}
   