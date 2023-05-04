// Importanto os elementos do HTML
let completeNameTitle = document.querySelector("#completeNameTitle");
let nameInput = document.querySelector("#name");
let surnameInput = document.querySelector("#surname");
let buttom = document.querySelector("#btm");

function transformTitle() {
    let newName = nameInput.value;
    let newSurname = surnameInput.value;
    completeNameTitle.textContent = newName + ' ' + newSurname;
}

buttom.onclick = () => {
   transformTitle();
}