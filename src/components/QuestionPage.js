import React, { Component } from 'react'
import { connect } from 'react-redux'

import AnsweredQuestion from '../components/AnsweredQuestion'
import UnansweredQuestion from '../components/UnansweredQuestion'

import { handleAddAnswer } from '../actions/questions'

export class QuestionPage extends Component {
  handleAnswer = (answer) => {
    this.props.dispatch(handleAddAnswer(answer))
  }
  render() {
    const { isAnswered } = this.props

    return (
      <div className='box'>
        {isAnswered !== null
          ? <div>{isAnswered === true 
            ? (
              <AnsweredQuestion data={this.props} />
            )
            : (
              <UnansweredQuestion data={this.props} handleAnswer={this.handleAnswer} />
            )
          }</div>
          : <div>404</div>
        }
        
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params
  const question = questions[id]
  const isAnswered = question ? Object.keys(users[authedUser].answers).includes(question.id) : null

  return {
    users,
    question,
    isAnswered,
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionPage)
