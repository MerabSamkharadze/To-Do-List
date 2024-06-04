"use strict";

const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const addButtonElement = document.getElementById("addButton");
const olEl = document.getElementById("ol");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputElement.value === "") return;
  const liEl = document.createElement("li");
  //   const deleteBtnEl = document.createElement("button");

  liEl.textContent = inputElement.value;
  olEl.appendChild(liEl);
  inputElement.value = "";
});
