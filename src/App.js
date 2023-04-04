import { Routes , Route , Navigate } from 'react-router-dom'
import Home from './Home/Home'
import Page404 from './404/Page404'
import Login from './LogIn/Login';
import Register from './Register/Register';
  
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/Home'}/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/*' element={<Page404/>}/>
    </Routes>
  );
}

export default App;
