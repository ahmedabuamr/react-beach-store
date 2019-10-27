import React, { Component } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { RoomsContext } from "../context";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";
import { StyleHero } from "../components/StyleHero";

export class SingleRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomsContext;

  render() {
    const { getRooms } = this.context;
    const room = getRooms(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      breakfast,
      extras,
      images,
      size,
      price,
      capacity,
      pets
    } = room;
    return (
      <>
        <StyleHero img={images[0] || defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyleHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => {
              return <img src={item} key={index} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size}SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity}people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
          <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
              {extras.map((item, index) => {
                return <li key={index}>- {item}</li>;
              })}
            </ul>
          </section>
        </section>
      </>
    );
  }
}

export default SingleRooms;
