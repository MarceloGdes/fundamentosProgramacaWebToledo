let paesFrancesesInput = document.querySelector('#paesFrancesesInput');
let broasInput = document.querySelector('#broasInput');

let btn = document.querySelector('#btn')
let resultContainer = document.querySelector('#resultContainer');

function calc() {
   let paesFranceses = Number(paesFrancesesInput.value);
   let broas = Number(broasInput.value);

   let totalPaes = paesFranceses * 0.12;
   let totalBroas = broas * 1.50;
   let totalFaturado = totalBroas + totalPaes;
   let poupança =  0.1 * totalFaturado;

   resultContainer.innerHTML = `
   <p class="text-center mt-4 fs-5"> 
   Hoje foi faturado R$ ${totalPaes} de Pães Franceses e R$ ${totalBroas} de Broas </p>
   <p class="text-center mt-4 fs-5"> Total faturado Hoje: R$ ${totalFaturado} </p>
   <p class="text-center mt-4 fs-5"> Deve ser investido na poupança o valor de R$ ${poupança}</p>
   `;
}


btn.onclick = () => {
    console.log('teste')
    calc();
}   