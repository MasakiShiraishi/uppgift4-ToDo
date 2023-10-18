// Get the form, input field, and list from the DOM
// form id="todo-form"
const todoForm = document.getElementById("todo-form");
// input id="new-todo"
const newTodoInput = document.getElementById("new-todo");
// ul id="todo-list"
const todoList = document.getElementById("todo-list");
const info = document.querySelector("small");

// Create an empty array to store the tasks
const todosArray = [];
console.log(todosArray);

 // Create a function to add new tasks to the list
 function addTodoToList(todoText) {
     // Create a new <li> element and add the task text
    const list = document.createElement("li");
    list.textContent = todoText;

   // Click on a small trash can icon on each row 
    // to remove that task from the list.
    // It works with id="todo-list" but it's best practice to use HTML elements.
    // It looks weird with li or ul.
    const deleteIcon = document.createElement("span");   
    deleteIcon.innerHTML = "&#128465";
    //icon reference from URL:https://emojigraph.org/en/litter-in-bin-sign/
    //deleteIcon.innerHTML = "🚮";  
    deleteIcon.classList.add("delete-task");

    // Add "&#128465" inside the <li> element
    list.appendChild(deleteIcon);

     // Add the new <li> element to the list
    todoList.appendChild(list);
}

// Add an event listener to the form with id="todo-form"
todoForm.addEventListener("submit", function (e) { // e = event
    e.preventDefault(); // Prevent default form submission

    // Get the value from the input field and remove leading/trailing spaces
     const todoText = newTodoInput.value.trim();
    console.log('lagt till todolistan');
    if (todoText === "") {
        // If the input field is empty, do nothing
        info.innerText = "Input must not be empty";
        return;
    }
    // Add the new task to the "todosArray" array
    todosArray.push(todoText);
    console.log(todoText);
    // Call the function to add the task to the list
    addTodoToList(todoText);    

     newTodoInput.value = "";
});
// Update a small label somewhere with the number of completed tasks.
let completedTaskCount = 0;


// Function that is called every time a task is marked as completed/uncompleted
function updateCompletedTaskCount() {
    // .completed-task is a CSS class, querySelectorAll points to where it is used
    completedTaskCount = document.querySelectorAll(".completed-task").length;
    // Update the text in the label showing the number of completed tasks
    // comes from "function updateTaskCountLabel()"
   updateTaskCountLabel();
}

// Function that updates the text in the label
function updateTaskCountLabel() {
    // "completedTasks" is an HTML id
    const taskCountLabel = document.getElementById("completedTasks");
    taskCountLabel.textContent = completedTaskCount;
}

todoList.addEventListener("click", function(event) {
    const clickedElement = event.target;
    
     // Click on a small trash can icon on each row 
    // to remove that task from the list.
    
    // Check if the clicked element has a class "delete-task"
    if (clickedElement.classList.contains("delete-task")) {
        // Find the nearest parent element (<li>) and remove it from the list
        const listItem = clickedElement.parentElement; // Förälderselementet (<li>) hämtas
        

        if (listItem) {
            listItem.remove(); // Remove the task from the list
            console.log("A task deleted in the todo list.");
            console.log(listItem);
           

            updateCompletedTaskCount();
        }
    }

// Click on a task <li> in the list to mark it as completed
    // Check if the clicked element is an <li> inside todoList
    if (clickedElement.tagName === "LI") {
        // Check if the task is already marked as completed
        if (clickedElement.classList.contains("completed-task")) {
            // If it's completed, remove the class to unmark it
            clickedElement.classList.remove("completed-task");
        } else {
            // If it's not completed, add the class to mark it as completed
            clickedElement.classList.add("completed-task");
        }
        // completed/uncompleted, update the count
        updateCompletedTaskCount();
    }
});

// Initial count when the page loads
updateCompletedTaskCount();




