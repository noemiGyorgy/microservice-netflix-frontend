import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Route exact path="/" component={Main} />
          <Route path="/video/:id" component={Video} />
        </Router>
      </div>
    </div>
  );
}

export default App;
