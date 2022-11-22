import React from "react";

const Navbar = ({ brand, sobre}) => {
  return (
    <nav className="navBar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">{ brand }</a>
        <a className="navbar-brand text-uppercase" href="/sobre">{ sobre }</a>
      </div>
    </nav>
  );
};

export default Navbar;
