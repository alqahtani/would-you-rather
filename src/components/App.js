import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'


import { handleInitialData } from '../actions/shared'
import Nav from '../components/Nav'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import NewQuestion from '../components/NewQuestion'
import Leaderboard from '../components/Leaderboard'
import QuestionPage from '../components/QuestionPage'



class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }
  render() {
    const { authedUser } = this.props
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Nav />
            {authedUser === null
              ? <Login />
              : (
                <Fragment>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/new' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/questions/:id' component={QuestionPage} />
                </Fragment>
              )}
            
          </div>
        </Fragment>
      </Router>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

export default connect(mapStateToProps)(App)
