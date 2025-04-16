const to_do_list = [];

rendorTodoList(); 

function rendorTodoList() {
    let todolistHTML = '';
    for (let i = 0; i < to_do_list.length; i++) {
        const todo = to_do_list[i];
        const html = `<p>${todo}</p>` ;
        todolistHTML += html;
    }
    console.log(todolistHTML)

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;

}

function addToDo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    to_do_list.push(name);
    console.log(to_do_list);

    inputElement.value = '';

    const num = [1, 1, 3];
    console.log(num);
    for (let i = 0; i < num.length; i++) {
        num[i] = num[i] * 2;
    }
    console.log(num);

    rendorTodoList(); 

}