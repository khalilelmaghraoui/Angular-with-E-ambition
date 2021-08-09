import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[] = [
    new Ingrediant('tomato', '4'),
    new Ingrediant('botato', '5'),
    new Ingrediant('onion', '2')
  ];
  constructor() {}

  ngOnInit(): void {}
}
