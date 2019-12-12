import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Navigation from "./Navigation";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Dancing Script:300,400,700", "sans-serif"]
  }
});

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <aside className="navigation"> {<Navigation />} </aside>{" "}
        <header>
          <Header />
        </header>{" "}
        <section className="main">
          <Main />
        </section>{" "}
        <footer>
          <Footer />
        </footer>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
