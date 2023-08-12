import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
    let navigate=useNavigate();

 useEffect((event)=>{
   logout();
   toast.success("logout successfully");


 },[])

 

    const logout=()=>{
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("email");
        localStorage.removeItem("roles");
        toast.success("LOGOUT-SUCCESSFULLY")
        navigate("/login");
        
    }

}

export default Logout