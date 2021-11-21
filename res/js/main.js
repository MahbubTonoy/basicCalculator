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

//erase display value one by one
function erase() {
 temp = display.innerHTML.substring(0, display.innerHTML.length-1);
 print(temp);
}

//perform math operations with error handler
 function action() {
  let equation = display.innerHTML;
  temp = equation.replace("÷","/");
  temp = temp.replace("×", "*");
  try {
   temp = eval(temp);
   print(temp);
  } catch(err) {
   alert("Math Error");
   print("");
  }
 }


//clear display
function reset() {
 print("");
}


//keyboard capture
document.addEventListener("keydown", (e)=>{
 if(
  (
   e.key >= 0 && e.key <=9) ||
   e.key == "+" ||
   e.key == "-" ||
   e.key == "/" ||
   e.key == "*" ||
   e.key == "(" ||
   e.key == ")" 
  ) {
   temp = display.innerHTML+ e.key;
   print(temp);
 } else if(e.key == "Enter") {
  action();
 } else if(e.key == "Backspace") {
  erase();
 } else if(e.key == "c") {
   reset();
 }
});