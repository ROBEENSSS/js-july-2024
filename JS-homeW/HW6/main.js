// task1
let ja = 'javascript is cool';
let lo = 'lorem ipsum';
let he = 'hello world';

let basket = [ja.length, lo.length, he.length];
for (const number of basket) {
    console.log(number);
}

// task2
const basket1 = [ja.toUpperCase(), lo.toUpperCase(), he.toUpperCase()];
console.log(basket1);

// task 3
let he1 = 'HELLO WORLD';
let lo1 = 'LOREM IPSUM';
let ja1 = 'JAVASCRIPT IS COOL';

const basket2 = [he1.toLowerCase(), lo1.toLowerCase(), ja1.toLowerCase()];
console.log(basket2);

// task4
let str = ' dirty string   ';
console.log(str.trim());

// task5
const stringToArray = (str) => {
    if (str) {
        const splitArr = str.split(" ");
        return splitArr;
    }
    return [""];
}
console.log(stringToArray('Ревуть воли як ясла повні'));

// task 6
const arrNum = [10,8,-7,55,987,-1011,0,1050,0];
const arrStr = arrNum.map(str => str + '');
console.log(arrStr);

// task 7
const sortNums = (array, direction) => {
    if (direction === 'ascending') return array.sort((a,b) => a - b);
    if (direction === 'descending') return array.sort((a,b) => b - a);
};
console.log(sortNums([11,21,3], 'ascending'));
console.log(sortNums([11,21,3], 'descending'));

// task 8
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];

const sFM = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => ({...value, id: index + 1}));
console.log(sFM);

// task 9
const cardSuits = ['spade', 'diamond','heart', 'clubs'];
const cardName = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

let cards = [];
for (const suit of cardSuits) {
    for (const card of cardName) {
        const cards1 = ({cardSuits: suit, cardName: card});
        if (suit === 'heart' || suit === 'diamond') {
            cards1.color = 'red';
        }else {
            cards1.color = 'black';
        }
        cards.push(cards1);
    }
}
console.log(cards);

console.log(cards.find(card => card.cardSuits === 'spade' && card.cardName === 'ace'));
console.log(cards.filter(card => card.cardName === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuits === 'diamond'));
console.log(cards.filter(card => card.cardSuits === 'clubs' && (card.cardName !== '6' && card.cardName !== '7' && card.cardName !== '8' && card.cardName !== '9')));

// task 10
console.log(cards.reduce((accum, card)=> {
        switch (card.cardSuits){
            case 'spade':
                accum.spades.push(card);
                break;
            case 'diamond':
                accum.diamonds.push(card);
                break;
            case 'heart':
                accum.hearts.push(card);
                break;
            case 'clubs':
                accum.clubs.push(card);
                break;
        }
        return accum;
    },

    {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
    }));

// task 11
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course => course.modules.includes('sass')));
console.log(coursesArray.filter(course => course.modules.includes('docker')));
