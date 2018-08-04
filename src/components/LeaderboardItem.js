import React from 'react'

const LeaderboardItem = (props) => {
  return (
    <div>
      <img src={props.user.avatarURL} alt='user avatar' />
      <p>name: {props.user.name}</p>
      <p>score: {props.score}</p>
      <p>questions: {props.user.questions.length}</p>
      <p>answers: {props.score - props.user.questions.length}</p>
      <hr />
    </div>
  )
}

export default LeaderboardItem
