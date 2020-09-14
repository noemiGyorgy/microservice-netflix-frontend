import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Video from "./pages/Video";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/" component={Main} />
          <Route path="/video/:id" component={Video} />
        </div>
      </Router>
    </div>
  );
}

export default App;
