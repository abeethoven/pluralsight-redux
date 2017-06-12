import React, {Proptypes} from 'react'
import { connect } from 'react-redux'
import * as userActions from '../../actions/userActions'

class UserPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {name: ''}
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }
  onNameChange(event) {
    const user = this.state.user
    user.name = event.target.value
    this.setState({user: user})
  }
  onClickSave() {
    this.props.dispatch(userActions.createUser(this.state.user))
  }
  render() {
    return (
      <div className='users'>
        <h1>Users List</h1>
        <h2>add user</h2>
        <input
          type='text'
          onChange={this.onNameChange}
          value={this.state.user.name} />

        <input
          type='submit'
          value='save'
          onClick={this.onClickSave} />
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    users: state.userReducer
  }
}

export default connect(mapStateToProps)(UserPage)
