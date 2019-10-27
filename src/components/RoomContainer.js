import React from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import { RoomsConsumer } from "../context";
import Loading from "../components/Loading";

export default function RoomContainer() {
  return (
    <>
      <RoomsConsumer>
        {value => {
          const { loading, sortedRooms, rooms } = value;
          if (loading) {
            return <Loading />;
          }
          return (
            <div>
              <RoomFilter rooms={rooms} />
              <RoomList rooms={sortedRooms} />
            </div>
          );
        }}
      </RoomsConsumer>
    </>
  );
}
