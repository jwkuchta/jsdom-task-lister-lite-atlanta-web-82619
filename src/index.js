
// * grabbing the form element from html
const form = document.querySelector('#create-task-form')
// * grabbing the priority dropdown from html
const priority = document.querySelector('#priority')
// * grabbing the list of tasks from html
const taskList = document.querySelector("#tasks");
// * array initialized to hold list elements to later be sorted 
const sort_array = []

// * event listener for submission of form
  form.addEventListener("submit", function(e) {
    // * preventing the page from reloading on submission
    e.preventDefault();
    // * grabbing the input field from the form from html
    const inputField = document.querySelector("#new-task-description");
    // * grabbing the value that has been entered into the input field by the user 
    let input = inputField.value;
    // * creating a list item that we will 👋🏽 on the dom under taskList 
    let listItem = document.createElement("li");
      // * setting the listItem's inner text to the users input( this is what will be displayed to the user)
      listItem.innerText = input;
      // * editing the color of the list element based on the priority chosen by the user
      listItem.style.color = priority.value
      if (priority.value === 'green'){
        listItem.id='1'
      } else if (priority.value === 'goldenrod'){
        listItem.id='2'
      } else {
        listItem.id='3'
      }
      // * only allow the list item to be appended onto the list if it includes text
      if (listItem.innerText != ''){
      taskList.appendChild(listItem);
      sort_array.push(listItem);}
      // * creating a button element that will be used to delete list element
    let button = document.createElement('button')
      // * giving the button element an id so that we can access it
      button.id = 'clear'
      // * the text that will display on the button for the user
      button.innerText = 'x'
    // * adding the button to the list element
    listItem.appendChild(button);
    // * resetting the form so that after the user submits the text value in the form disappears
    form.reset();
    // * event listener for our button on each list element
    button.addEventListener('click', function(e){
      // * when the button is clicked delete that list eleemnt 
      button.parentElement.remove()
    })
  })

// * grabbing our button to sort our to-do list  
const butt = document.querySelector('#sort-by-priority')
// * creating a new variable that will hold our array of list elements after it has been sorted
const sorted_array = sort_array.sort((a,b) => a.id - b.id)
// * event listener waiting for click of sort button  
butt.addEventListener('click', function(){
})




