async function getRecipe(recipeType){
    var i;
    for(i = 1; i < 6; i++){
    fetch(`https://recipe-puppy.p.rapidapi.com/?p=${i}&q=${recipeType}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'recipe-puppy.p.rapidapi.com',
		    'x-rapidapi-key': 'eea58675aamsh25eed4bc8377f81p10ba62jsnae03291cf6b4'
        }
    })
    .then(response => {
        return response.json();
    })
    .then((data) => {
        displayRecipe(data.results);
    })
    .catch(err => {
        console.log(err)
    })
    };
}

/* function allRecipes(list){
    list.forEach(function(recipe){
        let list = document.querySelector('#list');
        list.innerHTML += `<div class="row">
        <div class="col s12 m6 l3"> 
            <p>
                <img src="${recipe.thumbnail}"> 
                <br>
                <a href="recipe.html">${recipe.title}</a> 
            </p>
        </div>
        </div>`
    })
} */

function displayRecipe(result){
    result.forEach(function(recipe){
    let result = document.querySelector('#result');
    result.innerHTML += `<div class="container">
    <div class="row">
    <div class="col s12 m6 l6">
    <div class="card horizontal">
        <div class="card-image">
            <img src="${recipe.thumbnail}"> 
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <h2 class="header">${recipe.title}</h2>
                <p>${recipe.ingredients}</p>
            </div>
            <div class="card-action">
                <a target="_blank" rel="nofollow" href="${recipe.href}">Link to directions</a>        
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>`
    })
}

getRecipe('cookie');


