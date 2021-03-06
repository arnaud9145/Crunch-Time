import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button } from 'antd'
import './styles/history.css'

class History extends React.Component {
  render() {
    const { pages, match } = this.props
    const page = pages[match.params.id]
    return (
      <div className='history-container'>
        <div className='history'>
          <div className='history-image'>
            <img src={require(`./assets/${page.image}`)} alt='' />
          </div>

          <p>{page.text.replace('#name', this.props.name)}</p>
        </div>
        <Button
          type='primary'
          shape='circle'
          icon='right'
          onClick={() => this.props.goToPage(page.link)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pages: state.pages.pages,
  name: state.user.name
})

const mapDispatchToProps = dispatch => ({
  goToPage: link => dispatch(push(link))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
