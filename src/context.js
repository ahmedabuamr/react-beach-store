import React, { Component } from "react";
import items from "./data";

const RoomsContext = React.createContext();

class RoomsProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }
  formatData(items) {
    const tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let rooms = { ...item.fields, images, id };
      return rooms;
    });
    return tempItems;
  }

  getRooms = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handelChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,

      minSize,
      maxSize,
      price,
      type,
      capacity,
      breakfast,
      pets
    } = this.state;
    //all of room
    let tempRooms = [...rooms];
    //all of capacity
    capacity = parseInt(capacity);
    price = parseInt(price);

    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter capactiy
    if (capacity != 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    //filter price
    tempRooms = tempRooms.filter(room => room.price <= price);

    //filter size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    // filter breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };
  render() {
    return (
      <RoomsContext.Provider
        value={{
          ...this.state,
          getRooms: this.getRooms,
          handelChange: this.handelChange
        }}
      >
        {this.props.children}
      </RoomsContext.Provider>
    );
  }
}

const RoomsConsumer = RoomsContext.Consumer;
export { RoomsContext, RoomsProvider, RoomsConsumer };
