import React, { useState } from "react";
import List from "./list";
import data from "./data";

const App = () => {
  const [peoples, setPeoples] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{peoples.length} Birthday todays. </h3>
        <List peoples={peoples} />
        <button
          className="btn"
          onClick={() => {
            setPeoples([]);
          }}
        >
          Delete all
        </button>
      </section>
    </main>
  );
};

export default App;
