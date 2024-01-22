import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
     
            <div className='container'>
                <Link  to="/">
                <h1>Shadow<span className='primary'>Wrestler</span></h1>
                </Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/'>Home </Link>
                    </li>
                    {/* <li>
                        <Link to='/about'>About</Link>
                    </li>
                     */}
                    <li>
                        <a href='/timer'>Timer</a>
                    </li>
                    <li>
                        <a href='/journal'>Journal</a>
                    </li>
                </ul>
                <div className='btn-group'>
                <Link to='/login'>

                    <button className='btn'>SignUp/Login</button>
                </Link>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
