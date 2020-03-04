import React from "react";
import "./Hero.scss";
import Fade from "react-reveal/Fade";
import CountUp from "react-countup";

export default function Hero({ data }) {
  return (
    <section id="hero">
      <div className="container">
        <div className="row justify-content-md-cente mt-md-5 pt-md-5">
          <div className="col-sm">
            <div className="hero1">
              <h2>
                <CountUp duration={6.75} end={100} />%
              </h2>
            </div>
          </div>
          <div className="col-sm">
            <Fade bottom>
              <h1 className="text-md-left p-2">Tágoas minket</h1>
              <h3 className="text-uppercase text-md-left p-2">
                Cél 200.000 Ft
              </h3>
              <h3 className="text-uppercase text-md-left p-2">
                Eddig összesen 75000 Ft támogatást gyüjtöttünk
              </h3>
              <div className="change text-center text-md-left pt-4 pr-2">
                Hátrányoshejzetű gyerekeknek visszük el az élményt.
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
