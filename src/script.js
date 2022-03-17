var c = 0,
  oldvalue,
  check,
  operatorvalue,
  v,
  call = 0;
function input(n) {
  if (call == 0) {
    document.getElementById("result").value += n;
    v = document.getElementById("result").value;
  } else {
    document.getElementById("result").value = "";
    document.getElementById("result").value = n;
    v = document.getElementById("result").value;
    call = 0;
  }
}
function calc(o, op, newvalue) {
  o = Number(o);
  newvalue = Number(newvalue);
  switch (op) {
    case "+":
      document.getElementById("result").value = o + newvalue;
      break;
    case "-":
      document.getElementById("result").value = o - newvalue;
      break;
    case "*":
      document.getElementById("result").value = o * newvalue;
      break;
    case "/":
      document.getElementById("result").value = o / newvalue;
      break;
  }
}

function equalto() {
  oldvalue = Number(oldvalue);
  v = Number(v);
  switch (operatorvalue) {
    case "+":
      document.getElementById("result").value = oldvalue + v;
      break;
    case "-":
      document.getElementById("result").value = oldvalue - v;
      break;
    case "*":
      document.getElementById("result").value = oldvalue * v;
      break;
    case "/":
      document.getElementById("result").value = oldvalue / v;
      break;
  }
}
function operatorcheck(check) {
  c = c + 1;
  call = 1;
  if (c == 2) {
    calc(oldvalue, operatorvalue, v);
    c = 1;
    operatorvalue = check;
    oldvalue = document.getElementById("result").value;
  } else {
    oldvalue = document.getElementById("result").value;

    switch (check) {
      case "+":
        operatorvalue = "+";
        break;
      case "-":
        operatorvalue = "-";
        break;
      case "*":
        operatorvalue = "*";
        break;
      case "/":
        operatorvalue = "/";
        break;
    }
  }
}
function clr() {
  window.location.href = "index.html";
}