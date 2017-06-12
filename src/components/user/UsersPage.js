import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import * as userActions from '../../actions/userActions'
import { bindActionCreators } from 'redux'

class UserPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  userRow(user, index) {
    return <div key={index}>{user.name}</div>
  }

  render() {
    return (
      <div className='users'>
        <h1>Users List</h1>
        {this.props.users.map(this.userRow)}
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
