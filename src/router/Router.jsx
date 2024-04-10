import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../ui/pages/Home'
import Brand from '../ui/pages/Brand/Brand'
import Men from '../ui/pages/Men/Men'
import Women from '../ui/pages/Women/Women'
import Watches from '../ui/pages/Watches/Watches'
import Offer from '../ui/pages/Offer/Offer'
import Smart from '../ui/pages/Smart/Smart'
import Store from '../ui/pages/Store/Store'
import Header from '../ui/components/Header/Header'
import Footer from '../ui/components/Footer/Footer'
import Login from '../ui/pages/Comman/Login/Login'
import SignUp from '../ui/pages/Comman/SignUp/SignUp'
import AdminProduct from '../ui/pages/Admin/AdminProduct/AdminProduct'

export default function Router() {
  return (
    <>
        <BrowserRouter>
       <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/watches' element={<Watches/>}/>
            <Route path='/brands' element={<Brand/>}/>
            <Route path='/mens-watches' element={<Men/>}/>
            <Route path='/womens-watches' element={<Women/>}/>
            <Route path='/offers' element={<Offer/>}/>
            <Route path='/smartwatches' element={<Smart/>}/>
            <Route path='/women' element={<Store/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/admin-dashbord' element={<AdminProduct/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}
