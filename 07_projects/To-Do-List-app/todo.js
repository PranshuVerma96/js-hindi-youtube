let todoList = [
  {
    item: "Water",
    dueDate: "1/10/2003",
  },
  { item: "Milk", dueDate: "3/8/2003" }
  , { item: "Juce", dueDate: "9/1/2003" },
];

displayItems();
function addTodo() {
  let inputElement = document.querySelector("#todo-input");

  let DateElement = document.querySelector("#todo-date");
  let todoDate = DateElement.value;

  let todoItem = inputElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  DateElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
   

    let{item,dueDate} =todoList[i];
 

    newHtml += `
    
<span>${item}</span>
<span>${dueDate}</span>

<button class='btn-delete' onclick = "todoList.splice(${i},1);  displayItems();">

Delete</button>  

`;
  }
  containerElement.innerHTML = newHtml;
}
