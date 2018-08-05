import { _getQuestions, _getUsers } from '../utils/_DATA'

import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'


export function handleInitialData() {
  return dispatch =>
    Promise.all([_getQuestions(), _getUsers()]).then(([questions, users]) => {
      dispatch(receiveQuestions(questions))
      dispatch(receiveUsers(users))
      dispatch(setAuthedUser(null))
    })
}
