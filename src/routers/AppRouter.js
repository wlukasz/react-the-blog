import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage'
import AddPostPage from '../components/AddPostPage'
import EditPostPage from '../components/EditPostPage'
import NotFoundPage from '../components/NotFoundPage'
// import LoginPage from '../components/LoginPage'
import SplashPage from '../components/SplashPage'
import AllPostsListPage from '../components/AllPostsListPage'
import ReadPostPage from '../components/ReadPostPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={SplashPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={AddPostPage} />
        <PrivateRoute path="/edit/:id" component={EditPostPage} />
        <PublicRoute path="/read" component={AllPostsListPage} />
        <PublicRoute path="/readonly/:id" component={ReadPostPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter