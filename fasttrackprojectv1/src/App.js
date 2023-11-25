import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Router>
          <Routes to="/about>
          <Routes/>
      </Router>
    </>
  );
}

export default App;
