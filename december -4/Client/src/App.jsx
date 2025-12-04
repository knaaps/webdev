import React from 'react'
import Product from './components/Product'
import Products from './components/Products'
import AddProduct from './components/AddProduct'
import Home from './components/Home'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <Router>
        <nav className='bg-gray-700 shadow-lg'>
            <div className='max-w-2xl'>
                <ul>
                    <li>
                        <Link to="/" className="text-white hover:text-gray-200">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Products"
                            className="text-white hover:text-gray-200">
                                Product
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/AddProducts"
                            className="text-white hover:text-gray-200">
                                Add-Products
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/AddProducts" element={<AddProduct/>}/>
        </Routes>
    </Router>
  )
}

export default App