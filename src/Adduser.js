import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
const Adduser = () =>{
    const[Person,setPerson]=useState({
        name: '',
        email :'',
        password:'',
        product:'',
        proweight:'',
        prodistance:'',  
     });
   const[image,setImage]=useState(null);



     let navigate=useNavigate();
    
     const myhandler=(event)=>{
        setPerson({...Person,[event.target.name]:event.target.value});
     };
 
     const headers=   {
      'Content-Type': 'multipart/form-data',
    };


     const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setImage(imageFile);
      };
     const  handleSubmit= (event)=>{
        event.preventDefault();

 const {name,email,password,product,proweight,prodistance} = Person;

       
    const formDataToSend = new FormData();
    formDataToSend.append('name',name);
    formDataToSend.append('email', email);
    formDataToSend.append('password',password);
    formDataToSend.append('image',image);
    formDataToSend.append('product',product);
    formDataToSend.append('proweight',proweight);
    formDataToSend.append('prodistance',prodistance);
    formDataToSend.append('image',image);
    
    const response =axios.post('http://localhost:9000/home/addcust', formDataToSend, {
      
    headers }).then((response)=>{toast.success(response.data);
    navigate("/admin");
    }
    )
    .then((error)=>console.log(error));
 };
       
    
      
    
  





        // axios.post('http://localhost:9000/home/addcust',Person)
        // .then((response)=>{
        //     toast('🦄 Wow Registeration Success', {
        //         position: "bottom-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //         });


        // }).catch((error)=>{
           
        //         navigate("/adduser");
        // });
       
     
    
      return (
         
        <div  className='main'>
        <div className='text'>    
          <h1 >Registeration-Form</h1>
           </div>
    
        <div className='form-container main'>
           
    
        
        <form onSubmit={handleSubmit} className='form-control' mx-900>
         <div>
         <label htmlFor='username'  className='form-label'>CustomerName</label>
        <input type={"text"} id="name" name="name"onChange={myhandler}  value={Person.name} className='form-control' required />
       
    
         </div>

         <div>
        <label htmlFor='email'className='form-label'>Email</label>
        <input type={"text"} id="email"name="email"onChange={myhandler}  value={Person.email}className='form-control' required/>
    
    
    </div>



    <div>
        <label htmlFor='password'className='form-label'>Password</label>
        <input type={"password"} id="password"name="password"onChange={myhandler}  value={Person.password}className='form-control' required/>
    
    
    </div>

    <div>
    <label htmlFor='product'className='form-label'>Product</label>
        <input type={"text"} id="product"name="product"onChange={myhandler}  value={Person.product}className='form-control' required/>
        </div>

        <div>
    <label htmlFor='productweight'className='form-label'>Productweight</label>
        <input type={"text"} id="proweight"name="proweight"onChange={myhandler}  value={Person.proweight}className='form-control' required/>
        </div>
        <div>
    <label htmlFor='productdistance'className='form-label'>Productdistance</label>
        <input type={"text"} id="prodistance"name="prodistance"onChange={myhandler}  value={Person.prodistance}className='form-control' required/>
        </div>



    <div>
          <label htmlFor="image">Image:</label>
          
          <input type="file" accept="image/*" onChange={handleImageChange}/>
          
        </div>


    
    <div className='text-center'>
    <button className='btn btn-primary my-2 '>REGISTER-USER</button>
    
    
    </div>
        </form>
    
    </div>

    <div style={{backgroundColor:'blue',height:'200px'}}>

    <p  style={{color:"black"}}>
     A registration form is an essential element of online interactions, enabling users to establish personalized accounts on platforms, 🌐 ensuring a unique digital identity. This form collects pertinent user information, such as usernames, email addresses, and passwords, serving as the gateway to a tailored user experience. With its fields and checkboxes, the registration form acts as a virtual checkpoint, 📝 ensuring that users agree to terms and conditions before proceeding. It empowers users to define their preferences, fostering a sense of ownership and customization within the digital realm. 💡 Through the registration form, a seamless bridge is established between users and digital services, offering them access to the multitude of features a platform has to offer.
     💡 - "Bright Idea" Emoji: Suggests that using the application can lead to innovative solutions or new insights.

🚀 - "Rocket" Emoji: Implies a swift and efficient experience, as if the user's tasks or goals will be propelled forward.

🎉 - "Party Popper" Emoji: Conveys a sense of celebration and excitement, implying that using the application will result in a fun and rewarding experience.

🌟 - "Star" Emoji: Represents high quality and excellence, suggesting that the application is top-notch and worth exploring.

🧩 - "Puzzle Piece" Emoji: Signifies that the application can help solve problems or complete tasks by fitting the missing pieces together.
     </p>
    </div>
     


      </div>
     
    
      )
      }
    
export default Adduser
