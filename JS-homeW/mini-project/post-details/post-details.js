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

function commentsRend (comments, container) {
    const ul = document.createElement('ul');
    comments.forEach(comment => {
        const li = document.createElement('li');
            li.innerHTML = `
                <p><strong>Name:</strong> ${comment.name}</p>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p><strong>Comment:</strong> ${comment.body}</p>
        `;
            ul.appendChild(li);
    });
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

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        const postComments = document.getElementById('postComments');
        postComments.innerHTML = `<h2>Comments:</h2>`;
        commentsRend(comments, postComments);
    })
    .catch(error => {
        console.error('Error fetching post comments:', error);
        const postCommentsDiv = document.getElementById('postComments');
        postCommentsDiv.innerHTML = `<h2>404! А всьо, нету комментов, шукай тепер</h2><p>${error.message}</p>`;
    });
