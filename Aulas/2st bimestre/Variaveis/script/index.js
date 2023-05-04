//Importando os Elementos HTML
let title = document.querySelector('#title'); 
let textInput = document.querySelector('#textInput');
let btTrocarTexto = document.querySelector('#btTrocarTexto');

function alterarTitulo(){
    //aderindo a variavel text o value inserido no input transformado em String
    let text = String(textInput.value);

    //Inserindo o valor de text para o textcontent do title
    title.textContent = text;
}

// call back function
btTrocarTexto.onclick = () => {
    alterarTitulo()
}
