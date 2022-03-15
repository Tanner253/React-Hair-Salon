import React from "react";
import Main from "./modules/Main.js";
import Footer from "./modules/Footer.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Main />
        <Footer style={{position: "absolute", bottom:0 }} />
      </>
    );
  }
}

export default App;
