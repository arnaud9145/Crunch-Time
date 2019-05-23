import React from 'react'
import { Layout, List, Modal } from 'antd'
import { connect } from 'react-redux'
import './leftbar.css'
const { Sider } = Layout

class LeftBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coursName: '',
      coursText: '',
      visible: false,
      cours: props.cours
    }
  }
  openModal = cours => {
    this.setState({
      visible: true,
      coursName: cours.name,
      coursText: cours.text
    })
  }

  close = () => {
    this.setState({
      visible: false
    })
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('DERIVED')
    return { cours: nextProps.cours }
  }

  render() {
    console.log('RERENDER', this.props)
    return (
      <Sider breakpoint='lg' collapsedWidth='0' width={250} theme='dark'>
        <Modal
          title={this.state.coursName}
          visible={this.state.visible}
          onOk={this.close}
        >
          {this.state.coursText}
        </Modal>
        <h1
          style={{
            color: 'white',
            width: '100%',
            textAlign: 'center',
            fontSize: '30px'
          }}
        >
          Cours
        </h1>
        {!this.state.cours || this.state.cours.length === 0 ? (
          <h2
            style={{
              color: 'white',
              width: '100%',
              textAlign: 'left',
              fontSize: '20px',
              marginLeft: '5px',
              marginRight: '5px'
            }}
          >
            Vous n'avez aucun cours pour le moment
          </h2>
        ) : (
          <List
            dataSource={this.state.cours}
            renderItem={item => (
              <List.Item>
                <a onClick={() => this.openModal(item)}>{item.name}</a>
              </List.Item>
            )}
            className='leftbar-list'
          />
        )}
      </Sider>
    )
  }
}

const mapStateToProps = state => ({
  cours: state.cours.cours
})

const mapDispatchToProps = dispatch => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftBar)
