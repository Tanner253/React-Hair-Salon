import React from "react";
import Main from "./modules/Main.js";
import Footer from "./modules/Footer.js";
import "./App.css";

function App() {
    return (
      <>
        <Main />
        <Footer style={{position: "absolute", bottom:0 }} />
      </>
    );
}

export default App;
