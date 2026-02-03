let one = "";
let two = "";
let operation = "";

function clickButton(value) {
  document.getElementById("text").textContent = value;

  if ("0123456789.".includes(value)) {
    one += value;
  } else if ("+-/*".includes(value)) {
    if (one === "") return;
    if (two !== "" && operation !== "") {
      calculate();
    }
    operation = value;
    two = one;
    one = "";
  }
  let d = one || two || "0";
  if (operation && two) {
    d = two + "" + operation + "" + (one || "?");
  }
  //   document.getElementById("result").textContent = one || two || "0";
}
function calculate() {
  if (two === "" || one === "" || operation === "") return;
  const num1 = parseFloat(two);
  const num2 = parseFloat(one);
  let result;

  if (operation === "+") result = num1 + num2;
  else if (operation === "/") result = num1 / num2;
  else if (operation === "-") result = num1 - num2;
  else if (operation === "*") result = num1 * num2;

  document.getElementById("text").textContent = two + "" + operation + "" + one;
  document.getElementById("result").textContent = result;

  two = result.toString();
  one = "";
  operation = "";
}
function clearAll() {
  one = "";
  two = "";
  operation = "";
  document.getElementById("text").textContent = "C";
  document.getElementById("result").textContent = "result: ";
}
