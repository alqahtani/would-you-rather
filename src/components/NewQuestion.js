import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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

    this.props.history.push('/')
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
      <div className='box'>
        
        <div className='box-header question-box-header'>Create New Question</div>
        <div className='create-question-box-content'>
          <h3 className='question-box-content-details-title'>Would you rather ...</h3>
          <form onSubmit={this.handleSubmit}>
            <input 
              value={this.state.optionOne}
              type='text' 
              placeholder='Enter Option One Text Here ...' 
              ref={(input) => this.optionOne = input}
              onChange={this.handleInputChange}
            />
            <div className='text-center or'> - OR - </div>
            <input 
              value={this.state.optionTwo}
              type='text' 
              placeholder='Enter Option Two Text Here ...' 
              ref={(input) => this.optionTwo = input}
              onChange={this.handleInputChange}
            />
            <button
              className='create-new-poll-btn'
              type='submit'
              disabled={this.state.submitDisabled}
            >Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

NewQuestion.propTypes = {
  authedUser: PropTypes.string.isRequired,
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default withRouter(connect(mapStateToProps)(NewQuestion))
