import React from "react";
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

function CoreConcepts() {
  return (
    <div>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        {/* outputting list dynamically */}
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
          {/* using the spread operator to pull out the key-value pairs */}
        </ul>
      </section>
    </div>
  );
}

export default CoreConcepts;
