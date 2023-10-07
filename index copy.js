// Hämta formuläret, textfältet och listan från DOM
// form id="todo-form"
const todoForm = document.getElementById("todo-form");
// input id="new-todo"
const newTodoInput = document.getElementById("new-todo");
// ul id="todo-list"
const todoList = document.getElementById("todo-list");
// Skapa en tom array för att lagra uppgifterna
const todos = [];

// Lägg till en händelselyssnare på formuläret
todoForm.addEventListener("submit", function (e) { // e = event
    e.preventDefault(); // Förhindra standardformulärskickning

    // Hämta värdet från textfältet och ta bort inledande och avslutande mellanslag
    const todoText = newTodoInput.value.trim();
    console.log('lagt till todolistan');
    if (todoText === "") {
        // Om textfältet är tomt, gör ingenting
        alert('Du måste skriva något i fältet.')
        return;
    }
    // Skapa ett nytt <li> element och lägg till uppgiften
    const list = document.createElement("li");
    list.textContent = todoText;

    //  ---Klicka på en liten papperskorg på varje rad 
    // för att radera den uppgiften ur listan.---
    // det funkar med id="todo-list" men bästa praktisk med html element
    // det blir konstig ut med li eller ul
    const deleteIcon = document.createElement("span");
    // ticon referer från URL:https://emojigraph.org/sv/litter-in-bin-sign/
    deleteIcon.innerHTML = "🚮"; 
    deleteIcon.classList.add("delete-task");

    // Lägg till gomikorgsikonen i <li> elementet
    list.appendChild(deleteIcon);

    // Lägg till det nya <li> elementet i listan
    todoList.appendChild(list);

    // Rensa textfältet
    newTodoInput.value = "";
});
//---Uppdatera en liten etikett någonstans med antal uppgifter som man gjort klart.---
// för att räkna antalet avklarade uppgifter
let completedTaskCount = 0;

// ---Funktion som anropas varje gång en uppgift markeras som avklarad/ouppklarad----

function updateCompletedTaskCount() {
    // .completed-task är css, querySelectorAll påker på där
    completedTaskCount = document.querySelectorAll(".completed-task").length;
    // Uppdatera texten i etiketten som visar antalet avklarade uppgifter
    // kommer från "function updateTaskCountLabel()"
    updateTaskCountLabel();
}

// Funktion som uppdaterar texten i etiketten
function updateTaskCountLabel() {
    // "completedTasks" är HTML
    const taskCountLabel = document.getElementById("completedTasks");
    taskCountLabel.textContent = completedTaskCount;
}

todoList.addEventListener("click", function(event) {
    const clickedElement = event.target;
    
       //  ---Klicka på en liten papperskorg på varje rad 
    // för att radera den uppgiften ur listan.---

    // Kontrollera om det klickade elementet är en papperskorg (klassen "delete-task")
    if (clickedElement.classList.contains("delete-task")) {
        // Hitta det närmaste förälderelementet (<li>) och ta bort det från listan
        const listItem = clickedElement.parentElement; // Förälderselementet (<li>) hämtas
        if (listItem) {
            listItem.remove(); // Ta bort uppgiften från listan
            // När en uppgift tas bort uppdateras även antalet avklarade uppgifter
            updateCompletedTaskCount();
        }
    }

//---Klicka på en uppgift <li> i listan för att markera den som klar--

    // Kontrollera om det klickade elementet är en <li> inom todoList
    if (clickedElement.tagName === "LI") {
        // Kolla om uppgiften redan är markerad som klar
        if (clickedElement.classList.contains("completed-task")) {
            // Om den är klar, ta bort klassen för att ångra markeringen
            clickedElement.classList.remove("completed-task");
        } else {
            // Om den inte är klar, lägg till klassen för att markera den som klar
            clickedElement.classList.add("completed-task");
        }
        // När en uppgift markeras som avklarad/ouppklarad, uppdatera räkningen
        updateCompletedTaskCount();
    }
});

// Sätt den initiala räkningen när sidan laddas
updateCompletedTaskCount();




