// task 1
for (let i = 0; i < 10; i++) {
    document.write(`<div>Ogo Norm Shtyka.</div>`);
}

// task 2
for (let i = 0; i < 10; i++) {
    document.write(`<div>Yze slozno no toze norm. ${i}</div>`);
}

// task 3
let i = 0;
while (i < 20) {
    document.write(`<h1>Ну всьо прієхалі...</h1>`);
    i++;
}

// task 4
let b = 0;
while (b < 20) {
    document.write(`<h1>Нє, ну це вже конєчна... ${b}</h1>`);
    b++;
}

// task 5
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (const justItems of listOfItems) {
   document.write(`<li>${justItems}</li>`);
}
document.write(`</ul>`);


// task 6
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(
        `<div class="product-card">
           <h3>${product.title}, Price - ${product.price}</h3>
           <img src="${product.image}" alt="${product.title}">
        </div>`);
}

// task 7
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]

let arrTr = [];
let arrFl = [];
let old = [];

let ii = 0;
while (ii < users.length) {
    let user = users[ii];
    if (user.status){
        arrTr[arrTr.length] = user;
    }
    else {
        arrFl[arrFl.length] = user;
    }
    if (user.age > 30){
        old[old.length] = user;
    }
    ii++;
}



console.log(arrTr);
console.log(arrFl);
console.log(old);


