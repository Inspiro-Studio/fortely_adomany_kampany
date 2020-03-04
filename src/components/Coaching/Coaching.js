import React from "react";
import { ScrollTo } from "../";
import Zoom from "react-reveal/Zoom";
import coaching from "../../images/coaching/coaching.svg";
import "./Coaching.scss";

export default function Coaching() {
  return (
    <section id="coaching">
      <div className="container">
        <div className="row">
          <div className="col-12 text-justify">
            <h2 className="underlined mb-5 text-uppercase">Mi a coaching?</h2>
            <p>
              A coaching a legegyszerűbben megfogalmazva egy beszélgetés. Olyan
              beszélgetés, amelyben azon témákat dolgozzuk fel, amik az életet
              megnehezítik, a folyamatokat lelassítják, a fejlődést nehezítik,
              az emberi kapcsolatokat akadályozzák.
            </p>
            <p>
              Coach-hoz fordulni egyet jelent azzal, segítséget kérni
              krízishelyzetek, döntéshelyzetek, problémák, elakadások és blokkok
              megoldásához. A coach nem tanácsadó, tehát nem szólhat bele az
              ügyfél életébe még jó szándékkal sem. A megoldás mindig ott van
              ahol a probléma lakozik, vagyis az ügyfél
              fejében-lelkében-életében. Szakszerű kérdések, vezetett
              beszélgetés alatt a megoldások a felszínre kúsznak és az ügyfél
              maga mondja ki a számára legjobb , leghatékonyabb lépéseket
              kitűzött céljai eléréséhez.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="image text-center justify-content-center mt-auto mb-auto col-md-6 d-none d-md-block">
            <img src={coaching} alt="Coaching" />
            <div className="mt-5 pt-5">
              <Zoom>
                <ScrollTo
                  className="text-uppercase btn-secondary ml-4 p-3"
                  to="contact"
                  title="Kapcsolat"
                >
                  Első lépés
                </ScrollTo>
              </Zoom>
            </div>
          </div>
          <div className="col-md-6 ">
            <h3 className="mb-5 ">A coaching lépései a következők:</h3>
            <ul>
              <li>
                <span>Első találkozás:</span> a hozott témát „asztalra tesszük”.
                Vagyis a felmerülő megoldandó problémát kezdjük el megbeszélni.
                Eredményeket csak célok kitűzésével érhetünk el! A lépéseket
                tehát megtervezzük, a célhoz vezető folyamatot is végigvesszük.
                Egy ülés alkalmával csak egy téma kezelhető hatékonyan, a Coach
                feladata az Ügyfelet a kívánt témájánál tartani. Előfordulhat
                azonban, hogy egy téma kezelése más problémákat és
                élethelyzeteteket is tisztába tesz!
              </li>
              <br />
              <li>
                <span>Második találkozás:</span> A folyamat és a kezelendő
                probléma további megoldása. Fontos, hogy újra és újra
                visszaellenőrzés történjen az előző alkalmakon megbeszéltekhez,
                mert egy élethelyzet megoldása nem olyan egyszerű, így
                kisiklások és vargabetűk elkerüléséhez felülvizsgáljuk a
                megtervezett változások, folyamatok hatását, az eredmények
                mértékét!
              </li>
              <br />

              <li>
                <span>Harmadik találkozás:</span> Könnyebb témák esetén akár meg
                is oldódhat a probléma , és előjöhet egy következő kérdés.
                Hosszabb folyamatok esetén az Út közepén tartva haladunk a
                kitűzött cél felé!
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 text-justify mt-5">
          <p>
            A coachingban a vezetett beszélgetésen kívül teszteket, képi, vagy
            írásos eszközöket is alkalmazunk ahhoz, hogy egy helyzet objektíven
            látható legyen. A feladatok szerepe a visszatükrözés; az, hogy
            feketén-fehéren látszódjon egy eset, vagy blokk eredete, és
            feloldhatósága.
          </p>
        </div>
      </div>
    </section>
  );
}
