// This the the JS code for my TODO list App

var data;
var todoItemCount;
var documentElements;

data = {
    'finished': [],
    'not_finished': []
};

documentElements = {
    "textInputField": document.getElementById('text'),
    "todoContainerField": document.getElementById('unfinished__todo__container'),
    "finishedTodoContainerField": document.getElementById("finished__todo__container")
}

function addTodoItem() {
    text = getText();
    data['not_finished'].push(text);
    refreshTodo();
};

function getText() {
    textFieldInput = documentElements['textInputField'].value;
    documentElements['textInputField'].value = "";
    return textFieldInput;
};

function refreshTodo() {
	// * This is the refresher fo the unfinished todo item
    documentElements['todoContainerField'].innerHTML = "";

    data['not_finished'].forEach(element => {
        html = `<div class="TodoItem">
					<h2>${element}</h2>
					<button class="btn btn-success" onclick="doneTodoItem(this)">DONE</button >
					<button class="btn btn-danger" onclick="removeTodoUnfinished(this)">X</button>
				</div>
        `;
        documentElements['todoContainerField'].innerHTML += html;
    });
	
	// * This is the refresher fo the finished todo item
    documentElements["finishedTodoContainerField"].innerHTML = "";

    data['finished'].forEach(element => {
        html = `<div class="TodoItem">
					<h2>${element}</h2>
					<button class="btn btn-warning" onclick="undoTodoItem(this)">UNDO</button>
					<button class="btn btn-danger" onclick="removeTodofinished(this)">X</button>
				</div>
        `;
        documentElements["finishedTodoContainerField"].innerHTML += html;
    });
};

function doneTodoItem(element) {
	divContainer = element.parentElement;
	childList = divContainer.children;
	h2 = childList[0];
	index = data['not_finished'].indexOf(h2.textContent);
	data['not_finished'].splice(index, 1);
	data['finished'].push(h2.textContent);
	refreshTodo();
};

function undoTodoItem(element) {
	divContainer = element.parentElement;
	childList = divContainer.children;
	h2 = childList[0];
	index = data['finished'].indexOf(h2.textContent);
	data['finished'].splice(index, 1);
	data['not_finished'].push(h2.textContent);
	refreshTodo();
};

function removeTodoUnfinished(element) {
	container = element.parentElement;
	childList = container.children;
	text = childList[0].textContent;
	index = data['not_finished'].indexOf(text);
	data['not_finished'].splice(index, 1);
	refreshTodo();
};

function removeTodofinished(element) {
	container = element.parentElement;
	childList = container.children;
	text = childList[0].textContent;
	index = data['finished'].indexOf(text);
	data['finished'].splice(index, 1);
	refreshTodo();
};
