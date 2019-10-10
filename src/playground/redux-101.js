import { createStore } from 'redux'

// Action generators - function that returns action objects 

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

// Reducers
// 1. REducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

// Returns function which, when called [unsubscribe()], unsubscribes (stops watching) from the store
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// Actions

// Increment count
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

// Reset count
store.dispatch(resetCount())

// Decrement count
store.dispatch(decrementCount())

// Decrement count
store.dispatch(decrementCount({ decrementBy: 10 }))

// Set count
store.dispatch(setCount({ count: 101 }))

unsubscribe()
