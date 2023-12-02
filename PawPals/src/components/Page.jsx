import React from "react";
import Card from "./Card";

function Page() {
  return (
    <div>
      <h2>My list:</h2>
      <ol>
        <li>Thing 1</li>
        <li>Thing 2</li>
      </ol>
      <Card />
    </div>
  );
}

export default Page;
