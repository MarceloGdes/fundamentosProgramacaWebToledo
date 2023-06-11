let xInput =  document.querySelector('#ex2-xInput');
let yInput =  document.querySelector('#ex2-yInput');
let zInput =  document.querySelector('#ex2-zInput');
let ex2Btn = document.querySelector('#ex2-btn');
let ex2Result = document.querySelector('#ex2-result');

function verificaPiramide(){
    let x = Number(xInput.value);
    let y = Number(yInput.value);
    let z = Number(zInput.value);
    
    if(x < y + z && y < z + x && z < x + y) {
        if( x === z & y === z && x === y) {
            ex2Result.innerHTML = `é um triângulo Equilátero`
        }else if( x === y || x === z || y === z){
            ex2Result.innerHTML = `é um triângulo Isóceles`
        }else if( x !== y && y !== z && z !== x){
            ex2Result.innerHTML = `é um triângulo Escaleno`
        }
    }else {
        ex2Result.innerHTML = `Os valores não formam um triangulo`
    }
}


ex2Btn.onclick = () => {
    verificaPiramide();
}
