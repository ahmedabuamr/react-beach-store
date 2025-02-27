import React, { Component } from "react";
import { RoomsContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export class Features extends Component {
  static contextType = RoomsContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default Features;
