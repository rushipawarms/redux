import {createStore} from 'redux'
import Batreducer from './Batreducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import Ballreducer from './Ballreducer';
import Rootreducer from './Rootreducer';
const store=createStore(Rootreducer,composeWithDevTools());

export default store