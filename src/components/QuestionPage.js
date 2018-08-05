import React, { Component } from 'react'
import { connect } from 'react-redux'

export class QuestionPage extends Component {
  render() {
    const { users, question, isAnswered, authedUser } = this.props
    const chosenAnswer = users[authedUser].answers[question.id]
    const otherOption = (chosenAnswer === 'optionOne') ? 'optionTwo' : 'optionOne'
    const allVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    const numOfChosenAnswer = question[chosenAnswer].votes.length
    const numOfOtherOption = question[otherOption].votes.length
    const percentOfChosenAnswer = (( numOfChosenAnswer / allVotes ) * 100).toFixed(1)
    const percentOfOtherOption = (( numOfOtherOption / allVotes ) * 100).toFixed(1)
    
    return (
      <div>
        {isAnswered === true 
          ? (
            <div>
              <h3>{users[question.author].name} asks:</h3>
              <img alt='user avatar' src={users[question.author].avatarURL} />
              <h1>You Would Rather...</h1>
              <div>
                <div>
                  <h4>{question[chosenAnswer].text}</h4>
                  <br />
                  <i>{percentOfChosenAnswer}%</i>
                  <br />
                  <i>{numOfChosenAnswer} of {allVotes}</i>
                </div>
                <h2>Than</h2>
                <div>
                  <h4>{question[otherOption].text}</h4>
                  <br />
                  <i>{percentOfOtherOption}%</i>
                  <br />
                  <i>{numOfOtherOption} of {allVotes}</i>
                </div>
              </div>
            </div>
          )
          : (<div />)
        }
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params
  const question = questions[id]
  const isAnswered = Object.keys(users[authedUser].answers).includes(question.id)

  return {
    users,
    question,
    isAnswered,
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionPage)
