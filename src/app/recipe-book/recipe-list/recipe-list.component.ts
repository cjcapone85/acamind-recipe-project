import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import{ Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is simply a test','http://foodjaunts.com/wp-content/uploads/2012/05/Hawaiian-Fish-Pasta-Overview.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test','http://foodjaunts.com/wp-content/uploads/2012/05/Hawaiian-Fish-Pasta-Overview.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
