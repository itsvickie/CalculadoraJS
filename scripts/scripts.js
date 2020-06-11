//Query HTML
const numbers = document.querySelectorAll("button[class=number]");
const operatorAdd = document.querySelector("button[id=add]");
const operatorOk = document.querySelector("button[id=ok]");
const output = document.querySelector("input[id=output]");

let num1 = "";
let num1IsFull = false;
let num2 = "";
let num2IsFull = false;
let operator = 0;

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

operatorAdd.addEventListener("click", () => {
    if (num1IsFull === false){
        num1IsFull = true;
        operator = 1; //1 para adicionar (+)
    }
});

operatorOk.addEventListener("click", () => {
    switch (operator){
        case 1:
            const resultAdd = parseInt(num1) + parseInt(num2);
            output.value = resultAdd;
            break;
        default:
            console.log("ops");
            break;
    }
});