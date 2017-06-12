import React, {PropTypes} from 'react'
import {Link, IndexLink} from 'react-router'

const Header = () => {
  return (
    <nav>
      <IndexLink to='/'>home</IndexLink>
      {' | '}
      <Link to='/users'>users</Link>
    </nav>
  )
}

export default Header
