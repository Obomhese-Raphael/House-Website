import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Offers from './Components/Offers/Offers';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Pages/Signup/Signup';
import Login from './Components/Pages/Login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Offers />
            <Testimonials />
            <Contact />
          </>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



// The Home button is not showing 
// The Sign-in and Login pages are not responsive