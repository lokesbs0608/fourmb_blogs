import React, { Component } from "react";
import Header from "../Header";

class Layout extends Component {
  render() {
    const { children }: any = this.props;
    return (
      <div style={{ position: "relative" }}>
        <div
          style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}
        >
          <Header />
        </div>
        <div style={{ maxWidth: "1000px", margin: "80px auto 0" }}>
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
