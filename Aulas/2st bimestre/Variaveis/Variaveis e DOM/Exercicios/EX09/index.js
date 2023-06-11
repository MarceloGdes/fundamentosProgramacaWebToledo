let inputNum1 = document.querySelector('#input_num1')
let btm = document.querySelector('#btm')
let result = document.querySelector('#result')

function verifyNumber (num) {
    if(num % 2 === 0) {
       result.textContent = `O número ${num} é Par`
    }else {
        result.textContent = `O número ${num} é Impar`
    }
    
}

btm.onclick = () => {
    let num =  Number(inputNum1.value)
    verifyNumber(num)
}