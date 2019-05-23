import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button } from 'antd'
import './styles/home.css'

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Bienvenu sur le site du groupe 23 du crunch time !</h1>
        <p>
          Ce site est une maquette, un "proof of concept" de notre idée. Il a
          pour but de montrer à quoi peut ressembler un jeu pour apprendre le
          développement logiciel.
        </p>
        <img src={require('./assets/start.png')} />
        <Button type='primary' onClick={this.props.goToName}>
          Commencer une partie
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  goToName: () => dispatch(push('/name'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
