import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUserss } from '../Redux/userActions';

function Users({usersData,fetchUsers}) {
    console.log(usersData)

    useEffect(()=>{

        fetchUsers()

    },[])
  return (
  <>
      {
          usersData.loading?<h1>Loading......</h1>:usersData.error!=''?<h4>{usersData.error}</h4>:
          <ul>
              {
                 usersData.users.length>0 &&  usersData.users.map((user,index)=>{
                      return(
                          <>
                          <li key={index} >
                              {user.name}
                          </li>
                          </>
                      )
                  })
              }
          </ul>
      }
  </>
  )
};
const mapStateToProps=(state)=>{
return{
   usersData:state.users
}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchUsers:()=>dispatch(fetchUserss())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Users)
