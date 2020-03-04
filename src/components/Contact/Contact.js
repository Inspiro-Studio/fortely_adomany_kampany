import React from "react";
import "./Contact.scss";
import Zoom from "react-reveal/Zoom";

export default function Form() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row contact">
          <div className="form-container col-12 text-center">
            <h2 className="underlined text-uppercase">Kapcsolatfelvétel</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/success"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-row pt-5">
                <div className="offset-md-2 col-md-4 mb-3 text-left">
                  <label htmlFor="name" className="text-light">
                    Név
                  </label>
                  <input
                    type="text"
                    className="form-control text-white"
                    name="name"
                    placeholder="Az Ön neve"
                    id="name"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3 text-left">
                  <label htmlFor="phone" className="text-light">
                    Telefonszám
                  </label>
                  <input
                    type="text"
                    className="form-control text-white"
                    name="phone"
                    placeholder="Az Ön telefonszáma"
                    id="phone"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-12 offset-md-2 col-md-8 mb-3 text-left">
                  <label htmlFor="message" className="text-light ">
                    Üzenet
                  </label>
                  <textarea
                    type="text"
                    className="form-control text-white"
                    name="message"
                    placeholder="Ide írja üzenetét"
                    id="message"
                    rows="3"
                    required
                  />
                </div>
              </div>
              <div className="form-row text-center align-center">
                <div className="col-12">
                  <Zoom>
                    <button
                      className="text-uppercase btn-primary text-light mt-3 p-2 pl-4 pr-4"
                      type="submit"
                    >
                      Küldés
                    </button>
                  </Zoom>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
