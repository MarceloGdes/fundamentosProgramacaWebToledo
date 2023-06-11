let btn = document.querySelector('#btn');
let resultContainer = document.querySelector('#resultContainer');

let diasInput = document.querySelector('#diasInput');


function calcTempo() {

    var qtddias =  Number(diasInput.value);
    var qtdmes = 0;
    var qtdano = 0;

    while(qtddias >= 1) {
        if(qtddias >= 365) {
            qtddias = qtddias - 365;
            qtdano++;


        }else if(qtddias >= 30) {
            qtddias = qtddias - 30;
            qtdmes++;

        }else if(qtddias >= 1){
            qtddias--;

        }
    }

    return `<p class="text-center mt-4 fs-5">${qtdano} ano(s), ${qtdmes} mes(es) ${qtddias} dia(s)</p>`
    
}


btn.onclick = () => {
    let resultado = calcTempo()
    resultContainer.innerHTML = resultado;
}