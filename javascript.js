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
function clearData() {data=new Data();}


numbers=document.querySelectorAll(".number");
numbers.forEach(number => { number.addEventListener("click",()=> {
    if (data.result) {clearData()}
    data[data.pointer]+=number.textContent
    console.table(data)
})
});

operators=document.querySelectorAll(".operator");
operators.forEach(operator => { operator.addEventListener("click",()=> {
        if (data.pointer === "first" && data["first"]) {
            data.operator=operator.textContent;
            setPointer("second");
        }
        console.table(data)
    })
});

evaluate=document.querySelector("#enter")
evaluate.addEventListener("click",() => {data.result=operate(data.first,data.second,data.operator)
                                        console.table(data)
})

function Data(){
    this.first="";
    this.second="";
    this.operator="";
    this.pointer="first";
}
data = new Data();





