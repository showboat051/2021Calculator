                                //// Button Resources ////////

// const num1Btn = document.getElementById('num1').addEventListener("click", function() {
//     document.getElementById("display").innerHTML = 1;
// });

// const num2Btn = document.getElementById('num2').addEventListener("click", function() {
//     document.getElementById("display").innerHTML = 2;
// });

// const num3Btn = document.getElementById('num3').addEventListener("click", function() {
//     document.getElementById("display").innerHTML = 3;
// });

// const num4Btn = document.getElementById('num4').addEventListener("click", function() {
//     document.getElementById("display").innerHTML = 4;
// });

// const num5Btn = document.getElementById('num5').addEventListener("click", function() {
//     document.getElementById("display").innerHTML = 5;
// });

// const num6Btn = document.getElementById('num6').addEventListener("click", function() {
//     document.getElementById("display").innerHTML = 6;
// });

// const num7Btn = document.getElementById('num7').addEventListener("click", function() {
//     document.getElementById("display").innerHTML = 7;
// });

// const num8Btn = document.getElementById('num8').addEventListener("click", function() {
//     document.getElementById("display").innerHTML = 8;
// });

// const num9Btn = document.getElementById('num9').addEventListener("click", function() {
//     document.getElementById("display").innerHTML = 9;
// });

// const plusBtn = document.getElementById('plus').addEventListener("click", function() {
//     document.getElementById("display").innerHTML = "+";
// });

// const keys = document.getElementbyId("#number-keys");

// keys.addEventListener('click', function (e) {
//     console.log(e.target);
// })

let currentOperator = null;
let currentNumbers = [];


// This will split the numbers and store them for evaluation
function calc (num) {
    var numDisplay = document.getElementById("numDisplay");

    function number () {
        if (num == "=") {
            var numSplit = numDisplay.value.split(" ");
            firstNum = parseFloat(all[0]);
            operator = all[1];
            secondNum = parseFloat(all[2]);

            if (secondNum == 0) {
                numDisplay.value = "division by zero!"
            }

            switch(operator) 
            {
              case '+':
                  result = firstNum + secondNum;
                  numDisplay.value = result; 
                  break; 
            }

        }
    } // number()

} // end of calc()
 

// this function will calculate the math
function calcResult () {

}







