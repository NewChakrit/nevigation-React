import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";
import "./Nevigation.css";

import Menudata from "../data/MenuData";

const Nevigation = () => {
  const [aside, setAside] = useState(false);
  const toggleMenu = () => {
    setAside(!aside);
  };
  console.log(aside);
  return (
    <aside>
      <div className="navbar">
        <div className="navbar-toggle">
          <Link to="#" className="menu-bar">
            <FaBars onClick={toggleMenu} />
          </Link>
        </div>
      </div>
      <nav className={aside ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-item" onClick={toggleMenu}>
          <li className="navbar-toggle ">
            <Link to="#" className="menu-bar ">
              <FaWindowClose />
            </Link>
          </li>
          {Menudata.map((menu, index) => {
            return (
              <li key={index} className="menu-text">
                <Link to={menu.path}>
                  {menu.icon} <span>{menu.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Nevigation;
