import React from 'react'
import LoginPage from './LoginPage'
import ReadBlogsLink from './ReadBlogsLink'

const SplashPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <LoginPage />
      <ReadBlogsLink />
    </div>
  </div>
)
  
export default SplashPage