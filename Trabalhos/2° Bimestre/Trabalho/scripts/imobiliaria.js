let larguraInput = document.querySelector('#larguraInput');
let comprimentoInput = document.querySelector('#comprimentoInput');
let btn = document.querySelector('#btn')
let resultContainer = document.querySelector('#resultContainer');

function calcArea() {
   let largura = Number(larguraInput.value);
   let comprimento = Number(comprimentoInput.value);
   let area =  largura * comprimento;

   resultContainer.innerHTML = `<p class="text-center mt-4 fs-5"> A área do seu terreno é de: ${area}m²</p>`;
}


btn.onclick = () => {
    console.log('teste')
    calcArea();
}   