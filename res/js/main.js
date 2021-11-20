const display = document.querySelector(".display span");
let temp;

//print values on calculator display
function print(data) {
 display.innerHTML = data;
}

// get the inputs from buttons
function btnInput(input) {
 temp = display.innerHTML + input;
 print(temp);
}

function erase() {
 temp = display.innerHTML.substring(0, display.innerHTML.length-1);
 print(temp);
}

function action() {
 let equation = display.innerHTML;
 temp = equation.replace("÷","/");
 temp = temp.replace("×", "*");
 print(eval(temp));
}

function reset() {
 print("");
}