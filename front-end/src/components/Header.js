import React from 'react';
import '../css/Header.css'
import {Link} from 'react-router-dom'

export default function Header() {
  return <div>
      <header className="header">
            <h1 className="logo">
                <Link to="/">twitter</Link>
            </h1>
            <nav>
                <ul className="main-nav">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><span to="#" className="user-name">Hello, Thanh Pham</span></li>
                    <li><Link to="#"></Link>Sign out</li>
                </ul>
            </nav>
        </header>
  </div>;
}
