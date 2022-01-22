import {createStore,applyMiddleware} from 'redux'
import Batreducer from './Batreducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import Ballreducer from './Ballreducer';
import Rootreducer from './Rootreducer';
import thunk from 'redux-thunk';

const store=createStore(Rootreducer,composeWithDevTools(applyMiddleware(thunk)));

export default store