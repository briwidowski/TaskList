
const input = document.querySelector('.add');
const tasksList = document.querySelector('.tasksList');
const actionBtns = document.getElementsByClassName('actionButton');
const actionBtnsArray = Array.prototype.slice.call(actionBtns);

let newTask = "";
let editBtn = "";

window.addEventListener('load', () => {
    input.focus();
    console.log(actionBtnsArray);
})
    
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const task = input.value;

        if (task == "") {
            alert("Type something to add to the list!");
            return;
        }
        // Create a new li element for input
        newTask = document.createElement('li');
        newTask.classList.add('text-content');
        newTask.innerHTML = task;

        // Create a div for the edit and delete buttons
        const btnsDiv = document.createElement('div');
        btnsDiv.classList.add('action-buttons');


        editBtn = document.createElement('button');
        editBtn.classList.add("edit","actionButton");
        editBtn.innerHTML = "Edit";

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("delete", "actionButton");
        deleteBtn.innerHTML = "Delete";


        btnsDiv.appendChild(editBtn);
        actionBtnsArray.push(editBtn);
        btnsDiv.appendChild(deleteBtn);
        actionBtnsArray.push(deleteBtn);

        newTask.appendChild(btnsDiv);
        tasksList.appendChild(newTask);

        input.value = "";
        return newTask;
        console.log(actionBtnsArray);

    }
})
 

actionBtnsArray.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const target = e.target;
        const listItemParent = target.parentElement.parentElement;
        const styles = e.currentTarget.classList;
        if (styles.contains('edit')) {
            if (target.innerHTML.toLowerCase() == "edit") {
                listItemParent.removeAttribute("readonly");
                listItemParent.focus();
                let item = listItemParent.innerHTML;
                let itemInput = document.createElement('input');
                itemInput.type = 'text';
                itemInput.value = item;
                itemInput.classList.add("edit","actionButton");
                listItemParent.remove();
                target.innerHTML = "Save";
                console.log("Yup");
            } else {
                target.innerHTML = "Edit";
            };
        } 
        else if (styles.contains('delete')) {
            listItemParent.remove();
            console.log("nope");
        }
    });
})