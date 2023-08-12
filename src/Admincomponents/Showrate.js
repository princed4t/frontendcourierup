import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Showrate = () => {
   const[price,setPrice]=useState('');
   let token1= localStorage.getItem("jwtToken");
   let {email}=useParams();
              
   useEffect((event)=>{
    apicall();
  },[])
  
   const headers = {
     'Content-Type':'application/json',
     'Authorization':`Bearer ${token1}`,
   };

   const apicall=()=>{
    axios.get(`http://localhost:9000/home/showprice/${email}`,{headers}).
    then((res)=>setPrice(res.data)).then((error)=>console.log(error));


  }
    
  


  return (
     <div>Showrate
       <div>


     <h1 >price of these courier items are Rupees{price}</h1>
     
     </div>
     </div>


  )
}

export default Showrate