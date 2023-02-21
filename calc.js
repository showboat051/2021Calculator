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
            valueDisplay.innerText = 0 ;
        } 
        
    }) 

   

}; // end of button clicks and logic behavior

function solve () {
    let input = valueDisplay.innerText;
    let result = eval(input);
    valueDisplay.innerText = result;
} // end of solve()
