import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Login from "./modules/login/Login";
import LandingPage from "./modules/landing/landing";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/LOGIN" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
