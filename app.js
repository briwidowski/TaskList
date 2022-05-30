
// Selectors
const input = document.querySelector('.add');
const tasksList = document.querySelector('.tasksList');
let task = "";
let target = "";
let listItemParent = "";



// Functions and Event Listeners
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (input.value != "") {
            e.preventDefault();
            task = input.value;
            addTask();
        } else {
            alert("Type something to add to the list!");
            return;
        }
    } 
});


function addTask() {
    // Create a new li element for input
    const newTask = document.createElement('li');
    const newTaskText = document.createElement('span');
    newTask.appendChild(newTaskText);
    newTaskText.innerHTML = task;

    // Create a div for the edit and delete buttons
    const btnsDiv = document.createElement('div');
    btnsDiv.classList.add('action-buttons');


    const editBtn = document.createElement('button');
    editBtn.classList.add("edit","actionButton");
    editBtn.innerHTML = "Edit";

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete", "actionButton");
    deleteBtn.innerHTML = "Delete";


    btnsDiv.appendChild(editBtn);
    //actionBtnsArray.push(editBtn);
    btnsDiv.appendChild(deleteBtn);
    //actionBtnsArray.push(deleteBtn);

    newTask.appendChild(btnsDiv);
    tasksList.appendChild(newTask);

    input.value = "";

    editBtn.addEventListener('click', editTask);
    deleteBtn.addEventListener('click', deleteTask);
    newTaskText.addEventListener('click', crossTask);
}

function editTask(e) {
    target = e.target;
    listItemParent = target.parentElement;
    const listItemSpan = listItemParent.previousElementSibling;
    if (target.innerHTML.toLowerCase() == "edit") {
        listItemSpan.setAttribute("contentEditable", true);
        listItemSpan.focus();
        listItemSpan.onclick = null;
        target.innerHTML = "Save";
    } else {
        target.innerHTML = "Edit";
        listItemSpan.setAttribute("contentEditable", false);
    }

}

function deleteTask(e) {
    target = e.target;
    listItemParent = target.parentElement.parentElement;
    listItemParent.remove();
}

function crossTask(e) {
    target = e.target;
    if (target.isContentEditable ) {
        return target;
    } else {
        target.classList.toggle("cross-out");
    }
}