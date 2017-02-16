import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers/home'
import { initialStates } from '../reducers/home'

export default function configureStore(props) {

    const { timelineDateList, timelineJson, appUsername } = props
    const { homeState } = initialStates
    
    const initialState = {
        homeState: { ...homeState, timelineDateList, timelineJson, appUsername }
    }
    
    let composeEnhancers = typeof(window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
    const store = createStore(reducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunkMiddleware)
        )
    )
    return store
}
