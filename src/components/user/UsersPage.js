import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import * as userActions from '../../actions/userActions'
import { bindActionCreators } from 'redux'

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
    this.props.actions.createUser (this.state.user)
  }

  userRow(user, index) {
    return <div key={index}>{user.name}</div>
  }

  render() {
    return (
      <div className='users'>
        <h1>Users List</h1>
        {this.props.users.map(this.userRow)}
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

UserPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    users: state.userReducer
  }
}

/*function mapDispatchToProps(dispatch) {
  return {
    createUser: user => dispatch(userActions.createUser(user))
  }
}*/

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
