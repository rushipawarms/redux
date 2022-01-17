const initialState={
    bats:8888
}

const Batreducer=(state=initialState,action)=>{

    switch(action.type){
        case "BUY_BATS":
            return {...state,bats:state.bats-1}
        default:
            return state;
    }
}

export default Batreducer