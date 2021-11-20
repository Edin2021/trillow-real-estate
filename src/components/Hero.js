import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h1 className="title">Wellcome to Trillow.</h1>
      <p className="sub-title">Find your perfect home with ease.</p>
      <button className="browse-homes-btn">
        <Link to="/homes">browse homes</Link>
      </button>
    </section>
  );
}

export default Hero;
