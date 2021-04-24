//**********************UNIT RESOURCES************************************** */
// const calculatorButtons = document.getElementById("unit");
const numButtons = document.querySelectorAll('.numbers');
const opButtons = document.querySelectorAll('.operator');
const actionButtons = document.querySelectorAll('.action');
const valueDisplay = document.getElementById("display");
const eraseButton = document.getElementById("eraseButton");
//**********************GLOBAL VARIABLES************************************** */
let num1;
let num2;
let numToCalc = [] ;
let operator = null;


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
for (var i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click" , function(e) {
        console.log("you clicked " + e.target.value);
    })
};

// Button clicks for operators
for (var i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener("click" , function(e) {
        console.log("you clicked " + e.target.value);
    })
};

// Button clicks for action buttons (clear, equals , etc)
for (var i = 0; i < actionButtons.length; i++) {
    actionButtons[i].addEventListener("click" , function(e) {
        console.log("you clicked " + e.target.value);
    })
};



//**********************DISPLAY NUMBERS ON SCREEN************************************** */
// valueDisplay.calculatorButtons.addEventListener()


//**********************FUNCTIONS************************************** */


function calculate() {
    let result = num1 + num2;
    valueDisplay.innerHTML = result;
}

function erase() {
    console.log("clicked erase");
    valueDisplay.innerHTML = "";
}