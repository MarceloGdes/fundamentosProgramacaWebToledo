let num1Input =  document.querySelector('#ex1-numInput1');
let num2Input =  document.querySelector('#ex1-numInput2');
let num3Input =  document.querySelector('#ex1-numInput3');
let num4Input =  document.querySelector('#ex1-numInput4');
let num5Input =  document.querySelector('#ex1-numInput5');
let btn = document.querySelector('#ex1-btn')
let resultDiv = document.querySelector('#ex1-result');

function ordemDecrescente() {
    let num1 = Number(num1Input.value)
    let num2 = Number(num2Input.value)
    let num3 = Number(num3Input.value)
    let num4 = Number(num4Input.value)
    let num5 = Number(num5Input.value)

    if(num1 <= num2 && num1 <= num3 && num1 <= num4 && num1 <= num5) { 
        console.log("numero 1 é o primeiro da lista")

        if(num2 <= num3 && num2 <= num4 && num2 <= num5) {

            console.log("numero 2 é o segundo da lista")

            if(num3 <= num4 && num3 <= num5) {
                console.log("numero 3 é o Terceiro da lista")

                if(num4 <= num5) {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num4} ${num3} ${num2} ${num1}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num5} ${num3} ${num2} ${num1}`
                }

            }else if(num4 <= num3 && num4 <= num5) {
                console.log("numero 4 é o Terceiro da lista")
                if(num3 <= num5) {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num3} ${num4} ${num2} ${num1}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num5} ${num4} ${num2} ${num1}`
                }

            }else if(num5 <= num3 && num5 <= num4) {
                console.log("numero 5 é o Terceiro da lista")
                if(num3 <= num4) {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num3} ${num5} ${num2} ${num1}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num4} ${num5} ${num2} ${num1}`
                }
            }

        
        }else if(num3 <= num2 && num3 <= num4 && num3 <= num5) {
            console.log("numero 3 é o segundo da lista")

            if(num2 <= num4 && num2 <= num5) {
                console.log("numero 2 é o Terceiro da lista")

                if(num4 <= num5) {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num4} ${num2} ${num3} ${num1}`

                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num5} ${num2} ${num3} ${num1}`
                }

            }else if(num4 <= num2 && num4 <= num5) {
                console.log("numero 4 é o Terceiro da lista")
                if(num2 <= num5) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num2} ${num4} ${num3} ${num1}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num5} ${num4} ${num3} ${num1}`
                }

            }else if(num5 <= num2 && num5 <= num4) {
                console.log("numero 5 é o Terceiro da lista")
                if(num2 <= num4) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num2} ${num5} ${num3} ${num1}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num4} ${num5} ${num3} ${num1}`
                }
            }

            

        }else if(num4 <= num2 && num4 <= num3 && num4 <= num5) {
            console.log("numero 4 é o segundo da lista")
            if(num2 <= num3 && num2 <= num5) {
                console.log("numero 2 é o Terceiro da lista")

                if(num3 <= num5) {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num3} ${num2} ${num4} ${num1}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num5} ${num2} ${num4} ${num1}`
                }

            }else if(num3 <= num2 && num3 <= num5) {
                console.log("numero 3 é o Terceiro da lista")
                if(num2 <= num5) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num2} ${num3} ${num4} ${num1}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num5} ${num3} ${num4} ${num1}`
                }

            }else if(num5 <= num2 && num5 <= num3) {
                console.log("numero 5 é o Terceiro da lista")
                if(num2 <= num3) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num2} ${num5} ${num4} ${num1}`
                }else {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num3} ${num5} ${num4} ${num1}`
                }
            }


        }else if(num5 <= num2 && num5 <= num3 && num5 <= num4) {
            console.log("numero 5 é o segundo da lista")
            if(num2 <= num3 && num2 <= num4) {
                console.log("numero 2 é o Terceiro da lista")

                if(num3 <= num4) {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num3} ${num2} ${num5} ${num1}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num4} ${num2} ${num5} ${num1}`
                }

            }else if(num3 <= num2 && num3 <= num4) {
                console.log("numero 3 é o Terceiro da lista")
                if(num2 <= num4) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num2} ${num3} ${num5} ${num1}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num4} ${num3} ${num5} ${num1}`
                }

            }else if(num4 <= num2 && num4 <= num3) {
                console.log("numero 4 é o Terceiro da lista")
                if(num2 <= num3) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num2} ${num4} ${num5} ${num1}`
                }else {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num3} ${num4} ${num5} ${num1}`
                }
            }

        }
    
    }else if(num2 <= num1 && num2 <= num3 && num2 <= num4 && num2 <= num5) {
        console.log("numero 2 é o primeiro da lista")
        
        if(num1 <= num3 && num1 <= num4 && num1 <= num5) {

            console.log("numero 1 é o segundo da lista")

            if(num3 <= num4 && num3 <= num5) {
                console.log("numero 3 é o Terceiro da lista")

                if(num4 <= num5) {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num4} ${num3} ${num1} ${num2}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num5} ${num3} ${num1} ${num2}`
                }

            }else if(num4 <= num3 && num4 <= num5) {
                console.log("numero 4 é o Terceiro da lista")
                if(num3 <= num5) {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num3} ${num4} ${num1} ${num2}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num5} ${num4} ${num1} ${num2}`
                }

            }else if(num5 <= num3 && num5 <= num4) {
                console.log("numero 5 é o Terceiro da lista")
                if(num3 <= num4) {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num3} ${num5} ${num1} ${num2}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num4} ${num5} ${num1} ${num2}`
                }
            }

        
        }else if(num3 <= num1 && num3 <= num4 && num3 <= num5) {
            console.log("numero 3 é o segundo da lista")

            if(num1 <= num4 && num1 <= num5) {
                console.log("numero 1 é o Terceiro da lista")

                if(num4 <= num5) {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num4} ${num1} ${num3} ${num2}`

                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num5} ${num1} ${num3} ${num2}`
                }

            }else if(num4 <= num1 && num4 <= num5) {
                console.log("numero 4 é o Terceiro da lista")
                if(num1 <= num5) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num1} ${num4} ${num3} ${num2}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num5} ${num4} ${num3} ${num2}`
                }

            }else if(num5 <= num1 && num5 <= num4) {
                console.log("numero 5 é o Terceiro da lista")
                if(num1 <= num4) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num1} ${num5} ${num3} ${num2}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num4} ${num5} ${num3} ${num2}`
                }
            }

            

        }else if(num4 <= num1 && num4 <= num3 && num4 <= num5) {
            console.log("numero 4 é o segundo da lista")
            if(num1 <= num3 && num1 <= num5) {
                console.log("numero 1 é o Terceiro da lista")

                if(num3 <= num5) {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num3} ${num1} ${num4} ${num2}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num5} ${num1} ${num4} ${num2}`
                }

            }else if(num3 <= num1 && num3 <= num5) {
                console.log("numero 3 é o Terceiro da lista")
                if(num1 <= num5) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num1} ${num3} ${num4} ${num2}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num5} ${num3} ${num4} ${num2}`
                }

            }else if(num5 <= num1 && num5 <= num3) {
                console.log("numero 5 é o Terceiro da lista")
                if(num1 <= num3) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num1} ${num5} ${num4} ${num2}`
                }else {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num3} ${num5} ${num4} ${num2}`
                }
            }


        }else if(num5 <= num1 && num5 <= num3 && num5 <= num4) {
            console.log("numero 5 é o segundo da lista")
            if(num1 <= num3 && num1 <= num4) {
                console.log("numero 2 é o Terceiro da lista")

                if(num3 <= num4) {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num3} ${num1} ${num5} ${num2}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num4} ${num1} ${num5} ${num2}`
                }

            }else if(num3 <= num1 && num3 <= num4) {
                console.log("numero 3 é o Terceiro da lista")
                if(num1 <= num4) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num1} ${num3} ${num5} ${num2}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num4} ${num3} ${num5} ${num2}`
                }

            }else if(num4 <= num1 && num4 <= num3) {
                console.log("numero 4 é o Terceiro da lista")
                if(num1 <= num3) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num1} ${num4} ${num5} ${num2}`
                }else {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num3} ${num4} ${num5} ${num2}`
                }
            }

        }
    }else if(num3 <= num1 && num3 <= num2 && num3 <= num4 && num3 <= num5) {
        console.log("numero 3 é o primeiro da lista")

        if(num1 <= num2 && num1 <= num4 && num1 <= num5) {

            console.log("numero 1 é o segundo da lista")

            if(num2 <= num4 && num2 <= num5) {
                console.log("numero 2 é o Terceiro da lista")

                if(num4 <= num5) {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num4} ${num2} ${num1} ${num3}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num5} ${num2} ${num1} ${num3}`
                }

            }else if(num4 <= num2 && num4 <= num5) {
                console.log("numero 4 é o Terceiro da lista")
                if(num2 <= num5) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num2} ${num4} ${num1} ${num3}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num5} ${num4} ${num1} ${num3}`
                }

            }else if(num5 <= num2 && num5 <= num4) {
                console.log("numero 5 é o Terceiro da lista")
                if(num2 <= num4) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num2} ${num5} ${num1} ${num3}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num4} ${num5} ${num1} ${num3}`
                }
            }

        
        }else if(num2 <= num1 && num2 <= num4 && num2 <= num5) {
            console.log("numero 2 é o segundo da lista")

            if(num1 <= num4 && num1 <= num5) {
                console.log("numero 1 é o Terceiro da lista")

                if(num4 <= num5) {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num4} ${num1} ${num2} ${num3}`

                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num5} ${num1} ${num2} ${num3}`
                }

            }else if(num4 <= num1 && num4 <= num5) {
                console.log("numero 4 é o Terceiro da lista")
                if(num1 <= num5) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num1} ${num4} ${num2} ${num3}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num5} ${num4} ${num2} ${num3}`
                }

            }else if(num5 <= num1 && num5 <= num4) {
                console.log("numero 5 é o Terceiro da lista")
                if(num1 <= num4) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num1} ${num5} ${num2} ${num3}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num4} ${num5} ${num2} ${num3}`
                }
            }

            

        }else if(num4 <= num1 && num4 <= num2 && num4 <= num5) {
            console.log("numero 4 é o segundo da lista")
            if(num1 <= num2 && num1 <= num5) {
                console.log("numero 1 é o Terceiro da lista")

                if(num2 <= num5) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num2} ${num1} ${num4} ${num3}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num5} ${num1} ${num4} ${num3}`
                }

            }else if(num2 <= num1 && num2 <= num5) {
                console.log("numero 2 é o Terceiro da lista")
                if(num1 <= num5) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num1} ${num2} ${num4} ${num3}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num5} ${num2} ${num4} ${num3}`
                }

            }else if(num5 <= num1 && num5 <= num2) {
                console.log("numero 5 é o Terceiro da lista")
                if(num1 <= num2) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num1} ${num5} ${num4} ${num3}`
                }else {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num2} ${num5} ${num4} ${num3}`
                }
            }


        }else if(num5 <= num1 && num5 <= num2 && num5 <= num4) {
            console.log("numero 5 é o segundo da lista")
            if(num1 <= num2 && num1 <= num4) {
                console.log("numero 2 é o Terceiro da lista")

                if(num2 <= num4) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num2} ${num1} ${num5} ${num3}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num4} ${num1} ${num5} ${num3}`
                }

            }else if(num2 <= num1 && num2 <= num4) {
                console.log("numero 2 é o Terceiro da lista")
                if(num1 <= num4) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num1} ${num2} ${num5} ${num3}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num4} ${num2} ${num5} ${num3}`
                }

            }else if(num4 <= num1 && num4 <= num2) {
                console.log("numero 4 é o Terceiro da lista")
                if(num1 <= num2) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num1} ${num4} ${num5} ${num3}`
                }else {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num2} ${num4} ${num5} ${num3}`
                }
            }

        }
    }else if(num4 <= num1 && num4 <= num2 && num4 <= num3 && num4 <= num5) {
        console.log("numero 4 é o primeiro da lista")
        if(num1 <= num2 && num1 <= num3 && num1 <= num5) {

            console.log("numero 1 é o segundo da lista")

            if(num2 <= num3 && num2 <= num5) {
                console.log("numero 2 é o Terceiro da lista")

                if(num3 <= num5) {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num3} ${num2} ${num1} ${num4}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num5} ${num2} ${num1} ${num4}`
                }

            }else if(num3 <= num2 && num3 <= num5) {
                console.log("numero 3 é o Terceiro da lista")
                if(num2 <= num5) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num2} ${num3} ${num1} ${num4}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num5} ${num3} ${num1} ${num4}`
                }

            }else if(num5 <= num2 && num5 <= num3) {
                console.log("numero 5 é o Terceiro da lista")
                if(num2 <= num3) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num2} ${num5} ${num1} ${num4}`
                }else {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num3} ${num5} ${num1} ${num4}`
                }
            }

        
        }else if(num2 <= num1 && num2 <= num3 && num2 <= num5) {
            console.log("numero 2 é o segundo da lista")

            if(num1 <= num3 && num1 <= num5) {
                console.log("numero 1 é o Terceiro da lista")

                if(num3 <= num5) {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num3} ${num1} ${num2} ${num4}`

                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num5} ${num1} ${num2} ${num4}`
                }

            }else if(num3 <= num1 && num3 <= num5) {
                console.log("numero 3 é o Terceiro da lista")
                if(num1 <= num5) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num1} ${num3} ${num2} ${num4}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num5} ${num3} ${num2} ${num4}`
                }

            }else if(num5 <= num1 && num5 <= num3) {
                console.log("numero 5 é o Terceiro da lista")
                if(num1 <= num3) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num1} ${num5} ${num2} ${num4}`
                }else {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num3} ${num5} ${num2} ${num4}`
                }
            }

            

        }else if(num3 <= num1 && num3 <= num2 && num3 <= num5) {
            console.log("numero 3 é o segundo da lista")
            if(num1 <= num2 && num1 <= num5) {
                console.log("numero 1 é o Terceiro da lista")

                if(num2 <= num5) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num2} ${num1} ${num3} ${num4}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num5} ${num1} ${num3} ${num4}`
                }

            }else if(num2 <= num1 && num2 <= num5) {
                console.log("numero 2 é o Terceiro da lista")
                if(num1 <= num5) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 5 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num1} ${num2} ${num3} ${num4}`
                }else {
                    console.log("numero 5 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num5} ${num2} ${num3} ${num4}`
                }

            }else if(num5 <= num1 && num5 <= num2) {
                console.log("numero 5 é o Terceiro da lista")
                if(num1 <= num2) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num1} ${num5} ${num3} ${num4}`
                }else {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num2} ${num5} ${num3} ${num4}`
                }
            }


        }else if(num5 <= num1 && num5 <= num2 && num5 <= num3) {
            console.log("numero 5 é o segundo da lista")
            if(num1 <= num2 && num1 <= num3) {
                console.log("numero 2 é o Terceiro da lista")

                if(num2 <= num3) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num2} ${num1} ${num5} ${num4}`
                }else {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num5} ${num3} ${num1} ${num5} ${num4}`
                }

            }else if(num2 <= num1 && num2 <= num3) {
                console.log("numero 2 é o Terceiro da lista")
                if(num1 <= num3) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num1} ${num2} ${num5} ${num4}`
                }else {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num3} ${num2} ${num5} ${num4}`
                }

            }else if(num3 <= num1 && num3 <= num2) {
                console.log("numero 3 é o Terceiro da lista")
                if(num1 <= num2) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num1} ${num3} ${num5} ${num4}`
                }else {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num2} ${num3} ${num5} ${num4}`
                }
            }

        }
    }else if(num5 <= num1 && num5 <= num2 && num5 <= num3 && num5 <= num4) {
        console.log("numero 4 é o primeiro da lista")
        if(num1 <= num2 && num1 <= num3 && num1 <= num4) {

            console.log("numero 1 é o segundo da lista")

            if(num2 <= num3 && num2 <= num4) {
                console.log("numero 2 é o Terceiro da lista")

                if(num3 <= num4) {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num3} ${num2} ${num1} ${num5}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num4} ${num2} ${num1} ${num5}`
                }

            }else if(num3 <= num2 && num3 <= num4) {
                console.log("numero 3 é o Terceiro da lista")
                if(num2 <= num4) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num2} ${num3} ${num1} ${num5}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num4} ${num3} ${num1} ${num5}`
                }

            }else if(num4 <= num2 && num4 <= num3) {
                console.log("numero 4 é o Terceiro da lista")
                if(num2 <= num3) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num2} ${num4} ${num1} ${num5}`
                }else {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num3} ${num4} ${num1} ${num5}`
                }
            }

        
        }else if(num2 <= num1 && num2 <= num3 && num2 <= num4) {
            console.log("numero 2 é o segundo da lista")

            if(num1 <= num3 && num1 <= num4) {
                console.log("numero 1 é o Terceiro da lista")

                if(num3 <= num4) {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num3} ${num1} ${num2} ${num5}`

                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num4} ${num1} ${num2} ${num5}`
                }

            }else if(num3 <= num1 && num3 <= num4) {
                console.log("numero 3 é o Terceiro da lista")
                if(num1 <= num4) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num1} ${num3} ${num2} ${num5}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num4} ${num3} ${num2} ${num5}`
                }

            }else if(num4 <= num1 && num4 <= num3) {
                console.log("numero 4 é o Terceiro da lista")
                if(num1 <= num3) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num1} ${num4} ${num2} ${num5}`
                }else {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num3} ${num4} ${num2} ${num5}`
                }
            }

            

        }else if(num3 <= num1 && num3 <= num2 && num3 <= num4) {
            console.log("numero 3 é o segundo da lista")
            if(num1 <= num2 && num1 <= num4) {
                console.log("numero 1 é o Terceiro da lista")

                if(num2 <= num4) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num2} ${num1} ${num3} ${num5}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num4} ${num1} ${num3} ${num5}`
                }

            }else if(num2 <= num1 && num2 <= num4) {
                console.log("numero 2 é o Terceiro da lista")
                if(num1 <= num4) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 4 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num1} ${num2} ${num3} ${num5}`
                }else {
                    console.log("numero 4 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num4} ${num2} ${num3} ${num5}`
                }

            }else if(num4 <= num1 && num4 <= num2) {
                console.log("numero 4 é o Terceiro da lista")
                if(num1 <= num2) {
                    console.log("numero 1 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num1} ${num4} ${num3} ${num5}`
                }else {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num2} ${num4} ${num3} ${num5}`
                }
            }


        }else if(num4 <= num1 && num4 <= num2 && num4 <= num3) {
            console.log("numero 4 é o segundo da lista")
            if(num1 <= num2 && num1 <= num3) {
                console.log("numero 2 é o Terceiro da lista")

                if(num2 <= num3) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num2} ${num1} ${num4} ${num5}`
                }else {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 2 é o quinto da lista")
                    resultDiv.innerHTML = `${num4} ${num3} ${num1} ${num4} ${num5}`
                }

            }else if(num2 <= num1 && num2 <= num3) {
                console.log("numero 2 é o Terceiro da lista")
                if(num1 <= num3) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 3 é o quinto da lista")
                    resultDiv.innerHTML = `${num3} ${num1} ${num2} ${num4} ${num5}`
                }else {
                    console.log("numero 3 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num3} ${num2} ${num4} ${num5}`
                }

            }else if(num3 <= num1 && num3 <= num2) {
                console.log("numero 3 é o Terceiro da lista")
                if(num1 <= num2) {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num2} ${num1} ${num3} ${num4} ${num5}`
                }else {
                    console.log("numero 2 é o quarto da lista")
                    console.log("numero 1 é o quinto da lista")
                    resultDiv.innerHTML = `${num1} ${num2} ${num3} ${num4} ${num5}`
                }
            }

        }
    }

}


btn.onclick = () => {
    ordemDecrescente()
}