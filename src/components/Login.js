import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import Select from 'react-select'

import { setAuthedUser } from '../actions/authedUser'
import defaultAvatar from '../assets/login_avatar.svg'


export class Login extends Component {
  state = {
    slectedUser: 'none'
  }

  handleChange = (slectedUser) => {
    this.setState(() => ({
      slectedUser: slectedUser.value,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { slectedUser } = this.state
    const { dispatch } = this.props

    dispatch(setAuthedUser(slectedUser))
  }
  render() {
    const { users, userIds } = this.props
    const { slectedUser } = this.state

    const options = []

    userIds.forEach(user=>{
      options.push({ value: users[user].id, label: users[user].name})
    })

    return (
      <div className='box'>
        <h3 className='box-title'>Welcom to the Would You Rather App!</h3>
        <p className='box-subtitle'>Please sign in to continue</p>
        {slectedUser === 'none'
          ? <img className='box-avatar' src={defaultAvatar} alt='avatar' />
          : <img className='box-avatar' src={users[slectedUser].avatarURL} alt='avatar' />
        }
        <div className='login-form-container'>
        {userIds.length === 0 
          ? (
            <div className='login-form-loading'>
              <ReactLoading type='bars' color="#999" />
              <p>Loading users ...</p>
            </div>
          )
          : (
            <form className='login-form-form' onSubmit={this.handleSubmit}>
            <Select options={options} onChange={this.handleChange} />
            <button
              className='login-form-form-submit-btn'
              disabled={this.state.slectedUser === 'none'}
            >
            Sign In
            </button>
            </form>
          )}
          </div>
        
      </div>
    )
  }
}

Login.propTypes = {
  users: PropTypes.object.isRequired,
  userIds: PropTypes.array.isRequired,
}

const mapStateToProps = ({ users, authedUser }) => {

  return {
    userIds : Object.keys(users),
    users,
  }
}

export default connect(mapStateToProps)(Login)
