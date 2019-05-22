import React from 'react'
import { connect } from 'react-redux'
import './styles/game.css'
import DragGame from './DragGame'

class Game extends React.Component {
  render() {
    const { games, match } = this.props
    const game = games[match.params.id]
    return (
      <div className='game-container'>
          <img src={require(`./assets/${game.image}`)} alt='' />
          <p>{game.text}</p>
          <DragGame lines={game.lines} combinations={game.combinations} link={game.link}/>
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
