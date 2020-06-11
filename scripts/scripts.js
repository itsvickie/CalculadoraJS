//Números Query
const numbers = document.querySelectorAll("button[class=number]");
const output = document.querySelector("input[id=output]");

//Operadores Especiais
const clearBtn = document.querySelector("button[id=clear]"); // C
const operatorOk = document.querySelector("button[id=ok]"); //=

//Operadores Matemáticos
const operatorAdd = document.querySelector("button[id=add]"); // +
const operatorSub = document.querySelector("button[id=sub]"); // -
const operatorMul = document.querySelector("button[id=mul]"); // *
const operatorDiv = document.querySelector("button[id=div]"); // /


let num1 = "";
let num1IsFull = false;
let num2 = "";
let num2IsFull = false;
let operator = 0;
let result;

for (const number of numbers){
    number.addEventListener("click", () => {
        if (num1IsFull === false){
            num1 += number.value;
            output.value = num1;
        } else if (num1IsFull){
            num2 += number.value;
            output.value = num2;
        }
    });
}

function verification(operatorInput){
    if(num1IsFull){
        num2 = "";
        num1 = result;
    }

    if (num1IsFull === false){
        num1IsFull = true;
        operator = operatorInput;
    }
}

operatorAdd.addEventListener("click", () => { //operator 1 (+)
    verification(1);
});

operatorSub.addEventListener("click", () => { //operator 2 (-)
    verification(2);
});

operatorMul.addEventListener("click", () => { //operator 3 (*)
    verification(3);
});

operatorDiv.addEventListener("click", () => { //operator 4 (/)
    verification(4);
});

operatorOk.addEventListener("click", () => {
    switch (operator){
        case 1:
            result = parseInt(num1) + parseInt(num2);
            output.value = result;
            break;

        case 2: 
            result = parseInt(num1) - parseInt(num2);
            output.value = result;
            break;

        case 3:
            result = parseInt(num1) * parseInt(num2);
            output.value = result;
            break;

        case 4: 
            result = parseInt(num1) + parseInt(num2);
            output.value = result;
            break;

        default:
            console.log("ops");
            break;
    }
});

clearBtn.addEventListener("click", () => {
    num1 = "";
    num1IsFull = false;
    num2 = "";
    num2IsFull = false;
    operator = 0;
    result;
    output.value = "";
});