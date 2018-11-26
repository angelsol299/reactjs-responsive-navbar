import React from "react";
import "./Toolbar.css";
import "../SideDrawer/DrawerToggleButton";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div>
        <DrawerToggleButton />
      </div>
      <div className="toolbar-logo">
        <a href="/">The Logo</a>
      </div>
      <div className="spacer" />
      <div className="toolbar-navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
