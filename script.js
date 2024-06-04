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
  deleteBtnEl.innerHTML = ' <i class="fa-solid fa-delete-left"></i>';

  liEl.appendChild(deleteBtnEl);

  liEl.textContent = inputElement.value;
  olEl.appendChild(liEl);
  inputElement.value = "";
});

removeAll.addEventListener("click", () => {
  olEl.innerHTML = " ";
});
