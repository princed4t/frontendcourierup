import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Loggedin = () => {
    const[Person,setPerson]=useState({
        email: '',
        password: '',  
     });

    
  let navigate=useNavigate();

     const myhandler=(event)=>{
        setPerson({...Person,[event.target.name]:event.target.value});
     };
     const  handleSubmit=(event)=>{
        event.preventDefault();


        axios.post('http://localhost:9000/auth/login',Person)
        .then((response)=>{
   
       if(response.data!="Credentials Invalid !!"&& response.data.roles=="ROLE_ADMIN" ){
          console.log("i am fine");
         localStorage.setItem('jwtToken',response.data.token);
         localStorage.setItem('email',JSON.stringify(response.data.email))
         localStorage.setItem('roles',JSON.stringify(response.data.roles))
         toast('🦄 Login Success', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
   
            navigate("/adduser");
         }
    else if(response.data!="Credentials Invalid !!" && response.data.roles.filter(item=>item.roles === "ROLE_USER")){
   console.log("hi how are you");
             
           localStorage.setItem('jwtToken',response.data.token);
           localStorage.setItem('email',JSON.stringify(response.data.email))
           localStorage.setItem('roles',JSON.stringify(response.data.roles))
            const email=response.data.email;
           toast('🦄 Login Success', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
     
              navigate('/adduser');
           }

       else{
         toast.error('🦄 Invalid User Please Login', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            navigate("/adduser");


        }



       }

 ) .catch((error) => {
   toast.error('🦄 Please provide valid things', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
                
        
     });
   }
    const handleReset=()=>{
       setPerson({
        name: '',
        password: '', 
       });


    };

  return (
    <div className='main'>
    <h1 className='centered-text-container'>ADD-USER</h1>
    <div className='form-container'>
 

    
    <form onSubmit={handleSubmit} className='form-control' mx-900>
     <div>
     <label htmlFor='name'  className='form-label'>Email</label>
    <input type={"text"} id="name" name="email"onChange={myhandler}  value={Person.email} className='form-control' required />
   

     </div>
<div>
    <label htmlFor='password'className='form-label'>Password</label>
    <input type={"text"} id="password"name="password"onChange={myhandler}  value={Person.password}className='form-control' required/>


</div>


<div>
<button className='btn btn-primary my-4'>LOGIN</button>
<button className='btn btn-primary mx-5'  onClick={handleReset}>cancel</button>


</div>
    </form>

</div>
<div style={{backgroundColor:'black',height:'300px'}}>

<p  style={{color:"white"}}>
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
   


export default Loggedin