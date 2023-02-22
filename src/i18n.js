
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationAR from "./ar/translation.json"
import translationEN from "./en/translation.json"
i18n
//   .use(Backend) 
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
resources: {
    en: {
        translation:  {
            "title": "Recipe-App",
            "Home": "Home",
            "Instruction": "Instruction",
            "Italian": "italian",
            "Jewish": "jewish",
            "Greek": "Greek",
            "Indian": "Indian",
            "Recipe": "Search for a recipe",
            "Ingredients": "Ingredients",
            "RecipeList": "Recipe List",
            "VeggiesPicks": "Veggies Picks",
            "cardImage": "Card Image",
            "RecipeDetails": "Recipe Details",
            "RecipeImage": "Download Recipe Image"
          }
        
     
   
},
    ar: {
      translation:  {
        "title": "تطبيق وصفات",
        "Home": "الصفحة الرئيسية",
        "Instruction": "تعلبمات",
        "Italian": "إيطالية",
        "Jewish": "يهودية",
        "Greek": "يونانية",
        "Indian": "هندية",
        "Recipe": "ابحث عن وصفة",
        "Ingredients": "مكونات",
        "RecipeList": "قائمة الوصفات",
        "VeggiesPicks": "مختارات الخضار",
        "cardImage": "صورة الوصفة",
        "RecipeDetails": "تفاصبل الوصفة",
        "RecipeImage": " حمل صورة الوصفة "
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;