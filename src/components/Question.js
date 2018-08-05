import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Question extends Component {
  render() {
    const { user, question, answer } = this.props
    const otherOption = (answer === 'optionOne') ? 'optionTwo' : 'optionOne'
    
    return (
      <div className='question-box'>
        <div className='box-header question-box-header'>
        {user.name} asks:
        </div>
        <div className='question-box-content'>
          <div className='question-box-content-author'>
            <img alt='user avatar' src={user.avatarURL} className='question-box-content-author-avatar' />
          </div>
          {answer !== null 
            ? (
              <div className='question-box-content-details'>
                <h3 className='question-box-content-details-title'>You would rather:</h3>
                <div className='question-box-content-details-options'>
                  <p className='question-box-content-details-option'>{question[answer].text}</p>
                  <h4 className='question-box-content-details-option-separator'>THAN</h4>
                  <p className='question-box-content-details-option'>{question[otherOption].text}</p>
                </div>
                <Link to={`/questions/${question.id}`} className='question-box-view-btn'>
                View Poll
                </Link>
              </div>
            )
            : (
              <div className='question-box-content-details'>
                <h3 className='question-box-content-details-title'>Would you rather ...</h3>
                <div className='question-box-content-details-options'>
                  <p className='question-box-content-details-option'>{question.optionOne.text}</p>
                  <h4 className='question-box-content-details-option-separator'>OR</h4>
                  <p className='question-box-content-details-option'>{question.optionTwo.text}</p>
                </div>
                <Link to={`/questions/${question.id}`} className='question-box-view-btn'>
                View Poll
                </Link>
              </div>
            )}
        </div>
      </div>
    )
  }
}

Question.propTypes = {
  user: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
  answer: PropTypes.string.isRequired,
}

export default Question
