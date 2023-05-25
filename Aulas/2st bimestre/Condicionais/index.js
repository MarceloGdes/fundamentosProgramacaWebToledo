let media  =  document.querySelector('#media')
let btm  =  document.querySelector('#btm')

function getMedia() {
    // desvio condicional simples
    // if(media.value > 60) {
    //     alert('O Aluno esta aprovado')
    // }else{
    //     alert('O Aluno esta reprovado')
    // }

    //Desvio condicional composto

    if(media.value > 60) {
        alert('Aluno esta Aprovado');
    }else if(media.value > 20 && media.value <= 60  ) {
        alert('Aluno devera fazer SUB');
    }else {
        alert('O Aluno esta Reprovado')
    }
}

// >, <, ===, !==, >==, <==
// && ---> E
//|| ----> Ou

btm.onclick = () => {
    getMedia()
}
