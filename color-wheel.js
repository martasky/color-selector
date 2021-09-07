"use strict";

window.addEventListener("DOMContentLoaded", getColor);

function getColor() {
  const userChoice = document.querySelector("#colorPicker");

  userChoice.addEventListener("input", convertColor);

  console.log(userChoice);
}

function convertColor(event) {
  let hex = getHex(event);

  displayColor(hex);
}
function getHex(hexValue) {
  console.log(hexValue);
  return hexValue.target.value;
}

function displayColor(hexVal) {
  showColor(hexVal);
}

function showColor(color) {
  let displayColor = document.querySelector("#color3 .colorBox");
  displayColor.style.backgroundColor = color;
}
