import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">DEV@Deakin</div>
      <input type="text" placeholder="Search..." className="search" />
      <div className="nav-links">
        <button>Post</button>
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
