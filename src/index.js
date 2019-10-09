document.addEventListener("DOMContentLoaded", () => {
  // your code here

});

const form = document.querySelector('#create-task-form')

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const inputField = document.querySelector("#new-task-description");
  let input = inputField.value;
  const taskList = document.querySelector("#tasks");
  let listItem = document.createElement("li");
  listItem.innerText = input;
  taskList.appendChild(listItem);
  form.reset();
})





