import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { RecipeComponent } from './category-listing/recipe/recipe.component';
import { SavedComponent } from './saved/saved.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'category/:category.strCategory',
    component: CategoryListingComponent
  },
  {
    path: 'category/:category.strCategory/:dish.strMeal/:dish.idMeal',
    component: RecipeComponent
  },
  {
    path: 'saved-recipes',
    component: SavedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
