import { Component, OnInit } from '@angular/core';
import { Recipes, RecipesService } from '../recipes.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

   constructor(private recipesService: RecipesService,
    private app: AppComponent) { }
  saves;
  saved = [];

  ngOnInit() {
    this.saves = localStorage.getItem('saved');
    this.saves = JSON.parse(this.saves);
    this.showSaves();
  }

  showSaves() {
    if (this.saves !== null) {
      for (const save of this.saves) {
        this.recipesService.fetchRecipes(save)
          .subscribe((data: Recipes) => {
            this.saved = [...this.saved, data.meals[0]];
          });
      }
    }
  }

  removeFromSaved(index) {
    this.saved.splice(index, 1);
    this.saves.splice(index, 1);
    localStorage.setItem('saved', JSON.stringify(this.saves));
  }
}
