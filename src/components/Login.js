import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'

import { setAuthedUser } from '../actions/authedUser'

export class Login extends Component {
  state = {
    slectedUser: 'none'
  }

  handleChange = (e) => {
    const slectedUser = e.target.value
    this.setState(() => ({
      slectedUser,
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

    return (
      <div>
        Login Component
        <br />
        {userIds.length === 0 
          ? <ReactLoading type='bars' color="#999" />
          : (
            <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleChange}>
              <option value='none'>-- Select --</option>
              {userIds.map(id => (
                <option 
                  value={id} 
                  key={id} 
                >
                {users[id].name}
                </option>
              ))}
            </select>
            <button disabled={this.state.slectedUser === 'none'}>Sign In</button>
            </form>
          )}
        
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
