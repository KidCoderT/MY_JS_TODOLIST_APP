// This the the JS code for my TODO list App

var data;
var documentElements;

data = {
    'finished': [],
    'not_finished': [],
};

documentElements = {
    "textInputField": document.getElementById('text'),
    "todoContainerField": document.getElementsByClassName('finished__todo__container'),
    "finishedTodoContainerField": document.getElementsByClassName('unfinished__todo__container'),
}

function addTodoItem() {
    text = getText();
    data['not_finished'].push(text);
    addNewTodoItem();
};

function getText() {
    textFieldInput = documentElements['textInputField'].value;
    documentElements['textInputField'].value = "";
    return textFieldInput;
};

function addNewTodoItem() {};

