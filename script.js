"use strict";

const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const addButtonElement = document.getElementById("addButton");
const olEl = document.getElementById("ol");
const removeAll = document.getElementById("removeAll");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputElement.value === "") return;

  const liEl = document.createElement("li");
  const deleteBtnEl = document.createElement("button");
  deleteBtnEl.innerHTML = '<img src="images/delete.svg" alt="delete icon" />';
  deleteBtnEl.addEventListener("click", () => {
    liEl.remove();
  });

  liEl.textContent = inputElement.value;
  olEl.appendChild(liEl);
  liEl.appendChild(deleteBtnEl);
  inputElement.value = "";
});

removeAll.addEventListener("click", () => {
  olEl.innerHTML = " ";
});
