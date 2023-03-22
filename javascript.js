// functions for add sub mul div
function add(first,second) {return +first + +second;}
function subtract(first,second) {return first - second;}
function multiply(first,second) {return first * second;}
function divide(first,second) {return first / second;}

function operate(first, second, operator) {
    if (operator === "+") {return add(first,second);}
    else if (operator === "-") {return subtract(first,second);}
    else if (operator === "*") {return multiply(first,second);}
    else if (operator === "/") {return divide(first,second);}

}

function setPointer(value) {data.pointer=value}


numbers=document.querySelectorAll(".number");
numbers.forEach(number => { number.addEventListener("click",()=> {
    if (data.result) {data.clear()}
    data[data.pointer]+=number.textContent
    console.table(data)
})
});



data = {
    first: "",
    second: "",
    operator:"",
    pointer :"first",
    clear() {
        this.first="";
        this.second="";
        this.operator="";
        this.pointer="first";
        delete this.result
    }
    

}




