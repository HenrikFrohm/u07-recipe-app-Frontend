import { Component, OnInit } from '@angular/core';
import { RecipesService, Recipes } from '../recipes.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  constructor(private recipesService: RecipesService) { }
  dishes;
  categoryNames = [];
  featured;

  ngOnInit() {
    let categories = JSON.parse(localStorage.getItem('nav'));
    for (let category of categories.categories) {
      this.categoryNames = [...this.categoryNames, category]
    }
    this.featured = this.categoryNames[Math.floor(Math.random() * this.categoryNames.length)];
    this.fetchFeatured(this.featured.strCategory);
  }

  fetchFeatured(category) {
    this.recipesService.fetchCategories(category.toLowerCase())
      .subscribe((dishes: Recipes) => {
        if (dishes.meals) {
          this.dishes = dishes.meals.splice(0, 3);
        }
      });
  }
}