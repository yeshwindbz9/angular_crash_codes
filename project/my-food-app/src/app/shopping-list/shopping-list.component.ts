import { AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, AfterViewInit{
  ingredients: Ingredient[];
  @ViewChild('warningAlert') alert: ElementRef;

  constructor(private shoppingListService: ShoppingListService){ }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((updatedIngredients: Ingredient[])=>{
      this.ingredients = updatedIngredients;
      for(let i=0; i<this.ingredients.length; i++){
        for(let j=i+1; j<this.ingredients.length; j++){
            if(this.ingredients[i] === this.ingredients[j]){
                this.alert.nativeElement.style.display= "block";
            }
        }
      }
    });
  }

  ngAfterViewInit(){
    for(let i=0; i<this.ingredients.length; i++){
      for(let j=i+1; j<this.ingredients.length; j++){
          if(this.ingredients[i] === this.ingredients[j]){
              this.alert.nativeElement.style.display= "block";
          }
      }
    }
  }
}
