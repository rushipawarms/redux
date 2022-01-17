import {createStore} from 'redux'
import Batreducer from './Batreducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const store=createStore(Batreducer,composeWithDevTools());

export default store