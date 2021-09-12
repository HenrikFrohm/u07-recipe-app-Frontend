//rooten av hela app-mappen.

import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/shared/auth.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { RecipeComponent } from './category-listing/recipe/recipe.component';
import { FeaturedComponent } from './featured/featured.component';
import { SavedComponent } from './saved/saved.component';
import { RecipesService } from './recipes.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedComponent,
    NavComponent,
    SavedComponent,
    CategoriesComponent,
    CategoryListingComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    RecipesService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
