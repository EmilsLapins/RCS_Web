$("div#screen").text("TEST");

var currentVal= "";
var previousVal = "";
var operator = "";
var result = 0;

$(":button").on("click", function(){
   var btnClicked = $(this).html();
   console.log(btnClicked);
   
    if (btnClicked == "Del"){
        currentVal = 0;
        result = 0;
    } 
    else if (btnClicked == "."){
        currentVal += ".";
    }
    else if (isNumber(btnClicked)) {
        if (currentVal == '0') currentVal = btnClicked;
        else currentVal = currentVal + btnClicked;
    }
    
    else if (setOperator(btnClicked)){
        previousVal = currentVal;
        operator = btnClicked;
        currentVal = "";
    }
    else if (btnClicked == "="){
        currentVal = operate(previousVal, currentVal, operator);
        operator = null;
    }
    
    updateScreen(currentVal);

   
});

operate = function(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operator);
    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") return a / b;
  }

  setOperator = function(value) {
    return value == "/" || value == "*" || value == "+" || value === "-";
  };

  isNumber = function(value) {
    return !isNaN(value);
  }

  updateScreen = function(displayValue) {
    var displayValue = displayValue.toString();
    $("div#screen").html(displayValue.substring(0, 10));
  };