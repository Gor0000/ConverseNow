import React , { useState , useEffect } from 'react'
import { useLoginUserMutation } from '../store/features/loginApi'
import Loading from '../Loading/Loading'
import './Login.css'
import { NavLink } from 'react-router-dom'

function Login() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [loginUser , {isLoading , isSuccess , isError , error , data}] = useLoginUserMutation()
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
  if(isSuccess){
    window.location.href = '/Home'
  }
  if(isLoading){
    return (  
      <Loading/>
    )
  }
  if(data){
    console.log(data)
    if(data.status === 200){
      localStorage.setItem('token' , data.token)
      localStorage.setItem('messageId' , data.messageId)
    }
    else{
      alert(data.message)
      window.location.reload()
    }
  }
  if(isError){
    console.log(error)
    alert(JSON.stringify('Error ' + error.originalStatus + ' , Please restart the page ( F5 or Ctrl + R )'))
  }
  return (
    <div className='LoginFormContainer'>
        <form onSubmit={formSubmit} className={'LoginForm'}>
          <input type="text"  name='email' placeholder='Email . . .' onChange={(e) => setEmail(e.target.value)} value={email}/>
          <input type="password"  name='password' placeholder='Password . . .' onChange={(e) => setPassword(e.target.value)} value={password}/>
          <button type='submit'>Log In</button>
          <p>Don't have an account ? <NavLink to={'/Register'}>Register ?</NavLink></p>
        </form>
    </div>
  )
}

export default Login