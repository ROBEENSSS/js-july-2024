// task 1

function calc (aNum, bNum) {
    // return aNum * bNum;
    let result = aNum * bNum;
    console.log(result);
    return result;
}

calc(30, 33)

// task 2
function square (radius){
    let result = Math.PI * radius * radius;
    console.log(result);
    return result;
}

square(15)

// task 3
function cylinderSquare (height, radius){
    let result = 2 * Math.PI * radius * height;
    console.log(result);
    return result;
}

cylinderSquare(5, 11)

// task 4
function laLa (array){
    for (const elem of array) {
    console.log(array);
    }
}

// task 5
function paragraph (someText) {
    document.write(`<p>${someText}</p>`);
}
paragraph("JavaScript")
paragraph("TypeScript")
paragraph("React")

// task 6
function ul (textLi) {
    document.write(`
            <ul>
                <li>${textLi}</li>
                <li>${textLi}</li>
                <li>${textLi}</li>
            </ul>`);

}
ul("Vsim odinakoviy text")

// task 7
function ul2 (textLi, numLi){
    document.write(`<ul>`);
    for (let i = 0; i < numLi; i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`);

}
ul2("Some Text", 5)

// task 8
function elements (array){
    document.write(`<ul>`);
    for (const arr of array) {
        document.write(`<li>${arr}</li>`)
    }
    document.write(`</ul>`);
}
elements(["Array", 88, true])

// task 9
function objects (array) {
    for (const users of array) {
        document.write(`<div>${users.id} ${users.name} ${users.age}</div>`);
    }
}

objects([
    {id: 3, name: "Pitrosyan", age: 38},
    {id: 21, name: "Bite", age: 83}
]);

// task 10
function smallNum (arrayNum) {
    let min = arrayNum[0];
    for (const arr of arrayNum) {
        if (arr < min) {
            min = arr
        }
    }
    return min;
}
console.log(smallNum([5, 10, 22, 180, 4]));

// task 11
function sum (arr) {
    let bas = 0;
    for (const array of arr) {
        bas = array + bas;
    }
    return bas;
}
console.log(sum([1, 2, 10]));

// task 12
function swap(arr, index1, index2){
    let  temporary = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temporary;
    return arr;
}
console.log(swap([55,22,31,48], 0,1));

// task 13
function  exchange (sumUAH, currencyValues, exchangeCurrency){
    let chosenCurr;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            chosenCurr = item;
        }
    }
    let result = sumUAH/chosenCurr.value;
    return result;
}

console.log(exchange(10000,[{currency:'USD',value:41},{currency:'EUR',value:44}],'USD'))