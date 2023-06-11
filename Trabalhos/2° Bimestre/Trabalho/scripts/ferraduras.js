let cavalosinput = document.querySelector('#cavalosInput');


let btn = document.querySelector('#btn')
let resultContainer = document.querySelector('#resultContainer');

function calc() {
   let cavalos = Number(cavalosinput.value);

   let qntdFerraduras =  cavalos * 4;

   resultContainer.innerHTML = `<p class="text-center mt-4 fs-5">São necessárias ${qntdFerraduras}  ferraduras ao total</p>`;
}


btn.onclick = () => {
    console.log('teste')
    calc();
}   