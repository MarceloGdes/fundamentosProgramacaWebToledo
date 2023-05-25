let qtdPessoas = document.querySelector('#qntdPessoasInputOmelete');
let omeleteBtm = document.querySelector('#omeleteBtm');
let resultOmelete = document.querySelector('#resultOmelete');

function getItemsQntd(peopleQntd) {
    let totalChesse =  peopleQntd * 50
    let totalEggs =  peopleQntd * 2

    resultOmelete.textContent = `Será necessario ${totalChesse}g de Queijo e ${totalEggs} Ovos`
}


omeleteBtm.onclick = () => {
    people = Number(qtdPessoas.value)
    getItemsQntd(people)
}
