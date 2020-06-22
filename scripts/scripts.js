let num1 = "";
let num2 = "";
let num1Full = false;
let operator = 0;
let substring;

$(".number").on("click", function(event){
    const numberValue = event.target.value;

    if(num1Full === false){
        num1 += numberValue;
        $("#input").val(num1);
    } else if (num1Full === true){
        num2 += numberValue;
        $("#input").val(num2);
    }
});

function verification(operatorInput){
    if(num1Full){
        num2 = "";
        num1 = result;
        operator = 0;
        operator = operatorInput;
    }

    if (num1Full === false){
        num1Full = true;
        operator = 0;
        operator = operatorInput;
    }
}

$("#add").on("click", () => {
    verification(1);
});

$("#sub").on("click", () => {
    verification(2);
});

$("#mul").on("click", () => {
    verification(3);
});

$("#div").on("click", () => {
    verification(4);
});

$("#ok").on("click", () => {
    switch (operator){
        case 1:
            result = parseFloat(num1) + parseFloat(num2);
            $("#input").val(result);
            break;

        case 2: 
            result = parseFloat(num1) - parseFloat(num2);
            $("#input").val(result);
            break;

        case 3:
            result = parseFloat(num1) * parseFloat(num2);
            $("#input").val(result);
            break;

        case 4: 
            result = parseFloat(num1) / parseFloat(num2);
            $("#input").val(result);
            break;

        default:
            console.log("ops");
            break;
    }
});

$("#backspace").on("click", () => {
    if(num1Full){
        substring = num2.substring(0, (num2.length -1));
        num2 = substring;
        $("#input").val(num2);
    } else if (num1Full === false){
        substring = num1.substring(0, (num1.length -1));
        num1 = substring;
        $("#input").val(num1);
    }
});

$("#clear").on("click", () => {
    num1 = "";
    num1Full = false;
    num2 = "";
    num2IsFull = false;
    operator = 0;
    $("#input").val("");
});