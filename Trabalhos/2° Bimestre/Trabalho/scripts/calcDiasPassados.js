let btn = document.querySelector('#btn');
let resultContainer = document.querySelector('#resultContainer');
let dataInput = document.querySelector('#dataInput');

function calcDias() {
    // pegando a data e dividindo a string por "-"  e colocando em um array
    let [ano, mes, dias] = dataInput.value.split('-');

    let totalDias = Number(mes) * 30 - (30 - dias);

    resultContainer.innerHTML = `<p class="text-center mt-4 fs-5">Desde o inicio de ${ano}, até a data de ${dias}/${mes}/${ano} se passaram ${totalDias} dias (levando em consideração que o mês tem 30 dias por padrão).</p>` 
}


btn.onclick = () => {
    calcDias();
}