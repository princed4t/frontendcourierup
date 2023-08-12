import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Delete = () => {
    const{id}=useParams();
     let navigate=useNavigate();
    const  handleSubmit=async(event)=>{
        event.preventDefault();
        axios.delete(`http://localhost:9000/home/download/delete/${id}`)
       .then((res)=>toast.success(res.data)).then((error)=>console.log(error));
        navigate("/admin");  
      
     
     
     
     };
     
  return (
    <div>

<button className='btn btn-primary' onClick={handleSubmit}>deleteuser</button>





    </div>
  )
}

export default Delete