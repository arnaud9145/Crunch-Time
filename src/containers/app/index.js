import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Notifs as Notifications } from 'redux-notifications'
import 'antd/dist/antd.css'

import asyncComponent from '../../components/async'

const Dashboard = asyncComponent(() => import('../dashboard/Dashboard'))
class App extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Notifications />
        <Switch>
          <Route
            path={process.env.REACT_APP_BASEURL}
            component={Dashboard}
          />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
