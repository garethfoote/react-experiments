import { useState } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";

function App() {
  const [inProp, setInProp] = useState(false);
  // const duration = Math.ceil(Math.random() * 3000);
  const duration: number = 2000;

  return (
    <div className="App">
      <CSSTransition classNames="progress" in={inProp} timeout={duration}>
        {(state) => {
          return (
            <div className="bar">
              <div
                style={{
                  transitionDuration: `${duration}ms`,
                }}
              >
                {state}
              </div>
            </div>
          );
        }}
      </CSSTransition>
      <br />
      <button onClick={() => setInProp(!inProp)}>Go!</button>
    </div>
  );
}

export default App;
