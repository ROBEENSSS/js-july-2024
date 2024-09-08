function getQueryParams () {
    const params = new URLSearchParams(window.location.search);
    return {
      postId: params.get('postId')
    };
}

const queryParams = getQueryParams();
const postId = queryParams.postId;

function objPostDetails(obj, container) {
    const ul = document.createElement('ul');

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const li = document.createElement('li');

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                li.innerText = `${key}:`;
                objPostDetails(obj[key], li);
            } else {
                li.innerText = `${key}: ${obj[key]}`;
            }
            ul.appendChild(li);
        }
    }
    container.appendChild(ul);
}


if (postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            const postDetailsDiv = document.getElementById('postDetails');
            objPostDetails(post, postDetailsDiv);
        })
        .catch(error => {
            console.error('404 fetching post', error);
        })
} else {
    const postDetailsDiv = document.getElementById('postDetails');
    postDetailsDiv.innerText = 'Десь загубився айді поста';
}