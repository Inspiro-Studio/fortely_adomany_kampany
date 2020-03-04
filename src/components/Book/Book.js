import React from "react";
import "./Book.scss";
import Img from "gatsby-image";
import Zoom from "react-reveal/Zoom";

export default function Book({ data }) {
  return (
    <section id="book">
      <div className="container">
        <div className="row">
          <div className="col-12 text-justify">
            <h2 className="underlined mb-2 text-uppercase">Önerő tréningek</h2>
          </div>
        </div>
        <div className="row image mt-5">
          <div className="mb-5 col-sm col-md-6 text-justify">
            <div className="row text-light">
              <div className="col-12 text-jutify">
                <h3 className="m-3">1 napos Önerő tréning</h3>
                <p>
                  Az 1 napos tréning célja, hogy kinyissuk az ajtót az
                  önismeret, ezután pedig a célok, tervek és a megvalósítás
                  felé.
                </p>
                <p>
                  Egy teljes napon foglalkozunk az önfeltérképezéssel, azzal,
                  hogy megfejtsük ki vagy valójában, milyen fékek, blokkok
                  korlátoznak előre jutásodban, hol vesztetted el lendületed,
                  kitartásod, önértékelésed? Ebben a napban arra is sor kerül,
                  hogy tervek és megvalósítás pontos útmutatását megkapd,
                  Speciális és célirányos gyakorlatok, technikák segítenek
                  abban, hogy valóban befelé haladjunk a rétegeiden és ne csak
                  felszínen kapargatott, majd másnapra elfelejtett hatások
                  megélője legyél.
                </p>
              </div>
              <div className="col-12">
                <h3 className="m-3">2 napos Önerő tréning</h3>
                <p>
                  Önbizalom építés és célkitűzés erős kombinációja! Hogyan is
                  tudnál valódi, igazi és motiváló célokat elérni, ha nem
                  ismered meg mélyebben önmagad és nem tudod ki vagy valójában?
                  Akkor honnan is tudhatnád, milyen utat kell bejárnod ami
                  mellett aztán majd ki is tartasz?
                </p>
                <p>
                  2 nap kemény munka. Szembesülések, felismerések hatalmas
                  energiája szabadul fel. Minden ami önismeret, önazonosság,
                  önkritika. Mivel a munka folyamatos 2 nap, így joggal
                  biztosíthatlak, hogy az eredmény maradandó!
                </p>
              </div>
              <div className="col-12">
                <h3 className="m-3">4 napos Önerő tréning</h3>
                <p>
                  Ez a csúcsképzés! Ha igazán vágysz a továbblépésre, arra, hogy
                  tényleg megindulj végre a terveid útján, akkor nincs tovább
                  idő a toporgásra. Bele kell vágnod! Ezen a tréningen olyan
                  élményeket kapsz, amiktől menthetetlenül beindulsz. Hogy
                  miért? Mert nem lesz egérutad, nem lesz kimozgás! Ha eljössz a
                  képzésre fogjuk a kezed és addig el nem engedjük, míg saját
                  szárnyaidon nem tudsz tovább repülni!
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm col-md-6 p-0 text-center justify-content-center book">
            <div className="col-12 p-0 mb-5 mt-5 mt-md-0 andi">
              <Zoom>
                <Img
                  className="rounded-circle"
                  fixed={data.andi.childImageSharp.fixed}
                  alt="Pap Andrea"
                />
              </Zoom>
            </div>
            <div className="col-12 p-0 pt-5">
              <Zoom>
                <Img
                  className="fluid"
                  fixed={data.book.childImageSharp.fixed}
                  alt="Könyv"
                />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
