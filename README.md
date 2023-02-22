# Recipe App

React-based projects designed to retrieve data from spoonacular API which provide the following:

* Search through thousands of recipes using advanced filtering and ranking. NOTE: This method combines searching by query, by ingredients, and by nutrients into one endpoint.
  
```const getSearched = async (name) => {
     const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=15&query=${name}`);
    const receipes = await response.json();
    setSearchedRecipes(receipes.results);
    }


* Find random (popular) recipes. If you need to filter recipes by diet, nutrition etc. you might want to consider using the complex recipe search endpoint and set the sort request parameter to random.

```const getPopular = async () => {
        const api = await fetch ( `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`)
        const data = await api.json();
        setPopular(data.recipes)
       }
    };

* Get an analyzed breakdown of a recipe's instructions. Each step is enriched with the ingredients and equipment required.

```const fetchRecipe = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${recipeID.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const recipes = await response.json();
    setRecipetDetails(recipes);
    }

* Set up multilingual using the i18n module. You can review i18n documentation https://www.i18next.com/. Also, I found this very helpful plog https://medium.com/how-to-react/setup-multilingual-in-react-js-using-i18n-module-33b1bfbb57cd .

## HomePage-Arabic

!["HomePage-Arabic"](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/HomePage-ArabicLanguage.png?raw=true)


## HomePage-English

!["HomePage-English"](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/HomePage-English-Language.png?raw=true)


## Recipe Details

!["Recipe Details"](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/RecipeDetails.png?raw=true)

## RecipeImage 

!["RecipeImage"](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/RecipeImage.png?raw=true)

## Search Page

!["Search Page"](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/SearchPage.png?raw=true)
