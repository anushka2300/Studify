import React, { useEffect, useState } from 'react';
import './navbar.css';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const person = sessionStorage.getItem('userName');
    setUser(person);
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.setItem("logout", Date.now().toString());
    setUser(null);
    navigate('/');
  };

  return (
    <div> 
      <nav className="navbar">
        <div className="navbar-logo">Studify</div>
        <ul className="navbar-links">
          <li><Link to="/" className="ele">Home</Link></li>
          <li><Link to="/about" className="ele">About</Link></li>
          <li><Link to="/contact" className="ele">Contact</Link></li>

          {!user ? (
            <li><Link to="/login" className="login">LOGIN</Link></li>
          ) : (
            <>
              <li><Link to="/account" className="login">My Account</Link></li>
              <li>
                <button className="login" onClick={handleLogout} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                  LOGOUT
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
