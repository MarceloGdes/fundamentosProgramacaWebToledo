let ex3ValorInput =  document.querySelector('#ex3-valorInput');
let ex3Btn = document.querySelector('#ex3-btn');
let ex3Result = document.querySelector('#ex3-result');

function calcQntdNotas(){
    let valor = Number(ex3ValorInput.value)

    let notas100 =  Math.floor(valor/100)
    valor %= 100

    let notas50 = Math.floor(valor/50)
    valor %= 50

    let notas10 = Math.floor(valor/10)
    valor %= 10

    let notas5 = Math.floor(valor/5)
    valor %= 5

    let notas1 =  valor

    ex3Result.innerHTML = `Para o valor de R$ ${Number(ex3ValorInput.value)} são nescessarias ${notas100} nota(s) de 100,00; ${notas50} nota(s) de 50,00; ${notas10} nota(s) de 10,00; ${notas5} notas de 5,00 e ${notas1} de 1,00 `
}

ex3Btn.onclick = () => {
    calcQntdNotas();
}