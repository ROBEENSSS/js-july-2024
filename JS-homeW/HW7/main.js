// task 1
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(1, 'Robert', 'Уже задолбался', 'eraerae@', '3232222323'),
    new User(22,'shlapa','ysataya', '2121sdsdaw@', '22323424242'),
    new User(23,'shlapa','ysataya', '2121sdsdaw@', '22323424242'),
    new User(4,'shlapa','ysataya', '2121sdsdaw@', '22323424242'),
    new User(5,'shlapa','ysataya', '2121sdsdaw@', '22323424242'),
    new User(26,'shlapa','ysataya', '2121sdsdaw@', '22323424242'),
    new User(27,'shlapa','ysataya', '2121sdsdaw@', '22323424242'),
    new User(28,'shlapa','ysataya', '2121sdsdaw@', '22323424242'),
    new User(29,'shlapa','ysataya', '2121sdsdaw@', '22323424242'),
    new User(3,'shlapa','ysataya', '2121sdsdaw@', '22323424242'),
];

console.log(users);

// task 2
const filterF = (user) => user.id % 2 === 0;
console.log(users.filter(filterF));

// task 3
const sortUsers = (user1, user2) => user1.id - user2.id;
console.log(users.sort(sortUsers));

// task 4
function Client(id, name, surname, email, phone, products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

const clients = [
    new Client(1,'soMany',"Children", 'err2@ff', +3322213, [new Product('condom', 666), new Product('condom', 1666)]),
    new Client(2,'soMany',"Children", 'err2@ff', +3322213, [new Product('condom', 666)]),
    new Client(3,'soMany',"Children", 'err2@ff', +3322213, [new Product('condom', 666)]),
    new Client(4,'soMany',"Children", 'err2@ff', +3322213, [new Product('condom', 666)]),
    new Client(5,'soMany',"Children", 'err2@ff', +3322213, [new Product('condom', 666)]),
    new Client(6,'soMany',"Children", 'err2@ff', +3322213, [new Product('condom', 666), new Product('condom', 22666)]),
    new Client(7,'soMany',"Children", 'err2@ff', +3322213, [new Product('condom', 666)]),
    new Client(8,'soMany',"Children", 'err2@ff', +3322213, [new Product('condom', 666)]),
    new Client(9,'soMany',"Children", 'err2@ff', +3322213, [new Product('condom', 666)]),
    new Client(10,'soMany',"Children", 'err2@ff', +3322213, [new Product('condom', 666)]),
];

console.log(clients);

// task 5
console.log(clients.sort((a, b) => a.order.length - b.order.length));

// task 6
function Car(model, producer, year, maxSpeed, volumeEngine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volumeEngine = volumeEngine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        if (maxSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newYear) {
        if (newYear > 1815) this.year = newYear;
    }
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    }
}

const car = new Car('M4', 'BMW', 2024, 310, 5.5);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(10);
car.changeYear(2025);
car.addDriver({});
console.log(car);

// task 7
class Car1 {
    constructor(model, producer, year, maxSpeed, volumeEngine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volumeEngine = volumeEngine;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    increaseMaxSpeed (newSpeed) {
        if (this.maxSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear (newYear) {
        if (newYear > 1815) this.year = newYear;
    }
    addDriver (driver) {
        if (driver) this.driver = driver;
        }
}
const car1 = new Car1('M4', 'BMW', 2024, 310, 5.5);
console.log(car1);

car1.drive();
car1.info();
car1.increaseMaxSpeed(10);
car1.changeYear(2025);
car1.addDriver({});
console.log(car1);

// task 8
class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella('Alaskakl', 21, 36),
    new Cinderella('Alaska', 18, 37),
    new Cinderella('Alaskam', 21, 42),
    new Cinderella('Alaskan', 21, 39),
    new Cinderella('Alaskad', 21, 41),
    new Cinderella('Alaskab', 21, 40),
    new Cinderella('Alaskae', 21, 38),
    new Cinderella('Alaskas', 21, 35),
    new Cinderella('Alaskya', 21, 34),
    new Cinderella('Alaskau', 21, 35)
];

// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.findSlipper) {
//         prince.futureWife = cinderella;
//     }
// }

class Prince {

    constructor(name, age, findSlipper) {
        this.name = name;
        this.age = age;
        this.findSlipper = findSlipper;
    }
}

const prince = new Prince('Lev', 21, 37);

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.findSlipper);
prince.futureWife = cinderellaMain;
console.log(prince);

// task 9
Array.prototype.myForEach = function (callBack) {
    for (const item of this) {
        callBack(item);
    }
};

[1,22,333].myForEach((x) => console.log(x));

Array.prototype.myFilter = function (predicate) {
    const arr = [];
    for (const item of this) {
        if (predicate(item)) {

            arr.push(item);
        }
    }
    return arr;
}

let usersExample = [
    {status: false},
    {status: true},
    {status: false},
    {status: true},
];

const result = usersExample.myFilter((user) => user.status);
console.log(result);