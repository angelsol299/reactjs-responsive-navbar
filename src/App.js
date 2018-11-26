import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Toolbar />
        <SideDrawer />
        <main style={{ marginTop: "63px" }}>
          <p>this is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
