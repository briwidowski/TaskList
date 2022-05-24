window.addEventListener('load', () => {
    const input = document.querySelector('.add');
    const tasksList = document.querySelector('.tasksList');
    
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const task = input.value;

            // Create a new li element for input
            const newTask = document.createElement('li');
            newTask.innerHTML = task;

            // Create a div for the edit and delete buttons
            const actionBtns = document.createElement('div');
            actionBtns.classList.add('action-buttons');


            const edit = document.createElement('button');
            edit.classList.add('edit');
            edit.innerHTML = "Edit";

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.innerHTML = "Delete";


            actionBtns.appendChild(edit);
            actionBtns.appendChild(deleteBtn);

            newTask.appendChild(actionBtns);
            tasksList.appendChild(newTask);

            input.value = "";

        }
    })
})

