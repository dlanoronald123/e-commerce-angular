import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', "Sample Test kaibigan", "https://i1.sndcdn.com/artworks-54YNdfIjfngFhLtW-FyUCbw-t500x500.jpg"),
    new Recipe('A test recipe', "Sample Test kaibigan", "https://i1.sndcdn.com/artworks-54YNdfIjfngFhLtW-FyUCbw-t500x500.jpg")

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
