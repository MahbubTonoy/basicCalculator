const display = document.querySelector(".display");
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

//erase inputs from the display section.
function erase() {
 temp = display.innerHTML.substring(0, display.innerHTML.length-1);
 print(temp);
}