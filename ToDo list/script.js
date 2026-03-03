let tasks = [];

let form = document.querySelector('#toDoForm');
let addBtn = document.querySelector('#addBtn');

function addTask() {
    let taskInp = document.querySelector('#taskVal');
    let taskval = taskInp.value.trim();

    if (taskval == "") {
        alert('Please Enter Valid Input');
    }
    tasks.unshift(taskval);
    taskInp.value = "";
    renderTask();
}




function renderTask() {
    let taskList = document.querySelector('#taskList');
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let newLi = `<li id='${index}-item'
                    class="taskItem  list-group-item p-2 mt-2 fs-5 rounded-3 d-flex justify-content-between align-items-center">

                    <div class="d-flex align-items-center gap-2">
                        <button id="tickBtn" class="check-btn"></button>
                        <span class="task-text">${task}</span>
                    </div>

                    <a href="#" class="delete btn" onclick="deleteTask(this,${index})"><i class="fa-solid fa-trash"></i></a>

                </li> `;


        taskList.innerHTML += newLi;

        tickBtn.onclick = function check(e) {
            let target = e.target;
            if (target.classList.contains('check-btn')) {
                const taskText = tickBtn.nextElementSibling;

                taskText.classList.toggle("completed");
                tickBtn.classList.toggle("checked");
            }
        }
    });


}


function deleteTask(element, indexToRemove) {

    tasks.splice(indexToRemove, 1);

    renderTask();

}

form.onsubmit = function (e) {
    e.preventDefault();
    addTask();
}






