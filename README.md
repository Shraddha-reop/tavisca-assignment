# MovieShare

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

Movie sharing application. The links will be added by registered users along with a title, short description
and category tags like Movie Title, Description, category, year of release etc.

# App should allow
public listing of links and their associated data - Done
option for user login and registration flow - Done
for logged in users CRUD flow for links and their info - Done


To simplify initial dev flow we used json-server to simulate REST API as needed so we don’t have to
develop any backend APIs.- Done

# Expectations:
Build your app using latest Angular CLI - Done

Write your own markup and css and don’t use any external design system or component libraries like bootstrap, material etc.  [Layout should be use Grid css] - DOne

Use NgRx for state management - Done 

Write unit tests for all components using Jest - Done

Make sure your app is accessible - Done

Write Storybook stories for your components - Done

Create two themes for the app – light and dark which can be changed from header - Done

Publish your code to GitHub with proper commit messages - Done

Also add proper documentation for approach, design, setup and open items - Done


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via jest.

collect code coverage information and write them down in a folder called  coverage/src.

Statements: 84.49%
Lines: 83.45% 
Functions: 68.75%
Branches : 54%


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running Json Server

Run ` npm run json:server` to run json server and to achieve CRUD operation.

## Running Storybook

Run `npm run storybook` to run storybook and open the catalogue of reusable components of application.
Navigate to http://localhost:6006/ 

## Reusable component 
ButtonComponent - Buttons used in app to listen keyboard and mouse events.

ThemeComponent - It toggle between light and Dark Theme

CardCOmponent - Shows movies data on card.


## App components
HomeCOmponent
LoginComponent
RegisterComponent


## Dependancy services
AppService - App functionality

AppServiceService - CURD Operations.

ThemeService - Thems Dark and Theme Light

AccountService - Login ang Register.

## State managenent

NgRx - State management

States Used - AppState, AppModelState

Action - To dispatch event.

Effects - To call service.

Reducer - To set State.

Selector - To select State.

Used Observable for async call.


