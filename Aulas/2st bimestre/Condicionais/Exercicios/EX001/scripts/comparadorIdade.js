let nameInput1 = document.querySelector('#nameInput1')
let nameInput2 = document.querySelector('#nameInput2')
let nameInput3 = document.querySelector('#nameInput3')
let anoInput1 = document.querySelector('#anoInput1')
let anoInput2 = document.querySelector('#anoInput2')
let anoInput3 = document.querySelector('#anoInput3')
let btmAddList = document.querySelector('#btmAddList')
let resultList = document.querySelector('#resultList')



function renderList(maior, medio, menor) {
    resultList.innerHTML = `
        <li>Pessoa mais velha: ${maior.nome} - ${2023 - maior.ano} Anos</li>
        <li>Segunda Pessoa mais velha: ${medio.nome} - ${2023 - medio.ano} Anos</li>
        <li>Terceira Pessoa mais velha: ${menor.nome} - ${2023 - menor.ano} Anos</li>
    `
}


function verify() {

    let pessoa1 = {
        nome: String(nameInput1.value),
        ano: Number(anoInput1.value), 
    }
    let pessoa2 = {
        nome: String(nameInput2.value),
        ano: Number(anoInput2.value)
    }
    let pessoa3 = {
        nome: String(nameInput3.value),
        ano: Number(anoInput3.value)
    }


    if(pessoa1.ano <= pessoa2.ano && pessoa1.ano <= pessoa3.ano) {
        if(pessoa2.ano <= pessoa3.ano){

            renderList(pessoa1, pessoa2, pessoa3)
        }else {
            renderList(pessoa1, pessoa3, pessoa2)
        }
    }else if(pessoa2.ano <= pessoa1.ano && pessoa2.ano <= pessoa3.ano) {
        if(pessoa1.ano <= pessoa3.ano){
            console.log()
            renderList(pessoa2, pessoa1, pessoa3)
        }else {
            renderList(pessoa2, pessoa3, pessoa1)
        }
    }else if(pessoa3.ano <= pessoa1.ano && pessoa3.ano <= pessoa2.ano) {
        if(pessoa2.ano <= pessoa1.ano){
            console.log()
            renderList(pessoa3, pessoa2, pessoa1)
        }else {
            renderList(pessoa3, pessoa1, pessoa2)
        }
    }

    //fazer uma função onde é passado nos argumentos e a ordem correta que é para printar na tela
    
    
}



btmAddList.onclick = () => {
    console.log(1)
    verify()
}