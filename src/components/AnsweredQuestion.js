import React from 'react'
import PropTypes from 'prop-types'
import { Line } from 'rc-progress'

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
      <div className='box-header question-box-header'>Asked by {users[question.author].name}:</div>
      <div className='question-box-content'>
        <div className='question-box-content-author'>
          <img alt='user avatar' src={users[question.author].avatarURL} className='question-box-content-author-avatar' />
        </div>
        <div className='question-box-content-details'>
          <h3 className='question-box-content-details-title'>Results:</h3>
          <div className='question-box-content-details-options'>
            <div className='question-box-content-details-option question-box result-box result-selected-option'>
              <div className='result-selected-optio-badge'>Your Vote</div>
              <h4><span>You would rather</span> {question[chosenAnswer].text}</h4>
              <Line percent={parseInt(percentOfChosenAnswer, 10)} strokeWidth="4" strokeColor="#f4645f" />
              <p className='result-stats percent'>{percentOfChosenAnswer}%</p>
              <p className='result-stats'>{numOfChosenAnswer} out of {allVotes} votes</p>
            </div>
            <div className='question-box-content-details-option question-box result-box result-other-option'>
              <h4><span>Than</span> {question[otherOption].text}</h4>
              <Line percent={parseInt(percentOfOtherOption, 10)} strokeWidth="4" strokeColor="#dee0df" />
              <p className='result-stats percent'>{percentOfOtherOption}%</p>
              <p className='result-stats'>{numOfOtherOption} out of {allVotes} votes</p>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

AnsweredQuestion.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AnsweredQuestion  