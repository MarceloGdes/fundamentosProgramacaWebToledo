let btn = document.querySelector('#btn');
let resultContainer = document.querySelector('#resultContainer');

let pontoAXInput = document.querySelector('#pontoAXInput');
let pontoAYInput = document.querySelector('#pontoAYInput');
let pontoBXInput = document.querySelector('#pontoBXInput');
let pontoBYInput = document.querySelector('#pontoBYInput');

function calcDistancia() {

    let ax = Number(pontoAXInput.value);
    let ay = Number(pontoAYInput.value);
    let bx = Number(pontoBXInput.value);
    let by = Number(pontoBYInput.value);

    let quadX = (bx - ax) ** 2
    let quadY = (by - ay) ** 2

    let distancia =  Math.sqrt(quadX + quadY);


    resultContainer.innerHTML = `
        <p class="text-center mt-4 fs-5">A distancia entre A(${ax}, ${ay}) e B(${bx}, ${by}) é: ${distancia}</p>
    ` ;
}


btn.onclick = () => {
    calcDistancia();
}