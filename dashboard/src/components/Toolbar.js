import React from 'react';
// import styled from 'styled-components';
import { FaSearch, FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <div className="ToolbarContainer">
      <div className="search-container">       
        <input className="search-input" type="text" placeholder="Search..." />
        <FaSearch size={20} className='search-icon' />
      </div>
      <div className="IconsContainer">
      <div className="Icon">
          <FaEnvelope size={20} />
        </div>
        <div className="Icon">
            <IoSettings size={20} />
        </div>
        <div className="Icon notification-icon">
          <FaBell size={20} />
          <div className="notification-dot"></div>
        </div>
        <div className="Icon">
          <FaUserCircle size={20} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
