import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LeaderboardItem from '../components/LeaderboardItem'

export class Leaderboard extends Component {
  render() {
    const {
      users,
      scores
    } = this.props
    return (
      <div className='box'>
        <div className='box-header question-box-header'>Leaderboard</div>
        <ul className='leaderboard-list'>
          {scores.map((s, index)=> (
            <li key={s.id}>
              <LeaderboardItem user={users[s.id]} score={s.score} index={index} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

Leaderboard.propTypes = {
  scores: PropTypes.array.isRequired,
  users: PropTypes.object.isRequired,
}

const mapStateToProps = ({ users }) => {
  const usersIds = Object.keys(users)
  let scores = []

  usersIds.forEach(user => {
    const answers = Object.keys(users[user].answers).length
    const questions = users[user].questions.length
    const score = answers + questions

    scores.push({ id:user, score })
  })

  return {
    users,
    scores: scores.sort((a,b) => b.score - a.score)
  }
}

export default connect(mapStateToProps)(Leaderboard)
