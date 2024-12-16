

import{Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrders from './pages/PlaceOrders'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  

  return (
    
    <div className='px sm:px-[5vw]  md:px-[7vw] lg:px-[9vw]' >
    
      <Navbar/> 
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection'element={<Collection/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/product/:productid'element={<Product/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/place-order'element={<PlaceOrders/>}/>
        <Route path='/orders'element={<Orders/>}/>


      </Routes>
      <Footer/>
    </div>
    
  
    
  )
}

export default App
