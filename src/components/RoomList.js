import React from "react";
import Room from "./Room";

export default function RoomList({ rooms }) {
  if (rooms.length == 0) {
    return (
      <div className="empty-search">
        <h3>sorry no result rooms in this place</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center ">
        {rooms.map((item, index) => {
          return <Room key={index} room={item} />;
        })}
      </div>
    </section>
  );
}
