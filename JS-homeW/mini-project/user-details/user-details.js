function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        id: params.get('id')
    };
}

function objDetails(obj, container) {
    const ul = document.createElement('ul');

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const li = document.createElement('li');

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                li.innerText = `${key}:`;
                objDetails(obj[key], li);
            } else {
                li.innerText = `${key}: ${obj[key]}`;
            }
            ul.appendChild(li);
        }
    }
    container.appendChild(ul);
}

const queryParams = getQueryParams();
const userId = queryParams.id;

if (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const divUserDetails = document.getElementById('userDetails');
            objDetails(user, divUserDetails);
        })

        .catch(error => {
            console.error('404 Сервак Шаліт', error);
            document.getElementById('userDetails').innerText = 'А де деталі юзера?';
        });

    const postsBtn = document.getElementById('postsBtn');
    postsBtn.addEventListener('click', () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                const userPostsDiv = document.getElementById('userPosts');
                const ul = document.createElement('ul');

                posts.forEach(post => {
                    const li = document.createElement('li');
                    li.innerText = post.title;
                    ul.appendChild(li);
                });
                userPostsDiv.appendChild(ul);

                postsBtn.disabled = true;
                postsBtn.innerText = 'Нє тикай, уже усьо загрузив))';
            })

            .catch(error => {
                console.error('404 сервак шаліт с постами.', error);
                document.getElementById('userPosts').innerText = 'Де його пости??';
            });
    })
} else {
    console.error('User ID not found in URL');
    document.getElementById('userDetails').innerText = 'No user ID provided.';
}