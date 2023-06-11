let btn = document.querySelector('#btn');
let resultContainer = document.querySelector('#resultContainer');

let camisetasPInput = document.querySelector('#camisetasPInput');
let camisetasMInput = document.querySelector('#camisetasMInput');
let camisetasGInput = document.querySelector('#camisetasGInput');

function calcFaturamento() {

    let camP = Number(camisetasPInput.value);
    let camM = Number(camisetasMInput.value);
    let camG = Number(camisetasGInput.value);

    let totalCamP = camP * 10;
    let totalCamM = camM * 12;
    let totalCamG = camG * 15;

    let totalAPagar = totalCamP + totalCamM + totalCamG;

    resultContainer.innerHTML = `
        <p class="text-center mt-4 fs-5">Total a pagar nas camisas P: R$ ${totalCamP}</p>
        <p class="text-center mt-4 fs-5">Total a pagar nas camisas M: R$ ${totalCamM}</p>
        <p class="text-center mt-4 fs-5">Total a pagar nas camisas G: R$ ${totalCamG}</p>
        <p class="text-center mt-4 fs-5">Total a pagar: R$ ${totalAPagar} </p>
    ` ;
}


btn.onclick = () => {
    calcFaturamento();
}