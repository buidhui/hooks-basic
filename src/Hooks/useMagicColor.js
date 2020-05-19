import { useState, useEffect, useRef } from "react";

function randomColor() {
  const COLOR = ["red", "green", "yellow"];
  const currentIndex = COLOR.indexOf();
  //   console.log(currentIndex);
  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }
  return COLOR[newIndex];
}

function useMagicColor(props) {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  useEffect(() => {
    const colorInterval = setInterval(() => {
      console.log(colorRef.current);
      const newColor = randomColor();
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;
