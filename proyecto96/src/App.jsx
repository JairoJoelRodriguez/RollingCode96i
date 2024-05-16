import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./common/Footer";
import NavbarApp from './common/NavbarApp';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/Home';
import About from './views/About'
import Login from './views/Login';
import ErrorScreen from './views/ErrorScreen';
function App() {

  return (
    <BrowserRouter className='bg-dark'>
      <NavbarApp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route patch='/nosotros' element={<About/>}/>
        <Route path='/ingresar' element={<Login/>}/>
        <Route path='*' element={<ErrorScreen/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
