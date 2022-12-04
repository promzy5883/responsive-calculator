let result = document.getElementById("result");
let calculate = document.getElementById("calculation");
let lightMode = document.getElementById("light");
let darkMode = document.getElementById("dark");
let container = document.getElementById("container");
let icons = document.getElementsByTagName("i");
let buttons = document.getElementById("buttons");

//Displaying Digits
function display(num) {
  calculate.innerHTML += num;
}

//Working on clearing
function clearing() {
  calculate.innerHTML = "";
  result.innerHTML = "";
}

//Calculating the result
function calculateScreen() {
  try {
    result.innerHTML = eval(calculate.innerHTML);
  } catch (err) {
    alert(err);
  }
}

//Enabling dark mode
function EnableDarkMode() {
  darkMode.style.display = "none";
  lightMode.style.display = "block";
  for (let i = 0; i < icons.length; i++) {
    icons[i].style.color = "white";
  }
  container.style.backgroundColor = "rgb(43, 41, 41)";
  result.style.color = "white";
  calculate.style.color = "white";
  buttons.style.backgroundColor = "rgb(77, 73, 73)";
}

//Enabling light mode
function EnableLightMode() {
  darkMode.style.display = "block";
  lightMode.style.display = "none";
  for (let i = 0; i < icons.length; i++) {
    icons[i].style.color = "black";
  }
  container.style.backgroundColor = "white";
  result.style.color = "black";
  calculate.style.color = "black";
  buttons.style.backgroundColor = "rgb(243, 235, 235)";
}
