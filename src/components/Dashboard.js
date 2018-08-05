import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export class Dashboard extends Component {
  render() {
    const {
      answered,
      notAnswered,
      questions,
      users,
      authedUser,
    } = this.props
    
    return (
      <Tabs className='box'>
        <div className='box-header'>
          <TabList className='tabs-titles'>
            <Tab>Unanswered Questions</Tab>
            <Tab>Answered Questions</Tab>
          </TabList>
        </div>

        <TabPanel>
        {notAnswered.map(id => (
          <Question key={id} question={questions[id]} user={users[questions[id].author]}  answer={null} />
        ))}
        </TabPanel>
        <TabPanel>
        {answered.map(id => (
          <Question key={id} question={questions[id]} user={users[questions[id].author]}  answer={users[authedUser].answers[id]} />
        ))}
        </TabPanel>
      </Tabs>
        
      // </div>
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
