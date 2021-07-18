import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [person, setPerson] = useState(data);
  return (
    <main>
      <section className="container">
        <h2>{person.length} Birthday Remaning Today</h2>
        <List persons={person} />
        <button onClick={() => setPerson([])}>Clear ALL</button>
      </section>
    </main>
  );
}

export default App;
