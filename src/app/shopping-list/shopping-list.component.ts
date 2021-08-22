import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  oningrediantAdded(ingrediant: Ingredient) {
    this.ingredients.push(ingrediant);
  }
  onDeleteItem() {
    this.ingredients.pop;
  }

  constructor() {}

  ngOnInit() {}
}
