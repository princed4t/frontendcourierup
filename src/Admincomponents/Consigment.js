import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Consigment = () => {

   const[consigment,Setconsigment]=useState({
    
        "localdate":"",
        "address1":"",
        "address2":"",
        "pincode":"",
        "deliverydate":"",
        
        
        
        }

);

    const myhandler=(event)=>{
       Setconsigment({...consigment,[event.target.name]:event.target.value});



    }

    let token1= localStorage.getItem("jwtToken");
    let{email}=useParams()    
      
  
   
    const headers={
    
      'Authorization':`Bearer ${token1}`
    };
    
     const mysubmit=(event)=>{
      event.preventDefault();
      console.log(headers);
      axios.post(`http://localhost:9000/home/consigment/${email}`,consigment,{headers})
      .then((response)=>toast.success(response.data))
      .then((error)=>{});



     };
    





  return (
    <div>
      
      <div  className='main'>
        <div className='text'>    
          <h1 >CONSIGMENT</h1>
           </div>
    
        <div className='form-container main'>
           
    
        
        <form onSubmit={mysubmit} className='form-control' mx-900>
         <div>
         <label htmlFor='"localdate"'  className='form-label'>localdate</label>
        <input type={"Date"} id="localdate" name="localdate"onChange={myhandler}  value={consigment.localdate} className='form-control' required />
       
    
         </div>
         <div>
         <label htmlFor='"address1"'  className='form-label'>address1</label>
        <input type={"text"} id="address1" name="address1"onChange={myhandler}  value={consigment.address1} className='form-control' required />
       
    
         </div>
         <div>
         <label htmlFor='"address2"'  className='form-label'>address2</label>
        <input type={"text"} id="address2" name="address2"onChange={myhandler}  value={consigment.address2} className='form-control' required />
       
    
         </div>
         <div>
         <label htmlFor='"pincode"'  className='form-label'>pincode</label>
        <input type={"text"} id="pincode" name="pincode"onChange={myhandler}  value={consigment.pincode} className='form-control' required />
       
    
         </div>

         <div>
         <label htmlFor='"deliverydate"'  className='form-label'>deliverydate</label>
        <input type={"text"} id="deliverydate" name="deliverydate"onChange={myhandler}  value={consigment.deliverydate} className='form-control' required />
       
    
         </div>








    
    <div className='text-center'>
    <button className='btn btn-primary my-2 '>ADD CONSIGMENT</button>
    
    
    </div>
     </form>
    
    </div>

   </div>
   </div>



    
  )
}

export default Consigment