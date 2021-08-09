import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: recipe[] = [
    new recipe('recipe', 'recipe', 'https://picsum.photos/200/300'),
    new recipe('recipe', 'recipe', 'https://picsum.photos/200/300'),
    new recipe('recipe', 'recipe', 'https://picsum.photos/200/300')
  ];

  constructor() {}

  ngOnInit(): void {}
}
