import React , { useState , useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { useRegisterUserMutation } from '../store/features/registerApi'
import { useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [name , setName] = useState('')
  const navigate = useNavigate();
  const [registerUser , {isLoading , isSuccess , isError , error}] = useRegisterUserMutation()
  const formSubmit = async (e) => {
    e.preventDefault();
    await registerUser({
      email,
      password,
      name
    }).unwrap()
  }
  if(isLoading){
    return (  
      <Loading/>
    )
  }
  if(isError){
    console.log(error)
    alert(JSON.stringify('Error ' + error.originalStatus + ' , Please restart the page ( F5 or Ctrl + R )'))
  }
  if(isSuccess){
    window.location.href = 'Login'
  }
  return (
    <div className='RegisterFormContainer'>
        <form onSubmit={formSubmit} className={'RegisterForm'}>
          <input type="email"  name='email' placeholder='Email . . .' onChange={(e) => setEmail(e.target.value)} value={email}/>
          <input type="text"  name='password' placeholder='Name . . .' onChange={(e) => setName(e.target.value)} value={name}/>
          <input minLength={6} maxLength={12} type="password"  name='password' placeholder='Password . . .' onChange={(e) => setPassword(e.target.value)} value={password}/>
          <button type='submit'>Log In</button>
          <p>Have an account ? <NavLink to={'/Login'}>Login ?</NavLink></p>
        </form>
    </div>
  )
}

export default Register