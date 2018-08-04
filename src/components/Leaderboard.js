import React, { Component } from 'react'
import { connect } from 'react-redux'

import LeaderboardItem from '../components/LeaderboardItem'

export class Leaderboard extends Component {
  render() {
    const {
      users,
      scores
    } = this.props
    return (
      <div>
        <h1>Leaderboard</h1>
        <ul>
          {scores.map((s)=> (
            <li key={s.id}>
              <LeaderboardItem user={users[s.id]} score={s.score} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
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
