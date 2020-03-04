import React from "react";
import { Link } from "../";
import "./Footer.scss";

export default function Footer({ type }) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h4 className="underlined mb-4">Alapelvem</h4>
            <h5 className="text-justify">
              Nincs megoldhatatlan helyzet, csak nem megfelelő megoldás. A coach
              segít abban, hogy az út járhatóbb legyen. Az élet útjai
              mindenkinek más felülettel borítottak. Sok kő és bucka esetén
              elfeslik az ember cipője, egyre nehezebben megy, hogy megküzdjön
              az akadályokkal. A coach segíti az úton az ügyfelet, ha kell segít
              cipőt cserélni!
            </h5>
          </div>
          <div className="col-sm text-center">
            <h4 className="underlined mb-4">Oldaltérkép</h4>
            <p>
              <Link type={type} to="hero" title="Főoldal">
                Főoldal
              </Link>
            </p>
            <p>
              <Link type={type} to="about" title="Bemutatkozás">
                Bemutatkozás
              </Link>
            </p>
            <p>
              <Link type={type} to="coaching" title="Mi a coaching">
                Mi a coaching
              </Link>
            </p>
            <p>
              <Link type={type} to="mediacio" title="Mediáció">
                Mediáció
              </Link>
            </p>
            <p>
              <Link type={type} to="prices" title="Árak">
                Árak
              </Link>
            </p>
            <p>
              <Link type={type} to="book" title="Önerő">
                Önerő
              </Link>
            </p>
            <p>
              <Link type={type} to="contact" title="Kapcsolatfelvétel">
                Kapcsolatfelvétel
              </Link>
            </p>
          </div>
          <div className="col-sm text-center copy">
            <h4 className="underlined mb-4">Pap Andrea</h4>
            <h5 className="mb-4">Elérhetőségek:</h5>
            <h5>+36 20 426 3732</h5>
            <h5>pandrea001@gmail.com</h5>
          </div>
        </div>
      </div>
      <p className="text-center text-light">Copyright @ 2019 Pap Andrea</p>
    </footer>
  );
}
