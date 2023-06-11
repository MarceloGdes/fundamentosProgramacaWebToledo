// Importanto os elementos do HTML
let completeNameTitle = document.querySelector("#completeNameTitle");
let nameInput = document.querySelector("#name");
let surnameInput = document.querySelector("#surname");
let buttom = document.querySelector("#btm");


function transformTitle() {
    let newName = String(nameInput.value)
    let newSurname = String(surnameInput.value)
    //completeNameTitle.textContent += newName + '' + newSurname;
    // prorpiedade innerHTML atribui elementos no HTML
    completeNameTitle.innerHTML += newName + '' + newSurname + "<br>";

}

buttom.onclick = () => {
   transformTitle();
   console.log(completeNameTitle.__proto__)
}

