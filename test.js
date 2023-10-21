
const todoForm = document.getElementById("todo-form");
const newTodoInput = document.getElementById("new-todo");
const todoList = document.getElementById("todo-list");
const info = document.querySelector("small");

const todosArray = [];
console.log(todosArray);

 function addTodoToList(todoText) {
    const list = document.createElement("li");
    // Create a new paragraph element 
     const listText = document.createElement("p");
    listText.textContent = todoText;
    // Append "p" element to "li"  
    list.appendChild(listText);

    const deleteIcon = document.createElement("span");   
    deleteIcon.innerHTML = "&#128465";
    //icon reference from URL:https://emojigraph.org/en/litter-in-bin-sign/
    //deleteIcon.innerHTML = "🚮";  
    deleteIcon.classList.add("delete-task");
    list.appendChild(deleteIcon);
    todoList.appendChild(list);
}

todoForm.addEventListener("submit", function (e) { 
    e.preventDefault(); 

     const todoText = newTodoInput.value.trim();
    console.log('lagt till todolistan');
    if (todoText === "") {
        
        info.innerText = "Input must not be empty";
        //-------this is new------
        info.classList.add("flash");
        setTimeout(() => {
            info.classList.remove("flash");
          }, 2000);
        //--------------------------------
        return;
    }
    else {
        info.innerText = "";
    }
   
    todosArray.push(todoText);
    console.log(todoText);    
    addTodoToList(todoText); 
    newTodoInput.value = "";
});

let completedTaskCount = 0;
// Function that is called every time a task is marked as completed/uncompleted
function updateCompletedTaskCount() {    
    completedTaskCount = document.querySelectorAll(".completed-task").length;    
   updateTaskCountLabel();
}

function updateTaskCountLabel() {    
    const taskCountLabel = document.getElementById("completedTasks");
    taskCountLabel.textContent = completedTaskCount;
}

todoList.addEventListener("click", function(event) {
    const clickedElement = event.target;    
    // Check if the clicked element has a class "delete-task"
    if (clickedElement.classList.contains("delete-task")) {
        const listItem = clickedElement.parentElement; 
        if (listItem) {
            listItem.remove(); 
            console.log("A task deleted in the todo list.");
            console.log(listItem);          

            updateCompletedTaskCount();
        }
    }
                   // change "LI" to "P"
    if (clickedElement.tagName === "P") {
        if (clickedElement.classList.contains("completed-task")) {
            clickedElement.classList.remove("completed-task");
        } else {            
            clickedElement.classList.add("completed-task");
        }
        
        updateCompletedTaskCount();
    }
});
updateCompletedTaskCount();