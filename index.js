let one = "";
let two = "";
let operation = "";
let lastResult = "0";

function clickButton(value) {
  let originalone = one;
  document.getElementById("text").textContent = value;

  if ("0123456789.".includes(value)) {
    // if (lastResult !== "0 " && operation === "") {
    //   clearAll();
    //   lastResult = "0";
    // }
    one += value;
  } else if ("+-/*±^2^3√∛n√".includes(value)) {
    if (one === "" && lastResult !== "0") {
      two = lastResult;
      one = "";
    } else if (one !== "") {
      if (two !== "" && operation !== "") {
        calculate(true);
      }
      two = one;
      one = "";
    }
    operation = value;
  }
  up();
  // let d = one || two || "0";
  // if (operation && two) {
  //   d = two + "" + operation + "" + (one || "?");
  // }
  //   document.getElementById("result").textContent = one || two || "0";
}
function calculate(silent = false) {
  if (operation === "" || (two === "" && one === "")) return;
  // if (two === "" || one === "" || operation === "") return;
  let caclone = one || "0";
  let num1; //= parseFloat(two);
  let num2; //= parseFloat(one);
  if (two === "" && lastResult !== "0") {
    num1 = parseFloat(lastResult);
    num2 = parseFloat(one);
  } else {
    num1 = parseFloat(two || "0");
    num2 = parseFloat(one || "0");
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "±":
      result = -result;
      break;
    case "^2":
      result = num1 ** 2;
      break;
    case "^3":
      result = num1 ** 3;
      break;
    case "^":
      result = num1 ** num2;
      break;
    case "√":
      result = Math.sqrt(num1);
      break;
    case "√":
      result = Math.sqrt(num1);
      break;
    case "∛":
      result = Math.cbrt(num1);
      break;
    case "n√":
      result = num1 ** (1 / num2);
      break;
    default:
      return;
  }
  lastResult = result.toString();
  if (!silent) {
    let actual = two || "0";
    document.getElementById("text").textContent =
      (two || lastResult) + " " + operation + " " + one;
    document.getElementById("result").textContent = lastResult;
  }

  two = lastResult;
  one = "";
}
function plusMinus() {
  document.getElementById("text").textContent = "±";
  if (one !== "") {
    if (one.startsWith("-")) {
      one = one.substring(1);
    } else {
      one = "-" + one;
    }
  } else if (lastResult !== "0") {
    if (lastResult.startsWith("-")) {
      lastResult = lastResult.substring(1);
    } else {
      lastResult = "-" + lastResult;
    }
    two = lastResult;
  }
}
function up() {
  let d;
  if (one !== "") {
    d = one;
  } else if (two !== "") {
    d = two;
  } else if (lastResult !== "") {
    d = lastResult;
  } else {
    d = "0";
  }
  if (operation && two) {
    d = two + "" + operation + "" + one;
  }
  document.getElementById("result").textContent = d;
}
function clearAll() {
  one = "";
  two = "";
  operation = "";
  lastResult = "";
  document.getElementById("text").textContent = "";
  up();
}
