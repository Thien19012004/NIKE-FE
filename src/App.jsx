import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/main/Navbar';
import MainHomepage from './pages/homepage/MainHompage';
import MainShopping from './pages/shoppingpage/MainShopping';
import Footer from './pages/main/Footer';
import ShoppingDetails from './pages/shoppingpage/ShoppingDetails';
import About from './pages/About';
import Login from './pages/Auth/login';
import Register from './pages/Auth/Register';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<MainHomepage />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/shopping'
          element={<MainShopping />}
        />
        <Route
          path='/shopping/:id'
          element={<ShoppingDetails />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
