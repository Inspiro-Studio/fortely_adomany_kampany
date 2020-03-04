import React from "react";
import "./USP.scss";
import motiv from "../../images/usp/motiv.svg";
import target from "../../images/usp/target.svg";
import problem from "../../images/usp/problem.svg";
import healthy from "../../images/usp/healthy.svg";
import pair from "../../images/usp/pair.svg";
import self from "../../images/usp/self.svg";
import work from "../../images/usp/work.svg";
import Bounce from "react-reveal/Bounce";

export default function USP() {
  return (
    <section id="usp">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="underlined mb-5 text-uppercase">
              Amiben segíthetek
            </h2>
          </div>
        </div>
        <div className="row text-center mb-5">
          <div className="task col-sm help1 p-5">
            <Bounce>
              <img src={motiv} alt="Motivációs gondok" />
            </Bounce>
            <h3>Motivációs gondok</h3>
          </div>
          <div className="task col-sm help2 p-5">
            <Bounce>
              <img src={target} alt="Célkitűzés" />
            </Bounce>
            <h3>Célkitűzés</h3>
          </div>
          <div className="task col-sm help3 p-5">
            <Bounce>
              <img src={work} alt="Munkahelyi krízisek" />
            </Bounce>
            <h3>Munkahelyi krízisek</h3>
          </div>
          <div className="task col-sm help4 p-5">
            <Bounce>
              <img src={pair} alt="Párkapcsolati problémák" />
            </Bounce>
            <h3>Párkapcsolati problémák</h3>
          </div>
          <div className="task col-sm help3 p-5">
            <Bounce>
              <img src={problem} alt="Elakadás mindennapi élethelyzetekben" />
            </Bounce>
            <h3>Elakadás mindennapi élethelyzetekben</h3>
          </div>
          <div className="task col-sm help1 p-5">
            <Bounce>
              <img
                src={self}
                alt="Önismerettel-önmegvalósítással kapcsolatos kérdések"
              />
            </Bounce>
            <h3>Önismerettel-önmegvalósítással kapcsolatos kérdések</h3>
          </div>
          <div className="task col-sm help2 p-5">
            <Bounce>
              <img
                src={healthy}
                alt="Egészségügyi problémák lelki kivetülései"
              />
            </Bounce>
            <h3>Egészségügyi problémák lelki kivetülései</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
