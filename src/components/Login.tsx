import React,{useState}from'react';
import LoginForm from './LoginForm';

function Login(details: { name: string; email: string; password: string; }){

  const adminUser={
    email:"admin@admin.com",
    password:"admin123"
 }

  const[user,setUser]=useState({name:"",email:""});
  const[error,setError]=useState("");

  const Login = (details: { name: string; email: string; password: string; }) =>{
    console.log(details);
    
  }

  const Logout = () => {
    console.log("Logout");
    
  }

  return(
    <div className="App">
        {(user.email != "")?(
          <div>
            <h2>Welcome, <span>{user.name}</span></h2>
            <button>Logout</button>
          </div>  
        ): (
           <LoginForm Login1={undefined} error={undefined} />
        )}
    </div>
  );
}

export default Login;
