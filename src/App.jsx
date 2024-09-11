

import './App.css'
import Header from './component/Header'
import Products from './component/Products'

function App() {

  return (
    <>
      <div className='container p-4'>
        <div className='row'>
          <div className='col-12'>
            <Header/>
            <Products/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
