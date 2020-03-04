import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import "./Nav.scss";
import { Link } from "gatsby";

export default function Nav({ background = true }) {
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
        <Link
          className="navbar-brand text-uppercase text-primary"
          to="/"
          offset={-70}
          title="Főoldal"
        >
          fortély
          <span className="d-block">sátor</span>
        </Link>
        <button
          className={btnClass}
          type="button"
          onClick={() => onMobileMenuToggle()}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ` + show}>
          <div className="navbar-nav">
            <Link
              className="nav-item nav-link px-4 text-uppercase"
              to="/#about"
              title="Bemutatkozás"
            >
              Bemutatkozás
            </Link>
            <Link
              className="nav-item nav-link px-4 text-uppercase"
              to="/#coaching"
              title="Mi a coaching"
            >
              Mi a coaching?
            </Link>
            <Link
              className="nav-item nav-link px-4 text-uppercase"
              to="/#prices"
              title="Árak"
            >
              Árak
            </Link>
            <Link
              className="nav-item nav-link px-4 text-uppercase"
              to="/#book"
              title="Önerő"
            >
              Önerő
            </Link>
            <Link
              className="nav-item nav-link  px-4 text-uppercase"
              to="/irasaim"
              title="Írásaim"
            >
              Írásaim
            </Link>
            <Link
              className="nav-item nav-link contact-link text-uppercase btn-primary d-block ml-4"
              to="/"
              title="Kapcsolat"
            >
              Főoldal
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
