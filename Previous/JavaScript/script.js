const to_do_list = [{
    name: 'make dinner',
    dueDate: '2025-4-17',
}, {
    name: 'listen music',
    dueDate: '2025-4-17'
}
];

rendorTodoList();

function rendorTodoList() {
    let todolistHTML = '';
    for (let i = 0; i < to_do_list.length; i++) {
        const todoObject = to_do_list[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `<p>${name} ${dueDate} <button onclick="
            todoList.splice(${i},1);
            rendorTodoList();
        ">Delete</button></p>` ;
        todolistHTML += html;
    }
    console.log(todolistHTML)

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;

}

function addToDo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    to_do_list.push({
        name: name,
        dueDate: dueDate
});
    console.log(to_do_list);

    const dateInputElement = document.querySelector('.js-due-date-input')
    const dueDatee = dateInputElement.value; 

    inputElement.value = '';

    const num = [1, 1, 3];
    console.log(num);
    for (let i = 0; i < num.length; i++) {
        num[i] = num[i] * 2;
    }
    console.log(num);

    rendorTodoList();

}