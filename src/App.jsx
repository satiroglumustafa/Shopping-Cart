

import './App.css'
import Header from './component/Header'
import Products from './component/Products'
import { useState } from 'react'
 

function App() {

  const [cart,setCart] = useState([])



  return (
    <>
      <div className='container p-4'>
        <div className='row'>
          <div className='col-12'>
            <Header cartItems = {cart}/>
            <Products cartItems ={cart} setCartItems ={setCart}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
