import { CORE_CONCEPTS } from "./data";
import Header from "./components/header";
import TabButtons from "./tabButtons";
import "./index.css";
import { useState } from "react";
import CoreConcepts from "./components/coreconcepts";
import { EXAMPLES } from "./data";

function App() {
  const [clickedButton, setClickedButton] = useState(null);
  function handleButtonClick(buttonName) {
    setClickedButton(buttonName);
  }

  const tabButtons = ["Components", "JSX", "Props", "State"];
  let detailsTab = <p>Please select a button</p>;
  if (clickedButton) {
    //can also use terenay operator below the menu html tag to do this but  this is makes the document look more readable
    detailsTab = (
      <div id="tab-content">
        <h3>{EXAMPLES[clickedButton].title}</h3>
        <p>{EXAMPLES[clickedButton].description}</p>
        <pre>
          <code>{EXAMPLES[clickedButton].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts
                title={conceptItem.title}
                description={conceptItem.description}
                Image={conceptItem.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons
              clickedButton={clickedButton}
              onButtonClick={handleButtonClick}
              label={tabButtons}
            />
          </menu>
          {detailsTab}
        </section>
      </main>
    </div>
  );
}

export default App;
