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
      <div className='box-header question-box-header'>{users[question.author].name} asks:</div>
      <div className='question-box-content'>
        <div className='question-box-content-author'>
          <img alt='user avatar' src={users[question.author].avatarURL} className='question-box-content-author-avatar' />
        </div>
        <div className='question-box-content-details'>
          <h3 className='question-box-content-details-title'>You Would Rather...</h3>
          <div className='question-box-content-details-options'>
            <div className='question-box-content-details-option'>
              <h4>{question[chosenAnswer].text}</h4>
              <i>{percentOfChosenAnswer}%</i>
              <br />
              <i>{numOfChosenAnswer} of {allVotes}</i>
            </div>
            <div className='question-box-content-details-option'>
              <h4>{question[otherOption].text}</h4>
              <i>{percentOfOtherOption}%</i>
              <br />
              <i>{numOfOtherOption} of {allVotes}</i>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default AnsweredQuestion  