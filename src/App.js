import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Adduser from './Adduser';
import Loggedin from './Loggedin';
import Home from './Home';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Admin from './Admincomponents/Admin';

import Test from './Test';
import Showrate from './Admincomponents/Showrate';
import Consigment from './Admincomponents/Consigment';
import Showimg from './Admincomponents/Showimg';
import Edituser from './Admincomponents/Edituser';
import Delete from './Admincomponents/Delete';
function App() {
  return (
    <div >
    
    <Router>
  <Navbar/>
  <ToastContainer/>
  <Routes>
  <Route exact path="/admin" element={<Admin/>}/>
  <Route exact path="/admin/showimg/:email" element={<Showimg/>}/>
  <Route exact path="/admin/delete/:id" element={<Delete/>}/>
  
  <Route exact path="/admin/update/:id" element={<Edituser/>}/>

  <Route exact path="/admin/addconsig/:email" element={<Consigment/>}/>
  <Route exact path="/admin/showrate/:email" element={<Showrate/>}/>

  
  
    
    
  <Route exact path="/test" element={<Test/>}/>


  <Route exact path="/adduser" element={<Adduser/>}/>
  <Route exact path="/login" element={<Loggedin/>}/>
  <Route exact path="/" element={<Home/>}/>



     
  




  </Routes>


    </Router>
     
    </div>
  );
}

export default App;
