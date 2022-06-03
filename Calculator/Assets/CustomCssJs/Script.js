"use strict";

let SectionResultCalculator = document.querySelector(
  ".section_row_result_inner_calculator"
);
let SectionClear = document.querySelector(
  ".section_one_button_row_one_inner_calculator"
);
let SectionDivide = document.querySelector(
  ".section_two_button_row_one_inner_calculator"
);
let SectionMultiplication = document.querySelector(
  ".section_three_button_row_one_inner_calculator"
);
let SectionNumberSeven = document.querySelector(
  ".section_one_button_row_two_inner_calculator"
);
let SectionNumberEight = document.querySelector(
  ".section_two_button_row_two_inner_calculator"
);
let SectionNumberNine = document.querySelector(
  ".section_three_button_row_two_inner_calculator"
);
let SectionNegative = document.querySelector(
  ".section_four_button_row_two_inner_calculator"
);
let SectionNumberFour = document.querySelector(
  ".section_one_button_row_three_inner_calculator"
);
let SectionNumberFive = document.querySelector(
  ".section_two_button_row_three_inner_calculator"
);
let SectionNumberSix = document.querySelector(
  ".section_three_button_row_three_inner_calculator"
);
let SectionPlus = document.querySelector(
  ".section_four_button_row_three_inner_calculator"
);
let SectionNumberOne = document.querySelector(
  ".section_one_button_row_four_inner_calculator"
);
let SectionNumberTwo = document.querySelector(
  ".section_two_button_row_four_inner_calculator"
);
let SectionNumberthree = document.querySelector(
  ".section_three_button_row_four_inner_calculator"
);
let SectionNumberZero = document.querySelector(
  ".section_one_button_row_five_inner_calculator"
);
let SectionNumberZeroZero = document.querySelector(
  ".section_two_button_row_five_inner_calculator"
);
let SectionPoint = document.querySelector(
  ".section_three_button_row_five_inner_calculator"
);
let SectionEqual = document.querySelector(
  ".section_four_button_row_five_inner_calculator"
);

SectionClear.addEventListener("click", () => {
  SectionResultCalculator.innerHTML = "";
});

SectionDivide.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "/";
});

SectionMultiplication.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "*";
});

SectionNumberSeven.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "7";
});

SectionNumberEight.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "8";
});

SectionNumberNine.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "9";
});

SectionNegative.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "-";
});

SectionNumberFour.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "4";
});

SectionNumberFive.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "5";
});

SectionNumberSix.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "6";
});

SectionPlus.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "+";
});

SectionNumberOne.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "1";
});

SectionNumberTwo.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "2";
});

SectionNumberthree.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "3";
});

SectionNumberZero.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "0";
});

SectionNumberZeroZero.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += "00";
});

SectionPoint.addEventListener("click", () => {
  SectionResultCalculator.innerHTML += ".";
});

SectionEqual.addEventListener("click", () => {
  try {
    SectionResultCalculator.innerHTML = eval(SectionResultCalculator.innerHTML);
    if (SectionResultCalculator.innerHTML === "undefined") {
      SectionResultCalculator.innerHTML = "";
    }
  } catch {
    alert("Error");
    SectionResultCalculator.innerHTML = "";
  }
});
