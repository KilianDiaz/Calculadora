// Funcion para agregar valores
function appendValue(value) {
  const result = document.getElementById("result");

  // Condicional Para el funcionamineto de los parentesis
  if (
    result.value.length > 0 &&
    result.value[result.value.length - 1] === ")"
  ) {
    if ("0123456789(".includes(value)) {
      result.value += "*" + value;
    } else {
      result.value += value;
    }
  } else {
    result.value += value;
  }
}

// Funcion para borrar contenido
function clearResult() {
  const result = document.getElementById("result");
  result.value = "";
}

// Funcion para calcular resultao
function calculate() {
  const result = document.getElementById("result");
  try {
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}

// Funcion para calcular el porcentaje
function calculatePercentage() {
  const result = document.getElementById("result");
  try {
    const value = parseFloat(result.value);
    if (!isNaN(value)) {
      result.value = value / 100;
    } else {
      result.value = "Error";
    }
  } catch {
    result.value = "Error";
  }
}

// Funcion para detectar teclas
document.addEventListener("keydown", function (event) {
  const result = document.getElementById("result");

  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
    "*",
    "/",
    "(",
    ")",
  ];
  if (allowedKeys.includes(event.key)) {
    appendValue(event.key);
  }

  if (event.key === "Enter" || event.key === "=") {
    event.preventDefault();
    calculate();
  }

  if (event.key === "Delete" || event.key === "Backspace") {
    clearResult();
  }

  if (event.key === "%") {
    calculatePercentage();
  }
});
