let result = document.getElementById("result");
let calculate = document.getElementById("calculation");

//Displaying Digits
function display(num) {
  calculate.innerHTML += num;
}

//Working on clearing
function clearing() {
  calculate.innerHTML = "";
}
