import React from "react";
import "./About.scss";
import Zoom from "react-reveal/Zoom";
import questions from "../../images/about/questions.svg";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 text-justify">
            <div className="header text-center">
              <h2 className="underlined mb-5 text-uppercase">Bemutakozás</h2>
            </div>
            <p>
              <span>Pap Andrea</span> vagyok. Az elmúlt 17 évet a gyógytorna
              világában töltöttem és mozgásterapeutaként a lehető legtöbbet
              igyekeztem segíteni a hozzám fordulóknak testük állapotának
              megőrzésében, vagy gyógyításában. 2014-től egy iskola elvégzése
              után már szakképzett coachként coachingot is tartok. Hiszem, hogy
              az elakadások amelyek vasmacskaként fognak vissza bennünket a
              kiteljesedéstől egytől egyig oldhatóak, átalakíthatóak,
              elsimíthatóak, csak a megfelelő irányban és az odaillő eszközökkel
              szükséges kezelni a helyzeteket!
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <Zoom>
              <h3>Leggyakrabban az alábbi kérdésekkel találkozom</h3>
              <ul>
                <li>Ki vagyok?</li>
                <li>Mi a célom?</li>
                <li>Miért nem haladok?</li>
                <li>Nekem miért nem sikerül?</li>
                <li>Mit is akarok valójában? </li>
                <li>Mi kell a boldogságomhoz?</li>
                <li>Miért vagyok kedvetlen?</li>
                <li>Miért vagyok lusta?</li>
                <li>Miért vagyok beteg?</li>
                <li>Hogyan tudnék magamon segíteni?</li>
              </ul>
            </Zoom>
          </div>
          <div className="image text-center col-md-6 d-none d-md-block">
            <img src={questions} alt="Kérdések" />
          </div>
        </div>
        <div className="col-12 text-center mt-5">
          <h4>
            Ha a fenti kérdések közül bármelyik ismerős és nem sikerül
            megválaszolni, keressen bátran és együtt megtaláljuk a választ!
          </h4>
        </div>
      </div>
    </section>
  );
}
