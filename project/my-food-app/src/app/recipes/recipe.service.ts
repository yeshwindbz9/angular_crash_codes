import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Khandvi', 
            'Khandvi is a savory snack in Maharashtrian cuisine as well as in Gujarati cuisine of India.', 
            'https://www.whiskaffair.com/wp-content/uploads/2014/08/Khandvi-3.jpg', 
            [
                new Ingredient("ButterMilk(cups)", 3),
                new Ingredient("GreenChilli(whole)", 2),
                new Ingredient("LemonJuice(spoon)", 1),
                new Ingredient("TurmericPowder(spoon)", 1),
                new Ingredient("GramFlour(cup)", 1),
                new Ingredient("Ginger(inch)", 3),
                new Ingredient("BMustardSeeds(spoon)", 1),
                new Ingredient("CorianderLeaves(gm)", 1),
            ]),
        new Recipe('Butter Beans', 
            'We call it Butter Rajma, this hearty meal can feed a family with just four ingredients.', 
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/butter-bean-chorizo-stew-c630c75.jpg?quality=90&webp=true&resize=375,341',
            [
                new Ingredient("ChoppedTomatoes(gm)", 800),
                new Ingredient("ButterBeans(gm)", 800),
                new Ingredient("Pesto(tub)", 1),
                new Ingredient("GarlicButter(spoon)", 3),
            ]),
        new Recipe('Fish Salt & Pepper', 
            'Crispy fish with a delicious with a flavourful and spicy kick. Takes only 30 minutes to whip up and is perfect for dinner or leftovers!', 
            'https://christieathome.com/wp-content/uploads/2020/02/Chinese-Salt-_-Pepper-Fish2-scaled.jpg',
            [
                new Ingredient("CodFillets(gm)", 800),
                new Ingredient("GarlicCloves", 6),
                new Ingredient("RedChilli", 1),
                new Ingredient("SpringOnion(stalk)", 2),
                new Ingredient("Avocado(cup)", 0.5),
                new Ingredient("SherryWine(spoon)", 2),
                new Ingredient("Salt(spoon)", 2),
                new Ingredient("Pepper(spoon)", 2),
            ]),
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredientsFromRecipe(ingredients);
    }

}