import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UnansweredQuestion extends Component {
  state = {
    selectedAnswer: null
  }
  handleChange = (e) => {
    const selected = e.target.value
    this.setState(() => ({
      selectedAnswer: selected
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { selectedAnswer } = this.state
    const { authedUser, question } = this.props.data
    const answer = {
      authedUser,
      qid: question.id,
      answer: selectedAnswer
    }
    this.props.handleAnswer(answer)
  }
  render() {
    const { users, question } = this.props.data
    const { selectedAnswer } = this.state

    return (
      <div>
        <div className='box-header question-box-header'>{users[question.author].name} asks:</div>
        <div className='question-box-content'>
          <div className='question-box-content-author'>
            <img alt='user avatar' src={users[question.author].avatarURL} className='question-box-content-author-avatar' />
          </div>
          <div className='question-box-content-details'>
            <h3 className='question-box-content-details-title'>Would You Rather...</h3>
            <div className='question-box-content-details-options'>
              <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <div className='question-box-content-details-option'>
                  <input 
                    type='radio'
                    value='optionOne'
                    defaultChecked={selectedAnswer ==='optionOne'}
                    name='option'
                  /> {question.optionOne.text}
                </div>
                <div className='question-box-content-details-option'>
                <input 
                    type='radio'
                    value='optionTwo'
                    defaultChecked={selectedAnswer ==='optionTwo'}
                    name='option'
                  /> {question.optionTwo.text}
                </div>
                <div>
                  <button className='question-box-submit-btn' disabled={selectedAnswer === null}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>  
    )
  }
}

UnansweredQuestion.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UnansweredQuestion
