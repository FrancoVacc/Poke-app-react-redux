// Tienda -  donde tendremos todos los estados
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import pokeReducer from './pokeDuks'

const rootReducer = combineReducers({
    pokemones: pokeReducer
})

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return store
}