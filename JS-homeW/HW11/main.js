// task 1
const cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObj => {
        const {carts} = cartsObj;
        console.log(carts);

        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-container');
            div.innerText = `${cart.userId} ${cart.total} ${cart.discountedTotal} ${cart.totalProducts} ${cart.totalQuantity}`;
            cartsDiv.append(div);
        }

    });

// task 2
const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');

const target = document.getElementsByClassName('target')[0];
fetch(url)
    .then(value => value.json())
    .then(recipesObj => {
        const {recipes} = recipesObj;
        for (const recipe of recipes) {
            console.log(recipe);
            const recipeDiv = document.createElement('div');
            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])) {
                    const arrayAndTitleDiv = document.createElement('div');
                    const title = document.createElement('div');
                    title.innerText = `${recipeKey}:`;
                    const ol = document.createElement('ol');
                    const array = recipe[recipeKey];
                    for (const item of array) {
                        const li = document.createElement('li');
                        li.innerText = item;
                        ol.append(li);
                    }
                    arrayAndTitleDiv.append(title, ol);
                    recipeDiv.append(arrayAndTitleDiv);
                } else {
                    if (recipeKey !== 'image') {

                    const keyDiv = document.createElement('div');
                    keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`;
                    recipeDiv.append(keyDiv);
                    }
                }
            }

            const img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.append(img);
            target.append(recipeDiv);
        }
    })
;








