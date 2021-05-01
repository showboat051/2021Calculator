//**********************UNIT RESOURCES************************************** */
const Buttons = document.querySelectorAll('.calcButtons');
const opButtons = document.querySelectorAll('.operator');
const actionButtons = document.querySelectorAll('.action');
const valueDisplay = document.getElementById("display");
const eraseButton = document.getElementById("eraseButton");

//**********************GLOBAL VARIABLES************************************** */
let currentNumber = 0;
let result;
let operator = ["+", "-", "*", "/"];


//**********************BUTTON CLICKS ON THE CALCULATOR************************************** */
// calculatorButtons.addEventListener("click", function (e) {
//   num1 = valueDisplay.innerHTML += e.target.value;
// //   num2 = valueDisplay.innerHTML += e.target.value;
//     if (e.target.value == "+" || e.target.value == "-" || e.target.value == "*" ||  e.target.value == "/" ) {  
//     console.log("clicked an operator", e.target.value);
//     // num1.split(",").push(numToCalc);
//     }
//     else {
//         console.log("clicked a number", e.target.value);
//     }
// });

//Button clicks for numbers 
for (var i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener("click" , function(e) {
        console.log("you clicked " + e.target.value);
     valueDisplay.innerText += e.target.value;
    
    
        //Clear Button
        if(e.target.value === "C") {
            console.log("cleared");
            operator = null;
            currentNumber = 0
            valueDisplay.innerText = "";
        } 
        
    }) 

   

}; // end of button clicks and logic behavior

function solve () {
    let input = valueDisplay.innerText;
    let result = eval(input);
    valueDisplay.innerText = result;
} // end of solve()

function calculate(num) {
    switch(operator) {
        case "+":
            result = prevNum + currentNumber;
            break;
         case "-":
            result = prevNum - currentNumber;
            break;
         case "*":
             result = prevNum * currentNumber;
             break;
         case "/":
             result = prevNum / currentNumber;
             break;    
    }
     valueDisplay.innerHTML = result;
 }// end of calculate()



//**********************DISPLAY NUMBERS ON SCREEN************************************** */
// valueDisplay.calculatorButtons.addEventListener()


//**********************FUNCTIONS************************************** */



function erase() {
    console.log("clicked erase");
    valueDisplay.innerHTML = "";
}

