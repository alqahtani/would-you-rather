import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

function addAnswer (answer) {
  return {
    type: ADD_ANSWER,
    answer
  }
}

export function handleAddQuestion (question) {
  return dispatch => {
    _saveQuestion(question)
      .then((q) => {
        dispatch(addQuestion(q))
      })
  }
}

export function handleAddAnswer(answer) {
  return dispatch => {
    _saveQuestionAnswer(answer)
      .then(() => {
        dispatch(addAnswer(answer))
      })
  }
}
