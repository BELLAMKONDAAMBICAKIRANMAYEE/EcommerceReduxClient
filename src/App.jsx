import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'

import Login from './pages/Login'
import Register from './pages/Register'
import VerifyOtp from './pages/VerifyOtp'

import Navbar from './pages/Navbar'
import ProtectedRoute from './pages/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import AddProduct from './pages/AddProduct'
import AdminProducts from './pages/AdminProducts'
import SingleProduct from './pages/SingleProduct'
import EditProduct from './pages/EditProduct'

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />
<Route
  path="/dashboard"
  element={
   
      <Dashboard />

  }
/>
        <Route
          path="/products"
          element={
           
              <Products />
           
          }
        />

        

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* OTP ROUTE */}

        <Route
          path="/verify-otp"
          element={<VerifyOtp />}
        />

        {/* ADMIN ROUTES */}

        <Route
          path="/add-product"
          element={
           
              <AddProduct />
           
          }
        />

        <Route
          path="/admin-products"
          element={
           
              <AdminProducts />
           
          }
        />

        <Route
          path="/single/:id"
          element={
       
              <SingleProduct />
           
          }
        />

        <Route
          path="/edit/:id"
          element={
       
              <EditProduct />
           
          }
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App