// Hämta formuläret, textfältet och listan från DOM
// form id="todo-form"
const todoForm = document.getElementById("todo-form");
// input id="new-todo"
const newTodoInput = document.getElementById("new-todo");
// ul id="todo-list"
const todoList = document.getElementById("todo-list");
// Skapa en tom array för att lagra uppgifterna
const todos = [];
let todoslist = todos.length;

// Lägg till en händelselyssnare på formuläret
todoForm.addEventListener("submit", function (e) {
          e.preventDefault(); // Förhindra standardformulärskickning

          // Hämta värdet från textfältet och ta bort inledande och avslutande mellanslag
          const todoText = newTodoInput.value.trim();

          if (todoText === "") {
                    // Om textfältet är tomt, gör ingenting
                    alert('Du måste skriva något.')
                    return;
          }

          // Skapa ett nytt <li> element och lägg till uppgiften
          const list = document.createElement("li");
          list.textContent = todoText;

          // Lägg till det nya <li> elementet i listan
          todoList.appendChild(list);

          // Rensa textfältet
          newTodoInput.value = "";

          // Lägg till uppgiften i todos-arrayen
          todos.push(todoText);

          // Uppdatera demo-elementet med den uppdaterade todos-listan
          let text = document.getElementById("todo-list").innerHTML;

          text = "<ul>";
          for (let i = 0; i < todos.length; i++) {
                    text += "<li>" + todos[i] + "</li>";
          }
          text += "</ul>";

          
});




//alert('Du måste skriva något.')