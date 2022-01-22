import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ballbuy } from '../Redux/Ballaction';


function Ball({balls,buyballs,sellballs}) {
    const [qut,setqut]=useState(1);
    return (
        <div>
            <h1>Balls: {balls}</h1>
            <input type="number" value={qut} onChange={(e)=>setqut(e.target.value)}/>
            <button onClick={()=>buyballs(qut)}>buy</button>
            <button onClick={sellballs}>sell</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
 return{balls:state.balls.balls}

}

const mapDispatchToProp=(dispatch)=>{
    return{
        buyballs:(qut)=>dispatch(ballbuy(qut)),
        sellballs:()=>dispatch({type:"SELL_BALLS"})

    }

}

export default connect(mapStateToProps,mapDispatchToProp) (Ball)
