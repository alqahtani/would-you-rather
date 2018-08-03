import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question';

export class Dashboard extends Component {
  render() {
    const {
      answered,
      notAnswered,
      questions,
      users,
      authedUser,
    } = this.props
    // console.log('notAnswered: ', notAnswered)
    // console.log('Answered: ', answered)
    
    return (
      <div>
        <h1>Unanswered Questions</h1>
        {notAnswered.map(id => (
          <Question key={id} question={questions[id]} user={users[questions[id].author]}  answer={null} />
        ))}
        
        <h1>Answered Questions</h1>
        {answered.map(id => (
          <Question key={id} question={questions[id]} user={users[questions[id].author]}  answer={users[authedUser].answers[id]} />
        ))}
        
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  const questionsIds = Object.keys(questions).sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
  const answered = Object.keys(users[authedUser].answers).sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
  const notAnswered = questionsIds.filter(q => !answered.includes(q)).sort((a,b)=> questions[b].timestamp - questions[a].timestamp)

  return {
    answered,
    notAnswered,
    authedUser,
    questions,
    users,
  }
}

export default connect(mapStateToProps)(Dashboard)
