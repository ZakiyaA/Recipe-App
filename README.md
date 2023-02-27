# Recipe App

Recipe App is a React-based project designed to retrieve data from spoonacular API which provide the following:

* Search through thousands of recipes using advanced filtering and ranking. NOTE: This method combines searching by query, by ingredients, and by nutrients into one endpoint.

  ``` const getSearched = async (name) => {
     const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=15&query=${name}`);
    const receipes = await response.json();
    setSearchedRecipes(receipes.results);
    }


* Find random (popular) recipes. If you need to filter recipes by diet, nutrition etc. you might want to consider using the complex recipe search endpoint and set the sort request parameter to random.

   ``` const getPopular = async () => {
        const api = await fetch ( `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`)
        const data = await api.json();
        setPopular(data.recipes)
    }
    };

* Get an analyzed breakdown of a recipe's instructions. Each step is enriched with the ingredients and equipment required.

    ``` const fetchRecipe = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${recipeID.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const recipes = await response.json();
        setRecipetDetails(recipes);
    }

Set up multilingual using the i18n module. You can review i18n documentation https://www.i18next.com/. Also, I found this very helpful plog https://medium.com/how-to-react/setup-multilingual-in-react-js-using-i18n-module-33b1bfbb57cd.



## HomePage-Arabic

!["HomePage-Arabic"](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/HomePage-ArabicLanguage.png?raw=true)


## HomePage-English

!["HomePage-English"](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/HomePage-English-Language.png?raw=true)

## Live HomePage

!["HomePage "](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/ezgif.com-video-to-gif.gif)


## Recipe Details

!["Recipe Details"](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/RecipeDetails.png?raw=true)

## RecipeImage 

!["RecipeImage"](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/RecipeImage.png?raw=true)

## Search Page

!["Search Page"](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/SearchPage.png?raw=true)


## Integrate Google Translator to Our App

* Add theses scripts to the first top of head tag in index.html in your project 

```<script type="text/javascript">
      function googleTranslateFunction(){
      new google.translate.TranslateElement({pageLanguage:'en', layout:google.translate.TranslateElement.InlineLayout.SIMPLE},'google_translate_element');
      } 
   </script>
      
   <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateFunction">
   </script>
```

* Add the following css code in index.css 

```.goog-te-gadget-simple {
  position: absolute;
  top: 0;
  right: 0;
  font-family: "Kanit", sans-serif;
  background-color: palevioletred;
  border: none;
  font-size: 13pt;
  display: inline-block;
  cursor: pointer;
  margin-top: 11px;
  zoom: 1;
  display: inline;
}
.goog-te-gadget-icon {
  margin-left: 2px;
  width: 2px;
  height: 0px;
  border: none;
  vertical-align: middle;
}

.VIpgJd-ZVi9od-xl07Ob-lTBxed {
  color: white !important;
}

.goog-te-gadget-simple .VIpgJd-ZVi9od-xl07Ob-lTBxed span { 
  color: white !important;
}

.VIpgJd-ZVi9od-vH1Gmf-ibnC6b div, .VIpgJd-ZVi9od-vH1Gmf-ibnC6b a  {
  color: palegoldenrod !important;
}
```
## HomePage-Arabic

!["HomePage-Arabic"](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/screencapture-localhost-3000-2023-02-27-11_50_37.png?raw=true)

## Live HomePage

!["HomePage "](https://github.com/ZakiyaA/Recipe-App/blob/main/src/assets/images/App-with-Google-Translator.gif)



