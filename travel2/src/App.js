import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import About from './Components/About/About';
import Book from './Components/Book/Book'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
        <Router>
      <Routes>
      <Route path="/" element={<PageContent />} />
        {/* <Route path="/" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Footer/>} /> */}
        
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        {/* Add other routes for different pages */}
      </Routes>
    </Router>
    
    {/* <Home/> 
     <Main/>
    <Footer/> */}
    
    </>
  )
}

const PageContent = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </div>
  );
};

export default App