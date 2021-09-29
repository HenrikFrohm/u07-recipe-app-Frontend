# App description

The goal with this project was to create an application using the Angular framework that allows users to learn more about different recipes and choose which kind of meal they are interested in; like different dish-types or vegetarian- to meat-based meals.

It was created by utilizing several components, a service typescript file, the default Angular files as well as using an external api from recipe-focused themealdb website.

## Details for Components and service:

- Recipe Service: exporting interfaces to enable classes to implement them, using methods for different endpoints from themealdb and then fetch the data using HttpClient.get() method - allowing communication between the app and web server. Will be utilized in different components to display api-data. Utilizes method to save recipies/objects (stringified to be strings) to localstorage, so they will not be deleted when the browser is closed.

- Nav component: contains navigational links for users to go between the homepage and a route where the can find saved recipes.

- Home component: homepage, containing a image and description of a meal from the themealdb random-endpoint api. First component where structural directives are being used, showing interpolated values if conditions are met in \*ngIf.

- Featured component: displays up to three meals from the meal-category endpoint, using Math.random() js function to randomize the meals. Incorperating structural directives and interpolated values to display api-data.

- Saved component: route for displaying saved recipes via the observable .subscribe method. Users can get recipe information by clicking on title and they also have the option of removing recipes from the list. To enable deletition of array element from index the splice method is used.

- Categories, Category-listing and Recipe component: Displaying clickable category-buttons, route for list of meals when category is clicked and another route to display the i meal-information when meal-title has been clicked. Incorperating structural directives and interpolated values to display api-data.

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
