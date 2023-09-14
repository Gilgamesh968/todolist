const todoInput = document.querySelector('.todoInput');
const todoBtn = document.querySelector('.todoBtn');
const todoListContainer = document.querySelector('#todoListContainer');

todoBtn.addEventListener('click', clickBtn);

function clickBtn(e){
    e.preventDefault();
    addTodo();
}

function addTodo(){
    
    const list = document.createElement('li');
    if (todoInput.value == ''){
        alert('Please Enter tasks')
    }
    else
    {
        const todoList = document.createElement('ul');
        todoList.classList.add('todoList');

        todoListContainer.appendChild(todoList)

        list.textContent = todoInput.value;
        todoList.appendChild(list);
        todoInput.value = '';
    
        const doneBtn = document.createElement('input');
        doneBtn.type = 'checkbox';
        doneBtn.value = 'value';
        todoList.appendChild(doneBtn)
        
        const removeBtn = document.createElement('button');
        todoList.appendChild(removeBtn);
        
        removeBtn.classList.add('remove');
        removeBtn.innerHTML= '&times;'
        removeBtn.addEventListener('click', () => {
            todoList.remove();
        })

        doneBtn.addEventListener('click', () => {
            if (doneBtn.checked){
                list.style.textDecorationLine = 'line-through';
            }else if(!doneBtn.checked){
                list.style.textDecorationLine = 'none';
            }
        })
    }
}