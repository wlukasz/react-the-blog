import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => (
  <div>
    <h1 className="box-layout__title">The Blog</h1>
    <p>Just another blog app.</p>
    <button className="button-style" onClick={startLogin}>Login with Google</button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)