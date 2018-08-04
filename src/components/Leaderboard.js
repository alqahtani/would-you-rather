import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Leaderboard extends Component {
  render() {
    console.log(this.props.scores)
    return (
      <div>
        Hey from Leaderboard!
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
    usersIds,
    users,
    scores: scores.sort((a,b) => b.score - a.score)
  }
}

export default connect(mapStateToProps)(Leaderboard)
