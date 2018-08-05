import React, { Component } from 'react'

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

    return (
      <div>
        <h3>{users[question.author].name} asks:</h3>
        <img alt='user avatar' src={users[question.author].avatarURL} />
        <h1>You Would Rather...</h1>
        <div>
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <div>
              <input 
                type='radio'
                value='optionOne'
                defaultChecked={this.state.selectedAnswer ==='optionOne'}
                name='option'
              /> {question.optionOne.text}
            </div>
            <div>
            <input 
                type='radio'
                value='optionTwo'
                defaultChecked={this.state.selectedAnswer ==='optionTwo'}
                name='option'
              /> {question.optionTwo.text}
            </div>
            <div>
              <button disabled={this.state.selectedAnswer === null}>Submit</button>
            </div>
          </form>
        </div>
      </div>  
    )
  }
}

export default UnansweredQuestion
