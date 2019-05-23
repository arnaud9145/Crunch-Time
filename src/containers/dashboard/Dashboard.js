import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import { connect } from 'react-redux'
import Layout from './layout'
import Home from './pages/Home'
import History from './pages/History'
import Game from './pages/Game'
import Name from './pages/Name'

const baseUrl = process.env.REACT_APP_BASEURL

class Dashboard extends React.Component {
  render() {
    const component = (
      <Switch>
        <Route path={baseUrl} exact component={Home} />
        <Route path={baseUrl + 'name'} exact component={Name} />
        <Route path={baseUrl + 'history/:id'} component={History} />
        <Route path={baseUrl + 'game/:id'} component={Game} />

        <Redirect from='*' to={baseUrl} />
      </Switch>
    )

    return <Layout component={component} />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
