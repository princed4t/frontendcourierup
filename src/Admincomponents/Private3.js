import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const Private3 = () => {

   let navigate=useNavigate();

        if( JSON.parse(localStorage.getItem("roles"))=='ROLE_ADMIN'){
            return<Outlet/>
     
     
         }
         else{
            return navigate('/');
         }
       
    
    
    
    }


export default Private3