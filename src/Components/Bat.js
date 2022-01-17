import React,{useState} from 'react'
import { connect } from 'react-redux'

function Bat(props) {
    // const [bats,setbats]=useState(20);
    
    return (
        <div>
            <h1>Bats: {props.bats}</h1>
            <button onClick={props.buybat}>Buy bat</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
   return {bats:state.bats}
}

const mapDispatchToProp=(dispatch)=>{
    return{
        buybat:()=>dispatch({type:"BUY_BATS"})
    }

}

export default connect(mapStateToProps,mapDispatchToProp) (Bat)
