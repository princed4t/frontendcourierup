import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logout from '../Logout';

const Admin = () => {

  const[customer,setCustomer]=useState([]);
  let navigate=useNavigate();

    useEffect((event)=>{
      apicall();
    })
    let token1= localStorage.getItem("jwtToken");
              
      
  
    const headers = {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token1}`,
    };

  const apicall=()=>{
    axios.get("http://localhost:9000/home/findall",{headers}).
    then((res)=>setCustomer(res.data)).then((error)=>console.log(error));


  }
  const logout=()=>{
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("email");
      localStorage.removeItem("roles");
      toast.success("LOGOUT-SUCCESSFULLY")
      navigate("/login");
      
  }

  return (
    

    <div>


<div className='container'>
   <div className='py-4'>
   <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">id</th>
      <th scope="col">Email</th>
      <th scope="col">product</th>
      <th scope="col">productweight</th>
      <th scope="col">productdistance</th>
      <th scope='col'>ACTION</th>
   
    </tr>
  </thead>
  <tbody >
{
customer.map((customer,index)=>(

    <tr>
      <th scope="row"key= {index}>{index+1}</th>
      <td>{customer.name}</td>
      <td>{customer.id}</td>
      
      <td>{customer.email}</td>
      <td>{customer.product}</td>
      <td>{customer.proweight}</td>
      <td>{customer.prodistance}</td>

       <td>
       {/* <Link className='btn btn-primary mx-2' to={`/viewperson/${person.id}`}>VIEW</Link>
       <Link className='btn btn-outline-primary mx-2'
         to= {`/edituser/${person.id}`}>EDIT</Link>
       <Link className='btn btn-danger mx-2' to={`/deletebyid/${person.id}`}>Delete</Link> */}
  <Link className='btn btn-primary mx-2' to={`showrate/${customer.email}`}>courier-price</Link>
  <Link className='btn btn-primary mx-2' to={`addconsig/${customer.email}`}>addconsigment</Link>                                                                                                   
  <Link className='btn btn-primary mx-2' to={`showimg/${customer.email}`}>showimg</Link>                                                                                                   
  <Link className='btn btn-primary my-4' to={`update/${customer.id}`}>updateit</Link>                                                                                                   
  <Link className='btn btn-primary my-4 mx-2' to={`delete/${customer.id}`}>delete</Link>                                                   
      
     
     
     
        </td>
    </tr>
))

}

  <button className='btn btn-primary mx-5' onClick={logout}>Logout</button>
  



    
  </tbody>
</table>


   </div>



   </div>





</div>
  )

  }




  

export default Admin