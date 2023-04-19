import {useState} from "react";
import './App.css'

// import components
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

// import pages
import {Home, Dashboard, Products, Cart, Bookmarks, Help, Search} from "./pages/index.js";

// import react router
import {BrowserRouter , Routes , Route} from "react-router-dom";

import {useSelector} from "react-redux";


function App() {

  const mode = useSelector((state) => state.mode.dark);

  return (
    <div className={`${mode ? "dark" : ""}`}>
        <Navbar/>
        <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/bookmarks" element={<Bookmarks/>}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/search" element={<Search/>}/>
          </Routes>
    </div>
  )
}

export default App
