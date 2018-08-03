import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'


import { handleInitialData } from '../actions/shared'
import Nav from '../components/Nav'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'


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
            <h3>Would you rather?</h3>
            <Nav />
            {authedUser === null
              ? <Route path='/' exact component={Login} /> 
              : <Route path='/' exact component={Dashboard} />}
            
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
