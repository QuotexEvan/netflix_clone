import React, {useState,useEffect} from 'react';
import './NavBar.css';

function NavBar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`NavBar ${show && "Nav-black"}`}>
            <img
                className='Nav-logo'
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix logo" />
            
            <img
                className='Nav-avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Avatar" />
            
        </div>
    )
}

export default NavBar
