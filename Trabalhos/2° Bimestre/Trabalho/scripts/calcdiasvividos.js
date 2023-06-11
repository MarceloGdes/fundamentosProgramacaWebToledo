/*Desenvolva	uma	página	para	ler	o	nome	e	a	idade	de	uma	pessoa,	e	exibir	quantos	dias de	vida	ela	possui.	Considere	sempre	anos	completos,	e	que	um	ano	possui	365	dias.Ex.:	uma	pessoa	com	19	anos	possui	6935	dias	de	vida;	veja	um	exemplo	de	saída:	
MARIA,	VOCÊ	JÁ	VIVEU	6935	DIAS*/


let btn = document.querySelector('#btn');
let resultContainer = document.querySelector('#resultContainer');
let nomeInput = document.querySelector('#nomeInput');
let idadeInput = document.querySelector('#idadeInput');

function calcDias() {
    let nome = String(nomeInput.value);
    let idade = Number(idadeInput.value);
    let dias = 365

    let diasVividos =  dias * idade
    resultContainer.innerHTML = `<p class="text-center mt-4 fs-5"> ${nome}, você já viveu ${diasVividos} dias.</p>`
}


btn.onclick = () => {
    calcDias()
}