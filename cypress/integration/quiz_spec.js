describe('Quiz Page', () => {

  const fav = {
    id: 1, question: "What was your worst travel experience?", isOpen: true
  }

  beforeEach(() => {
    cy.visit('http://localhost:3000/quiz_center');
  });

  it('Should be able to click "Get New Questions" and see two options render', () => {
    cy.get('.quiz-center__begin-quiz')
      .click()
      .get('.quiz-center__option')
      .should('be.visible')
  });

  // it('Should be able to select one of the options', () => {
  //   cy.get('input')
  //     .click()
  //     .should('be.checked')
  // });

  // it('Should be able to favourite a question', () => {
  //   cy.intercept('http://localhost:3001/api/v1/home', {
  //     fav
  //   })
  //   cy.get('.quiz-center__begin-quiz')
  //     .click()
  //     .get('.quiz-center__favourite-question-one')
  //     .click()
  //     .visit('http://localhost:3000/favourites')
  //     .get('p')
  //     .should('contain', `${fav.question}`)
  // });

});
