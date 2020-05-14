import React, { useState } from "react";
import "./color-box.scss";
ColorBox.propTypes = {};

function getRandomColor() {
  const LIST = ["deepink", "yellow", "orange", "blue", "red"];
  const randomColor = Math.trunc(Math.random() * 5);
  return LIST[randomColor];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color") || "deeppink";
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      <h2>Click to change Color</h2>
    </div>
  );
}

export default ColorBox;
