let valor1 =  document.querySelector("#valor1")
let btm = document.querySelector("#btm")
let titulo =  document.querySelector("#titulo")
let titulo2 =  document.querySelector("#titulo2")

function calcSaldo() {
    let saldo = Number(valor1.value)
    let porcentagem =  saldo * 0.01;
    let valorFinal =  saldo + porcentagem;
    titulo2.innerHTML = `Valor reajsutado com 1%: ${valorFinal}`;
}

btm.onclick = () => {
    calcSaldo()
}

