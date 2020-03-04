import React from "react";
import "./Hero.scss";
import { ScrollTo } from "../";
import Fade from "react-reveal/Fade";
import hero from "../../images/hero/hero1.svg";
import hero2 from "../../images/hero/hero2.svg";
import hero3 from "../../images/hero/hero3.svg";

export default function Hero({ data }) {
  return (
    <section id="hero">
      <div className="container">
        <div className="row justify-content-md-cente mt-md-5 pt-md-5">
          <div className="col-sm-10 col-md-6 col-lg-3 d-none d-md-block">
            <div className="hero1">
              {/* <Fade top> */}
              <img className="hero-img" src={hero2} alt="Kezdőkép" />
              {/* </Fade> */}
              <Fade left>
                <img className="hero-img3" src={hero3} alt="Kezdőkép" />
              </Fade>
              {/* <Fade bottom> */}
              <img className="hero-img" src={hero} alt="Kezdőkép" />
              {/* </Fade> */}
            </div>
          </div>
          <div className="col-sm-8 col-md-6 col-lg-8 offset-lg-1">
            <Fade bottom>
              <h1 className="text-md-right p-2">
                Life coaching - Egészség coaching
              </h1>
              <h3 className="text-uppercase text-md-right p-2">
                Irányíts okosan <span className="d-block">Élj Tudatosan</span>
              </h3>
              <div className="change text-center text-md-right pt-4 pr-2">
                <ScrollTo
                  className="text-uppercase btn-secondary ml-md-4 p-3"
                  to="contact"
                  title="Kapcsolat"
                >
                  Első lépés
                </ScrollTo>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
