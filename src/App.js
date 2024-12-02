import {useState,useEffect, useRef } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './componenets/home';
import About from './componenets/about';
import Services from './componenets/services';
import Faq from './componenets/faq';
import Contact from './componenets/contact';
import Navbar from './componenets/nav';
import Footer from './componenets/footer';
import Loading from './componenets/loading';
import Reaction from './componenets/reaction';
import './index.css';
import axios from 'axios';
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  const API_URL = process.env.REACT_APP_BACKEND_URL
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light-soft"); // Default theme
  
  axios.get(`${API_URL}/api/sample/`).then((response) => console.log(response.data));

  useEffect(() =>{
    //simulate a network request
    setTimeout(() =>{
      setIsLoading(false);
    }, 3000);
  }, [])
   // Load the saved theme from localStorage when the app loads
   useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light-soft";
    toggleTheme(savedTheme);
  }, []);

  // Toggle theme menu visibility
  const handleClick = () => {
    setIsActive(!isActive);
  };

  // Function to switch themes
  const toggleTheme = (theme) => {
    document.body.classList.remove("dark-neon", "light-soft");
    document.body.classList.add(theme);
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className={`App ${currentTheme}`}>
      {isLoading ? (<Loading/>) :(
        <div>
            <Navbar />
        <div className="App-darkmode">

          {/* Theme Selection Menu */}
          <div className='theme' onClick={handleClick}>       
            <p className={isActive ? "moon" : "moon hide"} onClick={() => toggleTheme("dark-neon")} data-caption="Dark"><FontAwesomeIcon icon={faMoon}></FontAwesomeIcon></p>
            <p className={isActive ? "sun hide" : "sun"} onClick={() => toggleTheme("light-soft")} data-caption="Light"><FontAwesomeIcon icon={faSun}></FontAwesomeIcon></p>
          </div>
        </div>
        
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="about/" element={<About />} />
            <Route path="services/" element={<Services />} />
            <Route path="faq/" element={<Faq />} />
            <Route path="contact/" element={<Contact />} />
          </Routes>
          <Reaction/>
          <Footer></Footer>
        </div>
      )}
    </div>
    
  );
}

export default App;
