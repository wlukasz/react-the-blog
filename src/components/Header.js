import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout, startLogin } from '../actions/auth'

export const Header = ({isAuthenticated, userName, startLogout, startLogin }) => (
  <header className="header">
  <div className="content-container">
    <div className="header__content">
      <Link className="header__title" to={isAuthenticated ? '/dashboard' : '/read'}>
        <h1>The Blog</h1>
      </Link>
      <p className="header__title">Welcome {isAuthenticated ? userName : 'Anonymous User'}!</p>
      <button 
        className="button-style button-style--link" 
        onClick={(isAuthenticated) ? (startLogout) : (startLogin)}
      >
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  </div>
  </header>
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
  userName: state.auth.userName
})

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  startLogin: () => dispatch(startLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)