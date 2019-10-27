import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cooktails",
        info:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray."
      },
      {
        icon: <FaHiking />,
        title: "free faHiking",
        info:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray."
      },
      {
        icon: <FaShuttleVan />,
        title: "free FaShuttleVan",
        info:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray."
      },
      {
        icon: <FaBeer />,
        title: "free FaBeer",
        info:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
