import React from 'react'
import { connect } from 'react-redux'
import DragGame from './DragGame'

class Home extends React.Component {
  render() {
    return (
      <DragGame/>
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
)(Home)
