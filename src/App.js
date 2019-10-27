import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import Error from "./pages/Error";
import Navbar from "./components/Navbars";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRooms} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
