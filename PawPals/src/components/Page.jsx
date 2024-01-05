import React from "react";
import Card from "./Card";
import "../CSS/Page.css";
import breeds from "../../public/JSON/breeds.js"

function Page() {
  const breedsList = breeds.map(breed => {
    return <Card img={breed.img}
          name={breed.breedName}
          group={breed.group}
          section ={breed.section}
          description={breed.sectionName} />
  })
  return (
    <div>
      <h2>Popularne Rasy</h2>
      <div className="carousel">
        {breedsList}
      </div>
    </div>
  );
}

export default Page;
