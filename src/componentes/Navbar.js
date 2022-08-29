import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import "../Styles/main.css"


function NavBar () {
    const navRef = useRef();

    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My Work</a>
                <a href="/#">Blog</a>
                <a href="/#">About Me</a>
                <button className = "nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className = "nav-btn " onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default NavBar;