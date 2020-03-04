import React from "react";
import "./Prices.scss";
import Fade from "react-reveal/Fade";

export default function Prices() {
  return (
    <section id="prices">
      <div className="container">
        <div className="row ">
          <div className="col-12 text-center">
            <h2 className="underlined mb-5 text-dark text-uppercase">Árak</h2>
            <p className="mb-5">
              Az árak az ÁFA-t tartalmazzák! Az ülések időtartama 1 óra,
              hosszabb vagy rövidebb ülés esetén a díjazásban változások
              lehetnek. Az ülés alatt általában 1 eset, 1 probléma feldolgozása
              történik, melyhez megoldást és „útmutatót” dolgozunk ki, a
              következő ülésig.
            </p>
          </div>
        </div>
        <Fade right big cascade>
          <div className="row text-center justify-content-center">
            <div className="col-sm price m-3">
              <h3 className="underlined_light">Coaching ülés:</h3>
              <h4>10.000Ft</h4>
            </div>
            <div className="col-sm price m-3">
              <h3 className="underlined_light">3 alkalmas bérlet</h3>
              <h4>25.000Ft</h4>
            </div>
            <div className="col-sm price m-3">
              <h3 className="underlined_light">5 alkalmas bérlet</h3>
              <h4>40.000Ft</h4>
            </div>
            <div className="col-sm price m-3">
              <h3 className="underlined_light">10 alkalmas bérlet</h3>
              <h4>85.000Ft</h4>
            </div>
          </div>
        </Fade>
        <div className="row text-justify mt-5">
          <div className="col-12">
            <div className="text-center">
              <h4 className="mt-3">
                A legjobb befektetés Önmagunk fejlesztése!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
