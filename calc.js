const calculatorButtons = document.getElementById("unit");


calculatorButtons.addEventListener("click", function (e) {
    if (e.target.value == "+" || e.target.value == "-" || e.target.value == "*" ||  e.target.value == "/" ) {  
    console.log("clicked an operator", e.target.value);
    }
    else {
        console.log("clicked a number", e.target.value);
    }
});