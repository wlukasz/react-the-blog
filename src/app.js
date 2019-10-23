import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetPosts, startSetPostsNoAuth } from './actions/posts'
import { login, logout } from './actions/auth'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'
import LoadingPage from './components/LoadingPage'
// import { startSetPostsNoAuth } from './actions/posts'

const store = configureStore()
const Jsx = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<Jsx />, document.querySelector('#app'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.querySelector('#app'))

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(login(user.uid))
//     store.dispatch(startSetPosts()).then(() => {
//       renderApp()
//       if (history.location.pathname === '/') {
//         history.push('/dashboard')
//       }
//     })
//   } else {
//     store.dispatch(logout())
//     renderApp()
//     history.push('/')
//   }
// })


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetPosts()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else if (history.location.pathname === '/') {
    store.dispatch(startSetPostsNoAuth()).then(() => {
      renderApp()
      history.push('/read')
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})