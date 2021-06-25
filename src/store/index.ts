import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { myProfileReducer } from './reducers/myProfileReducer'

export const store = createStore(myProfileReducer,composeWithDevTools())