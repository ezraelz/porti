import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import React, {useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const bars = <FontAwesomeIcon icon={faBars}/>
    const times = <FontAwesomeIcon icon={faTimes}/>
    const[isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const ref = useRef(null);
  
    const changeNavBG = () =>{
        if (window.scrollY > 0 ) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavBG)

    
    ;
    
    const handleClick = () => {
        setIsActive(!isActive);
    };
    
    // Scroll TOp
    const handleScroll = () => {
        window.scrollTo({top:0, behavior: 'smooth'});
    };


    return ( 
        <nav className={navbar ? "navbar active" : "navbar"} 
                >
            <h1>
                <Link to="/">ByteMind</Link>
            </h1>
                <div className={isActive ? "links" : "links is_hidden"}>
                    <ul className={isActive ? "list" : "list hide"}>
                        <li onClick={handleClick}>
                            <Link to="/" onClick={handleScroll}>Home</Link>
                        </li>
                        <li onClick={handleClick}>
                            <Link to="/about" onClick={handleScroll}>About</Link>
                        </li>
                        <li onClick={handleClick}>
                            <Link to="/services" onClick={handleScroll}>Services</Link>
                        </li>
                        <li onClick={handleClick}>
                            <Link to="/faq" onClick={handleScroll}>FAQ</Link>
                        </li>
                        <li onClick={handleClick}>
                            <Link to="/contact" onClick={handleScroll}>Contact</Link>
                        </li>
                    </ul>
                </div>
            
            <div className="navbar-toggler">
                <p className={isActive? "open-menu hide": "open-menu"} onClick={handleClick}>{bars}</p>
                <p className={isActive? "close-menu" :"close-menu hide"} onClick={handleClick}>{times}</p> 
            </div>
        </nav>
    );
}

export default Navbar;