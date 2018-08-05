import React from 'react'
import PropTypes from 'prop-types'

const LeaderboardItem = (props) => {
  return (
    <div className='leaderboard-box'>
      <div className='leaderboard-avatar'>
        <img src={props.user.avatarURL} alt='user avatar' />
      </div>
      <div className='leaderboard-details'>
        <div>
          <h2><span>{props.index+1} |</span> {props.user.name}</h2>
        </div>
        <table>
          <tr>
            <td className='td-label'>Answered Questions</td>
            <td className='td-num'>{props.score - props.user.questions.length}</td>
          </tr>
          <tr>
            <td className='td-label'>Created Questions</td>
            <td className='td-num'>{props.user.questions.length}</td>
          </tr>
        </table>
      </div>
      <div className='leaderboard-score'>
        <div className='score-box'>
          <div className='score-title'>Score</div>
          <div className='score-number'><p>{props.score}</p></div>
        </div>
      </div>
    </div>
  )
}

LeaderboardItem.propTypes = {
  score: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export default LeaderboardItem
