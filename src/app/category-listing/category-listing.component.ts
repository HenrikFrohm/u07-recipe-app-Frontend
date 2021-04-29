import { Component, OnInit } from '@angular/core';
import { RecipesService, Recipes } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {
  dishes = [];
  category;
  constructor(private recipesService: RecipesService,
    private route: ActivatedRoute,
    private app: AppComponent) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category.strCategory'];
      const cachedDishes = JSON.parse(localStorage.getItem(this.category));
      if (cachedDishes !== null) {
        this.dishes = cachedDishes;
      } else {
        this.fetchCategoryDishes(this.category);
      }
    });
  }

  fetchCategoryDishes(category) {
    this.recipesService.fetchCategories(category)
      .subscribe((data: Recipes) => {
        if (data.meals !== null) {
          this.dishes = data.meals;
          localStorage.setItem(this.category, JSON.stringify(this.dishes));
        } else {
          this.recipesService.fetchArea(category)
            .subscribe((area: Recipes) => {
              this.dishes = area.meals;
              localStorage.setItem(this.category, JSON.stringify(this.dishes));
            });
        }
      });
  }
  
  saveRecipe(i) {
    this.recipesService.saveRecipe(i);
  }
}
