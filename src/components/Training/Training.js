import React from "react";
import "./Training.scss";
import Zoom from "react-reveal/Zoom";

export default function Training() {
  return (
    <section id="training">
      <div className="container">
        <div className="row ">
          <div className="col-12 text-center mt-4">
            <Zoom>
              <h4 className="mb-5 text-light">
                Olyan élményben lesz részed ami után már sosem tudsz ugyanoda
                visszatérni, megváltoztathatatlanul elindulsz a megvalósulás
                útján!
              </h4>
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
}
