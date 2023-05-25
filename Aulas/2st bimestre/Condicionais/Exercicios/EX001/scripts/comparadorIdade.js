let nameInput1 = document.querySelector('#nameInput1')
let nameInput2 = document.querySelector('#nameInput2')
let nameInput3 = document.querySelector('#nameInput3')
let anoInput1 = document.querySelector('#anoInput1')
let anoInput2 = document.querySelector('#anoInput2')
let anoInput3 = document.querySelector('#anoInput3')
let btmAddList = document.querySelector('#btmAddList')
let resultMenor = document.querySelector('#resultMenor')
let resultMedio = document.querySelector('#resultMedio')
let resultMaior = document.querySelector('#resultMaior')



function addList() {

    let pessoa1 = {
        nome: String(nameInput1.value),
        ano: Number(anoInput1.value)
    }
    let pessoa2 = {
        nome: String(nameInput2.value),
        ano: Number(anoInput2.value)
    }
    let pessoa3 = {
        nome: String(nameInput3.value),
        ano: Number(anoInput3.value)
    }

    if(pessoa1.ano < pessoa2.ano && pessoa1.ano < pessoa3.ano) {
        if(pessoa3.ano > pessoa2.ano){

        }
    }

    //fazer uma função onde é passado nos argumentos a ordem correta que é para printar na tela
    
    
}



btmAddList.onclick = () => {
    addList()
}