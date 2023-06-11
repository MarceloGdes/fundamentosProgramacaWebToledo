let ex7ProdutoInput =  document.querySelector('#ex7-produtoInput');
let ex7QntdInput =  document.querySelector('#ex7-qntdInput');
let ex7Btn = document.querySelector('#ex7-btn');
let ex7Result = document.querySelector('#ex7-result');

function calcCredito() {
    let qntd = Number(ex7QntdInput.value);
    let produto =  String(ex7ProdutoInput.value);
    let total = 0

    if(produto == 'Cachorro quente') {
        total = qntd * 11.00
    }else if(produto == 'Bauru') {
        total = qntd * 8.50
    }else if(produto == 'Misto quente') {
        total = qntd * 8.00
    }else if(produto == 'Hamburger') {
        total = qntd * 9.00
    }else if(produto == 'Cheeseburger') {
        total = qntd * 10.00
    }else if(produto == 'Refrigerante') {
        total = qntd * 4.50
    }else {
        ex7Result.innerHTML=`Iten não encontrado no cardápio`;
        return
    }    

    ex7Result.innerHTML=`O Total a ser pago é R$ ${total}`;
}

ex7Btn.onclick = () => {
    console.log('teste')
    calcCredito();
}