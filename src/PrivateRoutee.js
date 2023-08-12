import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


const PrivateRoutee = () => {
  let navigate=useNavigate();

//  useEffect((eve)=>{
//   is();

// })
const token= localStorage.getItem("jwtToken");
    const roles=   [JSON.parse(localStorage.getItem("roles"))];

  
    if( JSON.parse(localStorage.getItem("roles"))=='ROLE_ADMIN'){
       return<Outlet/>


    }
    else if( JSON.parse(localStorage.getItem("roles"))=='ROLE_USER'){
       return<Outlet/>


    }
    else{
      navigate("/");
    }
 
  
//     if(token!=null){
//       console.log(token);
//     return  <Outlet/>
//     }
// else
//     {
//       return  navigate("/")
//     }
   

}

export default PrivateRoutee