import React from 'react'

const AnsweredQuestion = ({ data }) => {
  
  const { users, question, authedUser } = data
  
  const chosenAnswer = users[authedUser].answers[question.id]
  const otherOption = (chosenAnswer === 'optionOne') ? 'optionTwo' : 'optionOne'
  const allVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  const numOfChosenAnswer = question[chosenAnswer].votes.length
  const numOfOtherOption = question[otherOption].votes.length
  const percentOfChosenAnswer = (( numOfChosenAnswer / allVotes ) * 100).toFixed(1)
  const percentOfOtherOption = (( numOfOtherOption / allVotes ) * 100).toFixed(1)
  
  return (
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
}

export default AnsweredQuestion
