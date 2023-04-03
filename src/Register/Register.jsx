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
  }
  if(isSuccess){
    window.location.href = 'Login'
  }
  return (
    <div className='RegisterFormContainer'>
        <form onSubmit={formSubmit} className={'RegisterForm'}>
          <h1 className='RegisterFormContainerH1'>Sign up</h1>
          <div className='RegisterFormContainerWrapper'>
            <p>Email</p>
            <input type="email"  name='email' placeholder='Email . . .' onChange={(e) => setEmail(e.target.value)} value={email}/>
          </div>
          <div className='RegisterFormContainerWrapper'>
            <p>Name</p>
            <input type="text"  name='password' placeholder='Name . . .' onChange={(e) => setName(e.target.value)} value={name}/>
          </div>
          <div className='RegisterFormContainerWrapper'>
            <p>Password</p>
            <input minLength={6} maxLength={12} type="password"  name='password' placeholder='Password . . .' onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <span className='RegisterFormContainerWrapperErr'>{isError ? JSON.stringify('Error ' + error.originalStatus + ' , Please restart the page ( F5 or Ctrl + R )') : ''}</span>
          <button type='submit'>Next</button>
          <NavLink className={'RegisterFormContainerNavLink'} to={'/Login'}>Sign in</NavLink>
        </form>
    </div>
  )
}

export default Register