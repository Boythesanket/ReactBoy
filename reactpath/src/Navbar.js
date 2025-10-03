import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){

    const [darkMode, setDarkMode] = useState(false);

    const toggleBackground = () => {
        if (darkMode) {
            document.body.style.backgroundColor = "white"; 
            document.body.style.color = "black";
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white"; 
        }
        setDarkMode(!darkMode);
    };
    return(

        <>
        <nav style={{ display: 'flex', alignItems: 'center', padding: '10px', background: '#aebac7ff' }}>
            <a href='/' style={{ margin: '0 20px 0 0', textDecoration: '0', fontSize: '26px'}}>TextUtils</a>
            <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
            <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
            <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
            <button onClick={toggleBackground} style={{margin:'0 60vw', padding: '5px 30px'}}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
        </nav>
        </>
    )
}