// task 1
const button = document.getElementById('btn');
button.onclick = function () {
    document.getElementById('text').remove();
}


// task 3
const target = document.getElementById('target');

const someForm = document.forms.someForm;
const sendButton = someForm.sendButton;
sendButton.addEventListener('click', () => {
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = someForm.age.value;
    let obj = {nameValue, surnameValue, ageValue};
    console.log(obj);
    target.innerText = obj.nameValue.toString() + obj.surnameValue.toString() + obj.ageValue.toString();
});

// task 4
let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);

document.getElementById('target1').innerText = currentNumber;

// task 5
let sessionList = [];
if (localStorage.getItem('sessionList')) {
    sessionList = JSON.parse(localStorage.getItem('sessionList'));
}
sessionList.push(new Date());
localStorage.setItem('sessionList', JSON.stringify(sessionList));

// task 6
const input = document.getElementById('xxx');
const resultDiv = document.getElementById('result');
input.oninput = function () {
    resultDiv.innerText = +this.value * 2.2;
};

// task 7
function addToLocalStorage(arrayName, objToAdd) {
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('404');
    }
    const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}

addToLocalStorage('sessionList', {shlapa: 'Ysataya'});


// task 8
const table = document.getElementById('table');
const tableGeneratorFrom = document.forms['tableGeneratorFrom'];

tableGeneratorFrom.onsubmit = function (e) {
    e.preventDefault();
    const linesValue = +tableGeneratorFrom.lines.value;
    const cellsValue = +tableGeneratorFrom.cells.value;
    const dataValue = tableGeneratorFrom.data.value;
    console.log(linesValue, cellsValue, dataValue);

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.append(td);

        }

        table.append(tr);
    }
}
