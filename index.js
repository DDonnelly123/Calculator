let currentMode = ""
let num1 = 0
let num2 = 0

const display = document.querySelector(".inputBar")
const numbers = document.querySelectorAll(".numbers");
const addition = document.querySelector("#add");
const subtraction = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#equal");

addition.addEventListener("click", () => {
  currentMode = "+"
  updateDisplay(`${num1} ${currentMode}`)
});
  
subtraction.addEventListener("click", () => {
  currentMode = "-"
  updateDisplay(`${num1} ${currentMode}`)
});
  
multiply.addEventListener("click", () => {
  currentMode = "*"
  updateDisplay(`${num1} ${currentMode}`)
});
  
divide.addEventListener("click", () => {
  currentMode = "÷"
  updateDisplay(`${num1} ${currentMode}`)
});

equal.addEventListener("click", () => {
  let result = operate(currentMode, num1, num2);
  updateDisplay(result);
  num1 = result;
  num2 = 0;
});

numbers.forEach(number => {
  number.addEventListener("click", (e) => {
      const clickedNumber = e.target.value;
      if (currentMode === "") {
        num1 = num1 * 10 + parseFloat(clickedNumber);
        updateDisplay(num1);
      } else {
        num2 = num2 * 10 + parseFloat(clickedNumber);
        updateDisplay(`${num1} ${currentMode} ${num2}`);
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
  } else if (currentMode === "-") {
    result = num1 - num2
  } else if (currentMode === "*") {
    result = num1 * num2
  } else if (currentMode === "÷" && num2 !== 0) {
    result = num1 / num2
  } else if (currentMode === "÷" && num2 === 0) {
    alert("nuh-uh you cant divide by zero")
  }
  return result;
}

