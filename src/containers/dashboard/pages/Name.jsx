import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Form, Input, Button } from 'antd'
import { setName } from '../../../modules/user'

class RegistrationForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.setName(values.name)
        this.props.goToStart()
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    }

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <h1>Afin de savoir qui vous êtes, merci d'entrer votre prénom ici :</h1>
        <Form.Item label='Prénom'>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Entrez un nom !'
              }
            ],
            initialValue: this.props.name
          })(<Input />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            Commencer
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(
  RegistrationForm
)

const mapStateToProps = state => ({
  name: state.user.name
})

const mapDispatchToProps = dispatch => ({
  goToStart: () => dispatch(push('/history/0')),
  setName: name => dispatch(setName(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedRegistrationForm)
