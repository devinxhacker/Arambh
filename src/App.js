import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Help from './pages/help';
import FAQs from './pages/faqs';
import Feedback from './pages/feedback';
import Login from './pages/login';
import Loader from './components/loader';

function Header() {
  return (
    <header>
      <span> Arambh </span>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
        <Link to="/faqs">FAQ's</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}


function App() {
  return (
    <div className="App">
      <Loader />
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
