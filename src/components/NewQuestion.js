import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddQuestion } from '../actions/questions'

export class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    submitDisabled: true
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const question = {
      optionOneText: this.optionOne.value,
      optionTwoText: this.optionTwo.value,
      author: this.props.authedUser
    }
    dispatch(handleAddQuestion(question))
  }

  handleInputChange = () => {
    this.setState({
      optionOne: this.optionOne.value,
      optionTwo: this.optionTwo.value,
      submitDisabled: (this.optionOne.value === '' || this.optionTwo.value === ''),
    })
  }
  render() {
    return (
      <div>
        <h1>Create New Question</h1>
        <hr />
        <h3>Would you rather ...</h3>
        <form onSubmit={this.handleSubmit}>
          <input 
            value={this.state.optionOne}
            type='text' 
            placeholder='Enter Option One Text Here ...' 
            ref={(input) => this.optionOne = input}
            onChange={this.handleInputChange}
          />
          <br />OR<br />
          <input 
            value={this.state.optionTwo}
            type='text' 
            placeholder='Enter Option Two Text Here ...' 
            ref={(input) => this.optionTwo = input}
            onChange={this.handleInputChange}
          />
          <br />
          <button 
            type='submit'
            disabled={this.state.submitDisabled}
          >Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps)(NewQuestion)
