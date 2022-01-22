import { combineReducers } from "redux";

import Ballreducer from "./Ballreducer";
import Batreducer from "./Batreducer";
import userreducer  from "./UserReduer";

const Rootreducer=combineReducers({
    bats:Batreducer,
    balls:Ballreducer,
    users:userreducer
})

export default Rootreducer