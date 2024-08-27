// task 1
const calc = (a, b) => {
    return a * b;
}
console.log(calc(202,2));

// task2
const circle = (radius) => {
    return Math.PI * radius * radius;
}
console.log(circle(404));

// task 3
const cylinder = (h, r) => {
    return 2 * Math.PI * r * h;
}
console.log(cylinder(40,4));

// task 4
const allElement = (array) => {
    for (const item of array) {
        console.log(item);
    }
    return array;
}
console.log(allElement(["stringa", true, 32]));

// task 5
const parghWithText = (someText) => {
    document.write(`<p>${someText}</p>`);
    return someText;
}
console.log(parghWithText("Some Text"));

// task 6
const ulWithLi = (someLi) => {
    document.write(`<ul>`);
    document.write(`
            <li>${someLi}</li>
            <li>${someLi}</li>
            <li>${someLi}</li>`);
    document.write(`</ul>`);
    return someLi;
}

console.log(ulWithLi("??404UndefinedNaNwtf??"));

// task 7
const moreLi = (someLi, numberLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < numberLi; i++) {
    document.write(`<li>${someLi}</li>`);
    }
    document.write(`</ul>`);
    return someLi;
}
console.log(moreLi("Походу шляпа... А нє, получілось)))", 3));

// task 8
const primitive = (array) => {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
    return array;
}
console.log(primitive([22, true,"stringa"]));

// task 9
const arrObj = (arr) => {
    for (const item of arr) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
    }
    return arr;
}
console.log(arrObj([
    {id: 1, name: "Shlapa", age: 21},
    {id: 2, name: "Ysataya", age: 12}
]));

// task 10
const smallNum = (num) => {
    let fixMinNum = num[0];
    for (const item of num) {
        if (item < fixMinNum) {
            fixMinNum = item;
        }
    }
        return fixMinNum;
}
console.log(smallNum([404,405,406]));

// task 11
const sum = (arr) => {
    let basket = 0;
    for (const item of arr) {
        basket = item + basket;
    }
    return basket;
}
console.log(sum([1,1,402]));

// task 12
const swap = (arr, i1, i2) => {
    let save = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = save;
    return arr;
}
console.log(swap([4,4,0],1,2));

// task 13
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let chosen;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosen = item;
        }
    }
        let result = sumUAH/chosen.value;
        return result;
}
console.log(exchange(16160,[{currency:'USD',value:40},{currency:'EUR',value:40}],'USD'));