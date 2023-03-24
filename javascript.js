function Data(){
    this.first="";
    this.second="";
    this.operator="";
    this.pointer="first";
    this.operate= () => {this.result=(Math.round(operate(this.first,this.second,this.operator)*100)/100).toString()}
    this.display = () => {screen.textContent= `${this.first} ${this.operator} ${this.second}  ${this.result?"= "+this.result:""}`}
    this.backspace = () => {
        text=this[this.pointer]
        char=text.charAt(text.length-1)
        if (this.result) this.result=""
        if (!char) {
            this.operator="";
            this.pointer="first"
        }
        else if (char == ".") {
            this[data.pointer+"-dot"] = false
            this[this.pointer] = text.slice(0,text.length-1)
        }
        else {this[this.pointer] = text.slice(0,text.length-1)}
        this.display()
    }
    }
        
    
const screen=document.querySelector("#display")
let data = new Data();


function clearData() {
    data=new Data();
    data.display()
}


// functions for add sub mul div
function add(first,second) {return +first + +second;}
function subtract(first,second) {return first - second;}
function multiply(first,second) {return first * second;}
function divide(first,second) {if (first / second === Infinity) {}
return first / second;}

function operate(first, second, operator) {
    if (operator === "+") {return add(first,second);}
    else if (operator === "-") {return subtract(first,second);}
    else if (operator === "*") {return multiply(first,second);}
    else if (operator === "/") {return divide(first,second);}

}

function setPointer(value) {data.pointer=value}


const numbers=document.querySelectorAll(".number");
numbers.forEach(number => { number.addEventListener("click",()=> {
    if (data.result) {clearData()}
    data[data.pointer]+=number.textContent
    data.display()
})
});

const operators=document.querySelectorAll(".operator");
operators.forEach(operator => { operator.addEventListener("click",()=> {
        if (data.pointer === "first" && data["first"]) {
            data.operator=operator.textContent;
            setPointer("second");
        }
        else if(data.pointer === "second" && data["second"]){
            data.operate()
            data.first=data.result
            data.second=""
            data.operator=operator.textContent
            delete data.result
        }
        data.display()
    })
});

const evaluate=document.querySelector("#Enter")
evaluate.addEventListener("click",() =>{
    if (data.first && data.second && data.operator ) data.operate()
    if (data.result == Infinity) {
        data.result ="Your Mama";
        data.display();
        data.result="";
    }
    else{data.display()}
})

const clearButton=document.querySelector("#clear")
clearButton.addEventListener("click",()=>{clearData()})

const dotButton = document.querySelector("#point")
dotButton.addEventListener("click",() => {
    if(!data[data.pointer+"-dot"]) {
        data[data.pointer+"-dot"] = true
        data[data.pointer] +="."
        data.display()
    }
})

const delButton=document.querySelector("#Backspace")
delButton.addEventListener("click",()=> {data.backspace()})

document.addEventListener("keydown",(e) => {
    key=document.querySelector(`button[data-key="${e.key}"]`);
    if (!key) {return}
    key.click()
})







