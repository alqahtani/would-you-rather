import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null))
  }
  render () {
    const { authedUser, user } = this.props
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' exact activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' exact activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
        </ul>

        {authedUser !== null && (
          <ul>
            <p>Hello, { user.name }</p>
            <img src={ user.avatarURL } className='navbar-profile-img' />
            <button onClick={this.handleLogout}>Logout</button>
          </ul>
        )}
      </nav>
    )
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  if (authedUser !== null) {
    return {
      authedUser,
      user: users[authedUser]
    }
  }

  return { authedUser }
}

export default connect(mapStateToProps)(Nav)
