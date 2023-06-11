let inputCode = document.querySelector('#inputCode')
let btm = document.querySelector('#btm')
let result = document.querySelector('#result')

function filterProductsByCode (code) {
    if(code === 001) {
        result.textContent = `001 - Parafuso`
    }else if(code === 002) {
        result.textContent = `002 - Porca`
    }else if(code === 003) {
        result.textContent = `003 - Prego`
    }else {
        result.textContent = `${code} - Diversos`
    }
}

btm.onclick = () => {
    let code =  Number(inputCode.value)
    filterProductsByCode(code)
}