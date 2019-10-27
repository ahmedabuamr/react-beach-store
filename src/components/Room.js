import React from "react";
import defaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="..." />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="room-link btn-primary">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: propTypes.shape({
    name: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.string).isRequired,
    price: propTypes.number.isRequired,
    slug: propTypes.string.isRequired
  })
};

export default Room;
