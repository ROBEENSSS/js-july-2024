// task 1
const div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');

const cloneNode = div.cloneNode(true);

document.body.append(div, cloneNode);

// task 2
let arr = ['Main','Products','About us','Contacts'];
const menu = document.createElement('ul');
document.body.append(menu);

for (const item of arr) {
    const li = document.createElement('li');
    li.innerHTML = `<h2>${item}</h2>`;
    menu.append(li);
}

// task 3
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerHTML = `<p>${course.title} ${course.monthDuration}</p>`;
    document.body.append(div);
}

// task 4
for (const course of coursesAndDurationArray) {
   const div = document.createElement('div');
   div.classList.add('item');
   div.innerHTML = `<h1 class="heading">${course.title}</h1> <p class="description">${course.monthDuration}</p>`;
    document.body.append(div);
}
