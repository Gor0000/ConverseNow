import React , { useState , useEffect } from 'react'
import { useLoginUserMutation } from '../store/features/loginApi'
import Loading from '../Loading/Loading'
import './Login.css'
import { NavLink } from 'react-router-dom'

function Login() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [loginUser , {isLoading , isError , error , data}] = useLoginUserMutation()
  useEffect(() => {
    localStorage.clear()
  } , [])
  const formSubmit = async (e) => {
    e.preventDefault();
    await loginUser({
      email,
      password
    }).unwrap()
    setEmail('')
    setPassword('')
  }
  if(isLoading){
    return (  
      <Loading/>
    )
  }
  if(data){
    if(data.status === 200){
      window.location.href = '/Home'
      localStorage.setItem('token' , data.token)
      localStorage.setItem('messageId' , data.messageId)
    }
  }
  return (
    <div className='LoginFormContainer'>
        <form onSubmit={formSubmit} className={'LoginForm'}>
          <h1 className='LoginFormContainerH1'>Sign In</h1>
          <div className='LoginFormContainerWrappers'>
            <p>Email</p>
            <input type="text"  name='email' placeholder='Email . . .' onChange={(e) => setEmail(e.target.value)} value={email}/>
          </div>
          <div className='LoginFormContainerWrappers'>
            <p>Password</p>
            <input type="password"  name='password' placeholder='Password . . .' onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <span className='LoginFormContainerWrapperErr'>{data ? data.status !== 200 ? `${data.message}` : '' : isError ? JSON.stringify('Error ' + error.originalStatus + ' , Please restart the page ( F5 or Ctrl + R )') : ''}</span>
          <button type='submit'>Sign in</button>
          <NavLink className={'LoginFormContainerNavLink'} to={'/Register'}>Create account</NavLink>
        </form>
    </div>
  )
}

export default Login