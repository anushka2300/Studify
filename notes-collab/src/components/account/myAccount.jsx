import React, { useState, useEffect } from 'react';
import Navbar from "../navbar/Navbar";
import "./account.css";
import { Outlet } from 'react-router-dom';

const MyAccount = () => {
  const [userName, setUserName] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const fetchUser = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await fetch(`${process.env.URL}/auth/getuser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await response.json();
      setUserName(res.user.name.toUpperCase());
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="account-container">
      <Navbar />
      <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? "Close Menu" : "Open Menu"}
      </button>
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="profile">
          <h2>{userName}</h2>
          <p>Engineering Student</p>
        </div>
        <ul className="menu">
          <li><a href="/account/notes">Upload Notes</a></li>
          <li><a href="/account/mynotes">My Notes</a></li>
          <li><a href="/account/favorites">Favorites</a></li>
        </ul>
      </aside>

      <main className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default MyAccount;
