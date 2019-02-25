import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import SocialLinks from './pages/SocialLinks';
import Footer from './pages/Footer';


import './App.css';

class App extends Component {
  render() {
    return (
      <div id ='root'>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
