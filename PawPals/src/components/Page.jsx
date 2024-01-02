import React from "react";
import Card from "./Card";
import "../CSS/Page.css";

function Page() {
  return (
    <div>
      <h2>Popularne Rasy</h2>
      <div className="carousel">
        <Card
          img="https://www.psy.pl/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fcdn.psy.pl%2Fszpic_miniaturowy_pomeranian_641c599154.jpg&w=1080&q=75"
          name="Pomeranian"
          group="V"
          section ="4"
          description="Szpic Europejski"
        />
        <Card
          img="https://www.psy.pl/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fcdn.psy.pl%2Fcharcik7_e1505989864894_40c1ecf890.jpg&w=1080&q=75"
          name="Charcik Włoski"
          group="X"
          section="3"
          description="Chart Krótkowłosy"
        />
        <Card
          img="https://www.psy.pl/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fcdn.psy.pl%2Ftoller2_e1632229407275_caccf60267.jpg&w=1080&q=75"
          name="Nova Scotia Duck Tolling Retriever"
          group="VII"
          section="1"
          description="Psy Aportujące"
        />
      </div>
    </div>
  );
}

export default Page;
