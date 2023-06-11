/*Um	motorista	deseja	colocar	no	seu	tanque	X	reais	de	gasolina.	Desenvolva	uma	
página	para	ler	o	preço	do	litro	da	gasolina	e	o	valor	do	pagamento,	e	exibir	quantos	
litros	ele	conseguiu	colocar	no	tanque.		
*/ 

let btn = document.querySelector('#btn');
let resultContainer = document.querySelector('#resultContainer');
let valorTotalInput = document.querySelector('#valorTotalInput');
let precoGasolinaInput = document.querySelector('#precoGasolinaInput');

function calcLitros() {
    
    let vlrTotal = Number(valorTotalInput.value);
    let precoGas =  Number(precoGasolinaInput.value);

    let litros =  (vlrTotal / precoGas).toFixed(2);

    resultContainer.innerHTML = `<p class="text-center mt-4 fs-5"> Pagando R$ ${vlrTotal} na gasolina com o litro a R$ ${precoGas}, ira ser colocado em seu tanque ${litros} Litros </p>`
}

btn.onclick = () => {
    calcLitros()
}