 import axios from 'axios'
import * as actionType from './actions'
 


 const fetchReq=()=>{
     return{
         type:actionType.FETCH_REQ, 
     }
 }
 const fetchSuc=(users)=>{
     return{
         type: actionType.FETCH_SUC,
         payload:users
     }
 }


 const fetchFail=(err)=>{
     return{
         type:actionType.FETCH_FAIL,
         payload:err.message
     }
 }

 export const fetchUserss=()=>{
return async(dispatch)=>{

    dispatch(fetchReq())

    try{
        let res=await axios.get('https://jsonplaceholder.typicode.com/users');
        
        let data=res.data
       
        dispatch(fetchSuc(data))
    }catch(err){
       dispatch (fetchFail(err))
    }

}

 }

 

