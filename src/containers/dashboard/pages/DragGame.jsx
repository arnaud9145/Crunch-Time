import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import DragableList from '../../../components/DragableList'
import update from 'immutability-helper'
import { Button } from 'antd'
import { actions as notifActions } from 'redux-notifications'
import { setCours } from '../../../modules/cours'

class DragGame extends React.Component {
  constructor(props) {
    super(props)
    let { lines } = props
    lines = lines.map(line => {
      return { ...line, result: false }
    })
    this.state = {
      validate: false,
      lines
    }
  }
  validate = () => {
    let { lines } = this.state
    lines = lines.map(line => {
      return { ...line, result: false }
    })
    this.props.combinations.forEach(combination => {
      combination.forEach((line, index) => {
        lines[index] = {
          ...lines[index],
          result: lines[index].result || lines[index].key === line
        }
      })
    })

    this.setState({ validate: true, lines })
    if (lines.find(line => !line.result)) {
      this.props.sendError()
    } else {
      this.props.sendValidation()
      let { cours, addCours } = this.props
      if (!cours) cours = []
      if (!cours.find(c => c.key === addCours.key)) {
        cours.push(addCours)
        this.props.setCours(cours)
      }
      setTimeout(() => this.props.goToPage(this.props.link), 2000)
    }
  }
  updateLines = (dragIndex, hoverIndex) => {
    const { lines } = this.state
    const dragRow = lines[dragIndex]
    this.setState(
      update(this.state, {
        lines: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]]
        }
      })
    )
  }
  render() {
    return (
      <React.Fragment>
        <DragableList
          lines={this.state.lines}
          showResult={this.state.validate}
          updateLines={this.updateLines}
        />
        <Button type='primary' onClick={this.validate}>
          Valider
        </Button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cours: state.cours.cours
})

const mapDispatchToProps = dispatch => ({
  goToPage: link => dispatch(push(link)),
  sendError: () =>
    dispatch(
      notifActions.notifSend({
        message: 'Il y a une ou plusieurs erreur dans votre code, réessayez !',
        kind: 'danger',
        dismissAfter: 2000
      })
    ),
  sendValidation: () =>
    dispatch(
      notifActions.notifSend({
        message: 'Correct !',
        dismissAfter: 2000
      })
    ),
  setCours: cours => dispatch(setCours(cours))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DragGame)
