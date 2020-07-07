import React from 'react'
import icon from '../../icon.svg';
import './navbar.scss';
export default function navbar() {
    return (
        <nav className="navbar">
<img src={icon} alt="logo"/>
<ul className="nav-links">
    <li><a href="/" className="nav-link" >Home</a></li>
    <li><a href="/" className="nav-link" >About</a></li>
    <li><a href="/" className="nav-link" >Tours</a></li>
</ul>
        </nav>
    )
}
