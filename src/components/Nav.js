import React,{useState,useEffect} from 'react'
import './Nav.css'

const Nav = () => {
    const [show, setShow] = useState();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShow(window.scrollY > 30);
        });

      
    }, []);
    return (
        <div className={`nav-container ${show &&  "nav-container-black"}`}>
            <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="LOGO"></img>
            <img className='nav-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="AVATAR"></img>
   </div>
  )
}

export default Nav