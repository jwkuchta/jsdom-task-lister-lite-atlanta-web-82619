document.addEventListener("DOMContentLoaded", () => {
  // your code here

});



const form = document.querySelector('#create-task-form')

// const butt = document.createElement('select')
// butt.id = 'priority'
// butt.label = 'Priority'
// let options = ['high', 'medium', 'low']
// for (let i = 0; i < options.length; i++){
//   let option = document.createElement('option')
//   option.value = options[i]
//   option.innerText = options[i]
//   butt.appendChild(option)
// }

// form.appendChild(butt)

// 1. create button

const button = document.createElement('button')
button.id = 'clear'
button.value = 'x'
button.type = 'button'
button.innerText = 'x'

// 2. slap it on the dom

// 1. select input 
const priority = document.querySelector('#priority')

form.addEventListener("submit", function(e) {
  e.preventDefault();
  debugger;
  const inputField = document.querySelector("#new-task-description");
  let input = inputField.value;
  const taskList = document.querySelector("#tasks");
  let listItem = document.createElement("li");
  listItem.innerText = input;
  listItem.textColor = priority.value
  taskList.appendChild(listItem);
  listItem.appendChild(button);
  form.reset();
})

button.addEventListener('click', function(e){
    button.parentElement.remove()
})



  



