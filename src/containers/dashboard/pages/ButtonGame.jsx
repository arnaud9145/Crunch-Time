import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button } from 'antd'
import { actions as notifActions } from 'redux-notifications'

class ButtonGame extends React.Component {
  onClick = link => {
    if (link) {
      this.props.sendValidation()
      setTimeout(() => this.props.goToPage(link), 2000)
    } else this.props.sendError()
  }
  render() {
    return (
      <React.Fragment>
        {this.props.buttons.map(button => (
          <Button
            key={button.key}
            type='primary'
            onClick={() => this.onClick(button.link)}
          >
            {button.text}
          </Button>
        ))}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  goToPage: link => dispatch(push(link)),
  sendError: () =>
    dispatch(
      notifActions.notifSend({
        message: 'Mauvaise réponse ! Réessayez :)',
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
    )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonGame)
