import React from "react";
import { useContext } from "react";
import { RoomsContext } from "../context";
import Title from "../components/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomsContext);
  const {
    handelChange,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    price,
    type,
    capacity,
    breakfast,
    pets
  } = context;
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search form" />
      <form className="filter-form">
        {/* room type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handelChange}
          >
            {types}
          </select>
        </div>
        {/* end room type */}

        {/* room capacity */}
        <div className="form-group">
          <label htmlFor="capacity">Geusts</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handelChange}
          >
            {people}
          </select>
        </div>
        {/* end room capacity */}

        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            min={minPrice}
            max={maxPrice}
            type="range"
            name="price"
            id="price"
            value={price}
            className="form-control"
            onChange={handelChange}
          />
        </div>
        {/*end room price */}

        {/* room size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handelChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handelChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end room size */}

        {/* extars */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              onChange={handelChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              onChange={handelChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
