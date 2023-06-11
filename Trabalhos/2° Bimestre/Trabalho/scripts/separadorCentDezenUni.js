let btn = document.querySelector('#btn');
let resultContainer = document.querySelector('#resultContainer');

let numInput = document.querySelector('#numInput');


function separarNumeros() {

    let num =  Number(numInput.value);
    let centena =  Math.floor(num / 100) 
    let dezena = Math.floor((num % 100) / 10) 
    let unidade = num % 10
    console.log(centena, dezena, unidade);

    resultContainer.innerHTML = `
        <p class="text-center mt-4 fs-5">Centena = ${centena}</p>
        <p class="text-center mt-4 fs-5">Dezena =  ${dezena}</p>
        <p class="text-center mt-4 fs-5">Unidade =  ${unidade}</p>
    `;

}



btn.onclick = () => {
 separarNumeros()
}
   