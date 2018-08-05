import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Question extends Component {
  render() {
    const { user, question, answer } = this.props
    const otherOption = (answer === 'optionOne') ? 'optionTwo' : 'optionOne'
    
    return (
      <div>
        <hr />
        <span>{user.name} asks:</span>
        <div>
          <div>
            <img alt='user avatar' src={user.avatarURL} className='navbar-profile-img' />
          </div>
          {answer !== null 
            ? (
              <div>
                <strong>You would rather:</strong>
                <div>
                  <p>{question[answer].text}</p>
                  <br /><strong>THAN</strong><br />
                  <p>{question[otherOption].text}</p>
                </div>
              </div>
            )
            : (
              <div>
                <strong>Would you rather?</strong>
                <div>
                  <p>{question.optionOne.text}</p>
                  <br /><strong>OR</strong><br />
                  <p>{question.optionTwo.text}</p>
                </div>
              </div>
            )}
        </div>
        <Link to={`/questions/${question.id}`} className='tweet'>
        View Poll
        </Link>
        <hr />
      </div>
    )
  }
}

export default Question
