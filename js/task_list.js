const Form = document.querySelector('.task-list-form');
const Input = document.querySelector('.task-list-input');
const Items = document.querySelector('.task-list-items');

let tasks = [];

Form.addEventListener('submit', function (event) {
    event.preventDefault();
    addTask(Input.value);
});

function addTask(item) {
    if (item !== '') {
        const task = {
            id: Date.now(),
            name: item,
        };

        tasks.push(task);
        addToLocalStorage(tasks);
        Input.value = '';
    }
}

function renderTasks(tasks) {
    Items.innerHTML = '';

    tasks.forEach(function (item) {
        const div = document.createElement('div');
        div.setAttribute('class', 'row container d-flex task-item');
        div.setAttribute('data-key', item.id);

        div.innerHTML = `<p class="col-md-11 task-item-name text-start">${item.name}</p><button class="btn btn-danger float-end delete-button col-md-1">X</button>`;
        Items.append(div);
    });

}

function addToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks(tasks);
}

function deleteTask(id) {
    tasks = tasks.filter(function (item) {
        return item.id != id;
    });
    addToLocalStorage(tasks);
}

Items.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
        deleteTask(event.target.parentElement.getAttribute('data-key'));
    }
});