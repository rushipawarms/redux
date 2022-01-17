import { combineReducers } from "redux";

import Ballreducer from "./Ballreducer";
import Batreducer from "./Batreducer";

const Rootreducer=combineReducers({
    bats:Batreducer,
    balls:Ballreducer
})

export default Rootreducer