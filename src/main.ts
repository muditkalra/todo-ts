import './style.css'


interface Todo {
  title: string;
  isComplete: boolean;
  readonly id: string;
}


const todos: Todo[] = [];

const todoContainer = document.querySelector('.todoContainer') as HTMLDivElement;

const todoInput = document.getElementById('input') as HTMLInputElement;

const myForm = document.getElementById('myForm') as HTMLFormElement;

myForm.onsubmit = (event: SubmitEvent) => {
  event.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isComplete: false,
    id: String(Math.random() * 1000)
  }
  todoInput.value = ''

  // todos.push(todo);
  renderTodo(todo);
}

const generateTodoItem = (title: string, isComplete: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement('div');
  todo.className = "todo";
  todo.id = id;

  //creating p for title
  const titlep: HTMLParagraphElement = document.createElement('p');

  titlep.innerText = title;

  //creating a check box
  const checkBox: HTMLInputElement = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.className = 'isComplete';
  checkBox.checked = isComplete;
  checkBox.onchange = () => {
    titlep.className = checkBox.checked ? 'textCut' : '';
  }


  //creating a delete button 

  const btn: HTMLButtonElement = document.createElement('button');
  btn.innerText = 'X';
  btn.className = 'deletebtn';
  btn.onclick = () => {
    console.log('clicked')
    todos.filter(item => item.id !== id);
    console.log(todos);
    // renderTodo(todos);
    const div = document.getElementById(id) as HTMLDivElement;
    todoContainer.removeChild(div);
  }

  // appending all items
  todo.append(checkBox, titlep, btn);

  todoContainer.append(todo);

}

const renderTodo = (todo: Todo) => {
  // todos.forEach((item) => {
  generateTodoItem(todo.title, todo.isComplete, todo.id);
  // })
  return todos
}