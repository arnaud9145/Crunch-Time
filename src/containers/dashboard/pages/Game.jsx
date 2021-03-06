import React from 'react'
import { connect } from 'react-redux'
import './styles/game.css'
import DragGame from './DragGame'
import ButtonGame from './ButtonGame'
import { Spin } from 'antd'

class Game extends React.Component {
  render() {
    const { games, match } = this.props
    const game = games[match.params.id]
    if (!game) return <Spin />
    let element = <Spin />
    switch (game.type) {
      case 'button':
        element = <ButtonGame buttons={game.buttons} addCours={game.addCours} />
        break
      case 'drag':
        element = (
          <DragGame
            lines={game.lines}
            combinations={game.combinations}
            link={game.link}
            addCours={game.addCours}
          />
        )
        break
      default:
        break
    }

    return (
      <div className='game-container'>
        <div className='game-image'>
          <img src={require(`./assets/${game.image}`)} alt='' />
        </div>
        <p>{game.text}</p>
        {element}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  games: state.games.games
})

export default connect(
  mapStateToProps,
  null
)(Game)
