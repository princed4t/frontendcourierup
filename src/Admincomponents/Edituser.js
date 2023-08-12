import React, {useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';


   import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



 const Edituser= () => {

    const {id}=useParams();
 const[userdto,setUserdto]=useState({
    name: '',
     email: '', 
     product:'',
     productweight:'',
     productdistance:'',
    
 });
  useEffect((event)=>{
    onload()

  },[]);
  
 let navigate=useNavigate();
 const myhandler=(event)=>{
    setUserdto({...userdto,[event.target.name]:event.target.value});
 };
    
 const  handleSubmit=async(event)=>{
    event.preventDefault();
    axios.post(`http://localhost:9000/home/download/update/${id}`,userdto)
   .then((res)=>toast.success(res.data)).then((error)=>console.log(error));
    
   navigate("/admin");
 
 
 
 };
 const onload=(event)=>{
   axios.get(`http://localhost:9000/home/download/show/${id}`)
   .then((response)=>setUserdto(response.data))
   .then((error)=>(console.log(error)));




 }

  return (
  
    <div>
    <h1 className='centered-text-container'>EDIT-USER</h1>
    <div className='form-container'>
 

    
    <form onSubmit={handleSubmit} className='form-control' mx-900>
     <div>
     <label htmlFor='name'  className='form-label'>Name</label>
    <input type={"text"} id="name" name="name"onChange={myhandler}  value={userdto.name} className='form-control' required />
   

     </div>
<div>
    <label htmlFor='email'className='form-label'>email</label>
    <input type={"text"} id="email"name="email"onChange={myhandler}  value={userdto.email}className='form-control' required/>


</div>

<div>
    <label htmlFor='product'className='form-label'>product</label>
    <input type={"text"} id="product"name="product"onChange={myhandler}  value={userdto.product}className='form-control' required/>


</div>
<div>
    <label htmlFor='proweight'className='form-label'>proweight</label>
    <input type={"text"} id="productweight"name="productweight"onChange={myhandler}  value={userdto.productweight}className='form-control' required/>


</div>
<div>
    <label htmlFor='email'className='form-label'>prodistance</label>
    <input type={"text"} id="productdistance"name="productdistance"onChange={myhandler}  value={userdto.productdistance}className='form-control' required/>


</div>

<div>
<button className='btn btn-primary'>update</button>

<Link className='btn btn-outline-danger  mx-2 '  to="/">Canceeled</Link>
</div>
    </form>

</div>
  </div>

  )
}

export default Edituser;