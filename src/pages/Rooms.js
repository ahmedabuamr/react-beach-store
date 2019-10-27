import React, { Component } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

export class Rooms extends Component {
  render() {
    return (
      <React.Fragment>
        <Header hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/" className="btn-primary">
              back to home
            </Link>
          </Banner>
        </Header>
        <RoomContainer />
      </React.Fragment>
    );
  }
}

export default Rooms;
