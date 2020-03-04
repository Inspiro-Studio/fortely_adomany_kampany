import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import "./Nav.scss";
import { ScrollTo } from "../ScrollTo";
import { Link } from "gatsby";

export default function Nav({ background = false }) {
  const [show, setShow] = useState("");
  const [hasBackground, setHasBackground] = useState(background);

  const btnClass = `navbar-toggler ${show ? "collapsed" : ""}`;
  const navClass = `nav-container fixed-top ${
    hasBackground ? "nav-background" : ""
  }`;

  const toggleBackground = useCallback(() => {
    if (!hasBackground && window.pageYOffset > 80) {
      setHasBackground(true);
    }
  }, [hasBackground]);

  const onMobileMenuToggle = () => {
    setShow(show ? "" : "show");
    if (!hasBackground) {
      setHasBackground(true);
    }
  };

  useEffect(() => {
    toggleBackground();

    window.addEventListener("scroll", debounce(toggleBackground), 50);
  }, [hasBackground, toggleBackground]);

  return (
    <div className={navClass}>
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <ScrollTo
          className="navbar-brand text-uppercase text-secondary"
          to="about"
          offset={-70}
          title="Főoldal"
        >
          Pap Andrea
          <span className="d-block">Coach</span>
        </ScrollTo>
        <button
          className={btnClass}
          type="button"
          onClick={() => onMobileMenuToggle()}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ` + show}>
          <div className="navbar-nav">
            <ScrollTo
              className="nav-item nav-link px-4 text-uppercase"
              to="about"
              title="Bemutatkozás"
            >
              Bemutatkozás
            </ScrollTo>
            <ScrollTo
              className="nav-item nav-link px-4 text-uppercase"
              to="coaching"
              title="Mi a coaching"
            >
              Mi a coaching?
            </ScrollTo>
            <ScrollTo
              className="nav-item nav-link px-4 text-uppercase"
              to="prices"
              title="Árak"
            >
              Árak
            </ScrollTo>
            <ScrollTo
              className="nav-item nav-link px-4 text-uppercase"
              to="book"
              title="Önerő"
            >
              Önerő
            </ScrollTo>
            <Link className="nav-item nav-link text-uppercase" to="/irasaim">
              Írásaim
            </Link>
            <ScrollTo
              className="nav-item nav-link contact-link text-uppercase btn-secondary d-block ml-4 mr-4"
              to="contact"
              title="Kapcsolat"
            >
              Kapcsolat
            </ScrollTo>
          </div>
        </div>
      </nav>
    </div>
  );
}
