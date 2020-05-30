import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Navbar = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">Streamio</Link>
      <div className="right menu">
        <Link to="/" className="item">All streams</Link>
        <GoogleAuth className="item" />
      </div>
    </div>
  );
};

export default Navbar;