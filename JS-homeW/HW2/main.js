//task 1
let array1 = ['string', 21, true, 'zzz', 'yeee', 'fck', 'omg', 8, 9, '10'];

console.log(array1); // кожен елемент окремо я би виводив так:   console.log(array[1], array[9]...);

//task 2
let ahalay = {
    title: 'ахалай махалай',
    pageCont: 'сяські ма-сяські',
    genre: 'fantasy'
}

//task 3
let mahalay = {
    title: 'ахалай махалай',
    pageCont: 'сяські ма-сяські',
    genre: 'fantasy 18+',
    authors: [
        {name: 'Dart pidofil', age: 48},
        {name: 'Stasy Busy', age: 14}
    ]
}

//task 4
let array2 = [
    {name: 'Dog', username: 'Cat', password: '1'},
    {name: 'Cat', username: 'Dog', password: '2'},
    {name: 'Yellow', username: 'Green', password: '3'},
    {name: 'Card', username: 'Table', password: '4'},
    {name: 'Table', username: 'Card', password: '5'},
    {name: 'Green', username: 'Yellow', password: '6'},
    {name: 'Bob', username: 'Obo', password: '7'},
    {name: 'Obo', username: 'Bob', password: '8'},
    {name: 'Shield', username: 'Here', password: '9'},
    {name: 'Here', username: 'Shield', password: '10'},
]
console.log(array2[0].password);
console.log(array2[1].password);
console.log(array2[2].password);
console.log(array2[3].password);
console.log(array2[4].password);
console.log(array2[5].password);
console.log(array2[6].password);
console.log(array2[7].password);
console.log(array2[8].password);
console.log(array2[9].password);

// task 5
let temps = [
    {morning: 444, afternoon: 444, evening: 444},
    {morning: 444, afternoon: 444, evening: 444},
    {morning: 444, afternoon: 444, evening: 444},
    {morning: 444, afternoon: 444, evening: 444},
    {morning: 444, afternoon: 444, evening: 444},
    {morning: 444, afternoon: 444, evening: 444},
    {morning: 444, afternoon: 444, evening: 444},
]

// Логічні розгалуження:

// task 1
let x = -1;
if (x > 0) {
    console.log(true);
} else {
    console.log(false)
}

// task 2
let time = 22;
if (time < 15) {
    console.log("first");
} else if (time < 30) {
    console.log("second");
} else if (time < 45) {
    console.log("third");
} else if (time < 59) {
    console.log("fourth");
}

// task 3
let day = 21;
if (day < 10) {
    console.log("first");
} else if (day < 20) {
    console.log("second");
} else if (day <= 31) {
    console.log("third");
}

// task 4
let schedule = "4";
switch (schedule) {
    case '1':
        console.log("Monday");
        break;

    case '2':
        console.log("Tuesday");
        break;

    case '3':
        console.log("Wednesday");
        break;

    default:
        console.log("wtf, dude")
}

// task 5
let a = 78;
let b = 68;
if (a > b){
    console.log(a);
}
else if (a < b){
    console.log(b);
}
else if (a === b){
    console.log(a,b);
}

// task 6
let xx = '';
switch (xx){
    case null:
    case undefined:
    case 0:
    case '':
        console.log("default");
        break;

}

// task 7
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log("Super");
}

if (coursesAndDurationArray[1].monthDuration > 5){
    console.log("Super");
}

if (coursesAndDurationArray[2].monthDuration > 5){
    console.log("Super");
}

if (coursesAndDurationArray[3].monthDuration > 5){
    console.log("Super");
}

if (coursesAndDurationArray[4].monthDuration > 5){
    console.log("Super");
}

if (coursesAndDurationArray[5].monthDuration > 5){
    console.log("Super");
}

