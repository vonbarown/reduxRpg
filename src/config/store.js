import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import MapReducer from '../features/map/reducer'

const rootReducer = combineReducers({
    player: playerReducer,
    map: MapReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store