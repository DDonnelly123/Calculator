let currentMode = ""
let num1 = 0
let num2 = 0
let result = "";
let equalChecker = false






const display = document.querySelector(".inputBar")
const numbers = document.querySelectorAll(".numbers");
const addition = document.querySelector("#add");
const subtraction = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#equal");
const AC = document.querySelector(".AC");
const del = document.querySelector(".del");








addition.addEventListener("click", () => {
  currentMode = "+"
  updateDisplay(`${num1}`)
});
  
subtraction.addEventListener("click", () => {
  currentMode = "-"
  updateDisplay(`${num1}`)
});
  
multiply.addEventListener("click", () => {
  currentMode = "*"
  updateDisplay(`${num1}`)
});
  
divide.addEventListener("click", () => {
  currentMode = "÷"
  updateDisplay(`${num1}`)
});

AC.addEventListener("click", () => {
  location.reload();
});








del.addEventListener("click", () => {
  let currentDisplay = display.innerHTML;
  let newDisplay;

  if (currentDisplay.length === 1) {
    newDisplay = 0;
    num1 = 0;
  } else {
    newDisplay = parseFloat(currentDisplay.slice(0, -1)) || 0;
    if (currentMode === "") {
      num1 = newDisplay;
    } else if (equalChecker === true) {
      num1 = newDisplay
    } else {
      num2 = newDisplay;
    } 
  }
  updateDisplay(newDisplay);
});




equal.addEventListener("click", () => {
  if (num1 !== 0 && num2 !== 0 && currentMode !== "") {
    let result = operate(currentMode, num1, num2);
    updateDisplay(result);
    num1 = result;
    num2 = 0;
    equalChecker = true;
  } else if (num1 !== 0 && currentMode !== "") {
    // Handle the case when there is an ongoing calculation
    let result = operate(currentMode, num1, num2);
    updateDisplay(result);
    num1 = result;
    equalChecker = true;
  }
  // Set currentMode to "=" so that the next operator will start a new calculation
  currentMode = "=";
});




numbers.forEach(number => {
  number.addEventListener("click", (e) => {
      const clickedNumber = e.target.value;
      if (currentMode === "") {
        num1 = num1 * 10 + parseFloat(clickedNumber);
        updateDisplay(num1);
      } else {
        num2 = num2 * 10 + parseFloat(clickedNumber);
        updateDisplay(`${num2}`);
      }
  });
});




function updateDisplay(result) {
  display.innerHTML = result.toString(); // Convert the result to a string before setting it
}



function operate(currentMode, num1, num2) {
  let result = 0
  if (currentMode === "+") {
    result = num1 + num2
    currentMode = ""
  } else if (currentMode === "-") {
    result = num1 - num2
    currentMode = ""
  } else if (currentMode === "*") {
    result = num1 * num2
    currentMode = ""
  } else if (currentMode === "÷" && num2 !== 0) {
    result = num1 / num2
    currentMode = ""
  } else if (currentMode === "÷" && num2 === 0) {
    alert("nuh-uh you cant divide by zero")
    location.reload();
  }
  return result;
}


