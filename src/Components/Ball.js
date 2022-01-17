import React from 'react'
import { connect } from 'react-redux'

function Ball({balls,buyballs,sellballs}) {
    return (
        <div>
            <h1>Balls: {balls}</h1>
            <button onClick={buyballs}>buy</button>
            <button onClick={sellballs}>sell</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
 return{balls:state.balls.balls}

}

const mapDispatchToProp=(dispatch)=>{
    return{
        buyballs:()=>dispatch({type:"BUY_BALLS"}),
        sellballs:()=>dispatch({type:"SELL_BALLS"})

    }

}

export default connect(mapStateToProps,mapDispatchToProp) (Ball)
