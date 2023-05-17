let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btm = document.querySelector("#btm");
let resultTitle = document.querySelector("#resultTitle");
 

function somar() {
    let resultado = Number(num1.value) + Number(num2.value);

    //console.log(typeof resultado)
    resultTitle.innerHTML = resultado;
}

btm.onclick = () => {
    somar();
}
