import React, { useState } from "react";
import "./App.css";

function App() {
  const [styles, setStylesState] = useState({ styleOne: {}, styleTwo: {} });

  function onMouseMove(event) {
    setStylesState({
      ...styles,
      styleOne: transform(-event.clientX / event.clientY),
      styleTwo: transform(event.clientX / event.clientY)
    });
  }

  function transform(offset) {
    const cos = Math.cos(offset);
    const sin = Math.sin(offset);
    return {
      transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`
    };
  }

  return (
    <div onMouseMove={onMouseMove}>
      <div className="panel" style={styles.styleOne} />
      <div className="panel" style={styles.styleTwo} />
    </div>
  );
}

export default App;
