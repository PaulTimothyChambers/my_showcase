const apiEndpoint = 'https://my-better-showcase.herokuapp.com';

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error("An error has occured. Please try refreshing the page.")
  }
  return response.json();
}

function loadHomeText() {
  return fetch(`${apiEndpoint}/api/v1/home`)
    .then(response => checkResponse(response))
}

function loadLearningCenterText() {
  return fetch(`${apiEndpoint}/api/v1/learning_center`)
    .then(response => checkResponse(response))
}

function loadQuestions() {
  return fetch(`${apiEndpoint}/api/v1/quiz_center`)
    .then(response => checkResponse(response))
}

export {
  loadHomeText,
  loadLearningCenterText,
  loadQuestions
}
