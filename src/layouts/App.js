import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Navigation from "./Navigation";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <aside className="navigation">{<Navigation />}</aside>
        <header>
          <Header />
        </header>
        <section className="main">
          <Main />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
