import React from "react";
import useClock from "../../Hooks/useClock";

function Clock() {
  const { time } = useClock();
  return <p style={{ fontSize: "42px" }}>{time}</p>;
}

export default Clock;
