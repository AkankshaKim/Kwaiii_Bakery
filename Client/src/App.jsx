import React from "react"
import { Hero , Navbar, Products, Footer, Ecommerce} from "./Components/index"
import {Login , Sign} from "./Components/index"

import './App.css'


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Products/>
    <Ecommerce/>
    <Footer/>
    {/* <Sign/> 
    <Login/> */}
    </>
  )
}

export default App