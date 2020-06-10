import React, { Component } from "react";
import "../StyleSheets/SideBar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faDollyFlatbed,
  faBriefcase,
  faCoins,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";

class SideBar extends Component {
  state = {};
  render() {
    let Employee = <FontAwesomeIcon icon={faUserTie} size="sm mr-2" />;
    let Inventory = <FontAwesomeIcon icon={faDollyFlatbed} size="sm mr-2" />;
    let Product = <FontAwesomeIcon icon={faBriefcase} size="sm mr-2" />;
    let Sale = <FontAwesomeIcon icon={faCoins} size="sm mr-2" />;
    let Salary = <FontAwesomeIcon icon={faMoneyBillAlt} size="sm mr-2" />;
    return (
      <div className="Sidebar">
        <h3>POS</h3>
        <NavLink activeClassName="activate" className="a" to="/" exact>
          {Employee}User
        </NavLink>
        <NavLink activeClassName="activate" className="a" to="/Singer">
          {Inventory}Singer
        </NavLink>
        <NavLink activeClassName="activate" className="a" to="/Download">
          {Product}Download
        </NavLink>
        {/* <NavLink activeClassName="activate" className="a" to="/DownloadCount">
          {Sale}Download Count
        </NavLink>
        <NavLink activeClassName="activate" className="a" to="/Salary">
          {Salary}Salary
        </NavLink>
        <NavLink activeClassName="activate" className="a" to="/Revenue">
          {Product}Revenue
        </NavLink> */}
      </div>
    );
  }
}

export default SideBar;
