import React from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
const { Sider } = Layout

class LeftBar extends React.Component {
  render() {
    return (
      <Sider breakpoint='lg' collapsedWidth='0' width={250} theme='dark'>
        <h1
          style={{
            color: 'white',
            width: '100%',
            textAlign: 'center',
            fontSize: '30px'
          }}
        >
          Mes indices
        </h1>
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
          Vous n'avez aucun indice pour le moment
        </h2>
      </Sider>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftBar)
