import React from "react";

const Footer = ({ name }) => {
  return (
    <footer className="navBar navbar-dark bg-dark">
      <a className="navbar-brand">{name}</a>
    </footer>
  );
};

export default Footer;
