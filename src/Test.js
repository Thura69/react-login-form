import React, { useEffect, useState } from 'react'
import './App.css'

function Test() {
const initialValue = {name:'',email:'',password:''};
const [userValue,setValue] = useState(initialValue);
const [userError,setUserError] = useState({ok:'ok'});
const [submit,setSubmit] = useState(false);
const [isCheck,setIsCheck] = useState(false)


useEffect(()=>{
  if(Object.keys(userError).length === 0){
    setSubmit(true)
    }
},[userError])





const handelChange = (e)=>{
const {name,value} = e.target
setValue({...userValue,[name] : value});
}

const handelSubmit = (e)=>{
  e.preventDefault()
  checkError(userValue)
 
}
 
const checkError = (userValue)=>{
const err = {};
const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i ;

if(!userValue.name){
err.username ="Username is require"
}
if(!userValue.email){
err.email ="Email is require"
}else if(!regex.test(userValue.email)){
err.email = "Email should be valid Email"
}
if(!userValue.password){
err.password = 'Password is require'
}else if(userValue.password.length <= 6){
err.password = 'Password should be more than 6'
}  
setUserError(err)
}










   
  return (
  
    <div className='app'>
    <div className='container'>
    {submit?<div><h2 className='success'>Successs!!!</h2><h1 className='wish'>Have a nice day {userValue.name}</h1></div>: <div className='form__continar'>
    <p>{JSON.stringify(userValue,undefined,2)}</p>
      <h2 className='description'>Sign in</h2>
     <form onSubmit={(e)=>{handelSubmit(e)}}>
      <div className='field'>
       <label>Name</label>
       <input placeholder='Name' type="text" name='name' value={userValue.name} onChange={(e)=>{handelChange(e)}}></input>
      </div>
     {<p>{userError.username}</p>}
      <div className='field'>
      <label>Email</label>
       <input placeholder='Email' type="email" name='email' value={userValue.email} onChange={(e)=>{handelChange(e)}}></input>
      </div>
      {<p>{userError.email}</p>}
      <div className='field'>
      <label>Password</label>
       <input placeholder='Password' type="password" name='password' value={userValue.password} onChange={(e)=>{handelChange(e)}}></input>
      </div>
      {<p>{userError.password}</p>}
      <button>Sign in</button>
     </form>
     </div>}
      
    </div>
   
    </div>
   
  )
}

export default Test