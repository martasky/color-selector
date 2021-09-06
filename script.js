"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  const userChoice = document.querySelector("#colorPicker");

  userChoice.addEventListener("input", showColor, false);
  userChoice.addEventListener("input", showHexCode, false);

  console.log(userChoice);
}

function showColor(e) {
  let displayColor = document.querySelector("#display_color");
  displayColor.style.backgroundColor = e.target.value;
  console.log(e.target.value);
  console.log("Updated to " + displayColor.style.backgroundColor);
}

function showHexCode(e) {
  let hex = document.querySelector(".hex span");
  hex.textContent = e.target.value;
  showRGB(e.target.value);
}

function showRGB(myColor) {
  let r = parseInt(myColor.substring(1, 3), 16);
  let g = parseInt(myColor.substring(3, 5), 16);
  let b = parseInt(myColor.substring(5), 16);
  console.log(r, g, b);
  let colorRGB = {
    r: r,
    g: g,
    b: b,
  };
  let rgb = document.querySelector(".rgb span");
  rgb.textContent = `${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}`;
  showHSL(colorRGB);
}
function showHSL(rgbVal) {
  let r = rgbVal.r;
  let b = rgbVal.b;
  let g = rgbVal.g;

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  let hslObj = {
    h: Math.round(h),
    s: Math.round(s),
    l: Math.round(l),
  };

  console.log(hslObj);
  /* h = Math.round(h);
  s = Math.round(s);
  l = Math.round(l); */

  let hsl = document.querySelector(".hsl span");
  hsl.textContent = `${hslObj.h}, ${hslObj.s}%, ${hslObj.l}%`;

  console.log(hsl.textContent);

  console.log("this is hsl" + hsl.textContent);
}
