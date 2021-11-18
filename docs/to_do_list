## COMPONENTS:

-[ ] App.js:
    * Remove `constructor`, `super`, and `this` declarations for code consistency throughout project
    * Remove `assets` property from `state`
    * Wrap each `Route` in a `<main>` tag, in order to gain more control over display of pages: replace current `<main>` wrapper with empty wrapper(`<></>`)
    * Create `const` for each prop being passed down through the various `Routes`

-[ ] LearningCenter.js:
    * Create DOM elements with `.map()`, matching an array of key:value pairs with their corresponding, dynamically created HTML tag

-[x] QuizCenter.js:
    * ~~Move `import` statement on line 2 down to line 4 for code consistency within project~~

-[ ] QuizForm.js:
    * Rename property `(one)/(two)IsActive` to `(favOne)/(favTwo)IsActive`
    * Refactor conditionals within `checkAnswers()` method  (possibly using the `bool ? trueResult : falseResult` syntax, or perhaps a `switch`)
    * Might move the `setQuestions()` method to QuizCenter file
    * create `const` for each passed-down prop, rather than using `this.state`/`this.method`

-[ ] RadioSelect.js:
    * Rename file to something more descriptive/empathetic, such as QuizInput.js or QuizFormInput.js

-[ ] FavouritesContainer.js
    * ~~Refactor `emptyFavs` to include unique `key` for each rendered `FavouriteCard`~~
    * Create component that can dynamically render both versions of the `FavouritesContainer` (one with `favourites`, one without)

-[ ] FavouriteCard.js:
    * I do not see any refactors I would want to make in this file, besides moving the `button` tag on line 18 up to line 17, making line 17 read as: `<button`) for internal code consistency

**************************
## TESTING SUITE:

-[ ] User Flow-Home/Nav:
    * User can:
      * ...see all home text elements upon visiting the home page
      * ...click on the Learning Center, Quiz Center, and Favourites tabs and be redirected to the appropriate webpage
      * ...see that the appropriate URL is displayed when visiting any of the site's pages

-[ ] User Flow-Learning Center:
    * User can:
      * ...see all learning center text elements upon visiting the learning center pages

-[ ] User Flow-Quiz Center/Favourites:
    * User can:
      * ...only see one interactable element upon page load (a button containing the text "Get New Questions")
      * ...click this button and see two questions appear on the page, with corresponding input radios/"Favourite This Question" buttons
      * ..click on either "Favourite This Question", adding it to their favourites (and causing it to display on the Favourites page)
      * ...click on either radio input and press the submit button, causing a message to appear on the DOM regarding the correctness/incorrectness of their selected answer

-[ ] User Flow-Favourites:
    * User can:
      * ...see all their favourited questions displayed on the DOM (as tested above)
      * ...click on the "Remove From Favourites" button on any favourited question card, causing it to immediately be removed from the DOM (may add a "Confirm Deletion" button/modal at some point)

**************************
## MISCELLANEOUS:

-[ ] Clean up SCSS, adding `_variables` and nesting element stylings

-[ ] Add conditional render to all `class` components to display `error.message` on the DOM, should an error occur
