import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Main from "./pages/Main";
import DetalView from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/settings"></Route>
            <Route path="/detal/:id">
              <DetalView />
            </Route>
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
