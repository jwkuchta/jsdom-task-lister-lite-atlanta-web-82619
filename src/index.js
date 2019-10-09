document.addEventListener("DOMContentLoaded", () => {
  // your code here

});

const form = document.querySelector('#create-task-form')
// 1. create button

const button = document.createElement('button')
button.id = 'clear'
button.value = 'x'
button.type = 'button'
button.innerText = 'x'

// 2. slap it on the dom

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const inputField = document.querySelector("#new-task-description");
  let input = inputField.value;
  const taskList = document.querySelector("#tasks");
  let listItem = document.createElement("li");
  listItem.innerText = input;
  taskList.appendChild(listItem);
  listItem.appendChild(button);
  form.reset();
})

button.addEventListener('click', function(e){
    button.parentElement.remove()
})



  



