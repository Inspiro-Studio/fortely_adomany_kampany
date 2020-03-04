import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import "./Nav.scss";
import { ScrollTo } from "../ScrollTo";

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
        <button
          className={btnClass}
          type="button"
          onClick={() => onMobileMenuToggle()}
        />
        <div className="navbar-nav">
          <ScrollTo
            className="nav-item nav-link contact-link text-uppercase btn-secondary d-block m-4"
            to="contact"
            title="Kapcsolat"
          >
            Támogatom
          </ScrollTo>
        </div>
      </nav>
    </div>
  );
}
