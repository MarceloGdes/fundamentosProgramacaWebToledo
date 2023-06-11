let btn = document.querySelector('#btn');
let resultContainer = document.querySelector('#resultContainer');

let raioInput = document.querySelector('#raioInput');


function calcArea() {

    let r =  Number(raioInput.value);
    let area = 3.14 * (r**2)

    resultContainer.innerHTML = `
        <p class="text-center mt-4 fs-5">A area da pizza é de ${area}cm2</p>
    `;

}



btn.onclick = () => {
    calcArea()
}


//