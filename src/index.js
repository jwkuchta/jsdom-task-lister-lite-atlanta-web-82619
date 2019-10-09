document.addEventListener("DOMContentLoaded", () => {
  // your code here

});



const form = document.querySelector('#create-task-form')

const priority = document.querySelector('#priority')
const taskList = document.querySelector("#tasks");

const sort_array = []

form.addEventListener("submit", function(e) {
  e.preventDefault();
  // debugger;
  const inputField = document.querySelector("#new-task-description");
  let input = inputField.value;
  let listItem = document.createElement("li");
  listItem.innerText = input;
  listItem.style.color = priority.value
  if (priority.value === 'green'){
    listItem.id='1'
  } else if (priority.value === 'goldenrod'){
    listItem.id='2'
  } else {
    listItem.id='3'
  }
  sort_array.push(listItem)
  if (listItem.innerText != ''){
  taskList.appendChild(listItem);}
  let button = document.createElement('button')
  button.id = 'clear'

  // button.type = 'button'
  button.innerText = 'x'
  listItem.appendChild(button);
  form.reset();
  button.addEventListener('click', function(e){
      button.parentElement.remove()
  })
})

const butt = document.querySelector('#sort-by-priority')
const sorted_array = sort_array.sort((a,b) => a.id - b.id)
//1. so
butt.addEventListener('click', function(){

})