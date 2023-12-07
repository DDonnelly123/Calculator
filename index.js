let currentMode = ""
let num1 = 0;
let num2 = 0;

const display = document.querySelector(".inputBar")
const numbers = document.querySelectorAll(".numbers");
const addition = document.querySelector("#add");
const minus = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#equal");

addition.addEventListener("click", () => {
    currentMode = "addition"
  });
  
subtract.addEventListener("click", () => {
    currentMode = "subtract"
  });
  
multiply.addEventListener("click", () => {
    currentMode = "multiply"
  })
  
divide.addEventListener("click", () => {
    currentMode = "divide"
  });

equal.addEventListener("click", () => {
    // Perform the calculation here
  const result = operate(currentMode, num1, num2);
    // Display or use the result as needed
  console.log(result);
});

numbers.forEach(number => {
  number.addEventListener("click", (e) => {
      const clickedNumber = parseFloat(e.target.value);
      if (currentMode === "") {
        num1 = clickedNumber;
        num1A = num1 + clickedNumber
        updateDisplay(num1A);
      } else {
        num2 = clickedNumber;
        updateDisplay(num2);
      }
  });
});


function operate(currentMode, num1, num2) {
  if (currentMode === "addition") {
    let result = num1 + num2
    updateDisplay(result)
  } else if (currentMode === "subtract") {
    let result = num1 - num2
    updateDisplay(result)
  } else if (currentMode === "multiply") {
    let result = num1 * num2
    updateDisplay(result)
  } else if (currentMode === "divide") {
    let result = num1 / num2
    updateDisplay(result)
  }
}

function updateDisplay(result) {
  display.innerHTML = result.toString(); // Convert the result to a string before setting it
}
