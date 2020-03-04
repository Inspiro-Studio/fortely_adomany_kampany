import React from "react";
import { Link } from "gatsby";
import "./message.scss";

export default function SuccessMessage() {
  return (
    <div className="message-container">
      <div className="message-box">
        <h2>Köszönöm a megkeresésed!</h2>
        <p>
          Hamarosan keresni foglek a megadott elérhetőségen a közös munka
          reményében.
        </p>
        <Link className="btn btn-primary" to="/">
          Vissza a főoldalra
        </Link>
      </div>
    </div>
  );
}
