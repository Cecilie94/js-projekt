const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if(inputBox.value === "") {
        // if condition tjekker om inputboksen er tom
        alert("Please enter a task");
    }
    // hvis den ikke er tom tilføjer den et nyt li element
    else {
        let li = document.createElement("li");
        // innerhtml sætter teksten i li elementet til at være det samme som det der er i inputboksen
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
                // li bliver displayed i listContainer
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = "";
    // inputboksen bliver tom igen
    saveData(); // kalder saveData funktionen
}

// js for click function

listContainer.addEventListener("click", function(e) {
    // tjekker hvis vi klikker på li
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        // så tilføjer den checked classen til li elementet
        saveData(); // kalder saveData funktionen
    }
    else if(e.target.tagName === "SPAN") {
        // hvis vi klikker på span elementet så fjerner den forælderen til span elementet
  e.target.parentElement.remove();
  saveData(); // kalder saveData funktionen
    }
}, false);

// tilføj til local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
    // indhold i listContianer bliver gemt i local storage
}
// indhenter data fra local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); // kalder showTask funktionen