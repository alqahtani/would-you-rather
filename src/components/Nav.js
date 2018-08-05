import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { FaSignInAlt } from 'react-icons/fa'

import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null))
  }
  render () {
    const { authedUser, user } = this.props
    return (
      <nav className='nav'>
        <ul className='nav-links'>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' exact activeClassName='active'>
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
          <ul className='nav-logged-in'>
            <div className='nav-logged-in-greeting'>
              <p className='nav-logged-in-greeting-text'>Hello, { user.name }</p>
              <img alt='user avatar' src={ user.avatarURL } className='nav-logged-in-greeting-avatar' />
            </div>
            <button className='nav-logged-in-logout-btn' onClick={this.handleLogout}><FaSignInAlt /></button>
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
