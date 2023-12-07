// buttons = document.querySelectorAll("button")

// buttons.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         alert(btn.value
// )
//     })
// });

let currentMode = ""
let num1 = 0;
let num2 = 0;

add = document.querySelector("#add")
minus = document.querySelector("#subtract")
multiply = document.querySelector("#multiply")
divide = document.querySelector("#divide")
equal = document.querySelector("#equal")

add.addEventListener("click", () => {
    currentMode = "add"
  });
  
minus.addEventListener("click", () => {
    currentMode = "subtract"
  });
  
multiply.addEventListener("click", () => {
    currentMode = "multiply"
  })
  
divide.addEventListener("click", () => {
    currentMode = "divide"
  });

equal.addEventListener("click", () => {
    currentMode = "equal"
  });

function operate(currentMode, num1, num2) {
  if (currentMode === "add") {
    return num1 + num2
  } else if (currentMode === "subtract") {
    return num1 - num2
  } else if (currentMode === "multiply") {
    return num1 * num2
  } else if (currentMode === "divide") {
    return num1 / num2
  }
}