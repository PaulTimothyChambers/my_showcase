describe('Home Page', () => {

  const text = {
    aboutAuthor: "Bork bork bark bork. Boark growl, bork baork baork slight-whimper. Licks-lips and yawns!",
    greeting: 'Greetings, fellow soul!',
    purpose: 'If you\'re reading this, then you must be looking for something... anything... to fight off the isolation. You want a connection, a real connection with another human soul and you\'ve come here for help. Well, I have some bad news; the contents of this site will most certainly NOT help you connect with another person. Not directly, at least. Connection is a two-way street, which means you\'ll need to be vulnerable... and long periods of loneliness can make it very difficult to be vulnerable. What this site CAN help you do, however, is open up the door to POSSIBLE connections. The learning contained within this place will allow you to more easily meet and get to know other people, but the choice to be vulnerable and attempt a true connection is ultimately up to you (and them, for that matter). That all being said, I personally think you\'re on the right track if you\'re here and ready to learn, because even though these methods can only open the door (technically speaking), they\'re REALLY REALLY GOOD AT DOING THAT.',
    siteGuide: 'On the top left of the screen, you\'ll see some tabs. Right now, you\'re on the home page, so the HOME tab is showing. Hover over the other tabs, and you\'ll see a LEARNING CENTER tab, a QUIZ CENTER tab, and a FAVOURITES tab (respectively).',
    learningCenter: 'Clicking on the LEARNING CENTER tab will take you to a short-ish guide detailing all you\'ll need to know to begin asking powerful, open-ended questions. The LEARNING CENTER is an excellent place to visit first, even if you\'re already familiar with open-ended questions. It\'s worth the read.',
    quizCenter: 'Here you will find a quiz (of sorts) designed to make the use of open-ended questions more effortless and natural. You will be presented with a number of questions, and are expected to select all that are open-ended (or none, if all are closed-ended) before submitting your answer. That\'s the long and short of it, go take it for a test drive and see how you do!',
    favourites: 'During quizzes, you\'ll see an option to favourite any question that comes up, just in case you like what you see and want to save it for later. You can access those saved questions here, in the FAVOURITES tab.',
    callToAction: 'This is the part where the "call to action" is supposed to happen, something to motivate you to struggle on. In reality, though, it takes incredible amounts of sheer drive to do what you\'re already doing now; trying to escape the prison of loneliness. You don\'t need motivation, you need human connection, and that\'s exactly what you\'re going to get if you keep pushing forward like the quiet force of nature you are... '
  }

  beforeEach(() => {
    cy.intercept('https://my-better-showcase.herokuapp.com/api/v1/home', {
      text
    }).visit('https://showcase_v7.surge.sh');
  });

  it('Should display text data received from the API', () => {
    cy.get('p')
      .should('contain', `${text.aboutAuthor}`)
      .should('contain', `${text.purpose}`)
      .should('contain', `${text.siteGuide}`)
      .should('contain', `${text.learningCenter}`)
      .should('contain', `${text.quizCenter}`)
      .should('contain', `${text.favourites}`)
      .should('contain', `${text.callToAction}`)
  });

  it('Should navigate the user to the specified page when clicking on the corresponding nav tab', () => {
    cy.get('.nav-tabs__learning-center')
      .click({force: true})
    cy.get('.learning-center__def-title')
      .should('have.text', 'HOW TO ASK OPEN-ENDED QUESTIONS')

    cy.get('.nav-tabs__quiz-center')
      .click({force: true})
    cy.get('.quiz-center__header-text')
      .should('have.text', 'The QUIZ CENTER')

    cy.get('.nav-tabs__favourites')
      .click({force: true})
    cy.get('.favourites__title')
      .should('have.text', 'FAVOURITES')

    cy.get('.nav-tabs__home')
      .click({force: true})
    cy.get('.welcome-text__title-one')
      .should('have.text', 'I WANT TO')
  });
});
