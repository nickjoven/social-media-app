import { legacy_createStore as createStore } from 'redux'

// createStore takes in two arguments
// 1. reducer function that will automatically fire later
// 2. initial *global* state

// the reducer function has the state (current state)
// and the action object as a parameter.

// an action is a plain old JS object that tells the
// reducer what to do next and with what data. ALL
// ACTIONS HAVE A TYPE KEY

// Example: {type: 'user/login', user: data}
const reducer = (state, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        case 'user/login':
            return {...state, currentUser: action.user }
        default:
            return state
    }
}

const store = createStore(reducer, {value: 0, currentUser: null})

export default store

/*
A store object has 2 functions that we can call on it anywhere

store.dispatch() 
-> This accepsts a single JS object with at least a type key/value
and automatically fires the reducer.

store.getState()
-> this is how we read data from the global store.
Example: store.getState().currentUser
*/