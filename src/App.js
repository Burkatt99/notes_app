import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
          <Route path="/settings"></Route>
            <Route path="/detal"></Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
