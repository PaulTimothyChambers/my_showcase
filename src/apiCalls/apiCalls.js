const apiEndpoint = 'http://localhost:3001';

const checkResponse = (response) => {
  if (response.statusCode === 500) {
    throw new Error("Error 500 - Server Error. Please try refreshing page.")
  }
  return response.json()
}

function loadQuizQuestions() {
  return fetch(`${apiEndpoint}/api/v1/quiz_center`)
    .then(response => checkResponse(response))
}

export {
  loadQuizQuestions
}
