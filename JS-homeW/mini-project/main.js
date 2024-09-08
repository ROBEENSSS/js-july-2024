fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const containerUsers = document.getElementById("containerUsers");
        if (!containerUsers) {
            console.error('Куди дівся контейнер?');
            return;
        }
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.innerText = `ID: ${user.id} Name: ${user.name}`;

            const button = document.createElement('button');
            button.innerText = 'Details';
            button.addEventListener('click', () => {
                window.location.href = `user-details/user-details.html?id=${user.id}`;
            });
            userDiv.appendChild(button);
            containerUsers.appendChild(userDiv);
        });
    })
    .catch(error => console.error('404 Сервак Шаліт', error));
