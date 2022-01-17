const initialState={
 balls:50
}

const Ballreducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "BUY_BALLS":
            return {...state,balls:state.balls-1}
        case "SELL_BALLS":
            return {...state,balls:state.balls+1}
        default:
            return state
    }
}

export default Ballreducer
