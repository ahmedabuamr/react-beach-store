import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Features from "../components/Features";

export default function Home() {
  return (
    <React.Fragment>
      <Header>
        <Banner title="Luxurios rooms" subtitle="deluxe rooms starting at $199">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Header>
      <Services />
      <Features />
    </React.Fragment>
  );
}
