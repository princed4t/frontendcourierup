//save the data into local storage
export const  savedatainlocalsorage=(data,next)=>{
localStorage.setItem("data",JSON.stringify(data))
    next() 
}
//is logged in
export const isloggedin=()=>{
let dta=   localStorage.getItem("data");
if(dta!=null){
    return true;

}else{
return false

}}
//do log out
export const dologout=(next)=>{
localStorage.removeItem("data");
next()

}

//currentuser
export const currentUser=()=>{
if(isloggedin){
 return JSON.stringify(localStorage.getItem("data")).user;    
}


}


